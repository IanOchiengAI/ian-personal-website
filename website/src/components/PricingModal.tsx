import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Monitor, Sparkles, Coffee, Globe } from 'lucide-react';

interface PricingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const tiers = [
    {
        name: 'Tier 00: The Starter',
        price: '$76',
        subtitle: 'Ownership Asset',
        description: 'Single-page high-speed landing. You own the code forever with zero ongoing hosting costs.',
        features: [
            '1 Template Page (Antigravity Shell)',
            '"Own the Code" — No subscriptions',
            'Free Hosting Setup (Vercel)',
            '2 Yr Domain Included (.com/.co.ke)'
        ],
        icon: Coffee,
        color: 'bg-orange-100 text-orange-600',
        borderColor: 'border-orange-100'
    },
    {
        name: 'Tier 01: Identity',
        price: '$270 – $500',
        subtitle: 'High-End Individual',
        description: 'Bespoke custom landing for founders and creators with cinematic motion and premium UI.',
        features: [
            '1 Custom Page (Bento/Linear)',
            'Advanced Hero Animation',
            'Interactive Experience Timeline',
            'Clean "Mac-style" UI'
        ],
        icon: Monitor,
        color: 'bg-blue-100 text-blue-600',
        borderColor: 'border-blue-100',
        recommended: true
    },
    {
        name: 'Tier 02: Authority',
        price: '$650 – $1,430',
        subtitle: 'The Professional',
        description: 'Full-scale portfolio or agency site with editable content via a high-end CMS dashboard.',
        features: [
            '3–5 Custom Pages',
            'Custom CMS Integration (Sanity)',
            'Content Dashboard for Client',
            'Search Engine Optimization (SEO)'
        ],
        icon: Sparkles,
        color: 'bg-purple-100 text-purple-600',
        borderColor: 'border-purple-100'
    },
    {
        name: 'Tier 03: Logic',
        price: '$1,930+',
        subtitle: 'Business Engine',
        description: 'Complex logic engines for businesses requiring payments, lead gen, and CRM sync.',
        features: [
            '10+ High-Logic Pages',
            'M-Pesa Integration (STK Push)',
            'Custom Multi-step Lead Funnels',
            'Full CRM & Database Sync'
        ],
        icon: Globe,
        color: 'bg-emerald-100 text-emerald-600',
        borderColor: 'border-emerald-100'
    },
    {
        name: 'Tier 04: Discovery',
        price: 'FREE',
        subtitle: 'Consultation & Strategy',
        description: '30-minute discovery call to align your vision with our technical execution roadmap.',
        features: [
            'Project Scope Assessment',
            'Technical Feasibility Check',
            'Identity Architecture Audit',
            'Phased Roadmap Delivery'
        ],
        icon: Sparkles,
        color: 'bg-slate-100 text-slate-600',
        borderColor: 'border-slate-100'
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
                        className="relative w-full max-w-7xl bg-slate-50 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-500/20">
                                    <Globe className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-slate-900 leading-none">Pulse 254</h2>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Building Kenyan Digital Legacy</p>
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
                                <h3 className="text-3xl font-bold mb-3 text-slate-900 tracking-tight">Studio Operations</h3>
                                <p className="text-slate-500 text-sm font-medium">
                                    Shipping premium web services and autonomous AI products.
                                    We focus on <span className="text-blue-600">identity</span>, <span className="text-blue-600">frictionless design</span>, and <span className="text-blue-600">practical scale</span>.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                                {tiers.map((tier) => (
                                    <div
                                        key={tier.name}
                                        className={`relative bg-white p-8 rounded-2xl border-2 ${tier.recommended ? 'border-blue-600 shadow-2xl shadow-blue-500/10' : 'border-slate-200/60 shadow-lg shadow-slate-200/5'} flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                                    >
                                        {tier.recommended && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap z-20">
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
                                            onClick={() => window.open('https://wa.me/254700000000', '_blank')}
                                            className={`w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${tier.recommended
                                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20'
                                                : 'bg-slate-900 text-white hover:bg-slate-800'
                                                }`}
                                        >
                                            {tier.price === 'FREE' ? 'Book Discovery Call' : `Start ${tier.name.split(':')[1]}`} <ArrowRight className="w-4 h-4" />
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
