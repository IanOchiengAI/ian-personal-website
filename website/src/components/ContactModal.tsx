import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Copy, Check } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });
    const [copied, setCopied] = useState(false);

    const email = "ianochiengai@gmail.com";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Ian,\n\n${formData.message}\n\nBest,\n${formData.name}`)}`;
        window.open(mailtoLink, '_blank');
        onClose();
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-lg bg-white/80 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 overflow-hidden"
                    >
                        {/* Title Bar */}
                        <div className="bg-slate-100/50 border-b border-slate-200/50 px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div onClick={onClose} className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 cursor-pointer shadow-sm" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
                                <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm" />
                            </div>
                            <span className="text-sm font-medium text-slate-500">New Message</span>
                            <div className="w-14" /> {/* Spacer for centering */}
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">

                            {/* To Field (Visual only) */}
                            <div className="flex items-center gap-3 border-b border-slate-200/50 pb-2">
                                <span className="text-slate-400 text-sm font-medium w-12">To:</span>
                                <div className="flex items-center gap-2 flex-1">
                                    <span className="bg-blue-100/50 text-blue-700 px-2 py-1 rounded text-sm">
                                        Ian Ochieng
                                    </span>
                                    <span className="text-slate-400 text-xs hidden sm:inline">&lt;{email}&gt;</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={copyEmail}
                                    className="text-slate-400 hover:text-slate-600 transition-colors"
                                    title="Copy Email"
                                >
                                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>

                            {/* Subject */}
                            <div className="flex items-center gap-3 border-b border-slate-200/50 pb-2">
                                <span className="text-slate-400 text-sm font-medium w-12">Subject:</span>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    placeholder="Project Inquiry..."
                                    className="flex-1 bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-300 text-sm font-medium"
                                />
                            </div>

                            {/* Name (for body) */}
                            <div className="flex items-center gap-3 border-b border-slate-200/50 pb-2">
                                <span className="text-slate-400 text-sm font-medium w-12">From:</span>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your Name"
                                    className="flex-1 bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-300 text-sm font-medium"
                                />
                            </div>

                            {/* Message Body */}
                            <textarea
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Hi Ian, I'd love to discuss..."
                                className="w-full h-40 bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-300 resize-none pt-2 font-light leading-relaxed"
                            />

                            {/* Footer / Send */}
                            <div className="flex justify-end pt-2">
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                                >
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
