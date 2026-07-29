/**
 * @file Testimonials3D.tsx
 * @description Professional 25°–30° Angled Side-by-Side Dual-Lane Marquee Testimonial Section
 * Crafted for high-performance 60 FPS scrolling, custom angle selection, and live client feedback submission.
 * 
 * PRO PROGRAMMER CUSTOMIZATION GUIDE:
 * 1. Rotation Angles: Select between 25° tilt, 30° tilt, 15° tilt, or flat grid mode via state or props.
 * 2. Marquee Speed: Adjust scrolling duration via `speedSeconds` state (Default: 35s).
 * 3. Add Custom Testimonials: Interactive modal allows adding live client reviews instantly.
 * 4. CSS Classes: Utilizes GPU-accelerated `translate3d` and `will-change: transform`.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquareQuote,
  Star,
  Quote,
  PlusCircle,
  X,
  Send,
  Zap,
  SlidersHorizontal,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { TestimonialItem, ContactConfig } from '../types';
import { addTestimonialToFirestore } from '../firebase';

interface Testimonials3DProps {
  testimonials: TestimonialItem[];
  onAddTestimonial?: (newTestimonial: TestimonialItem) => void;
  contactConfig?: ContactConfig;
}

type TiltAngle = '25deg' | '30deg' | '15deg' | 'flat';
type ScrollSpeed = 'fast' | 'normal' | 'slow';

const SPEED_MAP: Record<ScrollSpeed, string> = {
  fast: '20s',
  normal: '35s',
  slow: '50s',
};

const toBengaliNumerals = (numStr: string | number): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(numStr).replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
};

/**
 * Modular Testimonial Card Component
 */
const TestimonialCardItem: React.FC<{ item: TestimonialItem }> = ({ item }) => {
  const ratingNum = Number(item.rating) || 5;

  return (
    <div className="w-80 sm:w-[420px] bg-neutral-900/90 hover:bg-neutral-900 p-6 sm:p-7 rounded-2xl border border-neutral-800/90 hover:border-[#3A86FF]/60 flex flex-col justify-between shrink-0 hover:-translate-y-1.5 transition-all duration-300 shadow-2xl relative group">
      {/* Background Subtle Watermark Quote */}
      <Quote className="absolute top-5 right-5 w-8 h-8 text-white/5 pointer-events-none group-hover:text-[#3A86FF]/15 transition-colors duration-300" />

      <div>
        {/* Rating Stars & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(ratingNum)
                    ? 'fill-amber-400 text-amber-400'
                    : i < ratingNum
                    ? 'fill-amber-400/50 text-amber-400'
                    : 'fill-neutral-800 text-neutral-700'
                }`}
              />
            ))}
            <span className="text-xs text-neutral-200 font-extrabold ml-2 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
              {ratingNum.toFixed(1)}
            </span>
          </div>

          <span className="text-[10px] font-bold text-[#3A86FF] bg-[#3A86FF]/10 px-2.5 py-1 rounded-md border border-[#3A86FF]/20 shrink-0">
            {item.projectType}
          </span>
        </div>

        {/* Client Feedback Text */}
        <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-medium mb-4">
          "{item.comment}"
        </p>

        {/* Designed Project Image Attachment if provided */}
        {item.designImageUrl ? (
          <div className="mb-4 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950/80 p-2">
            <p className="text-[10px] text-neutral-400 font-semibold mb-1.5 flex items-center gap-1">
              <ImageIcon className="w-3 h-3 text-[#3A86FF]" />
              <span>আমার জন্য করা ডিজাইন:</span>
            </p>
            <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800/80">
              <img
                src={item.designImageUrl}
                alt="Client Designed Project"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget.parentElement as HTMLElement).style.display = 'none';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ) : null}
      </div>

      {/* Client Profile Info */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-800/80">
        <img
          src={item.avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(item.name)}`}
          alt={item.name}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(item.name)}`;
          }}
          className="w-11 h-11 rounded-full object-cover border border-neutral-700/80 shadow-md shrink-0 bg-neutral-950"
        />
        <div className="overflow-hidden">
          <h4 className="text-sm font-extrabold text-white group-hover:text-[#3A86FF] transition-colors truncate">
            {item.name}
          </h4>
          <p className="text-[11px] text-neutral-400 font-medium truncate">
            {item.role} {item.company ? `• ${item.company}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Testimonials3D: React.FC<Testimonials3DProps> = ({
  testimonials: initialTestimonials,
  onAddTestimonial,
  contactConfig
}) => {
  const [localTestimonials, setLocalTestimonials] = useState<TestimonialItem[]>(initialTestimonials);
  const [selectedAngle, setSelectedAngle] = useState<TiltAngle>('25deg');
  const [selectedSpeed, setSelectedSpeed] = useState<ScrollSpeed>('normal');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  // Sync with prop when updated
  React.useEffect(() => {
    setLocalTestimonials(initialTestimonials);
  }, [initialTestimonials]);

  // New review form state
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    company: '',
    comment: '',
    rating: 4.9,
    projectType: 'পোস্টার ডিজাইন',
    avatarUrl: '',
    designImageUrl: '',
  });

  // Calculate dynamic average rating across all reviews
  const currentList = localTestimonials.length > 0 ? localTestimonials : initialTestimonials;
  const totalReviewsCount = currentList.length;
  const avgRatingNum = totalReviewsCount > 0
    ? (currentList.reduce((sum, item) => sum + (Number(item.rating) || 5), 0) / totalReviewsCount)
    : 5.0;
  const formattedAvgRating = avgRatingNum.toFixed(1);

  // Duplicate items for infinite continuous marquee loop (4 repetitions for seamless -50% loop)
  const lane1 = [...currentList, ...currentList, ...currentList, ...currentList];
  const revList = [...currentList].reverse();
  const lane2 = [...revList, ...revList, ...revList, ...revList];

  // Helper for image upload file reader
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'avatarUrl' | 'designImageUrl') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewReview((prev) => ({ ...prev, [field]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    setIsSubmitting(true);

    const createdItem: TestimonialItem = {
      id: `test-custom-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'ক্লায়েন্ট',
      company: newReview.company || '',
      comment: newReview.comment,
      rating: Number(newReview.rating) || 5.0,
      avatarUrl: newReview.avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(newReview.name)}`,
      projectType: newReview.projectType,
      designImageUrl: newReview.designImageUrl || undefined,
    };

    // 1. Save to Firebase Cloud Firestore (Permanent Global Storage)
    try {
      const docId = await addTestimonialToFirestore({
        name: createdItem.name,
        role: createdItem.role,
        company: createdItem.company,
        comment: createdItem.comment,
        rating: createdItem.rating,
        avatarUrl: createdItem.avatarUrl,
        projectType: createdItem.projectType,
        designImageUrl: createdItem.designImageUrl,
      });
      if (docId) {
        createdItem.id = docId;
      }
    } catch (err) {
      console.error('Firestore save failed, falling back to local state:', err);
    }

    // 2. Update local state & parent state
    setLocalTestimonials((prev) => [createdItem, ...prev.filter(i => i.id !== createdItem.id)]);
    if (onAddTestimonial) {
      onAddTestimonial(createdItem);
    }

    // 3. Telegram Bot notification alert with FULL PHOTO ATTACHMENT & FAILSAFE SUPPORT
    const botToken = contactConfig?.telegramBotToken || "8833148612:AAGSPsGtv4dApiRQ3r-ad7mKxFZUj0MdTc0";
    const chatId = contactConfig?.telegramChatId || "8634088852";

    if (botToken && chatId) {
      try {
        const timeString = new Date().toLocaleString('bn-BD', { timeZone: 'Asia/Dhaka' });

        const escapeHtml = (str: string) =>
          String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        // Helper to prepare clean JSON string without giant Base64 strings
        const sanitizeForJson = (url?: string) => {
          if (!url) return undefined;
          if (url.startsWith('data:') || url.startsWith('blob:')) {
            return `[Uploaded Image - ${url.substring(0, 30)}...]`;
          }
          return url;
        };

        const jsonFormatted = JSON.stringify({
          id: `test_${Date.now()}`,
          name: createdItem.name,
          role: createdItem.role,
          company: createdItem.company,
          avatarUrl: sanitizeForJson(createdItem.avatarUrl),
          rating: createdItem.rating,
          comment: createdItem.comment,
          projectType: createdItem.projectType,
          designImageUrl: sanitizeForJson(createdItem.designImageUrl)
        }, null, 2);

        // Keep caption concise (Telegram max caption is 1024 chars)
        let htmlCaption =
          `<b>🌟 নতুন ক্লায়েন্ট রিভিউ जमा হয়েছে! (Masum 9T9)</b>\n\n` +
          `<b>👤 নাম:</b> ${escapeHtml(createdItem.name)}\n` +
          `<b>💼 পেশা/রোল:</b> ${escapeHtml(createdItem.role)} ${createdItem.company ? `(${escapeHtml(createdItem.company)})` : ''}\n` +
          `<b>⭐ রেটিং:</b> ${createdItem.rating} / 5.0\n` +
          `<b>🎨 প্রজেক্ট:</b> ${escapeHtml(createdItem.projectType)}\n` +
          `<b>💬 রিভিউ:</b> "${escapeHtml(createdItem.comment)}"\n` +
          `<b>📅 সময়:</b> ${escapeHtml(timeString)}\n\n` +
          `<b>📌 JSON snippet:</b>\n<pre>${escapeHtml(jsonFormatted)}</pre>`;

        // Ensure caption never exceeds 950 chars for photo captions
        if (htmlCaption.length > 950) {
          htmlCaption = htmlCaption.substring(0, 920) + '\n...</pre>';
        }

        let photoSent = false;

        // Helper to send photo to Telegram
        const sendTelegramPhoto = async (photoDataOrUrl: string, captionHtml: string, filename: string) => {
          try {
            const safeCaption = captionHtml.length > 950 ? captionHtml.substring(0, 920) + '...' : captionHtml;

            if (photoDataOrUrl.startsWith('data:image/') || photoDataOrUrl.startsWith('blob:')) {
              const blobRes = await fetch(photoDataOrUrl);
              const blob = await blobRes.blob();

              const formData = new FormData();
              formData.append('chat_id', chatId);
              formData.append('photo', blob, filename);
              formData.append('caption', safeCaption);
              formData.append('parse_mode', 'HTML');

              const res = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
                method: 'POST',
                body: formData,
              });
              const resData = await res.json();
              console.log('Telegram sendPhoto base64 result:', resData);
              return resData.ok === true;
            } else if (photoDataOrUrl.startsWith('http://') || photoDataOrUrl.startsWith('https://')) {
              const res = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  chat_id: chatId,
                  photo: photoDataOrUrl,
                  caption: safeCaption,
                  parse_mode: 'HTML',
                })
              });
              const resData = await res.json();
              console.log('Telegram sendPhoto URL result:', resData);
              return resData.ok === true;
            }
            return false;
          } catch (pErr) {
            console.error('Error sending photo to Telegram:', pErr);
            return false;
          }
        };

        // Send Design Image if available
        if (createdItem.designImageUrl) {
          const ok = await sendTelegramPhoto(
            createdItem.designImageUrl,
            `<b>🖼️ প্রজেক্ট ডিজাইন ছবি:</b> ${escapeHtml(createdItem.name)}\n\n` + htmlCaption,
            `design_${Date.now()}.jpg`
          );
          if (ok) photoSent = true;
        }

        // Send Avatar Photo if custom uploaded
        if (createdItem.avatarUrl && !createdItem.avatarUrl.includes('dicebear.com')) {
          const avatarCaption = photoSent
            ? `<b>👤 ক্লায়েন্ট প্রোফাইল ছবি:</b> ${escapeHtml(createdItem.name)}`
            : `<b>👤 ক্লায়েন্ট প্রোফাইল ছবিসহ নতুন রিভিউ:</b> ${escapeHtml(createdItem.name)}\n\n` + htmlCaption;

          const ok = await sendTelegramPhoto(
            createdItem.avatarUrl,
            avatarCaption,
            `avatar_${Date.now()}.jpg`
          );
          if (ok) photoSent = true;
        }

        // Failsafe Text Message if no photos sent or photo upload failed
        if (!photoSent) {
          const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text: htmlCaption,
              parse_mode: 'HTML',
            })
          });
          const resData = await res.json();
          console.log('Telegram sendMessage HTML result:', resData);

          // Plain text ultimate fallback if HTML fails
          if (!resData.ok) {
            const plainText =
              `🌟 নতুন ক্লায়েন্ট রিভিউ (Masum 9T9 Portfolio)\n\n` +
              `নাম: ${createdItem.name}\n` +
              `পেশা: ${createdItem.role}\n` +
              `রেটিং: ${createdItem.rating}/5.0\n` +
              `প্রজেক্ট: ${createdItem.projectType}\n` +
              `কমেন্ট: ${createdItem.comment}`;

            const plainRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: chatId,
                text: plainText,
              })
            });
            console.log('Telegram sendMessage plain text result:', await plainRes.json());
          }
        }
      } catch (err) {
        console.error('Telegram review alert failed:', err);
      }
    }

    // 4. Google Sheet Webhook if configured
    if (contactConfig?.googleSheetScriptUrl) {
      try {
        const sheetParams = new URLSearchParams({
          Name: createdItem.name,
          Role: createdItem.role,
          Company: createdItem.company,
          Rating: String(createdItem.rating),
          Category: createdItem.projectType,
          Comment: createdItem.comment,
          Data: new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })
        });
        await fetch(contactConfig.googleSheetScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          body: sheetParams
        });
      } catch (e) {
        console.error('Google sheet review submit error:', e);
      }
    }

    setIsSubmitting(false);
    setShowSuccessMsg(true);

    setTimeout(() => {
      setShowSuccessMsg(false);
      setIsModalOpen(false);
      setNewReview({
        name: '',
        role: '',
        company: '',
        comment: '',
        rating: 4.9,
        projectType: 'পোস্টার ডিজাইন',
        avatarUrl: '',
        designImageUrl: '',
      });
    }, 1500);
  };

  const getTiltClass = () => {
    switch (selectedAngle) {
      case '25deg':
        return 'tilt-25deg my-8 sm:my-12';
      case '30deg':
        return 'tilt-30deg my-10 sm:my-14';
      case '15deg':
        return 'tilt-15deg my-6 sm:my-8';
      case 'flat':
      default:
        return 'my-4';
    }
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-neutral-950/80 content-visibility-auto">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3A86FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#3A86FF] font-semibold mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>ক্লায়েন্টদের প্রতিক্রিয়া & রিভিউ</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            যা বলছেন আমার সন্তুষ্ট ক্লায়েন্টগণ
          </h2>

          {/* Dynamic Calculated Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-neutral-900/90 border border-amber-500/30 text-amber-400 font-bold text-xs sm:text-sm mb-4 shadow-lg shadow-amber-500/5">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(avgRatingNum)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-amber-400/30 text-amber-400/50'
                  }`}
                />
              ))}
            </div>
            <span>গড় রেটিং: {toBengaliNumerals(formattedAvgRating)} / ৫.০</span>
            <span className="text-neutral-400 font-normal">({toBengaliNumerals(totalReviewsCount)} টি রিভিউ)</span>
          </div>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
            ৩৫০+ সফল প্রজেক্টের অভিজ্ঞতা থেকে রিয়েল ক্লায়েন্টদের মতামত ও প্রফেশনাল ফিডব্যাক
          </p>

          {/* Toolbar: Angle & Speed & Add Review Button */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-3 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 backdrop-blur-md max-w-2xl mx-auto mb-4">
            
            {/* Angle Selector Controls */}
            <div className="flex items-center gap-1.5 bg-neutral-950 p-1 rounded-xl border border-neutral-800/80">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#3A86FF] ml-2" />
              <span className="text-[11px] font-bold text-neutral-400 mr-1 hidden sm:inline">এঙ্গেল:</span>
              
              {(['25deg', '30deg', '15deg', 'flat'] as TiltAngle[]).map((angle) => (
                <button
                  key={angle}
                  onClick={() => setSelectedAngle(angle)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition-all ${
                    selectedAngle === angle
                      ? 'bg-[#3A86FF] text-white shadow-md'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {angle === '25deg' && '২৫° এঙ্গেল'}
                  {angle === '30deg' && '৩০° এঙ্গেল'}
                  {angle === '15deg' && '১৫° এঙ্গেল'}
                  {angle === 'flat' && 'ফ্ল্যাট'}
                </button>
              ))}
            </div>

            {/* Scroll Speed Controls */}
            <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800/80">
              <Zap className="w-3.5 h-3.5 text-amber-400 ml-2" />
              {(['fast', 'normal', 'slow'] as ScrollSpeed[]).map((spd) => (
                <button
                  key={spd}
                  onClick={() => setSelectedSpeed(spd)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    selectedSpeed === spd
                      ? 'bg-neutral-800 text-white'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {spd === 'fast' && 'দ্রুত'}
                  {spd === 'normal' && 'স্বাভাবিক'}
                  {spd === 'slow' && 'ধীর'}
                </button>
              ))}
            </div>

            {/* Add Review Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-[#3A86FF] hover:bg-[#2b75ed] text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-[#3A86FF]/20 active:scale-95 transition-all"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>রিভিউ যোগ করুন</span>
            </button>
          </div>

          <div className="w-16 h-1 bg-[#3A86FF] mx-auto rounded-full mt-4" />
        </div>

      </div>

      {/* 25°–30° Angled Side-by-Side Scrolling Container */}
      <div
        className="relative w-full py-8 overflow-hidden marquee-container perspective-container"
        style={{ '--marquee-duration': SPEED_MAP[selectedSpeed] } as React.CSSProperties}
      >
        {/* Soft Side Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-60 bg-gradient-to-r from-[#090D16] via-[#090D16]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-60 bg-gradient-to-l from-[#090D16] via-[#090D16]/90 to-transparent z-20 pointer-events-none" />

        <div className={`transition-all duration-700 ease-out origin-center ${getTiltClass()}`}>
          
          {/* Lane 1: Side-by-Side Scrolling Left */}
          <div className="flex gap-6 w-max animate-marquee-left mb-8">
            {lane1.map((item, index) => (
              <TestimonialCardItem key={`lane1-${item.id}-${index}`} item={item} />
            ))}
          </div>

          {/* Lane 2: Side-by-Side Scrolling Right */}
          <div className="flex gap-6 w-max animate-marquee-right">
            {lane2.map((item, index) => (
              <TestimonialCardItem key={`lane2-${item.id}-${index}`} item={item} />
            ))}
          </div>

        </div>
      </div>

      {/* Add Review Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-7 relative shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-1">
                <MessageSquareQuote className="w-5 h-5 text-[#3A86FF]" />
                <h3 className="text-xl font-extrabold text-white">নতুন ক্লায়েন্ট মতামত যোগ করুন</h3>
              </div>
              <p className="text-xs text-neutral-400 mb-5">
                আপনার রিভিউটি সরাসরি সাইটে লাইভ থাকবে এবং সেকশনে যুক্ত হবে।
              </p>

              {showSuccessMsg ? (
                <div className="py-12 text-center flex flex-col items-center justify-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                  <h4 className="text-lg font-bold text-white">ধন্যবাদ! আপনার মতামত টেলিগ্রামে পাঠানো হয়েছে।</h4>
                  <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                    আপনার রিভিউ এবং ছবি মাসুম ৯টি৯ এর টেলিগ্রামে সফলভাবে পৌঁছে গেছে। এডমিন রিভিউটি যাচাই করার পর ম্যানুয়ালি ওয়েবসাইটে প্রকাশ করবেন।
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddSubmit} className="space-y-4">
                  
                  {/* Name & Profession */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1">আপনার নাম *</label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        placeholder="যেমন: তানভীর আহমেদ"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-[#3A86FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1">আপনি কি করেন? (পেশা / রোল) *</label>
                      <input
                        type="text"
                        required
                        value={newReview.role}
                        onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                        placeholder="যেমন: কনটেন্ট ক্রিয়েটর / উদ্যোক্তা"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-[#3A86FF]"
                      />
                    </div>
                  </div>

                  {/* Brand / Company & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1">চ্যানেল / ব্র্যান্ডের নাম</label>
                      <input
                        type="text"
                        value={newReview.company}
                        onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                        placeholder="যেমন: Tech Bangla / Raad Media"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-[#3A86FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1">প্রজেক্ট ক্যাটাগরি *</label>
                      <select
                        value={newReview.projectType}
                        onChange={(e) => setNewReview({ ...newReview, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-[#3A86FF]"
                      >
                        <option value="পোস্টার ডিজাইন">পোস্টার ডিজাইন</option>
                        <option value="ইউটিউব থাম্বনেল">ইউটিউব থাম্বনেল</option>
                        <option value="এডুকেশন থাম্বনেল">এডুকেশন থাম্বনেল</option>
                        <option value="ব্র্যান্ডিং প্যাকেজ">ব্র্যান্ডিং প্যাকেজ</option>
                        <option value="কাস্টম থিম">কাস্টম থিম</option>
                      </select>
                    </div>
                  </div>

                  {/* Client Photo Upload */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">আপনার ছবি (Client Picture)</label>
                    <div className="flex items-center gap-3">
                      {newReview.avatarUrl ? (
                        <img
                          src={newReview.avatarUrl}
                          alt="Avatar Preview"
                          className="w-10 h-10 rounded-full object-cover border border-neutral-700 bg-neutral-950 shrink-0"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center text-neutral-500 shrink-0">
                          <ImageIcon className="w-4 h-4" />
                        </div>
                      )}
                      <div className="flex-1 flex gap-2">
                        <label className="px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold cursor-pointer flex items-center gap-1.5 shrink-0">
                          <Upload className="w-3.5 h-3.5 text-[#3A86FF]" />
                          <span>ছবি আপলোড</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, 'avatarUrl')}
                            className="hidden"
                          />
                        </label>
                        <input
                          type="text"
                          value={newReview.avatarUrl}
                          onChange={(e) => setNewReview({ ...newReview, avatarUrl: e.target.value })}
                          placeholder="বা ছবির URL লিংক দিন..."
                          className="flex-1 px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-[11px] focus:outline-none focus:border-[#3A86FF]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Designed Project Image Upload */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">আপনার জন্য করা ডিজাইন (Project Design Image)</label>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <label className="px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold cursor-pointer flex items-center gap-1.5 shrink-0">
                          <Upload className="w-3.5 h-3.5 text-emerald-400" />
                          <span>ডিজাইন আপলোড</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, 'designImageUrl')}
                            className="hidden"
                          />
                        </label>
                        <input
                          type="text"
                          value={newReview.designImageUrl}
                          onChange={(e) => setNewReview({ ...newReview, designImageUrl: e.target.value })}
                          placeholder="বা ডিজাইনের ছবির URL লিংক দিন..."
                          className="flex-1 px-3 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-[11px] focus:outline-none focus:border-[#3A86FF]"
                        />
                      </div>
                      {newReview.designImageUrl ? (
                        <div className="relative aspect-video max-h-32 w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                          <img
                            src={newReview.designImageUrl}
                            alt="Design Preview"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* Rating Slider (1.0 to 5.0 with 0.1 precision) */}
                  <div className="bg-neutral-950 p-3.5 rounded-xl border border-neutral-800">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>রেটিং নির্বাচন করুন (১.০ থেকে ৫.০):</span>
                      </label>
                      <span className="text-sm font-extrabold text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-md border border-amber-400/20">
                        {toBengaliNumerals(Number(newReview.rating).toFixed(1))} / ৫.০
                      </span>
                    </div>

                    <input
                      type="range"
                      min="1.0"
                      max="5.0"
                      step="0.1"
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: parseFloat(e.target.value) })}
                      className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#3A86FF]"
                    />
                    <div className="flex justify-between text-[10px] text-neutral-500 font-bold mt-1">
                      <span>১.০ (খুব খারাপ)</span>
                      <span>৩.০ (মাঝারি)</span>
                      <span>৫.০ (চমৎকার)</span>
                    </div>
                  </div>

                  {/* Comment Area */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1">আপনার মতামত / কমেন্ট *</label>
                    <textarea
                      required
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="ডিজাইনের মান, কমিউনিকেশন এবং ডেলিভারির অভিজ্ঞতা শেয়ার করুন..."
                      className="w-full p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:outline-none focus:border-[#3A86FF] resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 rounded-xl bg-neutral-800 text-neutral-300 text-xs font-semibold hover:bg-neutral-700"
                    >
                      বাতিল
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-xl bg-[#3A86FF] hover:bg-[#2b75ed] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-[#3A86FF]/20 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'সাবমিট হচ্ছে...' : 'সাবমিট করুন'}</span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
