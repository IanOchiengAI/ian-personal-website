import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, FileDown, Sparkles, ArrowRight, ArrowLeft, Brain } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type Mode = 'standard' | 'strategist';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mode, setMode] = useState<Mode>('standard');
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: '',
        // AI Strategist specific fields
        mission: '',
        scope: '',
        constraints: ''
    });
    const [copied, setCopied] = useState(false);

    const email = "ianochiengai@gmail.com";

    const strategistSteps = [
        {
            id: 'mission',
            label: 'The Mission',
            placeholder: 'What is the core objective or problem you are solving?',
            field: 'mission'
        },
        {
            id: 'scope',
            label: 'The Scope',
            placeholder: 'What are the key deliverables or areas of focus?',
            field: 'scope'
        },
        {
            id: 'constraints',
            label: 'The Constraints',
            placeholder: 'Timeline, budget hints, or technical limitations?',
            field: 'constraints'
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let finalMessage = formData.message;
        if (mode === 'strategist') {
            finalMessage = `-- - STRATEGIST BRIEF-- -\n\nMISSION: ${formData.mission} \n\nSCOPE: ${formData.scope} \n\nCONSTRAINTS: ${formData.constraints} \n\n------------------------`;
        }

        const mailtoLink = `mailto:${email}?subject = ${encodeURIComponent(formData.subject || (mode === 'strategist' ? 'Strategist Brief' : 'Contact'))}& body=${encodeURIComponent(`Hi Ian,\n\n${finalMessage}\n\nBest,\n${formData.name}`)} `;
        window.open(mailtoLink, '_blank');
        onClose();
        // Reset after close
        setTimeout(() => {
            setStep(0);
            setMode('standard');
        }, 500);
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
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                                    {mode === 'standard' ? 'Standard Terminal' : 'Strategist Engine'}
                                </span>
                            </div>
                            <div className="w-14" />
                        </div>

                        {/* Mode Toggle */}
                        <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex gap-2">
                            <button
                                onClick={() => setMode('standard')}
                                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${mode === 'standard'
                                    ? 'bg-white shadow-sm border border-slate-200 text-slate-900'
                                    : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <Send className="w-3 h-3" />
                                STANDARD
                            </button>
                            <button
                                onClick={() => setMode('strategist')}
                                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${mode === 'strategist'
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                    : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <Sparkles className="w-3 h-3" />
                                AI STRATEGIST
                            </button>
                        </div>

                        {/* Form Content */}
                        <div className="p-6">
                            <AnimatePresence mode="wait">
                                {mode === 'standard' ? (
                                    <motion.form
                                        key="standard"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                                            <span className="text-slate-400 text-sm font-medium w-12">To:</span>
                                            <div className="flex items-center gap-2 flex-1">
                                                <span className="bg-blue-100/50 text-blue-700 px-2 py-1 rounded text-sm">Ian Ochieng</span>
                                            </div>
                                            <button type="button" onClick={copyEmail} className="text-slate-400">
                                                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                            </button>
                                        </div>

                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            required
                                            className="w-full bg-transparent border-b border-slate-100 py-2 outline-none text-sm"
                                            value={formData.subject}
                                            onChange={e => setFormData({ ...formData, subject: e.target.value })}
                                        />

                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            className="w-full bg-transparent border-b border-slate-100 py-2 outline-none text-sm"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        />

                                        <textarea
                                            placeholder="How can I help you operationalize intelligence?"
                                            required
                                            className="w-full h-40 bg-transparent py-2 outline-none text-sm resize-none font-light"
                                            value={formData.message}
                                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        />

                                        <div className="flex justify-between items-center pt-2">
                                            <a href="/Ian_Ochieng_CV.pdf" download className="text-xs text-slate-400 flex items-center gap-1">
                                                <FileDown className="w-3 h-3" /> CV.pdf
                                            </a>
                                            <button type="submit" className="bg-slate-900 text-white px-6 py-2 rounded-lg text-sm font-medium">
                                                Dispatch
                                            </button>
                                        </div>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="strategist"
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="space-y-6"
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                                                <Brain className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-900 leading-none">Drafting Strategic Brief</h4>
                                                <p className="text-[10px] text-slate-400 uppercase tracking-tighter mt-1">Step {step + 1} of 3</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-blue-600 uppercase tracking-widest">{strategistSteps[step].label}</label>
                                            <textarea
                                                autoFocus
                                                placeholder={strategistSteps[step].placeholder}
                                                className="w-full h-32 bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none text-sm font-light leading-relaxed focus:border-blue-200 transition-colors"
                                                value={formData[strategistSteps[step].field as keyof typeof formData]}
                                                onChange={e => setFormData({ ...formData, [strategistSteps[step].field]: e.target.value })}
                                            />
                                        </div>

                                        <div className="flex justify-between items-center bg-slate-50/50 p-2 rounded-xl border border-slate-100">
                                            <button
                                                onClick={() => step > 0 && setStep(step - 1)}
                                                disabled={step === 0}
                                                className="p-2 text-slate-400 hover:text-slate-600 disabled:opacity-30"
                                                title="Previous Step"
                                            >
                                                <ArrowLeft className="w-5 h-5" />
                                            </button>

                                            <div className="flex gap-1.5">
                                                {strategistSteps.map((_, i) => (
                                                    <div key={i} className={`h-1 rounded-full transition-all ${i === step ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200'}`} />
                                                ))}
                                            </div>

                                            {step < 2 ? (
                                                <button
                                                    onClick={() => setStep(step + 1)}
                                                    className="p-2 bg-blue-600 text-white rounded-lg shadow-sm"
                                                    title="Next Step"
                                                >
                                                    <ArrowRight className="w-5 h-5" />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={handleSubmit}
                                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20"
                                                >
                                                    GENERATE BRIEF <Send className="w-3 h-3" />
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
