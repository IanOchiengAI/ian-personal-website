import { motion } from 'framer-motion';
import { Trophy, MapPin } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Copy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 text-slate-500 text-sm font-medium tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-blue-600" />
                            PRACTICAL AI SOLUTIONS
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
                            I build practical
                            <br />
                            <span className="text-blue-600">AI products</span> that
                            <br />
                            solve real-world problems.
                        </h1>

                        {/* Subhead */}
                        <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-light">
                            Moving beyond the hype to deploy functional, context-aware systems that drive actual business value. No fluff, just code and results.
                        </p>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                        >
                            <span className="gold-badge">
                                <Trophy className="w-4 h-4" />
                                2026 CHAI HACKATHON WINNER
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative"
                    >
                        {/* Location Pill */}
                        <div className="absolute -top-2 right-0 z-10 bg-white rounded-full px-3 py-1.5 shadow-lg flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-slate-400" />
                            <span className="text-slate-600">Nairobi, Kenya</span>
                        </div>

                        {/* Device Frame */}
                        <div className="glass-card p-6 relative overflow-hidden">
                            <img
                                src="/images/ian-suit.jpeg"
                                alt="Ian Ochieng - System Architect & Strategist"
                                className="aspect-[4/5] w-full object-cover rounded-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
