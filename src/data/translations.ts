import { PortfolioConfig } from '../types';

export const UI_TRANSLATIONS = {
  bn: {
    nav: {
      home: 'হোম',
      hero: 'হোম',
      about: 'আমার সম্পর্কে',
      skills: 'দক্ষতা',
      services: 'সেবা',
      designProjects: 'ডিজাইন প্রজেক্ট',
      codingProjects: 'কোডিং প্রজেক্ট',
      portfolio: 'ডিজাইন প্রজেক্ট',
      ecosystem: 'কোডিং প্রজেক্ট',
      experience: 'অভিজ্ঞতা',
      testimonials: 'রিভিউ',
      contact: 'যোগাযোগ',
    },
    languageBadge: 'বাংলা',
    switchLanguageTooltip: 'English এ সুইচ করুন',
    hero: {
      availableForWork: 'নতুন প্রজেক্টের জন্য উন্মুক্ত',
      viewProjects: 'প্রজেক্ট দেখুন',
      contactMe: 'যোগাযোগ করুন',
    },
    about: {
      title: 'আমার সম্পর্কে',
      subtitle: 'প্যাশনেট ভিজ্যুয়াল স্টোরিটেলার ও গ্রাফিক্স ডিজাইনার',
      storyHeading: 'ডিজিটাল ক্রিয়েটিভিটির যাত্রাপথ',
      visionHeading: 'আমার লক্ষ্য ও ভিশন',
      careerGoalsHeading: 'ক্যারিয়ার গোলস',
      educationHeading: 'শিক্ষাগত যোগ্যতা ও ট্রেনিং',
      downloadCv: 'সিভি দেখুন',
    },
    skills: {
      badge: 'দক্ষতা ও সফটওয়্যার',
      title: 'আমার টেকনিক্যাল ও ক্রিয়েটিভ স্কিলস',
      subtitle: 'প্রফেশনাল সফটওয়্যার এবং ভিজ্যুয়াল ডিজাইন ফিল্ডে আমার অভিজ্ঞতা',
      softwareTab: 'সফটওয়্যার',
      fieldTab: 'ডিজাইন ফিল্ড',
    },
    services: {
      badge: 'আমার সেবাসমূহ',
      title: 'আপনার ব্র্যান্ডের জন্য প্রিমিয়াম ডিজাইন সার্ভিস',
      subtitle: 'আই-ক্যাচিং এবং হাই-কনভার্টিং ভিজ্যুয়াল কন্টেন্ট সমাধান',
      featuresTitle: 'প্রধান বৈশিষ্ট্যসমূহ:',
      deliverables: 'ডেলিভারি ফরম্যাট:',
      turnaround: 'ডেলিভারি সময়:',
      orderButton: 'অর্ডার করতে যোগাযোগ করুন',
    },
    experience: {
      badge: 'কর্মজীবন ও অভিজ্ঞতা',
      title: 'প্রফেশনাল কাজের অভিজ্ঞতা',
      subtitle: 'গত কয়েক বছরে বিভিন্ন কোম্পানি ও ক্লায়েন্টের সাথে কাজের অভিজ্ঞতা',
      keyProjects: 'প্রধান প্রজেক্টসমূহ:',
    },
    portfolio: {
      badge: 'পোর্টফোলিও প্রদর্শনী',
      title: 'আমার সেরা ক্রিয়েটিভ প্রজেক্টসমূহ',
      subtitle: 'হাই-কনভার্টিং নাটক পোস্টার, ইউটিউব থাম্বনেল, এডুকেশন কভার ও কাস্টম থিম',
      filterAll: 'সবগুলো',
      filterPoster: 'নাটক পোস্টার',
      filterYtThumbnail: 'নাটক থাম্বনেল',
      filterEducation: 'এডুকেশন থাম্বনেল',
      filterCustomTheme: 'কাস্টম থিম',
      viewDetails: 'বিস্তারিত দেখুন',
      livePreview: 'লাইভ দেখুন',
    },
    ecosystem: {
      badge: 'ডিজিটাল ইকোসিস্টেম',
      title: 'ওয়েব প্ল্যাটফর্ম ও প্রজেক্ট ইকোসিস্টেম',
      subtitle: 'আমার ডিজাইন ও প্রযুক্তিতে তৈরি বিভিন্ন প্ল্যাটফর্ম',
      visitWebsite: 'ওয়েবসাইট ভিজিট করুন',
      viewPlatform: 'প্ল্যাটফর্ম দেখুন',
    },
    testimonials: {
      badge: 'ক্লায়েন্টদের মতামত',
      title: 'সন্তুষ্ট ক্লায়েন্টদের কথা',
      subtitle: 'আমার কাজ সম্পর্কে ক্লায়েন্ট ও ক্রিয়েটরদের মূল্যবান রিভিউ',
      addReviewButton: 'আপনার মতামত দিন',
      addReviewBtn: 'আপনার মতামত দিন',
      ratingLabel: 'রেটিং',
      formTitle: 'নতুন মতামত জমা দিন',
      namePlaceholder: 'আপনার নাম',
      rolePlaceholder: 'পদবী (যেমন: ইউটিউবার / সিইও)',
      companyPlaceholder: 'কোম্পানি / চ্যানেল নাম',
      commentPlaceholder: 'আপনার মতামত লিখুন...',
      submitButton: 'মতামত জমা দিন',
    },
    achievements: {
      badge: 'সাফল্যের পরিসংখ্যান',
      title: 'সংখ্যায় আমার কাজের অগ্রগতি',
      subtitle: 'কঠোর পরিশ্রম ও ক্লায়েন্টদের ভালোবাসার প্রতিফলন',
    },
    faq: {
      badge: 'সাধারণ প্রশ্নাবলী',
      title: 'প্রায়শই জিজ্ঞাসিত প্রশ্নসমূহ',
      subtitle: 'প্রজেক্ট অর্ডার, সময়সীমা ও ফাইল ফরম্যাট সম্পর্কিত প্রশ্নের উত্তর',
      searchPlaceholder: 'প্রশ্ন খুঁজুন...',
    },
    contact: {
      badge: 'যোগাযোগ করুন',
      title: 'আসুন একসাথে অসাধারণ কিছু তৈরি করি',
      subtitle: 'নতুন প্রজেক্ট বা যেকোনো জিজ্ঞাসার জন্য মেসেজ দিন',
      formHeading: 'মেসেজ পাঠান',
      sendMessageHeading: 'মেসেজ পাঠান',
      nameLabel: 'আপনার নাম',
      namePlaceholder: 'আপনার নাম লিখুন',
      emailLabel: 'ইমেইল এড্রেস',
      emailPlaceholder: 'example@gmail.com',
      phoneLabel: 'ফোন নম্বর',
      phonePlaceholder: '01303-623838',
      subjectLabel: 'বিষয়',
      serviceCategoryLabel: 'প্রজেক্টের ক্যাটাগরি',
      subjectPlaceholder: 'প্রজেক্টের ধরণ (যেমন: থাম্বনেল ডিজাইন)',
      messageLabel: 'মেসেজ বা প্রজেক্ট বিবরণ',
      messagePlaceholder: 'আপনার প্রজেক্টের বিস্তারিত লিখুন...',
      sendButton: 'মেসেজ সাবমিট করুন',
      submitBtn: 'মেসেজ সাবমিট করুন',
      sendingButton: 'পাঠানো হচ্ছে...',
      successTitle: 'মেসেজ সফলভাবে পাঠানো হয়েছে!',
      successSub: 'আমি দ্রুত আপনার সাথে যোগাযোগ করব।',
      directContact: 'সরাসরি যোগাযোগ করুন',
      directCall: 'সরাসরি কল বা হোয়াটসঅ্যাপ',
      officialEmail: 'অফিশিয়াল ইমেইল এড্রেস',
      locationLabel: 'অবস্থান',
      emailUs: 'ইমেইল করুন',
      callUs: 'ফোন করুন',
      telegramUs: 'টেলিগ্রাম',
      whatsappUs: 'হোয়াটসঅ্যাপ',
    },
    footer: {
      roleTag: 'নতুন প্রজেক্টের জন্য এভেলেবল',
      availableForProjects: 'নতুন প্রজেক্টের জন্য এভেলেবল',
      bio: 'প্রফেশনাল গ্রাফিক্স ডিজাইনার ও কন্টেন্ট ক্রিয়েটর। পোস্টার ডিজাইন, হাই-সিটিআর ইউটিউব থাম্বনেল, এডুকেশন ভিজ্যুয়াল এবং কাস্টম থিম ডিজাইনে বিশেষজ্ঞ।',
      brandBio: 'প্রফেশনাল গ্রাফিক্স ডিজাইনার ও কন্টেন্ট ক্রিয়েটর। পোস্টার ডিজাইন, হাই-সিটিআর ইউটিউব থাম্বনেল, এডুকেশন ভিজ্যুয়াল এবং কাস্টম থিম ডিজাইনে বিশেষজ্ঞ।',
      quickNav: 'দ্রুত নেভিগেশন',
      copyright: 'সর্বস্বত্ব সংরক্ষিত।',
      rightsReserved: 'সর্বস্বত্ব সংরক্ষিত।',
      craftedWith: 'ডিজাইন এক্সিলেন্স এর জন্য তৈরি',
      backToTop: 'উপরে যান',
      scrollTop: 'উপরে যান',
    },
  },
  en: {
    nav: {
      home: 'Home',
      hero: 'Home',
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      designProjects: 'Design Projects',
      codingProjects: 'Coding Projects',
      portfolio: 'Design Projects',
      ecosystem: 'Coding Projects',
      experience: 'Experience',
      testimonials: 'Reviews',
      contact: 'Contact',
    },
    languageBadge: 'EN',
    switchLanguageTooltip: 'Switch to বাংলা',
    hero: {
      availableForWork: 'Available for Work',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    about: {
      title: 'About Me',
      subtitle: 'Passionate Visual Storyteller & Graphics Designer',
      storyHeading: 'The Digital Creative Journey',
      visionHeading: 'Mission & Vision',
      careerGoalsHeading: 'Career Goals',
      educationHeading: 'Education & Training',
      downloadCv: 'View Resume',
    },
    skills: {
      badge: 'Skills & Software',
      title: 'Technical & Creative Skills',
      subtitle: 'My expertise across professional software and visual design fields',
      softwareTab: 'Software',
      fieldTab: 'Design Fields',
    },
    services: {
      badge: 'Services Offered',
      title: 'Premium Design Services for Your Brand',
      subtitle: 'Eye-catching and high-converting visual content solutions',
      featuresTitle: 'Key Features:',
      deliverables: 'Deliverable Formats:',
      turnaround: 'Turnaround Time:',
      orderButton: 'Get in Touch to Order',
    },
    experience: {
      badge: 'Career & Experience',
      title: 'Professional Experience',
      subtitle: 'Working history with clients, channels, and companies over the years',
      keyProjects: 'Key Projects:',
    },
    portfolio: {
      badge: 'Portfolio Showcase',
      title: 'Featured Creative Projects',
      subtitle: 'High-converting drama posters, YouTube thumbnails, education covers & custom themes',
      filterAll: 'All',
      filterPoster: 'Natok Poster',
      filterYtThumbnail: 'Natok Thumbnail',
      filterEducation: 'Education Thumbnail',
      filterCustomTheme: 'Custom Theme',
      viewDetails: 'View Details',
      livePreview: 'Live Preview',
    },
    ecosystem: {
      badge: 'Digital Ecosystem',
      title: 'Web Platforms & Ecosystem Showcase',
      subtitle: 'Featured platforms built with design and technological precision',
      visitWebsite: 'Visit Website',
      viewPlatform: 'View Platform',
    },
    testimonials: {
      badge: 'Client Testimonials',
      title: 'What Clients Say',
      subtitle: 'Valuable feedback from creators, directors, and business owners',
      addReviewButton: 'Submit Review',
      addReviewBtn: 'Submit Review',
      ratingLabel: 'Rating',
      formTitle: 'Submit Your Review',
      namePlaceholder: 'Your Name',
      rolePlaceholder: 'Role (e.g. YouTuber / CEO)',
      companyPlaceholder: 'Company / Channel Name',
      commentPlaceholder: 'Write your testimonial here...',
      submitButton: 'Submit Review',
    },
    achievements: {
      badge: 'Milestones & Impact',
      title: 'My Progress in Numbers',
      subtitle: 'A reflection of hard work, dedication, and client satisfaction',
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Got Questions? Look Here',
      subtitle: 'Clear answers regarding project orders, turnaround times, and file deliverables',
      searchPlaceholder: 'Search questions...',
    },
    contact: {
      badge: 'Get in Touch',
      title: "Let's Create Something Amazing Together",
      subtitle: 'Send a message for new projects or any inquiries',
      formHeading: 'Send a Message',
      sendMessageHeading: 'Send a Message',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'example@gmail.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '01303-623838',
      subjectLabel: 'Subject',
      serviceCategoryLabel: 'Project Category',
      subjectPlaceholder: 'Project Type (e.g. Thumbnail Design)',
      messageLabel: 'Message or Project Details',
      messagePlaceholder: 'Tell me about your project details...',
      sendButton: 'Submit Message',
      submitBtn: 'Submit Message',
      sendingButton: 'Sending...',
      successTitle: 'Message Sent Successfully!',
      successSub: 'I will get back to you as soon as possible.',
      directContact: 'Direct Contact Details',
      directCall: 'Direct Call or WhatsApp',
      officialEmail: 'Official Email Address',
      locationLabel: 'Location',
      emailUs: 'Email Us',
      callUs: 'Call Us',
      telegramUs: 'Telegram',
      whatsappUs: 'WhatsApp',
    },
    footer: {
      roleTag: 'Available for New Projects',
      availableForProjects: 'Available for New Projects',
      bio: 'Professional Graphics Designer, Web Developer & Content Creator. Specialized in poster design, high-CTR YouTube thumbnails, educational visuals, and custom theme designs.',
      brandBio: 'Professional Graphics Designer, Web Developer & Content Creator. Specialized in poster design, high-CTR YouTube thumbnails, educational visuals, and custom theme designs.',
      quickNav: 'Quick Navigation',
      copyright: 'All rights reserved.',
      rightsReserved: 'All rights reserved.',
      craftedWith: 'crafted with love for Design Excellence',
      backToTop: 'Back to Top',
      scrollTop: 'Back to Top',
    },
  },
};

export const ENGLISH_PORTFOLIO_CONFIG: PortfolioConfig = {
  hero: {
    greeting: "Hello, I'm",
    name: "Masum 9T9",
    role: "Developer & Designer",
    rotatingRoles: [
      "Poster Design Specialist",
      "YouTube Thumbnail Creator",
      "Web Developer",
      "Custom Theme Designer",
      "Brand Visual Creator"
    ],
    bio: "I specialize in creating modern, high-converting digital graphics art. From professional posters and high-CTR YouTube thumbnails to educational visuals and custom themes, I take your brand to the next level.",
    statusBadge: "Available for Work",
    availableForHire: true,
    profileImage: "https://i.postimg.cc/gJT7B3XX/Profile-pic.png",
    ctaPrimaryText: "View Projects",
    ctaSecondaryText: "Contact Me"
  },
  about: {
    title: "About Me",
    subtitle: "Passionate Visual Storyteller & Graphics Designer",
    storyHeading: "The Journey of Digital Creativity",
    storyParagraphs: [
      "For over 3 years, I have been passionately creating digital graphic art and thumbnail designs. Transforming ordinary visuals into compelling artwork is my core mission.",
      "I believe a great thumbnail or poster is more than just an image — it is the key driver to capture audience attention and build trust within the first 5 seconds.",
      "From mobile design apps (Ibis Paint X, Pixellab) to desktop professional software (Photoshop, Illustrator, PS CC 2019) – I leverage every tool to achieve top quality."
    ],
    visionHeading: "My Mission & Vision",
    visionText: "To provide world-class visual branding to Bangla and international content creators and businesses, ensuring premium quality, high engagement, and originality.",
    careerGoalsHeading: "Career Goals",
    careerGoalsText: "To deliver top-tier custom thumbnails and brand content to leading YouTubers, educational platforms, and entrepreneurs to help 10x their subscriber engagement and brand value.",
    resumeUrl: "#resume-modal",
    education: [
      {
        degree: "Diploma in Graphics & Digital Media",
        institution: "Parahin Academy",
        year: "2026",
        details: "Advanced photorealistic poster compositing, YouTube thumbnail psychology, and vector art."
      },
      {
        degree: "High-Conversion Thumbnail & UI Design",
        institution: "Online Professional Creator Academy",
        year: "2024 - 2025",
        details: "Color theory, typography hierarchy, brand identity, and custom layouts."
      }
    ],
    highlights: [
      { label: "Experience", value: "3+ Years" },
      { label: "Completed Projects", value: "500+" },
      { label: "Happy Clients", value: "50+" },
      { label: "Rating", value: "4.9 / 5.0" }
    ]
  },
  skills: [
    {
      id: "photoshop",
      name: "Photoshop",
      category: "software",
      proficiency: 75,
      iconName: "https://i.postimg.cc/7Z3fjNN9/photoshop.png",
      description: "Photorealistic poster design, photo manipulation, lighting & shadow dynamics.",
      tags: ["Poster Art", "Manipulation", "Retouching"]
    },
    {
      id: "illustrator",
      name: "Illustrator",
      category: "software",
      proficiency: 60,
      iconName: "https://i.postimg.cc/BnTXRCCB/illustrator.png",
      description: "Vector art, logo design, custom shiny shapes, and iconography.",
      tags: ["Vector Art", "Logo", "Typography"]
    },
    {
      id: "ibis_paint",
      name: "Ibis Paint X",
      category: "software",
      proficiency: 95,
      iconName: "https://i.postimg.cc/9QdrsBBP/ibispaint.jpg",
      description: "Mobile digital painting, custom texture brushwork, and creative thumbnail art.",
      tags: ["Mobile Art", "Digital Painting", "Anime Art"]
    },
    {
      id: "pixellab",
      name: "Pixellab",
      category: "software",
      proficiency: 95,
      iconName: "https://i.postimg.cc/cLRrPccF/pixellab.png",
      description: "Mobile 3D typography, poster banner layout, and custom typography composition.",
      tags: ["3D Typography", "Banner", "Bangla Design"]
    },
    {
      id: "ps_cc_2019",
      name: "PS CC 2019",
      category: "software",
      proficiency: 85,
      iconName: "https://i.postimg.cc/bwxs4RRV/pstouch.avif",
      description: "Advanced color grading, layer masking, and Camera Raw filter enhancement.",
      tags: ["Color Grading", "Compositing", "FX"]
    },
    {
      id: "poster_design",
      name: "Poster Design",
      category: "design_field",
      proficiency: 99,
      iconName: "Palette",
      description: "High-impact movie, event, and promotional poster artwork.",
      tags: ["Promotional", "Movie Poster", "Social Media"]
    },
    {
      id: "yt_thumbnail",
      name: "YouTube Thumbnail",
      category: "design_field",
      proficiency: 99,
      iconName: "Youtube",
      description: "High-CTR dramatic and clean thumbnail designs built to boost clicks.",
      tags: ["High CTR", "Clickbait Free", "Vlog & Tech"]
    },
    {
      id: "edu_thumbnail",
      name: "Education Thumbnail",
      category: "design_field",
      proficiency: 96,
      iconName: "GraduationCap",
      description: "Premium cover art for online courses, classes, and educational tutorials.",
      tags: ["Course Art", "Educational", "Class Banner"]
    }
  ],
  services: [
    {
      id: "poster_design_service",
      title: "Poster Design",
      shortDesc: "High-impact creative design for events, promotions, branding, and movie posters.",
      iconName: "Maximize2",
      features: [
        "Photorealistic Compositing",
        "High-Resolution Print & Web Ready",
        "Custom Color Grading & Shadow Effects",
        "Brand Guidelines Compliant"
      ],
      deliverables: "PSD, PNG, JPG (4K Output)",
      turnaroundTime: "24-48 Hours"
    },
    {
      id: "yt_thumbnail_service",
      title: "YouTube Thumbnail Design",
      shortDesc: "Specialized thumbnails engineered to rapidly boost video views and Click-Through Rate (CTR).",
      iconName: "PlayCircle",
      features: [
        "Eye-Catching Expressions & Cutouts",
        "High-Readability Bold Typography",
        "Psychological Color Palette",
        "3D Illumination & Depth"
      ],
      deliverables: "PNG (1080p Ultra Clear)",
      turnaroundTime: "12-24 Hours"
    },
    {
      id: "edu_thumbnail_service",
      title: "Education Thumbnail",
      shortDesc: "Sleek and professional cover art tailored for online academies, courses, and tutorials.",
      iconName: "BookOpen",
      features: [
        "Clean & Clear Infographic Art",
        "Subject-Specific Icons & Symbols",
        "Brand Consistency Maintained",
        "Multiple Variants Supported"
      ],
      deliverables: "PSD, PNG, PDF",
      turnaroundTime: "24 Hours"
    },
    {
      id: "content_creation_service",
      title: "Content Creation & Branding",
      shortDesc: "Social media promotion, Facebook page banners, and Reel cover creatives.",
      iconName: "Share2",
      features: [
        "Facebook Covers & Post Banners",
        "Custom Social Graphics Package",
        "Uniform Color Branding",
        "Story & Reel Themes"
      ],
      deliverables: "JPG, PNG, Vector",
      turnaroundTime: "1-2 Days"
    },
    {
      id: "custom_theme_service",
      title: "Custom Theme Design",
      shortDesc: "Responsive, clean, and stylish UI customization for bloggers and websites.",
      iconName: "Code2",
      features: [
        "Blogger & Web-Friendly Coding",
        "Responsive & Fast Loading UI",
        "Custom Color & Font Matching",
        "Easy Editable Widget Structure"
      ],
      deliverables: "HTML/CSS Code & Documentation",
      turnaroundTime: "2-3 Days"
    }
  ],
  experiences: [
    {
      id: "exp_1",
      year: "2026 - Present",
      role: "Senior Graphics Designer",
      company: "Parahin Academy",
      location: "Bangladesh (Remote)",
      description: "Responsible for course thumbnails, social media campaign banners, and overall brand identity creation.",
      keyProjects: ["600+ Thumbnails", "Official Rebranding", "Promo Content"]
    },
    {
      id: "exp_2",
      year: "2023 - 2026",
      role: "Freelance Thumbnail & Poster Specialist",
      company: "YouTube Creator Network",
      location: "Global Clients",
      description: "Designing high-CTR thumbnails and video artwork for 20+ popular YouTube channels.",
      keyProjects: ["100+ YouTube Thumbnails", "Tech & Travel Channel Rebranding"]
    }
  ],
  portfolio: [
    {
      id: "port_1",
      title: "Songsar-er Bondhon — Official Drama Poster Design",
      category: "natok_poster",
      categoryLabel: "Natok Poster Design",
      imageUrl: "https://i.postimg.cc/j28Vv1VJ/Songsar-er-bondhon.jpg",
      description: "Official key visual & poster artwork for the family drama 'Songsar-er Bondhon' presented by Raad Multimedia.",
      longDescription: "Designed to reflect family emotion, love, and depth of relationships. Features warm sunset tones, well-composed cast arrangements, and eye-catching custom typography to grab audience attention.",
      viewsCount: "94K+ Views",
      achievement: "Official Drama Hit Poster",
      technologies: ["Ibis Paint X", "Pixellab"],
      clientName: "Raad Multimedia",
      year: "2025",
      liveUrl: "https://youtu.be/RJniX0nZwNU?si=Lhq1jAD5VFn2aiOD"
    },
    {
      id: "port_2",
      title: "Hayre Kopal — High-CTR YouTube Thumbnail Design",
      category: "natok_thumbnail",
      categoryLabel: "Natok Thumbnail",
      imageUrl: "https://i.postimg.cc/wTv3H8BY/Hayre-Kopal.jpg",
      description: "High-converting thumbnail designed for the hit drama 'Hayre Kopal' on Meo Entertainment with 2.3M+ views.",
      longDescription: "High-converting thumbnail created for Meo Entertainment channel. Uses dramatic facial expressions and vibrant color grading to ensure maximum CTR and retention.",
      viewsCount: "2.3M+ Views",
      achievement: "2.3M+ Views Trending Drama Thumbnail",
      technologies: ["Pixellab"],
      clientName: "Meo Entertainment",
      year: "2025",
      liveUrl: "https://youtu.be/CYm9tW22qLo?si=6XM_GbUiYTWSUNXw"
    },
    {
      id: "port_3",
      title: "Class 8 Exam Strategy: HulkenStein Infinity School Thumbnail",
      category: "education",
      categoryLabel: "Education Thumbnail",
      imageUrl: "https://i.postimg.cc/hvxNBYx5/edu-1.jpg",
      description: "Premium thumbnail created for 8th Grade Exam Guide. Features dark-golden color scheme and clear typography for high CTR.",
      longDescription: "Designed for HulkenStein Infinity School channel. Features high contrast typography and clear focus elements for maximum student engagement.",
      viewsCount: "15K+ Views",
      achievement: "High-CTR Educational Record",
      technologies: ["Pixellab", "Ibis Paint X"],
      clientName: "HulkenStein Infinity School",
      year: "2025",
      liveUrl: "https://youtu.be/3DhY3Fkm1YY?si=d-4Gzbuu__mekr4Q"
    },
    {
      id: "port_4",
      title: "Premium Dark Luxury Custom Theme",
      category: "custom_theme",
      categoryLabel: "Custom Theme",
      imageUrl: "https://i.postimg.cc/rsFF9mFd/fbd8b403-9dba-42c1-a984-1293f50492cd.jpg",
      description: "Super-fast custom theme design with glassmorphism UI for blogger and portfolio websites.",
      longDescription: "Custom theme built for bloggers and portfolio sites. Features glassmorphism UI, SEO optimization, and 100/100 Lighthouse performance score.",
      viewsCount: "N/A",
      achievement: "100/100 Lighthouse Performance",
      technologies: ["HTML5", "CSS3", "Tailwind", "JavaScript"],
      clientName: "Masum 9T9",
      year: "2026",
      liveUrl: "https://9t9.pro.bd"
    },
    {
      id: "port_5",
      title: "Scholarship Exam 2025: HulkenStein Infinity School Thumbnail",
      category: "education",
      categoryLabel: "Education Thumbnail",
      imageUrl: "https://i.postimg.cc/XJ2Y5pzZ/edu-2.jpg",
      description: "Successful educational project reaching 17K+ views. Uses focus illumination and clear color hierarchy.",
      longDescription: "Reached 17K+ views on YouTube. Features precise color hierarchy, focus illumination, and readable font styling.",
      viewsCount: "17K+ Views",
      achievement: "Popular YouTube Educational Search",
      technologies: ["Pixellab", "Ibis Paint X"],
      clientName: "HulkenStein Infinity School",
      year: "2025",
      liveUrl: "https://youtu.be/NEROv4rdatA?si=xJo7Pj2AEj0k7boo"
    },
    {
      id: "port_6",
      title: "Hayre Kopal — Official Drama Poster Design",
      category: "natok_poster",
      categoryLabel: "Natok Poster Design",
      imageUrl: "https://i.postimg.cc/Qxmcs9WJ/hyre-kopal-poster.jpg",
      description: "Official first-look poster design for the hit drama 'Hayre Kopal' with 2.3M+ views on Meo Entertainment.",
      longDescription: "Official promotional poster created for the blockbuster drama 'Hayre Kopal'. Features 3D custom typography, natural warm color grading, and professional credit block layout.",
      viewsCount: "2.3M+ Reach",
      achievement: "2.3M+ Trending Drama Poster",
      technologies: ["Pixellab"],
      clientName: "Meo Entertainment",
      year: "2025",
      liveUrl: "https://youtu.be/CYm9tW22qLo?si=6XM_GbUiYTWSUNXw"
    }
  ],
  featuredEcosystem: [
    {
      id: "eco_1",
      badge: "Portfolio",
      title: "Portfolio Website",
      mainUrl: "https://www.9t9.pro.bd",
      description: "A professional portfolio featuring graphic design, branding, UI concepts, and AI-powered web development. Showcasing creative projects, technical expertise, and digital solutions for modern businesses.",
      stats: [
        { label: "ACHIEVEMENT", value: "100+ Clients" },
        { label: "Earn", value: "$10K+" }
      ],
      keyFeatures: [
        "Premium UI/UX with smooth interactive animations.",
        "Seamless Bilingual Support (English & বাংলা)",
        "Fully responsive across desktop, tablet, and mobile.",
        "SEO & performance optimized for faster loading.",
        "Professional showcase for design, branding, and web projects."
      ],
      galleryImages: [
        "https://i.postimg.cc/7ZcG0nqC/Screenshot-(17).png",
        "https://i.postimg.cc/908FVcMX/Screenshot-(18).png",
        "https://i.postimg.cc/SRvq3VTj/Screenshot-(19).png"
      ],
      links: [
        {
          label: "Live Demo",
          url: "https://9t9.pro.bd",
          type: "web"
        }
      ]
    }
  ],
  testimonials: [
    {
      id: "test_1",
      name: "Ariful Islam",
      role: "YouTuber & Content Creator",
      company: "TechTalk BD (350k+ Subs)",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
      rating: 5,
      comment: "After using Masum brother's thumbnail designs, my channel's average CTR jumped from 9% to 15.4%! His finishing and typography are top-tier.",
      projectType: "YouTube Thumbnail"
    },
    {
      id: "test_2",
      name: "Al Mahi Rahman",
      role: "Instructor",
      company: "HulkenStein Infinity School",
      avatarUrl: "https://i.postimg.cc/VLJCtYG2/Al-Mahi-Rahman.jpg",
      rating: 5,
      comment: "Masum designed many of our academic class thumbnails and posters. I 100% recommend him for his timely delivery and premium quality.",
      projectType: "Education Graphics"
    },
    {
      id: "test_3",
      name: "Megh Heem",
      role: "Director",
      company: "Raad Multimedia & Meo Entertainment",
      avatarUrl: "https://i.postimg.cc/d1zKSjFk/Megh-Heem.jpg",
      rating: 5,
      comment: "His composition sense in poster design is incredible. I've taken several posters and thumbnails including 'Hayre Kopal', 'Songsar-er Bondhon', and 'Abba'. Thanks to his great designs, our new channel gained 2.3M+ views immediately.",
      projectType: "Poster Design"
    },
    {
      id: "test_4",
      name: "Sadia Rahman",
      role: "Digital Marketer",
      company: "Smart Brands Ltd.",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250",
      rating: 5,
      comment: "Our promotional banner sales conversions increased significantly. Masum understands customer psychology very well. Thank you!",
      projectType: "Social Banner"
    },
    {
      id: "test_5",
      name: "Mahmudul Hasan",
      role: "Blogger & Developer",
      company: "TechTunes BD",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250",
      rating: 5,
      comment: "Masum's custom theme design work is extremely clean and responsive. Runs smoothly without any bugs. Highly professional!",
      projectType: "Custom Theme"
    }
  ],
  achievements: [
    {
      id: "ach_1",
      number: 500,
      suffix: "+",
      label: "Completed Projects",
      iconName: "CheckCircle2"
    },
    {
      id: "ach_2",
      number: 350,
      suffix: "+",
      label: "Satisfied Clients",
      iconName: "Smile"
    },
    {
      id: "ach_3",
      number: 5,
      suffix: "+ Years",
      label: "Work Experience",
      iconName: "Award"
    },
    {
      id: "ach_4",
      number: 1000,
      suffix: "+",
      label: "Custom Art Assets",
      iconName: "Layers"
    },
    {
      id: "ach_5",
      number: 1200,
      suffix: "+",
      label: "Cups of Coffee ☕",
      iconName: "Coffee"
    }
  ],
  faqs: [
    {
      id: "faq_1",
      question: "How can I place a project order?",
      answer: "You can send project details via the contact form on the website, directly on WhatsApp (+8801303-623838), or by email (masum.9t9.gd@gmail.com). I will review your request immediately and respond with details.",
      category: "Order"
    },
    {
      id: "faq_2",
      question: "How long does it take to create a thumbnail or poster?",
      answer: "Usually 12 to 24 hours for YouTube thumbnails and 24 to 48 hours for poster art. Express delivery options are available for urgent projects.",
      category: "Turnaround"
    },
    {
      id: "faq_3",
      question: "What file formats will I receive?",
      answer: "Depending on your needs, high-resolution PNG, JPG, HD PDF, and source files (Photoshop PSD or Illustrator AI) are provided.",
      category: "Deliverables"
    },
    {
      id: "faq_4",
      question: "What if I need revisions on the design?",
      answer: "I offer unlimited revisions on every project until you are 100% satisfied with the outcome.",
      category: "Revisions"
    },
    {
      id: "faq_5",
      question: "What payment methods do you accept?",
      answer: "Payments can be made via Bkash, Nagad, Rocket, or Bank Transfer. A 50% advance may apply depending on the project type.",
      category: "Payment"
    }
  ],
  socials: {
    facebook: "https://www.facebook.com/masum.9t9.official",
    youtube: "https://www.youtube.com/@ParahinAcademy",
    telegram: "https://t.me/masum_9t9_official",
    whatsapp: "https://wa.me/8801303623838",
    email: "masum.9t9.gd@gmail.com",
    phone: "01303-623838",
    behance: "https://www.behance.net/masum_9t9_official",
    fiverr: "https://www.fiverr.com/sellers/masum9t9/",
    github: "https://github.com/masum-9t9/"
  },
  contact: {
    phone: "01303-623838",
    emailPrimary: "masum.9t9.gd@gmail.com",
    emailSecondary: "parahinacademy@gmail.com",
    telegramUsername: "@masum_9t9_official",
    whatsappNumber: "+8801303623838",
    location: "Satkhira, Khulna, Bangladesh",
    googleSheetScriptUrl: "https://script.google.com/macros/s/AKfycbybx_ey85GMFxDSMHXH3ljkaM4s4PRircG3XPOWVYjYkLTfwJJqFo85wnKzjsbR51FIfg/exec",
    telegramBotToken: (import.meta as unknown as { env: Record<string, string> }).env?.VITE_TELEGRAM_BOT_TOKEN || "8833148612:AAHihj3OkapzuM0RemcOv29ahsUEhnRIhuc",
    telegramChatId: "8634088852"
  }
};
