import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Save, Code, Copy, Check, RefreshCw, Sliders } from 'lucide-react';
import { PortfolioConfig } from '../types';

interface ConfigEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PortfolioConfig;
  onSaveConfig: (updated: PortfolioConfig) => void;
}

export const ConfigEditorModal: React.FC<ConfigEditorModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig
}) => {
  const [jsonText, setJsonText] = useState(JSON.stringify(config, null, 2));
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'blogger'>('editor');

  if (!isOpen) return null;

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      onSaveConfig(parsed);
      setError('');
      alert('কনফিগারেশন সফলভাবে আপডেট করা হয়েছে!');
      onClose();
    } catch (e: any) {
      setError('JSON ফরম্যাটে ভুল আছে! অনুগ্রহ করে ব্র্যাকেট ও কমা পরীক্ষা করুন: ' + e.message);
    }
  };

  const generateBloggerCode = () => {
    return `<!DOCTYPE html>
<html lang="bn" class="scroll-smooth">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${config.hero.name} | ${config.hero.role}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<script src="https://cdn.tailwindcss.com"></script>
<style>
  body { font-family: 'Hind Siliguri', sans-serif; background-color: #090D16; color: #f5f5f5; overflow-x: hidden; }
  .tilt-30deg { transform: rotateX(15deg) rotateY(-10deg) rotateZ(-25deg) scale(1.05); transform-style: preserve-3d; }
  @keyframes marquee-left { 0% { transform: translate3d(0%, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }
  @keyframes marquee-right { 0% { transform: translate3d(-50%, 0, 0); } 100% { transform: translate3d(0%, 0, 0); } }
  .animate-marquee-left { animation: marquee-left 35s linear infinite; }
  .animate-marquee-right { animation: marquee-right 35s linear infinite; }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>
</head>
<body class="bg-[#090D16] text-neutral-100 selection:bg-[#3A86FF] selection:text-white">

<!-- Apple Floating Nav Dock -->
<header class="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
  <nav class="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950/80 border border-white/10 backdrop-blur-xl shadow-2xl overflow-x-auto no-scrollbar">
    <a href="#hero" class="px-3 py-1.5 rounded-full text-xs font-bold text-neutral-300 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"><i class="fa-solid fa-house"></i><span>হোম</span></a>
    <a href="#about" class="px-3 py-1.5 rounded-full text-xs font-bold text-neutral-300 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"><i class="fa-solid fa-user"></i><span>সম্পর্কে</span></a>
    <a href="#skills" class="px-3 py-1.5 rounded-full text-xs font-bold text-neutral-300 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"><i class="fa-solid fa-code"></i><span>দক্ষতা</span></a>
    <a href="#portfolio" class="px-3 py-1.5 rounded-full text-xs font-bold text-neutral-300 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"><i class="fa-solid fa-diagram-project"></i><span>প্রজেক্ট</span></a>
    <a href="#testimonials" class="px-3 py-1.5 rounded-full text-xs font-bold text-neutral-300 hover:text-white hover:bg-white/10 transition flex items-center gap-1.5"><i class="fa-solid fa-comment-dots"></i><span>মতামত</span></a>
    <a href="#contact" class="px-3 py-1.5 rounded-full text-xs font-bold bg-[#3A86FF] text-white rounded-full flex items-center gap-1.5 shadow-lg shadow-[#3A86FF]/30"><i class="fa-solid fa-envelope"></i><span>যোগাযোগ</span></a>
  </nav>
</header>

<!-- Hero Section -->
<section id="hero" class="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative">
  <div class="max-w-4xl mx-auto text-center space-y-6">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-[#3A86FF]">
      <i class="fa-solid fa-circle-check text-emerald-400"></i> ${config.hero.availableForHire ? 'নতুন প্রজেক্টের জন্য উন্মুক্ত' : 'ব্যস্ত'}
    </div>
    <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">${config.hero.name}</h1>
    <p class="text-xl sm:text-2xl font-bold text-[#3A86FF]">${config.hero.role}</p>
    <p class="text-neutral-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">${config.hero.bio}</p>
    <div class="flex flex-wrap justify-center gap-4 pt-4">
      <a href="#contact" class="px-6 py-3 rounded-xl bg-[#3A86FF] hover:bg-[#2b75ed] text-white font-bold text-sm shadow-xl shadow-[#3A86FF]/20 flex items-center gap-2">
        <i class="fa-solid fa-paper-plane"></i> প্রজেক্ট অর্ডার করুন
      </a>
      <a href="#portfolio" class="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 font-bold text-sm flex items-center gap-2">
        <i class="fa-solid fa-eye"></i> প্রজেক্ট দেখুন
      </a>
    </div>
  </div>
</section>

<!-- Embedded Portfolio Data JSON -->
<script id="portfolio-data" type="application/json">
${JSON.stringify(config, null, 2)}
</script>

</body>
</html>`;
  };

  const copyBloggerCode = () => {
    navigator.clipboard.writeText(generateBloggerCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#3A86FF]" />
              <h3 className="text-xl font-bold text-white">ডাটা ম্যানেজার ও ব্লগার এক্সপোর্টার</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sub Navigation */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                activeTab === 'editor'
                  ? 'bg-[#3A86FF] text-white'
                  : 'bg-neutral-950 text-neutral-400 border border-neutral-800'
              }`}
            >
              লাইভ ডাটা এডিটর (JSON)
            </button>
            <button
              onClick={() => setActiveTab('blogger')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                activeTab === 'blogger'
                  ? 'bg-[#3A86FF] text-white'
                  : 'bg-neutral-950 text-neutral-400 border border-neutral-800'
              }`}
            >
              Blogger HTML এক্সপোর্টার
            </button>
          </div>

          {error && (
            <div className="p-3 mb-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
              {error}
            </div>
          )}

          {activeTab === 'editor' ? (
            <div className="flex-grow flex flex-col min-h-0">
              <p className="text-xs text-neutral-400 mb-2">
                নিচের JSON ডাটা পরিবর্তন করে সেভ বাটনে ক্লিক করলে পুরো ওয়েবসাইটের তথ্য সরাসরি আপডেট হয়ে যাবে।
              </p>
              <textarea
                value={jsonText}
                onChange={(e) => setJsonText(e.target.value)}
                className="w-full flex-grow p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-emerald-400 font-mono text-xs focus:outline-none focus:border-[#3A86FF] resize-none overflow-y-auto"
                style={{ minHeight: '300px' }}
              />
              <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-neutral-800">
                <button
                  onClick={() => setJsonText(JSON.stringify(config, null, 2))}
                  className="px-4 py-2.5 rounded-xl bg-neutral-800 text-neutral-300 text-xs font-semibold flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>রিসেট</span>
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2.5 rounded-xl bg-[#3A86FF] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-[#3A86FF]/20"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>পরিবর্তন সেভ করুন</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-grow flex flex-col min-h-0">
              <p className="text-xs text-neutral-400 mb-2">
                ব্লগার থিম কাস্টমাইজেশনে ব্যবহারের জন্য তৈরি সিঙ্গেল ফাইল কোড:
              </p>
              <textarea
                readOnly
                value={generateBloggerCode()}
                className="w-full flex-grow p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-sky-300 font-mono text-xs resize-none overflow-y-auto"
                style={{ minHeight: '300px' }}
              />
              <div className="mt-6 flex justify-end gap-3 pt-4 border-t border-neutral-800">
                <button
                  onClick={copyBloggerCode}
                  className="px-6 py-2.5 rounded-xl bg-[#3A86FF] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-[#3A86FF]/20"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'কোড কপি হয়েছে!' : 'ব্লগার কোড কপি করুন'}</span>
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
