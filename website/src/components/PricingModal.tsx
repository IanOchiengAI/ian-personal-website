import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Monitor, Sparkles, Coffee, Globe } from 'lucide-react';

interface PricingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const tiers = [
    {
        name: 'The Brief',
        price: '$1,200',
        subtitle: 'Identity & Strategy',
        description: 'One-off strategic audit and roadmap for individuals or startups. We define your technical identity and AI feasibility.',
        features: [
            'Identity Architecture Audit',
            'Practical AI Roadmap',
            'Platform Strategy (Web/Social)',
            '2-Hour Deep Dive Session'
        ],
        icon: Coffee,
        color: 'bg-orange-100 text-orange-600',
        borderColor: 'border-orange-100'
    },
    {
        name: 'The Core',
        price: '$3,500+',
        subtitle: 'Premium Web Product',
        description: 'Bespoke, high-performance website designed to scale. High aesthetic, zero friction, full technical deployment.',
        features: [
            'Personalized UI/UX Design',
            'Next.js / Vite Performance',
            'SEO & Analytics Ready',
            'M-Pesa/Payment Integration',
            'Practical AI "Sprinkle"'
        ],
        icon: Monitor,
        color: 'bg-blue-100 text-blue-600',
        borderColor: 'border-blue-100',
        recommended: true
    },
    {
        name: 'Production',
        price: '$8,000+',
        subtitle: 'Custom AI Systems',
        description: 'End-to-end AI product development. From custom RAG pipelines to autonomous multi-agent systems for enterprise.',
        features: [
            'Custom AI Model Integration',
            'Autonomous Agent Workflows',
            'Enterprise API Infrastructure',
            'Phased Deployment Strategy',
            '3-Month Support Retainer'
        ],
        icon: Sparkles,
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
                                <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/20">
                                    <Globe className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900 leading-none">Pulse Studio</h2>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Shipping Practical Excellence</p>
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
                            <div className="text-center mb-10 max-w-2xl mx-auto">
                                <h3 className="text-2xl font-semibold mb-3">Studio Operations</h3>
                                <p className="text-slate-500 text-sm">
                                    Shipping premium web services and autonomous AI products.
                                    We focus on <strong>identity</strong>, <strong>frictionless design</strong>, and <strong>practical scale</strong>.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                {tiers.map((tier) => (
                                    <div
                                        key={tier.name}
                                        className={`relative bg-white p-8 rounded-2xl border ${tier.recommended ? 'border-blue-600 shadow-xl shadow-blue-500/10' : 'border-slate-200'} flex flex-col`}
                                    >
                                        {tier.recommended && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">
                                                Premier Choice
                                            </div>
                                        )}

                                        <div className="flex items-center gap-3 mb-6">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.color}`}>
                                                <tier.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tier.name}</h4>
                                                <p className="text-2xl font-bold text-slate-900 leading-none mt-1">{tier.price}</p>
                                                <p className="text-[10px] font-medium text-blue-600/70 mt-1 uppercase tracking-wider">{tier.subtitle}</p>
                                            </div>
                                        </div>

                                        <p className="text-sm text-slate-500 mb-8 font-light leading-relaxed h-[60px] line-clamp-3">
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
                                            Inquire For {tier.name} <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-6 bg-slate-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-lg font-semibold mb-1 uppercase tracking-tight">Large-Scale Enterprise?</h4>
                                    <p className="text-slate-400 text-sm font-light italic">"Systems that scale beyond the baseline."</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-white text-slate-900 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors whitespace-nowrap shadow-lg"
                                >
                                    Custom Architecture Brief
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
