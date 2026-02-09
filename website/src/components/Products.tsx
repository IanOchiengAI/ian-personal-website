import { motion } from 'framer-motion';
import { ArrowUpRight, FolderOpen } from 'lucide-react';

const projects = [
    {
        title: 'Before AGI Workflow',
        subtitle: 'AI Pipeline for Business Podcasts',
        specs: ['NotebookLM', 'DaVinci Resolve', 'Python'],
        image: '/images/before-agi-workflow.png',
        link: 'https://github.com/IanOchiengAI/ai-podcast-workflow-case-study',
        type: 'case-study'
    },
    {
        title: 'Web Development',
        subtitle: 'Portfolio & Agency Work',
        specs: ['React', 'Next.js', 'NGO Platforms'],
        image: '/images/portfolio/zaidi.png', // Using Zaidi as the cover
        link: '#',
        type: 'portfolio',
        action: 'openPortfolio'
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

interface ProductsProps {
    onOpenPortfolio: () => void;
}

export default function Products({ onOpenPortfolio }: ProductsProps) {
    return (
        <section id="products" className="py-20 px-6">
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
                        THE PRODUCTS
                    </span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Systems That Ship
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -5 }}
                            className="group cursor-pointer"
                            onClick={project.action === 'openPortfolio' ? onOpenPortfolio : undefined}
                        >
                            {/* Visual Area */}
                            <div className="rounded-t-3xl overflow-hidden aspect-[16/10] relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {project.type === 'portfolio' && (
                                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center">
                                        <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            Click to View Folder
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Info Area */}
                            <div className="bg-white rounded-b-3xl p-6 border border-t-0 border-slate-100">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-slate-500 mt-1">{project.subtitle}</p>

                                {/* Tech Specs */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.specs.map((spec) => (
                                        <span
                                            key={spec}
                                            className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-full"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>

                                {/* Link / Action */}
                                <div className="mt-4">
                                    {project.type === 'portfolio' ? (
                                        <button className="inline-flex items-center gap-2 text-primary-500 font-medium group-hover:gap-3 transition-all">
                                            Open Folder
                                            <FolderOpen className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary-500 font-medium group-hover:gap-3 transition-all"
                                        >
                                            View Project
                                            <ArrowUpRight className="w-4 h-4 link-arrow" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
