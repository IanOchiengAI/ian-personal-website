import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';

interface PortfolioFolderProps {
    isOpen: boolean;
    onClose: () => void;
}

const websites = [
    {
        title: 'Zaidi Ya Misuli',
        url: 'https://zaidiyamisuli.org/',
        description: 'Empowering communities through sustainable development and resource accessibility.',
        role: 'Full Stack Development',
        testimonial: 'Ian transformed our vision into a digital reality that truly serves our community.',
        tags: ['NGO', 'Community', 'Web Platform'],
        image: '/images/portfolio/zaidi.png'
    },
    {
        title: 'Susan Blixen Nderitu',
        url: 'https://susan-nderituwebsite.lovable.app/',
        description: 'Personal brand portfolio showcasing supply chain resilience and impact leadership.',
        role: 'Portfolio Design',
        tags: ['Personal Brand', 'Portfolio', 'Design'],
        image: '/images/portfolio/susan.png'
    },
];

export default function PortfolioFolder({ isOpen, onClose }: PortfolioFolderProps) {
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

                    {/* Folder Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl bg-slate-50 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
                    >
                        {/* Header (Mac Folder Style) */}
                        <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2">
                                <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>
                            <span className="text-sm font-medium text-slate-600">Web Development Portfolio</span>
                            <div className="w-14" /> {/* Spacer for centering */}
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-auto">
                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Selected Works</h2>
                                    <p className="text-slate-500">Helping businesses and changemakers establish their digital presence.</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {websites.map((site) => (
                                    <div
                                        key={site.title}
                                        className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                                    >
                                        {/* Browser Toolbar Mockup */}
                                        <div className="bg-slate-100 border-b border-slate-200 px-3 py-2 flex items-center gap-2">
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 rounded-full bg-slate-300" />
                                                <div className="w-2 h-2 rounded-full bg-slate-300" />
                                            </div>
                                            <div className="flex-1 bg-white rounded-md h-5 mx-2 shadow-sm text-[10px] flex items-center px-2 text-slate-400 truncate">
                                                {site.url}
                                            </div>
                                        </div>

                                        {/* Screenshot Area */}
                                        <div className="aspect-video relative overflow-hidden bg-slate-100 group-hover:opacity-90 transition-opacity">
                                            <img
                                                src={site.image}
                                                alt={site.title}
                                                className="w-full h-full object-cover object-top"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors pointer-events-none" />
                                        </div>

                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <h3 className="text-lg font-semibold">{site.title}</h3>
                                                <a
                                                    href={site.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-1.5 bg-slate-50 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-blue-50 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            </div>

                                            <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                                                {site.description}
                                            </p>

                                            <div className="flex items-center gap-2 mb-4 mt-auto">
                                                {site.tags?.map(tag => (
                                                    <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase tracking-wider font-semibold rounded">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {site.testimonial && (
                                                <div className="pt-4 border-t border-slate-100 mt-2">
                                                    <div className="flex gap-2">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 shrink-0 mt-0.5" />
                                                        <p className="text-xs text-slate-600 italic">"{site.testimonial}"</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
