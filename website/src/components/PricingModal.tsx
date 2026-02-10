import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Zap, Target, Layers } from 'lucide-react';

interface PricingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const tiers = [
    {
        name: 'Discovery',
        price: 'Consultation',
        description: 'Ideal for teams exploring AI feasibility or needing a roadmap for identity engineering.',
        features: [
            '1-on-1 Strategy Session',
            'Context & Culture Audit',
            'Feasibility Report',
            'Initial System Roadmap'
        ],
        icon: Target,
        color: 'bg-blue-100 text-blue-600',
        borderColor: 'border-blue-100'
    },
    {
        name: 'Operational',
        price: 'Tier 1',
        description: 'Building and deploying a core AI product or workflow for immediate business impact.',
        features: [
            'Custom AI Pipeline Design',
            'Deployment to Vercel/Cloud',
            'M-Pesa Integration (if req)',
            '2 Weeks Support'
        ],
        icon: Zap,
        color: 'bg-orange-100 text-orange-600',
        borderColor: 'border-orange-100',
        recommended: true
    },
    {
        name: 'Architect',
        price: 'Custom',
        description: 'End-to-end autonomous systems and large-scale AI infrastructure development.',
        features: [
            'Complex RAG Architectures',
            'Multi-agent systems',
            'Fine-tuning & Training',
            'Ongoing Strategic Support'
        ],
        icon: Layers,
        color: 'bg-purple-100 text-purple-600',
        borderColor: 'border-purple-100'
    }
];

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl bg-slate-50 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                    <span className="text-white font-bold text-xl uppercase tracking-tighter">P</span>
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900 leading-none">Pulse Operations</h2>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Tiered AI Implementation</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                title="Close"
                            >
                                <X className="w-5 h-5 text-slate-400" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-auto">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl font-semibold mb-3">Practical AI Tiers</h3>
                                <p className="text-slate-500 max-w-xl mx-auto">Selected models for varying stages of technical maturity and project scope. Transparent pricing for operational results.</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {tiers.map((tier) => (
                                    <div
                                        key={tier.name}
                                        className={`relative bg-white p-8 rounded-2xl border ${tier.recommended ? 'border-blue-600 shadow-xl shadow-blue-500/10' : 'border-slate-200'} flex flex-col`}
                                    >
                                        {tier.recommended && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                                                Most Practical
                                            </div>
                                        )}

                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.color}`}>
                                                <tier.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">{tier.name}</h4>
                                                <p className="text-2xl font-bold text-slate-900">{tier.price}</p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-slate-500 mb-8 font-light leading-relaxed">
                                            {tier.description}
                                        </p>

                                        <ul className="space-y-4 mb-8 flex-1">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                                                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            onClick={onClose}
                                            className={`w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${tier.recommended
                                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20'
                                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                                                }`}
                                        >
                                            Select {tier.name} <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-6 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-lg font-semibold mb-1">Need a custom AI architecture?</h4>
                                    <p className="text-slate-400 text-sm">Large scale systems require unique constraints and culture-first design.</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-white text-slate-900 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors whitespace-nowrap"
                                >
                                    Contact for Custom Brief
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
