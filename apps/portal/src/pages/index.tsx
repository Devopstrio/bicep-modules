import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });

export default function BicepModulesHome() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className={`min-h-screen bg-[#020617] text-white ${inter.className}`}>
            <Head>
                <title>Bicep Modules | Enterprise IaC Registry</title>
                <meta name="description" content="Institutional reusable Azure Bicep Module Platform" />
            </Head>

            {/* Glassmorphic Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/20">
                            <span className="font-black text-2xl">B</span>
                        </div>
                        <div>
                            <span className={`${outfit.className} text-xl font-bold tracking-tight`}>Bicep Modules</span>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-400">
                        <a href="#catalog" className="hover:text-emerald-400 transition-colors">Catalog</a>
                        <a href="#compositions" className="hover:text-emerald-400 transition-colors">Compositions</a>
                        <a href="#governance" className="hover:text-emerald-400 transition-colors">Governance</a>
                        <button
                            onClick={() => window.location.href = '/dashboard'}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full transition-all shadow-xl shadow-emerald-600/30 font-bold"
                        >
                            Registry Portal
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="relative pt-40 pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-emerald-600/10 to-transparent blur-[120px] rounded-full" />

                <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-300 uppercase tracking-[0.2em] mb-10 translate-y-0 opacity-0 animate-fade-in-down">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                        Enterprise Infrastructure Factory
                    </div>
                    <h1 className={`${outfit.className} text-7xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter`}>
                        Cloud Scale <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 font-black">Institutionalized.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
                        Standardize, validate, and deploy hardened Azure Infrastructure-as-Code modules across your global platform engineering teams with zero-trust defaults.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl hover:shadow-white/10">
                            Explore Module Catalog
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 bg-slate-800/50 text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all">
                            Initialize Validation
                        </button>
                    </div>
                </div>
            </main>

            <section className="max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: 'Reusable Modules', desc: 'Hardened patterns for Networking, Identity, and AI.', icon: '📦' },
                    { title: 'LZ Compositions', desc: 'Pre-stitched blueprints for production landing zones.', icon: '🏗️' },
                    { title: 'What-If Validation', desc: 'Deep-scan IaC changes before committing to cloud.', icon: '🕵️' },
                    { title: 'Private Registry', desc: 'Enterprise-managed semantic versioning and publishing.', icon: '🛡️' }
                ].map((feat, idx) => (
                    <div key={idx} className="p-10 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/[0.08] transition-all group">
                        <div className="text-4xl mb-8 group-hover:scale-110 transition-transform">{feat.icon}</div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">{feat.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                ))}
            </section>

            <footer className="py-20 border-t border-white/5 bg-slate-950/50 text-center">
                <p className="text-slate-600 text-xs font-black uppercase tracking-widest leading-loose">
                    © 2026 devopstrio bicep platform &nbsp;·&nbsp; industrial iac factory &nbsp;·&nbsp; enterprise architect
                </p>
            </footer>

            <style jsx global>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
        </div>
    );
}
