import { motion } from 'framer-motion';
import { Home, Briefcase, Play, Mail } from 'lucide-react';

const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Briefcase, label: 'Work', href: '#ecosystem' },
    { icon: Play, label: 'Content', href: '#trajectory' },
    { icon: Mail, label: 'Contact', href: '#contact' },
];

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <nav className="nav-pill flex items-center gap-6">
                {/* Logo */}
                <a href="#home" className="text-lg font-semibold text-slate-900 tracking-tight">
                    Ian Ochieng.
                </a>

                {/* Divider */}
                <div className="w-px h-6 bg-slate-200" />

                {/* Navigation Icons */}
                <div className="flex items-center gap-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
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
