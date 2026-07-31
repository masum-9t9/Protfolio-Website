/**
 * Handles Viewing and Downloading Masum 9T9's Official Resume / CV
 * Supports both English and Bangla versions.
 */

export const viewResume = (lang: 'bn' | 'en' = 'bn') => {
  window.open(`/resume.html?lang=${lang}`, '_blank', 'noopener,noreferrer');
};

export const downloadResume = async (lang: 'bn' | 'en' = 'bn') => {
  const isBangla = lang === 'bn';
  const fileName = isBangla ? 'Masum_9T9_Resume_Bangla.pdf' : 'Masum_9T9_Resume_English.pdf';

  const title = isBangla
    ? "গ্রাফিক্স ডিজাইনার • ওয়েব ডেভেলপার • কন্টেন্ট ক্রিয়েটর"
    : "Graphic Designer • Web Developer • Content Creator";

  const tagline = isBangla
    ? "হাই-সিটিআর ভিজ্যুয়াল, আধুনিক ওয়েব অ্যাপ্লিকেশন ও এডুকেশনাল কন্টেন্ট মেকার"
    : "Crafting High-CTR Visuals, Modern Web Applications & Educational Content";

  const summaryHdr = isBangla ? "আমার সম্পর্কে (Professional Summary)" : "About / Professional Summary";
  const summaryTxt = isBangla
    ? "গত ৩ বছরের বেশি সময় ধরে আমি একজন গ্রাফিক্স ডিজাইনার, ওয়েব ডেভেলপার এবং কন্টেন্ট ক্রিয়েটর হিসেবে কাজ করছি। React ও TypeScript দিয়ে ফাস্ট ওয়েব অ্যাপ্লিকেশন বিল্ড করার পাশাপাশি Photoshop ও Illustrator দিয়ে প্রিমিয়াম পোস্টার ও হাই-সিটিআর ইউটিউব থাম্বনেল ডিজাইন করি। এছাড়াও 'পাড়াহীন একাডেমি'র মাধ্যমে ১০,০০০+ লার্নারদের অনলাইন টেকনিক্যাল ও ডিজাইন গাইডলাইন প্রদান করছি।"
    : "Multi-disciplinary creative working across Graphic Design, Web Development, and Content Creation over the past 3+ years. Experienced in building responsive React & TypeScript web applications, designing high-converting YouTube thumbnails and photorealistic posters, and creating educational tutorials for 10,000+ online learners via Parahin Academy.";

  const skillsHdr = isBangla ? "মূল দক্ষতা ও সফটওয়্যার (Skills & Tools)" : "Skills & Tools";
  const expHdr = isBangla ? "অভিজ্ঞতা ও শিক্ষা (Experience & Education)" : "Experience & Education";
  const projectsHdr = isBangla ? "ফিচার্ড প্রজেক্টসমূহ (Featured Projects)" : "Featured Projects";
  const linksHdr = isBangla ? "সোশ্যাল প্রোফাইল ও অফলাইন ডাইরেক্ট লিংক (Direct Destination URLs)" : "Social Profiles & Direct Destination URLs";

  // Create temporary container for PDF capture
  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.style.width = '794px'; // A4 width at 96 DPI
  container.style.padding = '36px 40px';
  container.style.background = '#ffffff';
  container.style.color = '#1f2937';
  container.style.fontFamily = "'Hind Siliguri', 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  container.style.boxSizing = 'border-box';
  container.style.lineHeight = '1.5';

  container.innerHTML = `
    <!-- Header with Profile Photo & Personal Details -->
    <div style="border-bottom: 2px solid #3A86FF; padding-bottom: 18px; margin-bottom: 22px; display: flex; justify-content: space-between; align-items: center;">
      <div style="flex: 1; padding-right: 16px;">
        <h1 style="font-size: 28px; font-weight: 800; color: #111827; margin: 0; line-height: 1.2;">
          Masum 9T9 <span style="color: #3A86FF; font-size: 22px;">✓</span>
        </h1>
        <div style="font-size: 15px; font-weight: 700; color: #2563eb; margin-top: 4px;">
          ${title}
        </div>
        <div style="font-size: 12.5px; color: #4b5563; margin-top: 4px; line-height: 1.4;">
          ${tagline}
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 10px; font-size: 11.5px; color: #374151;">
          <div>📞 <strong>Phone:</strong> +8801303-623838</div>
          <div>✉️ <strong>Email:</strong> masum.9t9.gd@gmail.com</div>
          <div>📍 <strong>Location:</strong> Dhaka / Satkhira, Bangladesh</div>
        </div>
      </div>

      <!-- 80-100px Circular Profile Photo -->
      <div style="text-align: center; flex-shrink: 0;">
        <img
          src="https://i.postimg.cc/gJT7B3XX/Profile-pic.png"
          alt="Masum 9T9"
          crossorigin="anonymous"
          style="width: 88px; height: 88px; border-radius: 50%; border: 3px solid #3A86FF; object-fit: cover; box-shadow: 0 4px 12px rgba(58, 134, 255, 0.2);"
        />
      </div>
    </div>

    <!-- Summary -->
    <div style="margin-bottom: 22px;">
      <h3 style="font-size: 16px; font-weight: 800; color: #111827; text-transform: uppercase; margin-bottom: 8px; border-left: 4px solid #3A86FF; padding-left: 10px; letter-spacing: 0.3px;">
        ${summaryHdr}
      </h3>
      <p style="font-size: 12.5px; color: #374151; margin: 0; text-align: justify; line-height: 1.6; background: #f8fafc; padding: 12px 14px; border-radius: 8px; border: 1px solid #f1f5f9;">
        ${summaryTxt}
      </p>
    </div>

    <!-- Skills & Tools -->
    <div style="margin-bottom: 22px;">
      <h3 style="font-size: 16px; font-weight: 800; color: #111827; text-transform: uppercase; margin-bottom: 10px; border-left: 4px solid #3A86FF; padding-left: 10px; letter-spacing: 0.3px;">
        ${skillsHdr}
      </h3>
      <div style="display: flex; flex-wrap: wrap; gap: 7px;">
        <span style="background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; font-size: 11.5px; font-weight: 700; padding: 5px 12px; border-radius: 6px;">✨ UI/UX & Branding</span>
        <span style="background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; font-size: 11.5px; font-weight: 700; padding: 5px 12px; border-radius: 6px;">⚡ React & TypeScript</span>
        <span style="background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; font-size: 11.5px; font-weight: 700; padding: 5px 12px; border-radius: 6px;">🎨 Tailwind CSS</span>
        <span style="background: #f3f4f6; border: 1px solid #e5e7eb; color: #374151; font-size: 11.5px; font-weight: 600; padding: 5px 12px; border-radius: 6px;">💻 HTML5 / CSS3 / ES6+</span>
        <span style="background: #f3f4f6; border: 1px solid #e5e7eb; color: #374151; font-size: 11.5px; font-weight: 600; padding: 5px 12px; border-radius: 6px;">🖼️ Adobe Photoshop</span>
        <span style="background: #f3f4f6; border: 1px solid #e5e7eb; color: #374151; font-size: 11.5px; font-weight: 600; padding: 5px 12px; border-radius: 6px;">✒️ Adobe Illustrator</span>
        <span style="background: #f3f4f6; border: 1px solid #e5e7eb; color: #374151; font-size: 11.5px; font-weight: 600; padding: 5px 12px; border-radius: 6px;">❖ Figma & VS Code</span>
        <span style="background: #f3f4f6; border: 1px solid #e5e7eb; color: #374151; font-size: 11.5px; font-weight: 600; padding: 5px 12px; border-radius: 6px;">🔥 High-CTR Thumbnails</span>
        <span style="background: #f3f4f6; border: 1px solid #e5e7eb; color: #374151; font-size: 11.5px; font-weight: 600; padding: 5px 12px; border-radius: 6px;">🖼️ Poster Compositing</span>
      </div>
    </div>

    <!-- Featured Projects -->
    <div style="margin-bottom: 22px;">
      <h3 style="font-size: 16px; font-weight: 800; color: #111827; text-transform: uppercase; margin-bottom: 10px; border-left: 4px solid #3A86FF; padding-left: 10px; letter-spacing: 0.3px;">
        ${projectsHdr}
      </h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px;">
          <div style="font-size: 12.5px; font-weight: 700; color: #111827;">1. Personal Portfolio (9t9.pro.bd)</div>
          <div style="font-size: 11.5px; color: #4b5563; margin-top: 3px;">Tech Stack:
                                                                             React • TypeScript • Tailwind CSS • Vite</div>
        </div>
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px;">
          <div style="font-size: 12.5px; font-weight: 700; color: #111827;">2. Premium YouTube Thumbnails</div>
          <div style="font-size: 11.5px; color: #4b5563; margin-top: 3px;">100+ custom high-CTR thumbnails boosting video click-through rates.</div>
        </div>
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px;">
          <div style="font-size: 12.5px; font-weight: 700; color: #111827;">3. Poster & Social Media Graphics</div>
          <div style="font-size: 11.5px; color: #4b5563; margin-top: 3px;">Photorealistic composite art and vector banner design via Photoshop/Illustrator.</div>
        </div>
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px;">
          <div style="font-size: 12.5px; font-weight: 700; color: #111827;">4. Educational Content (Parahin Academy)</div>
          <div style="font-size: 11.5px; color: #4b5563; margin-top: 3px;">Tutorials & design masterclasses reaching 10,000+ active online learners.</div>
        </div>
      </div>
    </div>

    <!-- Experience & Education -->
    <div style="margin-bottom: 22px;">
      <h3 style="font-size: 16px; font-weight: 800; color: #111827; text-transform: uppercase; margin-bottom: 10px; border-left: 4px solid #3A86FF; padding-left: 10px; letter-spacing: 0.3px;">
        ${expHdr}
      </h3>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px; margin-bottom: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12.5px; font-weight: 700; color: #111827;">Graphic Designer, Web Developer & Content Creator</span>
          <span style="font-size: 11px; font-weight: 700; color: #2563eb; background: #eff6ff; padding: 3px 8px; border-radius: 4px;">2023 - Present</span>
        </div>
        <div style="font-size: 11.5px; color: #4b5563; margin-top: 3px;">Delivered web apps and 100+ design assets for local and international clients.</div>
      </div>
      <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 12.5px; font-weight: 700; color: #111827;">Founder & Lead Instructor — Parahin Academy</span>
          <span style="font-size: 11px; font-weight: 700; color: #2563eb; background: #eff6ff; padding: 3px 8px; border-radius: 4px;">2024 - Present</span>
        </div>
        <div style="font-size: 11.5px; color: #4b5563; margin-top: 3px;">Creating tech/design video masterclasses for 10,000+ online students.</div>
      </div>
    </div>

    <!-- Direct Social Links & QR Code Footer Section -->
    <div style="border-top: 2px solid #e5e7eb; padding-top: 16px; margin-top: 22px; display: flex; justify-content: space-between; align-items: center; background: #f8fafc; border-radius: 12px; padding: 14px 18px; border: 1px solid #e2e8f0;">
      <div style="flex: 1; padding-right: 16px;">
        <h3 style="font-size: 14px; font-weight: 800; color: #111827; margin: 0 0 8px 0; display: flex; items-center; gap: 6px;">
          ${linksHdr}
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 11px; color: #374151; font-family: monospace;">
          <div>🌐 <strong>Website:</strong> https://9t9.pro.bd</div>
          <div>📘 <strong>Facebook:</strong> www.facebook.com/masum.9t9.official</div>
          <div>🎨 <strong>Behance:</strong> www.behance.net/masum_9t9_official</div>
          <div>🐙 <strong>GitHub:</strong> github.com/masum-9t9/</div>
          <div>▶️ <strong>YouTube:</strong> www.youtube.com/@ParahinAcademy</div>
          <div>🟢 <strong>Fiverr:</strong> www.fiverr.com/sellers/masum9t9/</div>
        </div>
      </div>

      <!-- QR Code Block for Live Portfolio -->
      <div style="text-align: center; flex-shrink: 0; padding-left: 12px; border-left: 1px solid #cbd5e1;">
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?data=https://9t9.pro.bd&size=90x90"
          alt="QR Code Portfolio"
          crossorigin="anonymous"
          style="width: 72px; height: 72px; border-radius: 6px; border: 1px solid #cbd5e1; padding: 2px; background: #ffffff;"
        />
        <div style="font-size: 9.5px; font-weight: 700; color: #1e293b; margin-top: 4px; white-space: nowrap;">
          ${isBangla ? 'স্ক্যান করে পোর্টফোলিও দেখুন' : 'Scan for Portfolio'}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  try {
    const html2canvasModule = await import('html2canvas');
    const html2canvas = html2canvasModule.default;

    const jsPDFModule = await import('jspdf');
    const jsPDF = jsPDFModule.jsPDF || jsPDFModule.default;

    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.98);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(fileName);
  } catch (err) {
    console.error('Failed to generate PDF:', err);
  } finally {
    document.body.removeChild(container);
  }
};

