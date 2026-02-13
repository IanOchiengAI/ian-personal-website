import { Github, Linkedin, Instagram, Twitter, Palette, Mail, ArrowUpRight } from 'lucide-react';

const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ian-ochiengai/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/IanOchiengAI' },
    { icon: Palette, label: 'Behance', href: 'https://www.behance.net/ianwsochiengai' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/ianochiengai/' },
    { icon: Twitter, label: 'X', href: 'https://x.com/IanOchiengAi' },
];

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#ecosystem' },
    { label: 'Journey', href: '#trajectory' },
    { label: 'Projects', href: '#products' },
];

interface FooterProps {
    onOpenContact?: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-900 text-white overflow-hidden">
            {/* Top gradient line */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold tracking-tight">Ian Ochieng.</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Building practical AI products that solve real-world problems.
                        </p>
                        <button
                            onClick={onOpenContact}
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
                        >
                            <Mail className="w-4 h-4" />
                            Get in touch
                            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Navigate</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="/Ian_Ochieng_CV.pdf"
                                    download
                                    className="text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    Download CV
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Connect</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                        <p className="text-slate-500 text-xs mt-4">
                            ianochiengai@gmail.com
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">
                        © {currentYear} Ian Ochieng. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-[10px] uppercase tracking-widest">
                        Nairobi, Kenya 🇰🇪
                    </p>
                </div>
            </div>
        </footer>
    );
}
