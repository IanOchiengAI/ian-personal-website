import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Instagram, Twitter, Palette } from 'lucide-react';

interface ContactDockProps {
    onOpenContact?: () => void;
}

const dockItems = [
    { icon: Mail, label: 'Email', action: 'contact' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ian-ochiengai/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/IanOchiengAI' },
    { icon: Palette, label: 'Behance', href: 'https://www.behance.net/ianwsochiengai' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/ianochiengai/' },
    { icon: Twitter, label: 'X', href: 'https://x.com/IanOchiengAi' },
];

export default function ContactDock({ onOpenContact }: ContactDockProps) {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
                className="glass-panel px-2 sm:px-4 py-2 sm:py-3 rounded-2xl flex items-center gap-2 sm:gap-4 border border-white/20 shadow-2xl backdrop-blur-xl bg-white/30"
            >
                {dockItems.map((item) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={item.action === 'contact' ? (e) => { e.preventDefault(); onOpenContact?.(); } : undefined}
                        target={item.href?.startsWith('http') ? '_blank' : undefined}
                        rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 sm:p-3 rounded-xl bg-white/40 hover:bg-white/80 transition-colors relative group cursor-pointer"
                        aria-label={item.label}
                    >
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />

                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            {item.label}
                        </span>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
}
