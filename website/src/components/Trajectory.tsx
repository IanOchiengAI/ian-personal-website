import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Trophy, Cloud, Zap } from 'lucide-react';
import { useRef } from 'react';

const milestones = [
    {
        year: '2018',
        title: 'JKUAT',
        description: "Bachelor's in Microbiology",
        icon: GraduationCap,
        color: 'bg-green-500',
        side: 'left',
    },
    {
        year: '2020',
        title: 'CloudFactory',
        description: 'Data Analyst',
        icon: Cloud,
        image: '/images/work/cloudfactory.jpg',
        color: 'bg-blue-500',
        side: 'right',
    },
    {
        year: '2022',
        title: 'Remotasks',
        description: 'Operations Lead',
        icon: Zap,
        image: '/images/work/remotasks.png',
        color: 'bg-yellow-500',
        side: 'left',
    },
    {
        year: '2026',
        title: 'CHAI Hackathon',
        description: 'Winner',
        icon: Trophy,
        image: '/images/work/chai.png',
        color: 'bg-orange-500',
        side: 'right',
    },
    {
        year: '2026',
        title: 'Pulse Studio',
        description: 'Founder & Identity Engineer',
        icon: Zap,
        color: 'bg-cyan-400',
        side: 'left',
        active: true,
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Trajectory() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

    return (
        <section id="trajectory" className="py-20 px-6 overflow-hidden" ref={containerRef}>
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-4 py-2 rounded-full mb-4">
                        THE TRAJECTORY
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        From Lab to Launch
                    </h2>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Central Line - Hidden on small mobile, shown on md+ */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

                    {/* Animated Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600 -translate-x-1/2 origin-top"
                    />

                    {/* Milestones */}
                    <div className="space-y-12 relative">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-50px' }}
                                variants={fadeInUp}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center md:justify-between ${milestone.side === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
                                    } flex-row`}
                            >
                                {/* Milestone Card - Pushed right on mobile to make room for left timeline */}
                                <div className="hidden md:block w-[calc(50%-3rem)]" /> {/* Spacer for desktop grid */}

                                {/* Icon Node */}
                                <div
                                    className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 ${milestone.active ? 'ring-4 ring-blue-100' : ''
                                        } rounded-xl bg-white shadow-xl border border-slate-100 flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110`}
                                >
                                    {milestone.image ? (
                                        <img
                                            src={milestone.image}
                                            alt={milestone.title}
                                            className="w-full h-full object-cover p-1.5"
                                        />
                                    ) : (
                                        <>
                                            <div className={`absolute inset-0 ${milestone.color} opacity-10`} />
                                            <milestone.icon className={`w-5 h-5 ${milestone.active ? 'text-blue-600' : 'text-slate-600'}`} />
                                        </>
                                    )}
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className={`glass-card p-6 ml-16 md:ml-0 md:w-[calc(50%-3rem)] w-full border border-white/40 shadow-xl`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                            {milestone.year}
                                        </span>
                                        {milestone.active && (
                                            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">{milestone.title}</h3>
                                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
