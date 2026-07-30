import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy, ExternalLink, Sparkles, UserCheck, Mail, Phone, MessageSquare } from 'lucide-react';
import { SocialLinks, ContactConfig } from '../types';
import { copyToClipboard } from '../utils/clipboard';

interface CreatorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  creatorName?: string;
  creatorRole?: string;
  socials?: Partial<SocialLinks>;
  contact?: Partial<ContactConfig>;
  profileImage?: string;
}

export const CreatorProfileModal: React.FC<CreatorProfileModalProps> = ({
  isOpen,
  onClose,
  creatorName = "Masum 9T9",
  creatorRole = "Graphics Designer & Full-Stack Developer",
  socials = {},
  contact = {},
  profileImage = "https://i.postimg.cc/gJT7B3XX/Profile-pic.png",
}) => {
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyProfileLink = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const success = await copyToClipboard(url);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const safeSocials: Partial<SocialLinks> = socials || {};
  const safeContact: Partial<ContactConfig> = contact || {};

  const channelList = [
    {
      id: 'github',
      name: 'GitHub',
      handle: '@masum-9t9',
      url: safeSocials.github || 'https://github.com/masum-9t9/',
      iconClass: 'fa-brands fa-github text-white',
      bgHover: 'hover:bg-neutral-800 hover:border-neutral-600',
      badgeColor: 'bg-neutral-800 text-neutral-200',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'masum.9t9.official',
      url: safeSocials.facebook || 'https://facebook.com/masum.9t9.official',
      iconClass: 'fa-brands fa-facebook text-blue-400',
      bgHover: 'hover:bg-blue-950/60 hover:border-blue-500/50',
      badgeColor: 'bg-blue-950/80 text-blue-300',
    },
    {
      id: 'fiverr',
      name: 'Fiverr',
      handle: 'masum9t9',
      url: safeSocials.fiverr || 'https://www.fiverr.com/sellers/masum9t9/',
      iconClass: 'fa-solid fa-briefcase text-emerald-400',
      bgHover: 'hover:bg-emerald-950/60 hover:border-emerald-500/50',
      badgeColor: 'bg-emerald-950/80 text-emerald-300',
    },
    {
      id: 'behance',
      name: 'Behance',
      handle: 'masum_9t9_official',
      url: safeSocials.behance || 'https://www.behance.net/masum_9t9_official',
      iconClass: 'fa-brands fa-behance text-sky-400',
      bgHover: 'hover:bg-sky-950/60 hover:border-sky-500/50',
      badgeColor: 'bg-sky-950/80 text-sky-300',
    },
    {
      id: 'youtube',
      name: 'YouTube',
      handle: '@ParahinAcademy',
      url: safeSocials.youtube || 'https://youtube.com/@ParahinAcademy',
      iconClass: 'fa-brands fa-youtube text-red-500',
      bgHover: 'hover:bg-red-950/60 hover:border-red-500/50',
      badgeColor: 'bg-red-950/80 text-red-300',
    },
    {
      id: 'gmail',
      name: 'Gmail / Email',
      handle: safeSocials.email || 'masum.9t9.gd@gmail.com',
      url: `mailto:${safeSocials.email || 'masum.9t9.gd@gmail.com'}`,
      iconClass: 'fa-solid fa-envelope text-amber-400',
      bgHover: 'hover:bg-amber-950/60 hover:border-amber-500/50',
      badgeColor: 'bg-amber-950/80 text-amber-300',
    },
    {
      id: 'phone',
      name: 'Phone / WhatsApp',
      handle: safeSocials.phone || safeContact.phone || '01303-623838',
      url: safeSocials.whatsapp || `https://wa.me/8801303623838`,
      iconClass: 'fa-brands fa-whatsapp text-emerald-400',
      bgHover: 'hover:bg-emerald-950/60 hover:border-emerald-500/50',
      badgeColor: 'bg-emerald-950/80 text-emerald-300',
    },
    {
      id: 'telegram',
      name: 'Telegram',
      handle: safeContact.telegramUsername || '@masum_9t9_official',
      url: safeSocials.telegram || 'https://t.me/masum_9t9_official',
      iconClass: 'fa-brands fa-telegram text-sky-400',
      bgHover: 'hover:bg-sky-950/60 hover:border-sky-500/50',
      badgeColor: 'bg-sky-950/80 text-sky-300',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] overflow-y-auto overflow-x-hidden p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        {/* Solid Dark Backdrop Overlay as requested by user */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl"
        />

        {/* Creator Card Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative w-full max-w-2xl bg-[#090C15] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.95)] z-10 overflow-hidden text-white"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all shadow-md z-20"
            title="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Profile Section */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-white/10 relative z-10">
            {/* Avatar */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
              <img
                src={profileImage}
                alt={creatorName}
                referrerPolicy="no-referrer"
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-white/20 shadow-2xl bg-neutral-900"
              />
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center text-white text-[10px] shadow-lg">
                <UserCheck className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Creator Info */}
            <div className="text-center sm:text-left space-y-1.5 flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-black">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
                <span>অফিসিয়াল ক্রিয়েটর প্রোফাইল</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {creatorName}
              </h3>

              <p className="text-sm font-semibold text-neutral-300">
                {creatorRole}
              </p>

              <p className="text-xs text-neutral-400 max-w-md pt-1">
                নিচের যে কোনো সোশ্যাল চ্যানেল, মার্কেটপ্লেস বা ডাইরেক্ট ইমেইল/হোয়াটসঅ্যাপে যোগাযোগ করুন।
              </p>
            </div>
          </div>

          {/* Channels Grid */}
          <div className="py-6 space-y-3 relative z-10">
            <h4 className="text-xs font-black uppercase tracking-wider text-neutral-400 flex items-center justify-between">
              <span>সংযোগ মাধ্যম (SOCIALS & CONTACTS)</span>
              <span className="text-[10px] text-sky-400 font-mono">8 Channels</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {channelList.map((ch) => (
                <a
                  key={ch.id}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3.5 rounded-2xl bg-neutral-950/80 border border-white/10 ${ch.bgHover} transition-all duration-200 flex items-center justify-between group shadow-md`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-base shrink-0 group-hover:scale-110 transition-transform">
                      <i className={ch.iconClass} />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-xs font-black text-white tracking-wide">
                        {ch.name}
                      </p>
                      <p className="text-[11px] font-mono text-neutral-400 group-hover:text-neutral-200 truncate max-w-[140px] sm:max-w-[150px]">
                        {ch.handle}
                      </p>
                    </div>
                  </div>

                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
            <button
              onClick={handleCopyProfileLink}
              className={`px-4 py-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                isCopied
                  ? 'bg-emerald-950 border-emerald-500 text-emerald-400'
                  : 'bg-neutral-900 hover:bg-neutral-800 border-white/10 text-neutral-200'
              }`}
            >
              {isCopied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 animate-bounce" />
                  <span>প্রোফাইল লিংক কপি হয়েছে!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-sky-400" />
                  <span>প্রোফাইল লিংক কপি করুন</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-black shadow-lg shadow-sky-500/25 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>বার্তা পাঠান</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
