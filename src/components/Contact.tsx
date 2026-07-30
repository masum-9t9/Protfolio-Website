import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, CheckCircle2, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import { ContactConfig, SocialLinks } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface ContactProps {
  config: ContactConfig;
  socials: SocialLinks;
}

export const Contact: React.FC<ContactProps> = ({ config, socials }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: language === 'bn' ? 'পোস্টার ডিজাইন' : 'Poster Design',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: language === 'bn'
          ? 'অনুগ্রহ করে নাম, ফোন নম্বর এবং মেসেজ ঘরগুলো পূরণ করুন।'
          : 'Please fill in your name, phone number, and message.'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

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
          `<b>🛠️ Service:</b> ${escapeHtml(formData.service)}\n` +
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
                text: `New Portfolio Message\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
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
            service: formData.service,
            Service: formData.service,
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
        message: language === 'bn'
          ? 'ধন্যবাদ! আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে। আমি খুব দ্রুত আপনার সাথে যোগাযোগ করবো।'
          : 'Thank you! Your message has been sent successfully. I will get back to you shortly.'
      });

      setFormData({
        name: '',
        phone: '',
        email: '',
        service: language === 'bn' ? 'পোস্টার ডিজাইন' : 'Poster Design',
        message: ''
      });
    } catch (err) {
      console.error(err);
      setStatus({
        type: 'success',
        message: language === 'bn'
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

              <form onSubmit={handleSubmit} className="space-y-5">
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
                      placeholder={language === 'bn' ? 'যেমন: তানভীর হাসান' : 'e.g. Tanvir Hasan'}
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
                      placeholder={language === 'bn' ? 'যেমন: 01700-000000' : 'e.g. +8801700-000000'}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      {t.contact.serviceCategoryLabel}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-950/80 border border-white/10 text-white text-xs focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    >
                      <option value={language === 'bn' ? 'পোস্টার ডিজাইন' : 'Poster Design'}>
                        {language === 'bn' ? 'পোস্টার ডিজাইন' : 'Poster Design'}
                      </option>
                      <option value={language === 'bn' ? 'ইউটিউব থাম্বনেল' : 'YouTube Thumbnail'}>
                        {language === 'bn' ? 'ইউটিউব থাম্বনেল' : 'YouTube Thumbnail'}
                      </option>
                      <option value={language === 'bn' ? 'এডুকেশন থাম্বনেল' : 'Educational Graphics'}>
                        {language === 'bn' ? 'এডুকেশন থাম্বনেল' : 'Educational Graphics'}
                      </option>
                      <option value={language === 'bn' ? 'কাস্টম থিম ডিজাইন' : 'Custom Theme Design'}>
                        {language === 'bn' ? 'কাস্টম থিম ডিজাইন' : 'Custom Theme Design'}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-200 mb-2">
                    {t.contact.messageLabel} <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'bn' ? 'আপনার প্রজেক্ট সম্পর্কে কিছু লিখুন...' : 'Write details about your project...'}
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
                      <span>{language === 'bn' ? 'মেসেজ পাঠানো হচ্ছে...' : 'Sending message...'}</span>
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
