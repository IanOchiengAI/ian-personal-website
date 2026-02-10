import { motion } from 'framer-motion';
import { Home, Briefcase, Play, Mail, FileDown } from 'lucide-react';

interface HeaderProps {
    onOpenContact?: () => void;
}

const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Briefcase, label: 'Work', href: '#ecosystem' },
    { icon: Play, label: 'Content', href: '#trajectory' },
    { icon: FileDown, label: 'Resume', href: '/Ian_Ochieng_CV.pdf', download: true },
    { icon: Mail, label: 'Contact', action: 'contact' },
];

export default function Header({ onOpenContact }: HeaderProps) {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto"
        >
            <nav className="nav-pill flex items-center gap-4 sm:gap-6 px-4 py-2 sm:px-6">
                {/* Logo */}
                <a href="#home" className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight whitespace-nowrap">
                    Ian Ochieng.
                </a>

                {/* Divider */}
                <div className="w-px h-6 bg-slate-200" />

                {/* Navigation Icons */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            download={item.download ? 'Ian_Ochieng_CV.pdf' : undefined}
                            target={item.download ? '_blank' : undefined}
                            onClick={item.action === 'contact' ? (e) => { e.preventDefault(); onOpenContact?.(); } : undefined}
                            className="p-2 text-slate-500 hover:text-slate-800 transition-colors rounded-lg hover:bg-slate-100"
                            title={item.label}
                        >
                            <item.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </nav>
        </motion.header>
    );
}
