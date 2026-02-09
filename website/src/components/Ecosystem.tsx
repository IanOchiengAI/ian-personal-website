import { motion } from 'framer-motion';
import { Youtube, Music, BookOpen, ArrowUpRight, Palette } from 'lucide-react';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};



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

                    {/* Card 1: Ian Ochieng AI (YouTube) - TOP LEFT */}
                    <motion.a
                        href="https://www.youtube.com/@IanOchiengAI"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        className="glass-card p-8 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
                    >
                        {/* Background Image - Artistic with Red Gradient */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/images/ian-artistic.jpeg"
                                alt="Ian Ochieng Tech"
                                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/80 to-slate-900/40" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 text-red-200 text-sm font-medium mb-4">
                                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center backdrop-blur-sm">
                                    <Youtube className="w-4 h-4 text-white" />
                                </div>
                                YOUTUBE • TECH
                            </div>

                            <h3 className="text-3xl font-semibold text-white mb-3">Ian Ochieng AI</h3>
                            <p className="text-red-100/80 mb-6 max-w-md">
                                AI tutorials, system design breakdowns, and insights for emerging markets.
                            </p>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                                Watch Tutorials
                                <ArrowUpRight className="w-4 h-4 link-arrow" />
                            </span>
                        </div>
                    </motion.a>

                    {/* Card 2: ViNci Music - TOP RIGHT */}
                    <motion.a
                        href="https://www.youtube.com/@ViNciMusicKE"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="music-card p-8 rounded-3xl group cursor-pointer relative overflow-hidden min-h-[400px] flex flex-col"
                    >
                        {/* Background Image - Moody */}
                        <img
                            src="/images/ian-moody.jpeg"
                            alt="ViNci Music"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/50 to-transparent z-10" />

                        <div className="relative z-20 h-full flex flex-col justify-between">
                            <div className="flex items-center gap-3 text-pink-300 text-sm font-medium mb-4">
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                                    <Music className="w-4 h-4" />
                                </div>
                                YOUTUBE • MUSIC
                            </div>

                            <div>
                                <h3 className="text-3xl font-semibold text-white mb-3">ViNci Music</h3>
                                <p className="text-slate-300 mb-6 font-light">
                                    Where technology meets artistry.
                                </p>

                                <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                                    Listen
                                    <ArrowUpRight className="w-4 h-4 link-arrow" />
                                </span>
                            </div>
                        </div>
                    </motion.a>

                    {/* Card 3: Before AGI (Substack) - BOTTOM LEFT */}
                    <motion.a
                        href="https://beforeagi.substack.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ y: -5 }}
                        className="glass-card p-8 group cursor-pointer relative overflow-hidden flex flex-col justify-between"
                    >
                        {/* Substack orange aesthetic */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/50" />

                        {/* Background Image Hint */}
                        <img
                            src="/images/before-agi-workflow.png"
                            className="absolute right-0 top-0 h-full w-2/3 object-cover opacity-10 mask-image-linear-to-l"
                            style={{ maskImage: 'linear-gradient(to left, black, transparent)' }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 text-orange-600 text-sm font-medium mb-4">
                                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center">
                                    <BookOpen className="w-4 h-4" />
                                </div>
                                SUBSTACK
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">Before AGI</h3>
                            <p className="text-slate-500 mb-4">
                                Long-form essays on the future of human-machine collaboration.
                            </p>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <span className="inline-flex items-center gap-2 text-orange-600 font-medium group-hover:gap-3 transition-all">
                                Read Analysis
                                <ArrowUpRight className="w-4 h-4 link-arrow" />
                            </span>
                        </div>
                    </motion.a>

                    {/* Card 4: Behance (Design) - BOTTOM RIGHT - NEW */}
                    <motion.a
                        href="https://www.behance.net/ianwsochiengai"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ y: -5 }}
                        className="glass-card p-8 group cursor-pointer relative overflow-hidden flex flex-col justify-between bg-blue-600"
                    >
                        {/* Behance Blue aesthetic */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 text-blue-200 text-sm font-medium mb-4">
                                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                    <Palette className="w-4 h-4 text-white" />
                                </div>
                                PORTFOLIO • DESIGN
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-3">My Design Work</h3>
                            <p className="text-blue-100/80 mb-4">
                                Visual identity, UI/UX case studies, and creative direction.
                            </p>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                                View on Behance
                                <ArrowUpRight className="w-4 h-4 link-arrow" />
                            </span>
                        </div>
                    </motion.a>

                </div>
            </div>
        </section>
    );
}
