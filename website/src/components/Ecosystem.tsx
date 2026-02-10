import { motion } from 'framer-motion';
import { Youtube, Music, BookOpen, ArrowUpRight, Palette, Sparkles } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const ecosystemItems = [
    {
        id: 'youtube-ai',
        title: 'Ian Ochieng AI',
        subtitle: 'YOUTUBE • TECH',
        description: 'AI tutorials, system design breakdowns, and insights for emerging markets.',
        link: 'https://www.youtube.com/@IanOchiengAI',
        icon: Youtube,
        bgImage: '/images/ian-artistic.jpeg',
        theme: 'red',
        aiInsight: 'Focuses on "low-friction" AI deployment in resource-constrained environments.'
    },
    {
        id: 'vinci-music',
        title: 'ViNci Music',
        subtitle: 'YOUTUBE • MUSIC',
        description: 'Where technology meets artistry.',
        link: 'https://www.youtube.com/@ViNciMusicKE',
        icon: Music,
        bgImage: '/images/ian-moody.jpeg',
        theme: 'slate',
        aiInsight: 'Exploring the intersection of generative AI and Kenyan sonic identities.'
    },
    {
        id: 'before-agi',
        title: 'Before AGI',
        subtitle: 'SUBSTACK',
        description: 'Long-form essays on the future of human-machine collaboration.',
        link: 'https://beforeagi.substack.com',
        icon: BookOpen,
        bgImage: '/images/before-agi-workflow.png',
        theme: 'orange',
        aiInsight: 'Predicts a shift from "AI Tools" to "Autonomous Identity Systems" by 2027.'
    },
    {
        id: 'behance',
        title: 'My Design Work',
        subtitle: 'PORTFOLIO • DESIGN',
        description: 'Visual identity, UI/UX case studies, and creative direction.',
        link: 'https://www.behance.net/ianwsochiengai',
        icon: Palette,
        bgImage: null,
        theme: 'blue',
        aiInsight: 'Utilizes AI to automate repetitive UI patterns, freeing time for core strategy.'
    }
];

export default function Ecosystem() {
    return (
        <section id="ecosystem" className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-4 py-2 rounded-full mb-4">
                        THE ECOSYSTEM
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Creative Intelligence.
                    </h2>
                </motion.div>

                {/* Bento Grid - 2x2 Layout */}
                <div className="grid md:grid-cols-2 gap-6 auto-rows-[minmax(300px,auto)]">
                    {ecosystemItems.map((item, idx) => (
                        <motion.a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`glass-card p-8 group cursor-pointer relative overflow-hidden flex flex-col justify-between ${item.theme === 'blue' ? 'bg-blue-600' : ''
                                }`}
                        >
                            {/* Background Elements */}
                            {item.bgImage && (
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={item.bgImage}
                                        alt={item.title}
                                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.id === 'before-agi' ? 'opacity-10' : 'opacity-60 mix-blend-overlay'
                                            }`}
                                    />
                                    <div className={`absolute inset-0 ${item.theme === 'red' ? 'bg-gradient-to-r from-red-900/90 via-red-800/80 to-slate-900/40' :
                                        item.theme === 'slate' ? 'bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent' :
                                            item.theme === 'orange' ? 'bg-gradient-to-br from-orange-50 via-white to-orange-50/50' :
                                                ''
                                        }`} />
                                </div>
                            )}
                            {item.theme === 'blue' && (
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 z-0" />
                            )}

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`flex items-center gap-3 text-sm font-medium ${item.theme === 'orange' ? 'text-orange-600' :
                                        item.theme === 'blue' ? 'text-blue-200' :
                                            item.theme === 'red' ? 'text-red-200' : 'text-pink-300'
                                        }`}>
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm ${item.theme === 'orange' ? 'bg-orange-100' : 'bg-white/10'
                                            }`}>
                                            <item.icon className={`w-4 h-4 ${item.theme === 'red' ? 'text-white' : ''}`} />
                                        </div>
                                        {item.subtitle}
                                    </div>

                                    {/* AI Insight Badge */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
                                    >
                                        <Sparkles className="w-3 h-3 text-primary-400" />
                                        <span className="text-[10px] font-bold text-white tracking-wider">AI INSIGHT</span>
                                    </motion.div>
                                </div>

                                <h3 className={`text-3xl font-semibold mb-3 ${item.theme === 'orange' ? 'text-slate-900' : 'text-white'
                                    }`}>
                                    {item.title}
                                </h3>

                                <p className={`mb-6 max-w-md ${item.theme === 'orange' ? 'text-slate-500' :
                                    item.theme === 'red' ? 'text-red-100/80' :
                                        item.theme === 'blue' ? 'text-blue-100/80' : 'text-slate-300 font-light'
                                    }`}>
                                    {item.description}
                                </p>

                                {/* AI Intelligence Reveal */}
                                <div className="mt-4 overflow-hidden h-0 group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    <div className={`p-4 rounded-xl border border-white/10 ${item.theme === 'orange' ? 'bg-orange-100/50 text-orange-900' : 'bg-white/5 text-white'
                                        } text-xs leading-relaxed italic`}>
                                        <Sparkles className="w-4 h-4 mb-2 opacity-50" />
                                        "{item.aiInsight}"
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-auto pt-6">
                                <span className={`inline-flex items-center gap-2 font-medium group-hover:gap-3 transition-all ${item.theme === 'orange' ? 'text-orange-600' : 'text-white'
                                    }`}>
                                    {item.id === 'vinci-music' ? 'Listen' :
                                        item.id === 'before-agi' ? 'Read Analysis' :
                                            item.id === 'behance' ? 'View on Behance' : 'Watch Tutorials'}
                                    <ArrowUpRight className="w-4 h-4 link-arrow" />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
