import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, ArrowUpRight, Palette, Sparkles, ShoppingBag, BookOpen, Mic, ArrowLeft, Monitor, Info, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState } from 'react';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

interface SubFolder {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    link?: string;
    details?: string[];
    showPricing?: boolean;
    isComingSoon?: boolean;
    theme?: string;
    bgImage?: string;
}

interface EcosystemItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    bgImage?: string;
    theme: 'blue' | 'red' | 'slate' | 'orange' | 'earth';
    aiInsight: string;
    subFolders?: SubFolder[];
    link?: string;
    isComingSoon?: boolean;
    action?: string;
}

const ecosystemItems: EcosystemItem[] = [
    {
        id: 'pulse-creative',
        title: 'Pulse Creative',
        subtitle: 'ENGINEERING • DESIGN',
        description: 'Building premium digital identities. From zero-latency portfolios to cinematic brand systems.',
        icon: Sparkles,
        bgImage: '/images/ian-suit.jpeg',
        theme: 'blue',
        aiInsight: 'Core Focus: Turning code and design into high-value equity assets.',
        subFolders: [
            {
                id: 'web-dev',
                title: 'Web Engineering',
                subtitle: 'PORTFOLIOS • ENGINES',
                description: 'Bespoke, ownership-first web products. Pay once, own forever.',
                icon: Monitor,
                theme: 'tech-blue',
                details: [
                    'Personalized UI/UX Design',
                    'Next.js / Vite Performance',
                    'Zero-Latency Deployment',
                    'Professional Email Setup'
                ],
                showPricing: true
            },
            {
                id: 'behance-link',
                title: 'Behance Portfolio',
                subtitle: 'VISUAL SHOWCASE',
                description: 'Explore our cinematic visual identities and premium brand systems.',
                link: 'https://www.behance.net/ianochieng',
                icon: Palette,
                theme: 'behance-blue'
            }
        ]
    },
    {
        id: 'content-repurposing',
        title: 'Content Engine',
        subtitle: 'REPURPOSING • GROWTH',
        description: 'Transforming long-form knowledge into high-impact visual assets for LinkedIn and X.',
        icon: Sparkles,
        bgImage: '/images/before-agi-workflow.png',
        theme: 'earth',
        aiInsight: 'Converting intellectual depth into cultural reach through AI-assisted repurposing.'
    },
    {
        id: 'pulse-studio',
        title: 'Pulse Studio',
        subtitle: 'YOUTUBE • PODCAST',
        description: 'The storytelling engine. Documenting the frontier of AI, culture, and sound.',
        icon: Youtube,
        bgImage: '/images/ian-artistic.jpeg',
        theme: 'red',
        aiInsight: 'A cultural hub housing deep-dives into the intersection of technology and creativity.',
        subFolders: [
            {
                id: 'yt-channel-ai',
                title: 'Ian Ochieng AI',
                subtitle: 'TECH • BUSINESS',
                description: 'Systematic breakdowns of AI agentics, business logic, and digital assets.',
                link: 'https://www.youtube.com/@IanOchiengAI',
                icon: Youtube,
                theme: 'youtube-red',
                bgImage: '/images/yt-ai-profile.jpg'
            },
            {
                id: 'yt-channel-vinci',
                title: 'ViNci Music',
                subtitle: 'CREATIVE • SOUND',
                description: 'Cinematic soundscapes and the intersection of music and technology.',
                link: 'https://www.youtube.com/@ViNciMusic254',
                icon: Youtube,
                theme: 'vinci-gold',
                bgImage: '/images/yt-vinci-profile.jpeg'
            },
            {
                id: 'podcast-hub',
                title: 'Before AGI Podcast',
                subtitle: 'AUDIO • DIALOGUE',
                description: 'The audio companion to the Substack. Conversations on the frontier.',
                link: '#',
                icon: Mic,
                theme: 'podcast-purple',
                bgImage: '/images/before-agi-thumbnail.png',
                details: [
                    'Conversations on the Frontier',
                    'Audio-First Insight',
                    'Guest Architects'
                ],
                isComingSoon: true
            },
            {
                id: 'before-agi-reads',
                title: 'Before AGI Reads',
                subtitle: 'SUBSTACK POSTS',
                description: 'Analysis on the future of autonomous systems and identity.',
                link: 'https://beforeagi.substack.com',
                icon: BookOpen,
                theme: 'substack-orange',
                bgImage: '/images/substack-logo.png'
            }
        ]
    },
    {
        id: 'pulse-merch',
        title: 'Pulse Merch',
        subtitle: 'GOODS • COMING SOON',
        description: 'The physical pulse. Premium streetwear for the Digital Architect.',
        link: '#',
        icon: ShoppingBag,
        bgImage: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2070&auto=format&fit=crop',
        theme: 'slate',
        aiInsight: 'Extending digital identity into physical brand equity. Launching soon.',
        isComingSoon: true
    }
];

interface EcosystemProps {
    onOpenPricing: () => void;
}

export default function Ecosystem({ onOpenPricing }: EcosystemProps) {
    const [activeFolder, setActiveFolder] = useState<string | null>(null);

    const activeItem = ecosystemItems.find(item => item.id === activeFolder);

    return (
        <section id="ecosystem" className="py-20 px-6 min-h-[600px]">
            <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    {!activeFolder ? (
                        <motion.div
                            key="main-grid"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {/* Section Header */}
                            <div className="text-center mb-12">
                                <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-4 py-2 rounded-full mb-4">
                                    THE ECOSYSTEM
                                </span>
                                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                                    Practical Intelligence.
                                </h2>
                            </div>

                            {/* Bento Grid */}
                            <div className="grid md:grid-cols-2 gap-6 auto-rows-[minmax(300px,auto)]">
                                {ecosystemItems.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        onClick={() => {
                                            if (item.subFolders) setActiveFolder(item.id);
                                            else if (item.link && item.link !== '#') window.open(item.link, '_blank');
                                        }}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeInUp}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className={`glass-card p-8 group cursor-pointer relative overflow-hidden flex flex-col justify-between ${item.theme === 'blue' ? 'bg-blue-600' : ''}`}
                                    >
                                        {/* Background Elements */}
                                        {item.bgImage && (
                                            <div className="absolute inset-0 z-0">
                                                <img
                                                    src={item.bgImage}
                                                    alt={item.title}
                                                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.id === 'before-agi' ? 'opacity-10' : 'opacity-40 mix-blend-overlay'}`}
                                                />
                                                <div className={`absolute inset-0 ${item.theme === 'red' ? 'bg-gradient-to-r from-red-900/90 via-red-800/80' :
                                                    item.theme === 'slate' ? 'bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent' :
                                                        item.theme === 'orange' ? 'bg-gradient-to-br from-orange-50 via-white to-orange-50/50' :
                                                            ''}`} />
                                            </div>
                                        )}
                                        {item.theme === 'blue' && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 z-0" />
                                        )}

                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <div className={`flex items-center gap-3 text-sm font-medium ${item.theme === 'orange' ? 'text-orange-600' : 'text-white'}`}>
                                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm bg-white/10">
                                                        <item.icon className="w-4 h-4" />
                                                    </div>
                                                    {item.subtitle}
                                                </div>
                                                <div className="px-2 py-1 rounded-full bg-white/10 border border-white/20 text-[8px] font-bold text-white tracking-widest uppercase">
                                                    {item.subFolders ? 'Folder' : 'Portal'}
                                                </div>
                                            </div>

                                            <h3 className={`text-3xl font-semibold mb-3 ${item.theme === 'orange' ? 'text-slate-900' : 'text-white'}`}>
                                                {item.title}
                                            </h3>

                                            <p className={`mb-6 max-w-sm ${item.theme === 'orange' ? 'text-slate-500' : 'text-white/80'}`}>
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="relative z-10 mt-auto pt-6">
                                            <span className={`inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all ${item.theme === 'orange' ? 'text-orange-600' : 'text-white'}`}>
                                                {item.subFolders ? 'Open Vertical' : item.isComingSoon ? 'Coming Soon' : 'Go to Portal'}
                                                <ArrowUpRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="folder-view"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white/40 backdrop-blur-3xl rounded-[2.5rem] p-6 md:p-10 border border-white/40 shadow-2xl relative overflow-hidden"
                        >
                            {/* Folder Header Image & Backdrop */}
                            <div className="absolute top-0 left-0 w-full h-[300px] z-0 overflow-hidden">
                                {activeItem?.bgImage && (
                                    <img
                                        src={activeItem.bgImage}
                                        alt=""
                                        className="w-full h-full object-cover opacity-20 transition-transform duration-700 hover:scale-105"
                                    />
                                )}
                                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white/40`} />
                                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
                            </div>

                            {/* Folder Header Content */}
                            <div className="relative z-10 flex items-start justify-between mb-12">
                                <div>
                                    <button
                                        onClick={() => setActiveFolder(null)}
                                        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-6 group"
                                    >
                                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Back to Ecosystem</span>
                                    </button>
                                    <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tighter">{activeItem?.title}</h2>
                                    <p className="text-slate-500 max-w-xl text-lg font-light leading-relaxed">{activeItem?.description}</p>
                                </div>
                                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center ${activeItem?.theme === 'blue' ? 'bg-blue-600 text-white shadow-blue-500/20' : 'bg-red-600 text-white shadow-red-500/20'} shadow-2xl scale-110`}>
                                    {activeItem && <activeItem.icon className="w-10 h-10" />}
                                </div>
                            </div>

                            {/* Sub-Folders Grid */}
                            <div className="grid md:grid-cols-2 gap-6">
                                {activeItem?.subFolders?.map((sub) => (
                                    <motion.div
                                        key={sub.id}
                                        whileHover={{ y: -5 }}
                                        onClick={() => {
                                            if (sub.showPricing) onOpenPricing();
                                            else if (sub.link && sub.link !== '#') window.open(sub.link, '_blank');
                                        }}
                                        className={`glass-card p-8 border cursor-pointer flex flex-col justify-between group overflow-hidden relative ${sub.theme === 'behance-blue' ? 'border-blue-500/30' :
                                            sub.theme === 'substack-orange' ? 'border-orange-500/30' :
                                                sub.theme === 'youtube-red' ? 'border-red-500/30' :
                                                    sub.theme === 'vinci-gold' ? 'border-amber-500/30' :
                                                        sub.theme === 'podcast-purple' ? 'border-purple-500/30' :
                                                            'border-white/60 bg-white/40'
                                            }`}
                                    >
                                        {/* Background Image with Gradient Overlay */}
                                        {sub.bgImage && (
                                            <div className="absolute inset-0 z-0">
                                                <img src={sub.bgImage} alt="" className="w-full h-full object-cover opacity-40" />
                                                <div className={`absolute inset-0 ${sub.theme === 'youtube-red' ? 'bg-gradient-to-br from-white/90 via-white/80 to-red-50/70' :
                                                    sub.theme === 'vinci-gold' ? 'bg-gradient-to-br from-white/90 via-white/80 to-amber-50/70' :
                                                        sub.theme === 'podcast-purple' ? 'bg-gradient-to-br from-white/90 via-white/80 to-purple-50/70' :
                                                            sub.theme === 'substack-orange' ? 'bg-gradient-to-br from-white/90 via-white/80 to-orange-50/70' :
                                                                sub.theme === 'behance-blue' ? 'bg-gradient-to-br from-white/90 via-white/80 to-blue-50/70' :
                                                                    'bg-gradient-to-br from-white/90 via-white/85 to-white/80'
                                                    }`} />
                                            </div>
                                        )}

                                        {/* Brand Smidgen Glow */}
                                        {sub.theme === 'behance-blue' && (
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -mr-16 -mt-16" />
                                        )}
                                        {sub.theme === 'substack-orange' && (
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 blur-3xl -mr-16 -mt-16" />
                                        )}
                                        {sub.theme === 'youtube-red' && (
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 blur-3xl -mr-16 -mt-16" />
                                        )}
                                        {sub.theme === 'vinci-gold' && (
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/10 blur-3xl -mr-16 -mt-16" />
                                        )}
                                        {sub.theme === 'podcast-purple' && (
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-3xl -mr-16 -mt-16" />
                                        )}

                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${sub.theme === 'behance-blue' ? 'bg-[#0057ff] text-white' :
                                                    sub.theme === 'substack-orange' ? 'bg-orange-600 text-white' :
                                                        sub.theme === 'youtube-red' ? 'bg-[#FF0000] text-white' :
                                                            sub.theme === 'vinci-gold' ? 'bg-amber-500 text-white' :
                                                                sub.theme === 'podcast-purple' ? 'bg-purple-600 text-white' :
                                                                    'bg-slate-100 text-slate-600'
                                                    }`}>
                                                    <sub.icon className="w-5 h-5" />
                                                </div>
                                                <span className={`text-[10px] font-bold uppercase tracking-widest ${sub.theme === 'behance-blue' ? 'text-blue-600' :
                                                    sub.theme === 'substack-orange' ? 'text-orange-600' :
                                                        sub.theme === 'youtube-red' ? 'text-red-600' :
                                                            sub.theme === 'vinci-gold' ? 'text-amber-600' :
                                                                sub.theme === 'podcast-purple' ? 'text-purple-600' :
                                                                    'text-slate-400'
                                                    }`}>{sub.subtitle}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">{sub.title}</h3>
                                            <p className="text-slate-500 text-sm mb-6 leading-relaxed">{sub.description}</p>

                                            {/* Expandable Details for Web Dev */}
                                            {sub.details && (
                                                <div className="space-y-3 mb-8">
                                                    {sub.details.map(detail => (
                                                        <div key={detail} className="flex items-center gap-3 text-xs text-slate-600 font-medium">
                                                            <Check className="w-4 h-4 text-green-500" />
                                                            {detail}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                            <span className="text-blue-600 text-xs font-bold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                                {sub.showPricing ? 'View Price Tiers' : sub.isComingSoon ? 'Coming Soon' : 'Open Link'}
                                                <ArrowUpRight className="w-4 h-4" />
                                            </span>
                                            {sub.showPricing && (
                                                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium bg-slate-50 px-2 py-1 rounded">
                                                    <Info className="w-3 h-3" />
                                                    Identity Assets
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
