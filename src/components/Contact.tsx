import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, CheckCircle2, AlertCircle, Loader2, MessageSquare, Layers, Sparkles } from 'lucide-react';
import { ContactConfig, SocialLinks } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface ContactProps {
  config: ContactConfig;
  socials: SocialLinks;
}

interface ProjectOption {
  id: string;
  labelEn: string;
  labelBn: string;
}

interface CategoryOption {
  id: string;
  labelEn: string;
  labelBn: string;
  icon: string;
  projects: ProjectOption[];
}

const CATEGORIES: CategoryOption[] = [
  {
    id: 'graphic_design',
    labelEn: '🎨 Graphic Design',
    labelBn: '🎨 গ্রাফিক্স ডিজাইন',
    icon: '🎨',
    projects: [
      { id: 'poster', labelEn: 'Poster Design', labelBn: 'পোস্টার ডিজাইন' },
      { id: 'social_media', labelEn: 'Social Media Design', labelBn: 'সোশ্যাল মিডিয়া ডিজাইন' },
      { id: 'yt_thumbnail', labelEn: 'YouTube Thumbnail Design', labelBn: 'ইউটিউব থাম্বনেল ডিজাইন' },
      { id: 'education', labelEn: 'Education Graphics', labelBn: 'এডুকেশন গ্রাফিক্স' },
      { id: 'branding', labelEn: 'Branding & Visual Identity', labelBn: 'ব্র্যান্ডিং ও ভিজ্যুয়াল আইডেন্টিটি' },
    ]
  },
  {
    id: 'ui_ux_design',
    labelEn: '🎯 UI/UX Design',
    labelBn: '🎯 ইউআই/ইউএক্স ডিজাইন',
    icon: '🎯',
    projects: [
      { id: 'website_ui', labelEn: 'Website UI', labelBn: 'ওয়েবসাইট UI' },
      { id: 'mobile_app_ui', labelEn: 'Mobile App UI', labelBn: 'মোবাইল অ্যাপ UI' },
      { id: 'dashboard_ui', labelEn: 'Dashboard Design', labelBn: 'ড্যাশবোর্ড ডিজাইন' },
      { id: 'landing_page_ui', labelEn: 'Landing Page Design', labelBn: 'ল্যান্ডিং পেজ ডিজাইন' },
    ]
  },
  {
    id: 'web_development',
    labelEn: '💻 Web Development',
    labelBn: '💻 ওয়েব ডেভেলপমেন্ট',
    icon: '💻',
    projects: [
      { id: 'portfolio_web', labelEn: 'Portfolio Website', labelBn: 'পোর্টফোলিও ওয়েবসাইট' },
      { id: 'business_web', labelEn: 'Business Website', labelBn: 'বিজনেস ওয়েবসাইট' },
      { id: 'landing_page_web', labelEn: 'Landing Page', labelBn: 'ল্যান্ডিং পেজ' },
      { id: 'react_web_app', labelEn: 'React Web App', labelBn: 'রিয়েক্ট ওয়েব অ্যাপ' },
      { id: 'frontend_dev', labelEn: 'Frontend Development', labelBn: 'ফ্রন্টএন্ড ডেভেলপমেন্ট' },
    ]
  }
];

export const Contact: React.FC<ContactProps> = ({ config, socials }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const isBangla = language === 'bn';

  const [selectedCategory, setSelectedCategory] = useState<string>('graphic_design');
  const [selectedProject, setSelectedProject] = useState<string>('Poster Design');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  // Get current active category object
  const currentCategoryObj = CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    const cat = CATEGORIES.find(c => c.id === catId);
    if (cat && cat.projects.length > 0) {
      setSelectedProject(isBangla ? cat.projects[0].labelBn : cat.projects[0].labelEn);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !selectedCategory || !selectedProject || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: isBangla
          ? 'অনুগ্রহ করে নাম, ফোন নম্বর, ক্যাটাগরি, প্রজেক্টের ধরণ এবং মেসেজ ঘরগুলো পূরণ করুন।'
          : 'Please fill in your name, phone number, category, project choice, and message.'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    const categoryLabel = isBangla ? currentCategoryObj.labelBn : currentCategoryObj.labelEn;
    const fullServiceText = `${categoryLabel} ➔ ${selectedProject}`;

    try {
      // Send Telegram notification
      const botToken = config.telegramBotToken || "8833148612:AAHihj3OkapzuM0RemcOv29ahsUEhnRIhuc";
      const chatId = config.telegramChatId || "8634088852";

      if (botToken && chatId) {
        const escapeHtml = (str: string) =>
          String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        const htmlText = `<b>📬 New Portfolio Contact Message (Masum 9T9)</b>\n\n` +
          `<b>👤 Name:</b> ${escapeHtml(formData.name)}\n` +
          `<b>📞 Phone:</b> ${escapeHtml(formData.phone)}\n` +
          `<b>✉️ Email:</b> ${escapeHtml(formData.email || 'N/A')}\n` +
          `<b>📁 Category:</b> ${escapeHtml(categoryLabel)}\n` +
          `<b>🎯 Project Type:</b> ${escapeHtml(selectedProject)}\n` +
          `<b>💬 Message:</b> "${escapeHtml(formData.message)}"`;

        try {
          const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text: htmlText,
              parse_mode: 'HTML'
            })
          });
          const resData = await res.json();
          if (!resData.ok) {
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: chatId,
                text: `New Portfolio Message\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCategory: ${categoryLabel}\nProject: ${selectedProject}\nMessage: ${formData.message}`
              })
            });
          }
        } catch (tErr) {
          console.error('Contact Telegram notify error:', tErr);
        }
      }

      // Send Google Sheet Webhook if configured
      if (config.googleSheetScriptUrl) {
        try {
          const sheetParams = new URLSearchParams({
            name: formData.name,
            Name: formData.name,
            phone: formData.phone,
            Phone: formData.phone,
            email: formData.email,
            Email: formData.email,
            category: categoryLabel,
            Category: categoryLabel,
            projectType: selectedProject,
            ProjectType: selectedProject,
            service: fullServiceText,
            Service: fullServiceText,
            message: formData.message,
            Message: formData.message,
            date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
            Date: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
            Data: new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
          });

          await fetch(config.googleSheetScriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: sheetParams
          });
        } catch (e) {
          console.error("Google Sheet submit error:", e);
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus({
        type: 'success',
        message: isBangla
          ? 'ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে। আমি খুব দ্রুত আপনার সাথে যোগাযোগ করবো।'
          : 'Thank you! Your message has been sent successfully. I will get back to you shortly.'
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
      setSelectedCategory('graphic_design');
      setSelectedProject(isBangla ? 'পোস্টার ডিজাইন' : 'Poster Design');
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'success',
        message: isBangla
          ? 'মেসেজটি রেকর্ড করা হয়েছে! শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।'
          : 'Your message has been received! I will contact you shortly.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090E1A] bg-mesh-pattern border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-xs text-sky-400 font-bold mb-4 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <Mail className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            <span className="text-gradient-cyan">{t.contact.title}</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details (Left Column - 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center border border-sky-400/30 shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-neutral-300 font-semibold">{t.contact.directCall}</p>
                <a href={`tel:${config.phone}`} className="text-lg font-extrabold text-white hover:text-sky-300 transition-colors">
                  {config.phone}
                </a>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center border border-sky-400/30 shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-neutral-300 font-semibold">{t.contact.officialEmail}</p>
                <a href={`mailto:${config.emailPrimary}`} className="text-sm sm:text-base font-extrabold text-white hover:text-sky-300 transition-colors block truncate">
                  {config.emailPrimary}
                </a>
                <p className="text-xs text-neutral-300 mt-0.5">{config.emailSecondary}</p>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center border border-sky-400/30 shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-neutral-300 font-semibold">Telegram</p>
                <a href={socials.telegram} target="_blank" rel="noopener noreferrer" className="text-base font-extrabold text-white hover:text-sky-300 transition-colors">
                  {config.telegramUsername}
                </a>
              </div>
            </div>

            <div className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex items-center gap-4 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center border border-sky-400/30 shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-neutral-300 font-semibold">{t.contact.locationLabel}</p>
                <p className="text-base font-extrabold text-white">{config.location}</p>
              </div>
            </div>

          </div>

          {/* Glass Form (Right Column - 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2.5">
                <MessageSquare className="w-6 h-6 text-sky-400" />
                <span>{t.contact.sendMessageHeading}</span>
              </h3>

              {status.type && (
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm mb-6 flex items-start gap-3 backdrop-blur-md ${
                    status.type === 'success'
                      ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-400 mt-0.5" />
                  )}
                  <span className="font-medium">{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Category Selection */}
                <div>
                  <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-sky-400">
                      <Layers className="w-4 h-4" />
                      {isBangla ? '১. সার্ভিস ক্যাটাগরি বেছে নিন' : '1. Select Service Category'} <span className="text-rose-400">*</span>
                    </span>
                    <span className="text-[10px] text-neutral-400 font-normal">
                      {isBangla ? '(১টি সিলেক্ট করুন)' : '(Choose 1)'}
                    </span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {CATEGORIES.map((cat) => {
                      const isSelected = selectedCategory === cat.id;
                      const label = isBangla ? cat.labelBn : cat.labelEn;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleCategoryChange(cat.id)}
                          className={`p-3.5 rounded-2xl text-xs font-extrabold text-left transition-all duration-300 flex items-center justify-between border ${
                            isSelected
                              ? 'bg-gradient-to-r from-sky-500/20 to-blue-600/20 border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.25)] ring-1 ring-sky-400'
                              : 'bg-neutral-950/60 border-white/10 text-neutral-300 hover:border-white/30 hover:bg-neutral-900/80'
                          }`}
                        >
                          <span className="truncate">{label}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Project Selection */}
                <div>
                  <label className="block text-xs font-bold text-neutral-200 mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-sky-400">
                      <Sparkles className="w-4 h-4" />
                      {isBangla ? '২. প্রজেক্টের টাইপ বেছে নিন' : '2. Select Project Type'} <span className="text-rose-400">*</span>
                    </span>
                    <span className="text-[10px] text-neutral-400 font-normal">
                      {isBangla ? '(১টি সিলেক্ট করুন)' : '(Choose 1)'}
                    </span>
                  </label>

                  {/* Interactive Pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {currentCategoryObj.projects.map((proj) => {
                      const projName = isBangla ? proj.labelBn : proj.labelEn;
                      const isSelected = selectedProject === projName || selectedProject === proj.labelEn || selectedProject === proj.labelBn;
                      return (
                        <button
                          key={proj.id}
                          type="button"
                          onClick={() => setSelectedProject(projName)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 border ${
                            isSelected
                              ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/30 scale-105'
                              : 'bg-neutral-900/90 text-neutral-300 border-white/10 hover:border-sky-400/50 hover:text-white'
                          }`}
                        >
                          <span>{projName}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      {t.contact.nameLabel} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isBangla ? 'যেমন: তানভীর হাসান' : 'e.g. Tanvir Hasan'}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      {t.contact.phoneLabel} <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={isBangla ? 'যেমন: 01700-000000' : 'e.g. +8801700-000000'}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-neutral-200 mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-neutral-200 mb-2">
                    {t.contact.messageLabel} <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isBangla ? 'আপনার প্রজেক্টের উদ্দেশ্য, প্রয়োজনীয় ফিচার, পছন্দের ডিজাইন, রেফারেন্স লিংক এবং অন্যান্য গুরুত্বপূর্ণ তথ্য লিখুন...' : 'Describe your project, goals, required features, preferred design style, reference links, and any additional details...'}
                    className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-extrabold text-sm shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 active:scale-95"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{isBangla ? 'মেসেজ পাঠানো হচ্ছে...' : 'Sending message...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
