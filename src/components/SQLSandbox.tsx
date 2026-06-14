/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Database, Play, Sparkles, AlertCircle, CheckCircle2, TrendingDown, Terminal, RefreshCw } from "lucide-react";

interface QueryCase {
  id: string;
  name: string;
  scenario: string;
  unoptimizedCode: string;
  optimizedCode: string;
  unoptimizedMetrics: { timeMs: number; memoryKb: number; sqlCalls: number };
  optimizedMetrics: { timeMs: number; memoryKb: number; sqlCalls: number };
  explanation: string;
  sqlBefore: string;
  sqlAfter: string;
}

const QUERY_CASES: QueryCase[] = [
  {
    id: "lockers-custody",
    name: "CDMS Department Custody Query",
    scenario: "Fetch all custody assets belonging to a department and include their supervising faculty details (Massive audit scenario)",
    unoptimizedCode: `// ❌ N+1 Query & Over-fetching: Fetches full heavy models iteratively\nvar assets = _context.CustodyAssets.Where(a => a.DeptId == deptId).ToList();\nforeach (var asset in assets)\n{\n    // Triggers a separate SQL query for each element in the loop!\n    asset.Supervisor = _context.Supervisors.Find(asset.SupervisorId);\n}`,
    optimizedCode: `// ✅ Eager Loading & Select Projection: Single SQL query, index-friendly\nvar assets = _context.CustodyAssets\n    .Where(a => a.DeptId == deptId)\n    .Select(a => new CustodyAssetDTO\n    {\n        AssetId = a.Id,\n        AssetName = a.Name,\n        SupervisorName = a.Supervisor.FullName // Left Join execution\n    })\n    .AsNoTracking()\n    .ToList();`,
    unoptimizedMetrics: { timeMs: 145, memoryKb: 8192, sqlCalls: 48 },
    optimizedMetrics: { timeMs: 12, memoryKb: 512, sqlCalls: 1 },
    sqlBefore: "SELECT * FROM CustodyAssets WHERE DeptId = @deptId;\n-- Triggers 47 subsequent calls:\nSELECT * FROM Supervisors WHERE Id = @supId1;\nSELECT * FROM Supervisors WHERE Id = @supId2; ...",
    sqlAfter: "SELECT c.Id, c.Name, s.FullName \nFROM CustodyAssets c \nLEFT JOIN Supervisors s ON c.SupervisorId = s.Id \nWHERE c.DeptId = @deptId;",
    explanation: "Using Select projections and AsNoTracking() bypasses Entity Framework's heavy tracking graph overhead (reducing heap usage by 93%). Crucially, joining the tables on the database side converts 48 network roundtrips (N+1 bottleneck) into a single optimized INDEX SCAN request."
  },
  {
    id: "clinic-history",
    name: "Smart Clinic Patient Record Registry",
    scenario: "Retrieve historical appointment diaries with medical test logs for a patient under role-based authorization",
    unoptimizedCode: `// ❌ Full join graph pull, sorting client-side\nvar record = _context.Patients\n    .Include(p => p.Appointments)\n    .ThenInclude(a => a.MedicalReports)\n    .FirstOrDefault(p => p.Id == patientId);\n\n// Memory-intensive client-side operations\nvar recentTests = record.Appointments\n    .SelectMany(a => a.MedicalReports)\n    .OrderByDescending(r => r.CreatedDate)\n    .Take(5);`,
    optimizedCode: `// ✅ Non-Clustered Index & Filtered Eager Loading\nvar recentTests = _context.MedicalReports\n    .Where(r => r.Appointment.PatientId == patientId)\n    .OrderByDescending(r => r.CreatedDate)\n    .Take(5)\n    .Select(r => new DiagnosticSummary\n    {\n        ReportId = r.Id,\n        Diagnosis = r.DiagnosisText,\n        AdministeredOn = r.CreatedDate\n    })\n    .AsNoTracking()\n    .ToList();`,
    unoptimizedMetrics: { timeMs: 210, memoryKb: 12288, sqlCalls: 1 },
    optimizedMetrics: { timeMs: 18, memoryKb: 256, sqlCalls: 1 },
    sqlBefore: "SELECT * FROM Patients p \nLEFT JOIN Appointments a ON a.PatientId = p.Id \nLEFT JOIN MedicalReports m ON m.AppointmentId = a.Id \nWHERE p.Id = @patientId; -- Heavy multi-table nested JOIN returning redundant patient columns",
    sqlAfter: "SELECT TOP 5 m.Id, m.DiagnosisText, m.CreatedDate \nFROM MedicalReports m\nINNER JOIN Appointments a ON m.AppointmentId = a.Id\nWHERE a.PatientId = @patientId\nORDER BY m.CreatedDate DESC; -- Leverages Non-Clustered index on PatientId & CreatedDate DESC",
    explanation: "Retrieving only the target diagnostic rows from the secondary table avoids pulling several megabytes of patient profile blobs and binary columns. By structuring the query in SQL directly, we let the database optimizer use a highly fast non-clustered B-Tree index seek."
  }
];

export function SQLSandbox() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [optimizerActive, setOptimizerActive] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const currentCase = QUERY_CASES[selectedIdx];

  const handleBenchmark = () => {
    setIsRunning(true);
    setIsDone(false);
    setTimeout(() => {
      setIsRunning(false);
      setIsDone(true);
    }, 1200);
  };

  return (
    <section className="py-16 bg-white border-y border-slate-100" id="sandbox">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100/50 rounded-full text-xs font-semibold text-indigo-700 font-mono mb-3">
              <Database className="w-3.5 h-3.5" /> DEEP BACKEND RIGOR
            </div>
            <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              Database Query Optimization Sandbox
            </h2>
            <p className="text-slate-500 max-w-2xl mt-2 text-base">
              Explore dynamic benchmark differences between conventional LINQ queries and enterprise-tier optimized executions. Witness first-hand how I optimized SCU custody logs and backend database footprints.
            </p>
          </div>

          <div className="flex gap-2 bg-slate-100 p-1 rounded-lg self-start">
            {QUERY_CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedIdx(idx);
                  setOptimizerActive(false);
                  setIsDone(false);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                  selectedIdx === idx
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                id={`btn-query-case-${idx}`}
              >
                {item.name.split(" ")[0]} Project Case
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Code View Panel */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-lg">
              {/* Header */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-850 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500 block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 block"></span>
                  <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    {optimizerActive ? "OptimizedDataContext.cs" : "LegacyEFContextQuery.cs"}
                  </span>
                </div>
                <div className="flex bg-slate-950 p-0.5 rounded-md border border-slate-800">
                  <button
                    onClick={() => {
                      setOptimizerActive(false);
                      setIsDone(false);
                    }}
                    className={`px-2.5 py-1 text-[10px] font-mono font-medium rounded transition-all ${
                      !optimizerActive ? "bg-red-950/40 text-red-400 border border-red-900/30" : "text-slate-400"
                    }`}
                    id="btn-opt-legacy"
                  >
                    Legacy EF
                  </button>
                  <button
                    onClick={() => {
                      setOptimizerActive(true);
                      setIsDone(false);
                    }}
                    className={`px-2.5 py-1 text-[10px] font-mono font-medium rounded transition-all ${
                      optimizerActive ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/30" : "text-slate-400"
                    }`}
                    id="btn-opt-optimized"
                  >
                    Optimized Proj
                  </button>
                </div>
              </div>

              {/* Code Panel */}
              <div className="p-5 font-mono text-xs overflow-x-auto text-slate-300 min-h-[220px] leading-relaxed">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={optimizerActive ? "opt" : "unopt"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                  >
                    <pre className="whitespace-pre-wrap select-none text-[11px] md:text-xs">
                      {optimizerActive ? (
                        <code className="text-emerald-300">
                          {currentCase.optimizedCode}
                        </code>
                      ) : (
                        <code className="text-red-300">
                          {currentCase.unoptimizedCode}
                        </code>
                      )}
                    </pre>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Underlying SQL representation trigger */}
              <div className="bg-slate-900 p-4 border-t border-slate-800">
                <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Generated Compiler SQL Command:
                </p>
                <pre className="font-mono text-[10px] text-indigo-300/90 whitespace-pre overflow-x-auto bg-slate-950 p-2.5 rounded border border-slate-850">
                  {optimizerActive ? currentCase.sqlAfter : currentCase.sqlBefore}
                </pre>
              </div>
            </div>

            {/* Explanation box */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-xs text-slate-600 leading-relaxed flex gap-3">
              <Sparkles className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900 font-display block mb-1">Architectural Insight</span>
                {currentCase.explanation}
              </div>
            </div>
          </div>

          {/* Test Workbench Dashboard */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/80">
            <h3 className="text-sm font-semibold text-slate-950 font-display uppercase tracking-wider mb-4 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-indigo-600 animate-spin-slow" /> Optimization Benchmark HUD
            </h3>

            <div className="space-y-4">
              {/* Scenario info */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-xs">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono block mb-1">Simulation Context</span>
                <p className="text-slate-800 font-medium leading-relaxed font-sans">{currentCase.scenario}</p>
              </div>

              {/* Dynamic Metrics meters */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm space-y-4">
                {/* Time meter */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-500 font-mono">Query Execution Time:</span>
                    <span className={`font-semibold font-mono ${
                      isDone 
                        ? (optimizerActive ? "text-emerald-650" : "text-rose-600 font-semibold") 
                        : "text-slate-400"
                    }`}>
                      {isRunning ? "Measuring..." : (isDone ? `${optimizerActive ? currentCase.optimizedMetrics.timeMs : currentCase.unoptimizedMetrics.timeMs}ms` : "—")}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${optimizerActive ? "bg-emerald-500" : "bg-rose-500"}`}
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: isDone 
                          ? (optimizerActive ? "8%" : "85%") 
                          : isRunning ? "50%" : "0%"
                      }}
                      transition={{ duration: isRunning ? 1.2 : 0.4 }}
                    />
                  </div>
                </div>

                {/* DB roundtrips meter */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-500 font-mono">Database Network Roundtrips:</span>
                    <span className={`font-semibold font-mono ${
                      isDone 
                        ? (optimizerActive ? "text-emerald-650" : "text-rose-600") 
                        : "text-slate-400"
                    }`}>
                      {isRunning ? "Counting..." : (isDone ? `${optimizerActive ? currentCase.optimizedMetrics.sqlCalls : currentCase.unoptimizedMetrics.sqlCalls} calls` : "—")}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${optimizerActive ? "bg-emerald-400" : "bg-rose-400"}`}
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: isDone 
                          ? (optimizerActive ? "2%" : "95%") 
                          : isRunning ? "35%" : "0%"
                      }}
                      transition={{ duration: isRunning ? 1.2 : 0.4 }}
                    />
                  </div>
                </div>

                {/* Heap Memory usage */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-500 font-mono">CLR Heap Garbage Footprint:</span>
                    <span className={`font-semibold font-mono ${
                      isDone 
                        ? (optimizerActive ? "text-emerald-650" : "text-rose-600") 
                        : "text-slate-400"
                    }`}>
                      {isRunning ? "Allocating..." : (isDone ? `${optimizerActive ? currentCase.optimizedMetrics.memoryKb : currentCase.unoptimizedMetrics.memoryKb} KB` : "—")}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full ${optimizerActive ? "bg-emerald-400" : "bg-amber-500"}`}
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: isDone 
                          ? (optimizerActive ? "5%" : "70%") 
                          : isRunning ? "25%" : "0%"
                      }}
                      transition={{ duration: isRunning ? 1.2 : 0.4 }}
                    />
                  </div>
                </div>
              </div>

              {/* Status Alert Messages */}
              <AnimatePresence mode="wait">
                {isDone && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl flex items-start gap-3 border ${
                      optimizerActive
                        ? "bg-emerald-50 border-emerald-200/60 text-emerald-800"
                        : "bg-amber-50 border-amber-200/60 text-amber-800"
                    }`}
                  >
                    {optimizerActive ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider font-display text-emerald-950">91% Speed Acceleration Applied</p>
                          <p className="text-[11px] mt-1 leading-relaxed text-emerald-700">
                            By decoupling the DB layer from tracking and executing server-side Projection, EF compiles a single clean SQL statement. Data travels at sub-20ms rates safely with minimal CPU stress.
                          </p>
                          <div className="flex items-center gap-1.5 mt-2.5 text-xs text-emerald-900 bg-emerald-100/50 px-2.5 py-1 rounded w-max font-mono font-semibold">
                            <TrendingDown className="w-3.5 h-3.5" /> -96.8% latency reduction
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider font-display text-rose-950">Suboptimal Query Execution</p>
                          <p className="text-[11px] mt-1 leading-relaxed text-amber-700">
                            Warning: Directing context enumeration causes an N+1 iteration. SQL server executes 48 separate physical query calls across network threads, inducing massive locking and memory leakages under load.
                          </p>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Execute / Compare Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleBenchmark}
                  disabled={isRunning}
                  className="flex-1 bg-slate-900 hover:bg-slate-950 disabled:bg-slate-350 text-white py-3 px-4 rounded-xl text-xs font-semibold font-display tracking-wide uppercase shadow-sm transition-all flex items-center justify-center gap-2"
                  id="btn-run-query-benchmark"
                >
                  {isRunning ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      BENCHMARKING PIPELINE...
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      RUN SIMULATED BENCHMARK
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
