/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, Shield, AppWindow, Network, HelpCircle, ArrowRightLeft, FileCode, CheckCircle } from "lucide-react";

interface LayerDetail {
  id: string;
  name: string;
  color: string;
  borderColor: string;
  lightBg: string;
  role: string;
  dependencyRule: string;
  items: string[];
  sampleCode: string;
  sampleFileName: string;
  icon: any;
}

const LAYERS: LayerDetail[] = [
  {
    id: "domain",
    name: "1. Core Domain Layer",
    color: "bg-indigo-650 text-white",
    borderColor: "border-indigo-600",
    lightBg: "bg-indigo-50/70 border-indigo-100",
    role: "The absolute heart of the enterprise. Contains enterprise business definitions, entities, specifications, value objects, and domain exceptions.",
    dependencyRule: "Strictly Independent. Zero outward referencing imports (External frameworks, DB models, or MVC controller packages are strictly forbidden here).",
    items: [
      "Aggregate Roots (e.g. CustodyAsset.cs)",
      "Value Objects (e.g. AssetWeight.cs)",
      "Domain Events (e.g. AssetHandoverInitiatedEvent.cs)",
      "Domain Exceptions (e.g. InvalidFractionalQuantityException.cs)"
    ],
    sampleFileName: "CustodyAsset.cs (Domain Entity)",
    sampleCode: `namespace CDMS.Domain.Entities;\n\n// Aggregate Root representing a high-value institution item\npublic class CustodyAsset : BaseEntity, IAggregateRoot\n{\n    public string Name { get; private set; }\n    public int Quantity { get; private set; }\n    public Guid CustodianId { get; private set; }\n\n    public CustodyAsset(string name, int qty, Guid custodianId)\n    {\n        Name = !string.IsNullOrWhiteSpace(name) ? name : throw new ArgumentException("Name invalid");\n        Quantity = qty > 0 ? qty : throw new InvalidQuantityException();\n        CustodianId = custodianId;\n    }\n\n    public void TransferCustodian(Guid newCustodianId)\n    {\n        CustodianId = newCustodianId;\n        AddDomainEvent(new CustodyTransferredEvent(Id, newCustodianId));\n    }\n}`,
    icon: Shield
  },
  {
    id: "application",
    name: "2. Application Layer",
    color: "bg-teal-650 text-white",
    borderColor: "border-teal-600",
    lightBg: "bg-teal-50/70 border-teal-100",
    role: "Coordinates workflows, reads business use-cases, defines repository interfaces (abstractions) and dispatches CQRS Commands & Queries.",
    dependencyRule: "Depends ONLY on the Core Domain. Imports no external database layers (e.g. completely decoupled from EF Core / Dapper / Oracle / SQL drivers).",
    items: [
      "Use Cases / CQRS Commands (e.g. TransferAssetCommand.cs)",
      "Repository Interfaces (e.g. ICustodyRepository.cs)",
      "DTO Models (e.g. CustodyAssetDto.cs)",
      "AutoMapper Mapping Configurations"
    ],
    sampleFileName: "ICustodyRepository.cs & Command.cs",
    sampleCode: `namespace CDMS.Application.Contracts;\n\npublic interface ICustodyRepository\n{\n    Task<CustodyAsset> GetByIdAsync(Guid id);\n    Task<IReadOnlyList<CustodyAsset>> GetByDepartmentAsync(Guid deptId);\n    Task AddAsync(CustodyAsset asset);\n    void Update(CustodyAsset asset);\n}\n\n// Application Command (CQRS pattern with MediatR)\npublic record TransferAssetCommand(Guid AssetId, Guid NewCustodianId) : IRequest<bool>;`,
    icon: Layers
  },
  {
    id: "infrastructure",
    name: "3. Infrastructure Layer",
    color: "bg-amber-600 text-white",
    borderColor: "border-amber-500",
    lightBg: "bg-amber-50/70 border-amber-100",
    role: "Implements abstract contracts defined by Application. Connects direct to databases, filesystems, e-mail gateways, multi-tenant middleware, and cloud storage.",
    dependencyRule: "Depends on both Application and Domain layers. Can reference specific third-party frameworks like Entity Framework Core or SendGrid templates.",
    items: [
      "Database Contexts (e.g. ApplicationDbContext.cs)",
      "Repository Implementations (e.g. CustodyRepository.cs)",
      "API Proxies & Mail Handlers (e.g. EmailNotificationService.cs)",
      "JWT Security Generators"
    ],
    sampleFileName: "CustodyRepository.cs (EF Core)",
    sampleCode: `namespace CDMS.Infrastructure.Repositories;\n\npublic class CustodyRepository : ICustodyRepository\n{\n    private readonly ApplicationDbContext _context;\n\n    public CustodyRepository(ApplicationDbContext context)\n    {\n        _context = context;\n    }\n\n    public async Task<CustodyAsset> GetByIdAsync(Guid id)\n    {\n        return await _context.CustodyAssets\n            .Include(a => a.Supervisor)\n            .FirstOrDefaultAsync(a => a.Id == id);\n    }\n\n    public async Task AddAsync(CustodyAsset asset) => await _context.CustodyAssets.AddAsync(asset);\n    public void Update(CustodyAsset asset) => _context.Entry(asset).State = EntityState.Modified;\n}`,
    icon: Network
  },
  {
    id: "presentation",
    name: "4. Web API / Presentation",
    color: "bg-sky-650 text-white",
    borderColor: "border-sky-600",
    lightBg: "bg-sky-50/70 border-sky-100",
    role: "The interaction gateway. Handles incoming HTTP requests, serves web layouts, validates token security claims, and formats controller outputs.",
    dependencyRule: "Outer boundary layer. Depends on Application and Infrastructure layers. Pulls configurations via Startup IoC containers.",
    items: [
      "Controller Envelopes (e.g. CustodyController.cs)",
      "JSON Request payloads & API Route definitions",
      "Authentication Bearer filters & CORS setups",
      "SignalR Hubs for WebSockets connections"
    ],
    sampleFileName: "Controllers/CustodyController.cs (REST)",
    sampleCode: `namespace CDMS.API.Controllers;\n\n[Authorize]\n[ApiController]\n[Route("api/[controller]")]\npublic class CustodyController : ControllerBase\n{\n    private readonly IMediator _mediator;\n\n    public CustodyController(IMediator mediator) => _mediator = mediator;\n\n    [HttpPost("transfer")]\n    public async Task<IActionResult> TransferAsset([FromBody] TransferAssetRequest dto)\n    {\n        var command = new TransferAssetCommand(dto.AssetId, dto.NewCustodianId);\n        var result = await _mediator.Send(command);\n        \n        if (!result) return BadRequest("Asset transfer rejected");\n        return Ok(new { Message = "Transfer completed successfully" });\n    }\n}`,
    icon: AppWindow
  }
];

export function ArchExplorer() {
  const [activeLayerId, setActiveLayerId] = useState<string>("domain");

  const currentLayer = LAYERS.find((l) => l.id === activeLayerId) || LAYERS[0];
  const IconComponent = currentLayer.icon;

  return (
    <section className="py-20 bg-[#fafcfd]" id="infrastructure-design">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-100/50 rounded-full text-xs font-semibold text-teal-700 font-mono mb-3">
            <Layers className="w-3.5 h-3.5" /> ARCHITECTURAL BLUEPRINTS
          </div>
          <h2 className="text-4xl font-extrabold font-display text-slate-900 tracking-tight">
            Clean Architecture Onion Pattern
          </h2>
          <p className="text-slate-500 text-base mt-3">
            I architecture my enterprise backends using the **Dependency Inversion** principle. This guarantees high testability, modular decoupling, and structural protection of backend business domains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left panel - Onion Interactive Layout Diagram */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm min-h-[420px]">
            <h3 className="text-xs font-semibold text-slate-400 font-mono uppercase tracking-wider mb-8 text-center">
              Click Onion Rings to Inspect Layer Dependencies
            </h3>

            {/* Onion Circles Visualizer */}
            <div className="relative w-80 h-80 flex items-center justify-center select-none">
              {/* Outer circle: Presentation / Web API */}
              <button
                onClick={() => setActiveLayerId("presentation")}
                className={`absolute w-full h-full rounded-full border-2 border-dashed flex items-start justify-center pt-3 transition-all cursor-pointer ${
                  activeLayerId === "presentation"
                    ? "bg-sky-50 border-sky-400 scale-[1.02] shadow-md z-10"
                    : "border-slate-300 hover:border-sky-350 hover:bg-slate-50/50"
                }`}
                style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                id="btn-layer-presentation"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-700">Presentation Layer</span>
              </button>

              {/* Circle 2: Infrastructure */}
              <button
                onClick={() => setActiveLayerId("infrastructure")}
                className={`absolute w-3/4 h-3/4 rounded-full border-2 border-dashed flex items-start justify-center pt-3 transition-all cursor-pointer ${
                  activeLayerId === "infrastructure"
                    ? "bg-amber-50 border-amber-400 scale-[1.02] shadow-md z-20"
                    : "border-slate-300 hover:border-amber-300 hover:bg-slate-50/50"
                }`}
                style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                id="btn-layer-infrastructure"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-700">Infrastructure Layer</span>
              </button>

              {/* Circle 3: Application */}
              <button
                onClick={() => setActiveLayerId("application")}
                className={`absolute w-1/2 h-1/2 rounded-full border-2 border-dashed flex items-start justify-center pt-3 transition-all cursor-pointer ${
                  activeLayerId === "application"
                    ? "bg-teal-50 border-teal-400 scale-[1.02] shadow-md z-30"
                    : "border-slate-300 hover:border-teal-350 hover:bg-slate-50/50"
                }`}
                style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                id="btn-layer-application"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-teal-700">Application Layer</span>
              </button>

              {/* Circle 4 (Inner core): Domain */}
              <button
                onClick={() => setActiveLayerId("domain")}
                className={`absolute w-1/4 h-1/4 rounded-full flex flex-col items-center justify-center transition-all cursor-pointer ${
                  activeLayerId === "domain"
                    ? "bg-indigo-600 text-white shadow-lg scale-105 z-40"
                    : "bg-slate-150 border border-slate-300 hover:bg-slate-200"
                }`}
                style={{ transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
                id="btn-layer-domain"
              >
                <Shield className={`w-5 h-5 ${activeLayerId === "domain" ? "text-indigo-100" : "text-slate-650"}`} />
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider mt-1 ${activeLayerId === "domain" ? "text-white" : "text-slate-750"}`}>
                  Domain
                </span>
              </button>

              {/* Arrows showing inward dependency rules */}
              <div className="absolute top-2 right-2 flex flex-col items-end gap-1 select-none pointer-events-none bg-white/90 p-2 rounded-lg border border-slate-100 shadow-sm">
                <div className="flex items-center gap-1.5 text-[8px] font-mono uppercase tracking-wider font-semibold text-slate-500">
                  <ArrowRightLeft className="w-2.5 h-2.5 text-indigo-500" /> Depend Direction
                </div>
                <div className="text-[9px] font-mono text-indigo-600 font-bold">&#8601; Reference Inwards Only</div>
              </div>
            </div>

            {/* Quick selectors below */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {LAYERS.map((lay) => (
                <button
                  key={lay.id}
                  onClick={() => setActiveLayerId(lay.id)}
                  className={`px-2.5 py-1 text-[10px] uppercase font-mono font-semibold tracking-wider rounded-full transition-all border ${
                    activeLayerId === lay.id
                      ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                      : "bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-350 hover:text-slate-800"
                  }`}
                  id={`btn-selector-${lay.id}`}
                >
                  {lay.id}
                </button>
              ))}
            </div>
          </div>

          {/* Right panel - Layer details & code box */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayerId}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Header card details */}
                <div className={`p-6 rounded-xl border ${currentLayer.lightBg} shadow-sm`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-lg bg-white border shadow-xs text-slate-800`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-slate-905">{currentLayer.name}</h3>
                      <p className="text-[11px] font-mono text-slate-400 font-bold tracking-wider mt-0.5 uppercase">Dependent Boundary Details</p>
                    </div>
                  </div>

                  <p className="text-slate-650 text-sm mt-3.5 leading-relaxed">{currentLayer.role}</p>

                  <div className="mt-4 pt-3 border-t border-slate-200/50 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1 font-semibold">Decoupled Rule:</span>
                      <p className="text-xs text-slate-650 leading-relaxed font-sans">{currentLayer.dependencyRule}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1 font-semibold">Typical Schemas & files:</span>
                      <ul className="text-xs text-slate-650 space-y-1">
                        {currentLayer.items.map((it, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Simulated file layout */}
                <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-850 shadow-md">
                  <div className="bg-slate-900/80 p-3 border-b border-slate-850 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                      <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                      {currentLayer.sampleFileName}
                    </span>
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-indigo-200 font-mono uppercase">
                      C# Class
                    </span>
                  </div>
                  <div className="p-4 overflow-x-auto text-slate-300 font-mono text-xs max-h-[260px] overflow-y-auto leading-relaxed">
                    <pre className="text-[11px] select-none text-slate-350">
                      <code>{currentLayer.sampleCode}</code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
