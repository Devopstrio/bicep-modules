import React, { useState } from 'react';
import Head from 'next/head';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export default function RegistryDashboard() {
    const [governanceScore, setGovernanceScore] = useState(99.8);
    const [activeModules, setActiveModules] = useState(145);

    return (
        <div className="min-h-screen bg-[#020617] text-white flex">
            {/* Sidebar */}
            <aside className="w-80 bg-[#0f172a]/40 border-r border-white/5 backdrop-blur-2xl flex flex-col">
                <div className="p-10 flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-xl shadow-emerald-600/30">B</div>
                    <span className="font-bold text-xl tracking-tighter">BICEP OPS</span>
                </div>

                <nav className="flex-1 px-6 space-y-2">
                    {['Registry Hub', 'Module Catalog', 'Compositions', 'Validation Runs', 'Publishing', 'Reports'].map((item) => (
                        <div key={item} className={`px-6 py-4 rounded-2xl cursor-pointer transition-all ${item === 'Registry Hub' ? 'bg-emerald-600 shadow-2xl shadow-emerald-600/20' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}>
                            <span className="text-sm font-bold">{item}</span>
                        </div>
                    ))}
                </nav>

                <div className="p-8">
                    <div className="p-6 bg-emerald-600/10 border border-emerald-600/20 rounded-[32px]">
                        <p className="text-[10px] text-emerald-400 font-black uppercase tracking-widest mb-3">Governance Rating</p>
                        <div className="text-4xl font-black mb-2">{governanceScore}%</div>
                        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full" style={{ width: `${governanceScore}%` }} />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-16 overflow-y-auto">
                <header className="flex justify-between items-start mb-16">
                    <div>
                        <h1 className={`${outfit.className} text-5xl font-black mb-4 tracking-tighter`}>Enterprise Module Factory</h1>
                        <p className="text-slate-500 text-lg">Maintaining institutional standards for 12,500 monthly deployments.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all text-sm">Download CLI</button>
                        <button className="px-8 py-4 bg-emerald-600 rounded-2xl font-bold hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-600/30 text-sm">Submit New Module</button>
                    </div>
                </header>

                {/* Global Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    <StatCard label="Registered Modules" value="145" sub="12 New this week" trend="up" />
                    <StatCard label="Active Compositions" value="28" sub="Landing Zone Blueprints" trend="up" />
                    <StatCard label="Deployment Success" value="99.9%" sub="Last 30 Days" trend="neutral" />
                    <StatCard label="Policy Violations" value="0" sub="Zero-Trust Enforced" trend="down" />
                </div>

                <section className="bg-white/5 border border-white/5 rounded-[48px] p-12">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-black tracking-tight">Recent Module Releases</h2>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Registry Syncing Active</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <ModuleItem name="network/virtual-wan" version="v2.4.1" status="STABLE" owner="Core Infra" downloads="1.2K" />
                        <ModuleItem name="ai/openai-secure-proxy" version="v1.0.0" status="NEW" owner="AI Engineering" downloads="450" success />
                        <ModuleItem name="security/sentinel-onboarding" version="v3.1.2" status="STABLE" owner="SecOps" downloads="2.1K" />
                    </div>
                </section>
            </main>
        </div>
    );
}

const StatCard = ({ label, value, sub }: any) => (
    <div className="p-8 bg-[#0f172a]/50 border border-white/5 rounded-[32px] group hover:border-emerald-500/20 transition-all">
        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-4 group-hover:text-emerald-400 transition-colors">{label}</p>
        <div className="text-4xl font-black mb-2 text-white">{value}</div>
        <p className="text-xs text-slate-500 font-bold">{sub}</p>
    </div>
);

const ModuleItem = ({ name, version, status, owner, downloads, success }: any) => (
    <div className="flex justify-between items-center p-8 bg-[#020617] border border-white/5 rounded-3xl hover:bg-white/5 transition-all cursor-pointer group">
        <div className="flex items-center gap-10">
            <div className={`w-3 h-3 rounded-full ${success ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-slate-700'}`} />
            <div>
                <p className="font-bold text-xl group-hover:text-emerald-400 transition-colors">{name}</p>
                <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest leading-none">Owned by {owner}</span>
                    <span className="text-slate-700 text-xs text-bold"> · </span>
                    <span className="text-[10px] text-slate-600 font-black uppercase tracking-widest leading-none">{downloads} Downloads</span>
                </div>
            </div>
        </div>
        <div className="text-right">
            <div className="text-xs font-black mb-1 text-emerald-400">{status}</div>
            <div className="text-[10px] text-slate-700 font-bold tracking-tight">{version}</div>
        </div>
    </div>
);
