import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Database, Users, Trophy } from 'lucide-react';
import { useRef } from 'react';

const milestones = [
    {
        year: '2018',
        title: 'JKUAT',
        description: "Bachelor's in Microbiology",
        icon: GraduationCap,
        side: 'left',
    },
    {
        year: '2020',
        title: 'CloudFactory',
        description: 'Data Analyst',
        icon: Database,
        side: 'right',
    },
    {
        year: '2022',
        title: 'Remotasks',
        description: 'Operations Lead',
        icon: Users,
        side: 'left',
    },
    {
        year: '2026',
        title: 'CHAI Hackathon',
        description: 'Winner',
        icon: Trophy,
        side: 'right',
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
        <section id="trajectory" className="py-20 px-6" ref={containerRef}>
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

                {/* Timeline */}
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

                    {/* Animated Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary-400 to-primary-500 -translate-x-1/2 origin-top"
                    />

                    {/* Milestones */}
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-100px' }}
                                variants={fadeInUp}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center ${milestone.side === 'right' ? 'justify-end' : 'justify-start'
                                    }`}
                            >
                                {/* Node */}
                                <div
                                    className={`absolute left-1/2 -translate-x-1/2 z-10 ${milestone.active ? 'timeline-node active p-3' : 'timeline-node p-3'
                                        }`}
                                >
                                    <milestone.icon className={`w-5 h-5 ${milestone.active ? 'text-white' : 'text-primary-500'}`} />
                                </div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className={`glass-card p-6 w-[calc(50%-3rem)] ${milestone.side === 'right' ? 'ml-auto text-left' : 'mr-auto text-left'
                                        }`}
                                >
                                    <span className="text-sm font-semibold text-primary-500">
                                        {milestone.year}
                                    </span>
                                    <h3 className="text-xl font-semibold mt-1">{milestone.title}</h3>
                                    <p className="text-slate-500 mt-1">{milestone.description}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
