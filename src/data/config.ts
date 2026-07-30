import { PortfolioConfig } from '../types';

export const INITIAL_PORTFOLIO_CONFIG: PortfolioConfig = {
  hero: {
    greeting: "হ্যালো, আমি",
    name: "Masum 9T9",
    role: "ডেভেলপার, কন্টেন্ট ক্রিয়েটর ও ডিজাইনার",
    rotatingRoles: [
      "পোস্টার ডিজাইন স্পেশালিস্ট",
      "ইউটিউব থাম্বনেল ক্রিয়েটর",
      "ওয়েব ডেভেলপার",
      "কাস্টম থিম ডিজাইনার",
      "ব্র্যান্ড ভিজ্যুয়াল ক্রিয়েটর"
    ],
    bio: "আমি আধুনিক ও হাই-কনভার্টিং ডিজিটাল গ্রাফিক্স আর্ট তৈরিতে অভিজ্ঞ। প্রফেশনাল পোস্টার, হাই-সিটিআর ইউটিউব থাম্বনেল, শিক্ষামূলক ভিজ্যুয়াল কন্টেন্ট এবং ইউনিক কাস্টম থিম ডিজাইনের মাধ্যমে আপনার ব্র্যান্ডকে নিয়ে যাব এক অনন্য উচ্চতায়।",
    statusBadge: "নতুন প্রজেক্টের জন্য উন্মুক্ত",
    availableForHire: true,
    profileImage: "https://i.postimg.cc/gJT7B3XX/Profile-pic.png",
    ctaPrimaryText: "প্রজেক্ট দেখুন",
    ctaSecondaryText: "যোগাযোগ করুন"
  },
  about: {
    title: "আমার সম্পর্কে",
    subtitle: "প্যাশনেট ভিজ্যুয়াল স্টোরিটেলার ও গ্রাফিক্স ডিজাইনার",
    storyHeading: "ডিজিটাল ক্রিয়েটিভিটির যাত্রাপথ",
    storyParagraphs: [
      "গত ৩ বছরেরও বেশি সময় ধরে আমি ডিজিটাল গ্রাফিক্স আর্ট ও থাম্বনেল ডিজাইনে নিরলসভাবে কাজ করে যাচ্ছি। সাধারণ ভিজ্যুয়ালকে আকর্ষণীয় আর্টওয়ার্কে রূপান্তর করাই আমার মূল কাজ।",
      "আমি বিশ্বাস করি একটি নিখুঁত থাম্বনেল বা পোস্টার শুধু সুন্দর ছবি নয়; এটি ভিজিটরদের আকর্ষণ করার এবং প্রথম ৫ সেকেন্ডেই ট্রাস্ট বিল্ড করার প্রধান মাধ্যম।",
      "মোবাইল আর্ট অ্যাপস (Ibis Paint X, Pixellab) থেকে শুরু করে প্রফেশনাল ডেস্কটপ সফটওয়্যার (Photoshop, Illustrator, PS CC 2019) – প্রতিটি টুলের সর্বোচ্চ ব্যবহারে আমি পারদর্শী।"
    ],
    visionHeading: "আমার লক্ষ্য ও ভিশন",
    visionText: "বাংলা ও আন্তর্জাতিক কন্টেন্ট ক্রিয়েটর এবং ব্যবসায়ীদের ভিজ্যুয়াল ব্র্যান্ডিং বিশ্বমানের রূপ দেওয়া। প্রতিটি প্রজেক্টে প্রিমিয়াম কোয়ালিটি ও অরিজিনালিটি নিশ্চিত করা।",
    careerGoalsHeading: "ক্যারিয়ার গোলস",
    careerGoalsText: "শীর্ষস্থানীয় ইউটিউবার, শিক্ষামূলক প্ল্যাটফর্ম এবং উদ্যোক্তাদের বিশ্বমানের কাস্টম থাম্বনেল ও ব্র্যান্ড কন্টেন্ট সরবরাহ করে তাদের সাবস্ক্রাইবার ও ব্র্যান্ড ভ্যালু ১০ গুণ বৃদ্ধি করা।",
    resumeUrl: "#resume-modal",
    education: [
      {
        degree: "গ্রাফিক্স ও ডিজিটাল মিডিয়া ডিপ্লোমা",
        institution: "পাড়াহীন একাডেমি",
        year: "২০২৬",
        details: "অ্যাডভান্সড ফটোরিয়ালিস্টিক পোস্টার কম্পোজিটিং, ইউটিউব থাম্বনেল সাইকোলজি এবং ভেক্টর আর্ট।"
      },
      {
        degree: "হাই-কনভার্সন থাম্বনেল ও UI ডিজাইন",
        institution: "অনলাইন প্রফেশনাল ক্রিয়েটর একাডেমি",
        year: "২০২৪ - ২০২৫",
        details: "কালার থিওরি, টাইপোগ্রাফি হায়ারার্কি, ব্র্যান্ড আইডেন্টিটি এবং কাস্টম লেআউট ডিজাইন।"
      }
    ],
    highlights: [
      { label: "অভিজ্ঞতা", value: "৩+ বছর" },
      { label: "সম্পন্ন প্রজেক্ট", value: "৫০০+" },
      { label: "হ্যাপি ক্লায়েন্ট", value: "৫০+" },
      { label: "রেটিং", value: "৪.৯ / ৫.০" }
    ]
  },
  skills: [
    {
      id: "photoshop",
      name: "Photoshop",
      category: "software",
      proficiency: 75,
      iconName: "https://i.postimg.cc/7Z3fjNN9/photoshop.png",
      description: "ফটোরিয়ালিস্টিক পোস্টার ডিজাইন, ফটো ম্যানিপুলেশন, লাইটিং অ্যান্ড কাস্টিং ডায়নামিক্স।",
      tags: ["Poster Art", "Manipulation", "Retouching"]
    },
    {
      id: "illustrator",
      name: "Illustrator",
      category: "software",
      proficiency: 60,
      iconName: "https://i.postimg.cc/BnTXRCCB/illustrator.png",
      description: "ভেক্টর আর্ট, লোগো ডিজাইন, কাস্টম শাইনি শেপস এবং আইকনোগ্রাফি।",
      tags: ["Vector Art", "Logo", "Typography"]
    },
    {
      id: "ibis_paint",
      name: "Ibis Paint X",
      category: "software",
      proficiency: 95,
      iconName: "https://i.postimg.cc/9QdrsBBP/ibispaint.jpg",
      description: "মোবাইল ডিজিটাল পেন্টিং, কাস্টম টেক্সচার ব্রাশওয়ার্ক এবং ক্রিয়েটিভ থাম্বনেল আর্ট।",
      tags: ["Mobile Art", "Digital Painting", "Anime Art"]
    },
    {
      id: "pixellab",
      name: "Pixellab",
      category: "software",
      proficiency: 95,
      iconName: "https://i.postimg.cc/cLRrPccF/pixellab.png",
      description: "মোবাইল ৩ডি টাইপোগ্রাফি, পোস্টার ব্যানার লেআউট এবং কাস্টম বাংলা ফন্ট কম্পোজ।",
      tags: ["3D Typography", "Banner", "Bangla Design"]
    },
    {
      id: "ps_cc_2019",
      name: "PS CC 2019",
      category: "software",
      proficiency: 85,
      iconName: "https://i.postimg.cc/bwxs4RRV/pstouch.avif",
      description: "এডভান্সড কালার গ্রেডিং, লেয়ার মাস্কিং এবং ক্যামেরা র ফিল্টার এনহ্যান্সমেন্ট।",
      tags: ["Color Grading", "Compositing", "FX"]
    },
    {
      id: "poster_design",
      name: "পোস্টার ডিজাইন",
      category: "design_field",
      proficiency: 99,
      iconName: "Palette",
      description: "হাই-ইম্প্যাক্ট মুভি, ইভেন্ট ও প্রমোশনাল পোস্টার আর্টওয়ার্ক।",
      tags: ["Promotional", "Movie Poster", "Social Media"]
    },
    {
      id: "yt_thumbnail",
      name: "ইউটিউব থাম্বনেল",
      category: "design_field",
      proficiency: 99,
      iconName: "Youtube",
      description: "হাই-সিটিআর (CTR) ড্রামাটিক ও ক্লিন থাম্বনেল ডিজাইন যা ক্লিক বাড়াতে সহায়ক।",
      tags: ["High CTR", "Clickbait Free", "Vlog & Tech"]
    },
    {
      id: "edu_thumbnail",
      name: "এডুকেশন থাম্বনেল",
      category: "design_field",
      proficiency: 96,
      iconName: "GraduationCap",
      description: "শিক্ষামূলক কোর্স, অনলাইন ক্লাস ও টিউটোরিয়ালের প্রিমিয়াম ক্লিয়ার আর্ট।",
      tags: ["Course Art", "Educational", "Class Banner"]
    }
  ],
  services: [
    {
      id: "poster_design_service",
      title: "পোস্টার ডিজাইন",
      shortDesc: "ইভেন্ট, প্রমোশন, ব্র্যান্ডিং ও মুভি পোস্টারের জন্য হাই-ইম্প্যাক্ট ক্রিয়েটিভ ডিজাইন।",
      iconName: "Maximize2",
      features: [
        "ফটোরিয়ালিস্টিক কম্পোজিটিং",
        "হাই-রেজোলিউশন প্রিন্ট ও ওয়েব রেডি",
        "কাস্টম কালার গ্রেডিং ও শেডো ইফেক্ট",
        "অপরিবর্তনীয় ব্র্যান্ড গাইডলাইন"
      ],
      deliverables: "PSD, PNG, JPG (4K Output)",
      turnaroundTime: "২৪-৪৮ ঘণ্টা"
    },
    {
      id: "yt_thumbnail_service",
      title: "ইউটিউব থাম্বনেল ডিজাইন",
      shortDesc: "আপনার ইউটিউব ভিডিওর ভিউ ও ক্লিক থ্রু রেট (CTR) দ্রুত বৃদ্ধি করার স্পেশাল থাম্বনেল।",
      iconName: "PlayCircle",
      features: [
        "আই-ক্যাচিং এক্সপ্রেশন অ্যান্ড কাটআউট",
        "হাই রিডেবিলিটি বোল্ড বাংলা/ইংরেজি টাইপো",
        "সাইকোলজিক্যাল কালার প্যালেট",
        "৩ডি ইলুমিনেশন ও ডেপথ"
      ],
      deliverables: "PNG (1080p Ultra Clear)",
      turnaroundTime: "১২-২৪ ঘণ্টা"
    },
    {
      id: "edu_thumbnail_service",
      title: "এডুকেশন থাম্বনেল",
      shortDesc: "অনলাইন একাডেমি, কোর্স ও টিউটোরিয়ালের জন্য মার্জিত ও প্রফেশনাল কভার আর্ট।",
      iconName: "BookOpen",
      features: [
        "সহজ ও পরিচ্ছন্ন ইনফোগ্রাফিক আর্ট",
        "বিষয়ভিত্তিক আইকন ও সিম্বল",
        "ব্র্যান্ড কনসিস্টেন্সি মেইনটেইন",
        "মাল্টিপল ভ্যারিয়েন্ট সাপোর্টেড"
      ],
      deliverables: "PSD, PNG, PDF",
      turnaroundTime: "২৪ ঘণ্টা"
    },
    {
      id: "content_creation_service",
      title: "কন্টেন্ট ক্রিয়েশন ও ব্র্যান্ডিং",
      shortDesc: "সোশ্যাল মিডিয়া প্রমোশন, ফেসবুক পেজ ব্যানার ও রিল কভার ক্রিয়েটিভস।",
      iconName: "Share2",
      features: [
        "ফেসবুক কভার ও পোস্ট ব্যানার",
        "কাস্টম সোশ্যাল গ্রাফিক্স প্যাকেজ",
        "ইউনিফর্ম কালার ব্র্যান্ডিং",
        "স্টোরি ও রিল থিমস"
      ],
      deliverables: "JPG, PNG, Vector",
      turnaroundTime: "১-২ দিন"
    },
    {
      id: "custom_theme_service",
      title: "কাস্টম থিম ডিজাইন",
      shortDesc: "ব্লগার ও ওয়েবসাইটের জন্য রেসপন্সিভ, ক্লিন ও স্টাইলিশ UI কাস্টমাইজেশন।",
      iconName: "Code2",
      features: [
        "ব্লগার ও ওয়েব ফ্রেন্ডলি কোডিং",
        "রেসপন্সিভ ও ফাস্ট লোডিং UI",
        "কাস্টম কালার ও ফন্ট ম্যাচিং",
        "সহজ এডিটেবল উইজেট স্ট্রাকচার"
      ],
      deliverables: "HTML/CSS Code & Documentation",
      turnaroundTime: "২-৩ দিন"
    }
  ],
  experiences: [
    {
      id: "exp_1",
      year: "২০২৬ - বর্তমান",
      role: "সিনিয়র গ্রাফিক্স ডিজাইনার",
      company: "পাড়াহীন একাডেমি (Parahin Academy)",
      location: "বাংলাদেশ (রিমোট)",
      description: "কোর্স থাম্বনেল, সোশ্যাল মিডিয়া ক্যাম্পেইন ব্যানার এবং ব্র্যান্ড আইডেন্টিটি তৈরির দায়িত্ব পালন।",
      keyProjects: ["৬০০+ থাম্বনেল", "অফিসিয়াল ব্র্যান্ড রিব্র্যান্ডিং", "প্রোমো কন্টেন্ট"]
    },
    {
      id: "exp_2",
      year: "২০২৩ - ২০২৬",
      role: "ফ্রিডেন্স থাম্বনেল ও পোস্টার স্পেশালিস্ট",
      company: "ইউটিউব ক্রিয়েটর নেটওয়ার্ক",
      location: "গ্লোবাল ক্লায়েন্টস",
      description: "জনপ্রিয় ২০+ ইউটিউব চ্যানেলের জন্য নিয়মিত হাই-সিটিআর থাম্বনেল ও ভিডিও আর্টওয়ার্ক তৈরি।",
      keyProjects: ["১০০+ ইউটিউব থাম্বনেল", "টেক ও ট্রাভেল চ্যানেল রিব্র্যান্ডিং"]
    }
  ],
  portfolio: [
    {
      id: "port_1",
      title: "সংসারের বন্ধন — অফিসিয়াল নাটক পোস্টার ডিজাইন",
      category: "natok_poster",
      categoryLabel: "নাটক পোস্টার ডিজাইন",
      imageUrl: "https://i.postimg.cc/j28Vv1VJ/Songsar-er-bondhon.jpg",
      description: "রাফ মাল্টিমিডিয়া পরিবেশিত পারিবারিক নাটক 'সংসারের বন্ধন'-এর অফিশিয়াল কী-ভিজ্যুয়াল ও পোস্টার আর্টওয়ার্ক।",
      longDescription: "পারিবারিক আবেগ, মমতা ও সম্পর্কের গভীরতা ফুটিয়ে তুলতে 'সংসারের বন্ধন' নাটকটির জন্য এই পোস্টারটি ডিজাইন করা হয়েছে। এতে ওয়ার্ম সানসেট টোন, সুবিন্যস্ত ক্যাস্ট কম্পোজিশন এবং আই-ক্যাচিং কাস্টম টাইপোগ্রাফি ব্যবহার করা হয়েছে, যা দর্শকের নজর কাড়তে সক্ষম।",
      viewsCount: "94K+ ভিউজ",
      achievement: "অফিসিয়াল নাটক হিট পোস্টার",
      technologies: ["Ibis Paint X", "Pixellab"],
      clientName: "Raad Multimedia",
      year: "২০২৫",
      liveUrl: "https://youtu.be/RJniX0nZwNU?si=Lhq1jAD5VFn2aiOD",
      designVersion: "v3.2 Master"
    },
    {
      id: "port_2",
      title: "হায়রে কপাল — হাই-সিটিআর ইউটিউব থাম্বনেল ডিজাইন",
      category: "natok_thumbnail",
      categoryLabel: "নাটক থাম্বনেল",
      imageUrl: "https://i.postimg.cc/wTv3H8BY/Hayre-Kopal.jpg",
      description: "'Meo Entertainment' চ্যানেলের ২.৩ মিলিয়নের বেশি ভিউ হওয়া হিট নাটক 'হায়রে কপাল'-এর জন্য তৈরি হাই-কনভার্টিং থাম্বনেল।",
      longDescription: "'Meo Entertainment' চ্যানেলের ২.৩ মিলিয়নের বেশি ভিউ হওয়া হিট নাটক 'হায়রে কপাল'-এর জন্য তৈরি হাই-কনভার্টিং থাম্বনেল। ভিডিওর অডিয়েন্স রিটেনশন ও হাই সিটিআর নিশ্চিত করতে ড্রামাটিক ফেসিয়াল এক্সপ্রেশন এবং ভাইব্র্যান্ট কালার মোড ব্যবহৃত হয়েছে।",
      viewsCount: "2.3M+ ভিউজ",
      achievement: "২৩ লাখ+ ট্রেন্ডিং নাটকের থাম্বনেল",
      technologies: ["Pixellab"],
      clientName: "Meo Entertantment",
      year: "২০২৫",
      liveUrl: "https://youtu.be/CYm9tW22qLo?si=6XM_GbUiYTWSUNXw",
      designVersion: "v2.5 High-CTR"
    },
    {
      id: "port_3",
      title: "ক্লাস ৮ এক্সাম স্ট্র্যাটেজি: HulkenStein Infinity School থাম্বনেল",
      category: "education",
      categoryLabel: "এডুকেশন থাম্বনেল",
      imageUrl: "https://i.postimg.cc/hvxNBYx5/edu-1.jpg",
      description: "অষ্টম শ্রেণীর এক্সাম গাইডের জন্য তৈরি একটি প্রিমিয়াম থাম্বনেল। হাই-কনভার্সন (High-CTR) নিশ্চিত করতে এতে আকর্ষণীয় ডার্ক-গোল্ডেন কালার স্কিম এবং স্পষ্ট টাইপোগ্রাফি ব্যবহার করা হয়েছে।",
      longDescription: "অষ্টম শ্রেণীর এক্সাম গাইডের জন্য তৈরি একটি প্রিমিয়াম থাম্বনেল। HulkenStein Infinity School চ্যানেলের হাই-কনভার্সন (High-CTR) নিশ্চিত করতে এতে আকর্ষণীয় ডার্ক-গোল্ডেন কালার স্কিম এবং স্পষ্ট টাইপোগ্রাফি ব্যবহার করা হয়েছে।",
      viewsCount: "15K+ ভিউজ",
      achievement: "হাই-সিটিআর এডুকেশনাল রেকর্ড",
      technologies: ["Pixellab", "Ibis Paint X"],
      clientName: "HulkenStein Infinity School",
      year: "২০২৫",
      liveUrl: "https://youtu.be/3DhY3Fkm1YY?si=d-4Gzbuu__mekr4Q",
      designVersion: "v1.8 Gold Edition"
    },
    {
      id: "port_4",
      title: "প্রিমিয়াম ডার্ক লাক্সারি কাস্টম থিম",
      category: "custom_theme",
      categoryLabel: "কাস্টম থিম",
      imageUrl: "https://i.postimg.cc/rsFF9mFd/fbd8b403-9dba-42c1-a984-1293f50492cd.jpg",
      description: "ব্লগার ও পোর্টফোলিও ওয়েবসাইটের জন্য সুপার-ফাস্ট ও গ্লাসফিজম UI সহ কাস্টম থিম ডিজাইন।",
      longDescription: "ব্লগার ও পোর্টফোলিও ওয়েবসাইটের জন্য তৈরি সুপার-ফাস্ট, এসইও ফ্রেন্ডলি ও প্রিমিয়াম গ্লাসফিজম UI কাস্টম থিম। দ্রুত লোডিং স্পিড ও ১০০/১ ১০০ পারফরম্যান্স স্কোরের নিশ্চয়তা।",
      viewsCount: "N/A",
      achievement: "১০০/১০০ লাইটহাউস পারফরম্যান্স",
      technologies: ["HTML5", "CSS3", "Tailwind", "JavaScript"],
      clientName: "Masum 9T9",
      year: "২০২৬",
      liveUrl: "https://9t9.pro.bd",
      completionProgress: 100,
      designVersion: "v4.0 Production"
    },
    {
      id: "port_5",
      title: "বৃত্তি পরীক্ষা ২০২৫: HulkenStein Infinity School থাম্বনেল",
      category: "education",
      categoryLabel: "এডুকেশন থাম্বনেল",
      imageUrl: "https://i.postimg.cc/XJ2Y5pzZ/edu-2.jpg",
      description: "১৭K+ ভিউয়ার্স সমৃদ্ধ একটি সফল এডুকেশনাল প্রজেক্ট। সঠিক কালার হায়ারার্কি ও ফোকাস ইলুমিনেশনের মাধ্যমে জটিল বিষয়কে আকর্ষণীয়ভাবে ফুটিয়ে তোলা হয়েছে।",
      longDescription: "১৭K+ ভিউয়ার্স সমৃদ্ধ একটি সফল এডুকেশনাল প্রজেক্ট। সঠিক কালার হায়ারার্কি, ফোকাস ইলুমিনেশন এবং রিডেবল ফন্টের মাধ্যমে জটিল বিষয়কে আকর্ষণীয়ভাবে ফুটিয়ে তোলা হয়েছে।",
      viewsCount: "১৭K+ ভিউজ",
      achievement: "ইউটিউব পপুলার এডুকেশন সার্চ",
      technologies: ["Pixellab", "Ibis Paint X"],
      clientName: "HulkenStein Infinity School",
      year: "২০২৫",
      liveUrl: "https://youtu.be/NEROv4rdatA?si=xJo7Pj2AEj0k7boo",
      designVersion: "v2.0 Clean"
    },
    {
      id: "port_6",
      title: "হায়রে কপাল — অফিসিয়াল নাটক পোস্টার ডিজাইন",
      category: "natok_poster",
      categoryLabel: "নাটক পোস্টার ডিজাইন",
      imageUrl: "https://i.postimg.cc/Qxmcs9WJ/hyre-kopal-poster.jpg",
      description: "'Meo Entertainment'-এর ২.৩ মিলিয়নের বেশি ভিউ পাওয়া সুপারহিট নাটক 'হায়রে কপাল'-এর অফিশিয়াল ফার্স্ট লুক পোস্টার ডিজাইন।",
      longDescription: "ইউটিউবে ২.৩ মিলিয়নেরও বেশি ভিউ অর্জনকারী হিট নাটক 'হায়রে কপাল'-এর জন্য তৈরি অফিশিয়াল প্রমোশনাল পোস্টার। নাটকটির রোমান্টিক ও ড্রামাটিক আমেজ ফুটিয়ে তুলতে এতে বোল্ড ৩ডি কাস্টম বাংলা টাইপোগ্রাফি, ন্যাচারাল ওয়ার্ম কালার গ্রেডিং, ক্যারেক্টার পজিশনিং এবং সোশ্যাল মিডিয়া ফ্রেন্ডলি প্রফেশনাল ক্রেডিট ব্লক ব্যবহার করা হয়েছে।",
      viewsCount: "2.3M+ রিচ",
      achievement: "২৩ লাখ+ ট্রেন্ডিং নাটকের পোস্টার",
      technologies: ["Pixellab"],
      clientName: "Meo Entertainment",
      year: "২০২৫",
      liveUrl: "https://youtu.be/CYm9tW22qLo?si=6XM_GbUiYTWSUNXw",
      designVersion: "v3.0 Ultra HD"
    }
  ],
  featuredEcosystem: [
    {
      id: "eco_1",
      badge: "Portfolio",
      title: "Portfolio Website",
      mainUrl: "https://www.9t9.pro.bd",
      imageUrl: "https://i.postimg.cc/rsFF9mFd/fbd8b403-9dba-42c1-a984-1293f50492cd.jpg",
      description: "A professional portfolio featuring graphic design, branding, UI concepts, and AI-powered web development. Showcasing creative projects, technical expertise, and digital solutions for modern businesses.",
      completionProgress: 100,
      designVersion: "v4.5 Stable",
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
        "https://i.postimg.cc/rsFF9mFd/fbd8b403-9dba-42c1-a984-1293f50492cd.jpg",
        "https://i.postimg.cc/j28Vv1VJ/Songsar-er-bondhon.jpg",
        "https://i.postimg.cc/wTv3H8BY/Hayre-Kopal.jpg"
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
      name: "আরিফুল ইসলাম",
      role: "ইউটিউবার ও কন্টেন্ট ক্রিয়েটর",
      company: "TechTalk BD (350k+ Subs)",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
      rating: 5,
      comment: "মাসুম ভাইয়ের থাম্বনেল ডিজাইন ব্যবহার করার পর থেকে আমার চ্যানেলের গড় CTR ৯% থেকে বেড়ে ১৫.৪% হয়েছে! তার কাজের ফিনিশিং এবং টাইপোগ্রাফি জাস্ট অসাম।",
      projectType: "ইউটিউব থাম্বনেল"
    },
    {
      id: "test_2",
      name: "আল মাহি রহমান",
      role: "শিক্ষক",
      company: "HulkenStein Infinity School",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
      rating: 5,
      comment: "আমাদের অনেকগুলো একাডেমিক ক্লাস থাম্বনেইল ও পোস্টার মাসুম ডিজাইন করে দিয়েছে। সময়মতো ডেলিভারি ও প্রিমিয়াম কোয়ালিটির জন্য তাকে ১০০% রিকমেন্ড করি।",
      projectType: "এডুকেশন গ্রাফিক্স"
    },
    {
      id: "test_3",
      name: "মেঘ হিম",
      role: "পরিচালক",
      company: "Raad Multimedia & Meo Entertanment",
      avatarUrl: "https://i.postimg.cc/d1zKSjFk/Megh-Heem.jpg",
      rating: 5,
      comment: "পোস্টার ডিজাইনে উনার কম্পোজিশন সেন্স দারুণ। ওনার থেকে বেশ কয়েকটা পোস্টার আর থাম্বনেইল নিয়েছি, তার মধ্যে 'হায়রে কপাল', 'সংসারের বন্ধন' এবং 'আব্বা' উল্লেখযোগ্য। তার এই সুন্দর কাজের জন্য আমার নতুন চ্যানেল একবারে ২.৩M+ ভিউ অর্জন করতে পেরেছে।",
      projectType: "পোস্টার ডিজাইন"
    },
    {
      id: "test_4",
      name: "সাদিয়া রহমান",
      role: "ডিজিটাল মার্কেটার",
      company: "স্মার্ট ব্র্যান্ডস লিমিটেড",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250",
      rating: 5,
      comment: "আমাদের ব্র্যান্ডের প্রমোশনাল ব্যানারের সেলস রূপান্তর অনেক বেড়েছে। মাসুম ভাই কাস্টমার সাইকোলজি বুঝে কাজ করেন। ধন্যবাদ!",
      projectType: "সোশ্যাল ব্যানার"
    },
    {
      id: "test_5",
      name: "মাহমুদুল হাসান",
      role: "ব্লগার ও ডেভেলপার",
      company: "টেকটিউনস বিডি",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=250",
      rating: 5,
      comment: "কাস্টম থিম ডিজাইনে মাসুম ভাইয়ের কাজ অত্যন্ত ক্লিন ও রেসপন্সিভ। কোনো বাগ ছাড়াই স্মুথ পারফর্ম করে। অত্যন্ত প্রফেশনাল!",
      projectType: "কাস্টম থিম"
    }
  ],
  achievements: [
    {
      id: "ach_1",
      number: 500,
      suffix: "+",
      label: "সম্পন্ন প্রজেক্ট",
      iconName: "CheckCircle2"
    },
    {
      id: "ach_2",
      number: 350,
      suffix: "+",
      label: "সন্তুষ্ট ক্লায়েন্ট",
      iconName: "Smile"
    },
    {
      id: "ach_3",
      number: 5,
      suffix: "+ বছর",
      label: "কাজের অভিজ্ঞতা",
      iconName: "Award"
    },
    {
      id: "ach_4",
      number: 1000,
      suffix: "+",
      label: "কাস্টম আর্ট অ্যাসেট",
      iconName: "Layers"
    },
    {
      id: "ach_5",
      number: 1200,
      suffix: "+",
      label: "কাপ কফি ☕",
      iconName: "Coffee"
    }
  ],
  faqs: [
    {
      id: "faq_1",
      question: "আমি কীভাবে প্রজেক্ট অর্ডার করবো?",
      answer: "আপনি ওয়েবসাইটের কন্টাক্ট ফর্ম, সরাসরি হোয়াটসঅ্যাপ (01303-623838) অথবা ইমেইলে (masum.9t9.gd@gmail.com) প্রজেক্টের বিবরণ পাঠাতে পারেন। আমি সাথে সাথে আপনার প্রজেক্ট রিভিউ করে ডিটেইলস জানিয়ে দেবো।",
      category: "অর্ডার"
    },
    {
      id: "faq_2",
      question: "একটি থাম্বনেল বা পোস্টার তৈরিতে কত সময় লাগে?",
      answer: "সাধারণত ইউটিউব থাম্বনেলের জন্য ১২ থেকে ২৪ ঘণ্টা এবং পোস্টার আর্টের জন্য ২৪ থেকে ৪৮ ঘণ্টা সময় প্রয়োজন হয়। জরুরি প্রজেক্টের জন্য এক্সপ্রেস ডেলিভারি সুবিধা রয়েছে।",
      category: "সময়"
    },
    {
      id: "faq_3",
      question: "কাজের ডেলিভারি ফাইল কী কী ফরম্যাটে পাবো?",
      answer: "আপনার প্রয়োজন অনুযায়ী হাই-রেজোলিউশন PNG, JPG, HD PDF এবং সোর্স ফাইল (Photoshop PSD বা Illustrator AI) প্রদান করা হয়।",
      category: "ফাইল"
    },
    {
      id: "faq_4",
      question: "যদি ডিজাইনে কোনো পরিবর্তন প্রয়োজন হয়?",
      answer: "আমি প্রতিটি প্রজেক্টে আনলিমিটেড রিভিশন সুবিধা প্রদান করি যতক্ষণ না আপনি প্রজেক্টে শতভাগ সন্তুষ্ট হচ্ছেন।",
      category: "রিভিশন"
    },
    {
      id: "faq_5",
      question: "পেমেন্ট পদ্ধতি কীভাবে সম্পন্ন করা হয়?",
      answer: "বিকাশ (Bkash), নগদ (Nagad), রকেট (Rocket) অথবা ব্যাংক ট্রান্সফারের মাধ্যমে সহজেই পেমেন্ট করা যায়। প্রজেক্টের ধরণ অনুযায়ী ৫০% এডভান্স প্রযোজ্য হতে পারে।",
      category: "পেমেন্ট"
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
    location: "সাতক্ষীরা, খুলনা, বাংলাদেশ",
    googleSheetScriptUrl: "https://script.google.com/macros/s/AKfycbybx_ey85GMFxDSMHXH3ljkaM4s4PRircG3XPOWVYjYkLTfwJJqFo85wnKzjsbR51FIfg/exec",
    telegramBotToken: (import.meta as unknown as { env: Record<string, string> }).env?.VITE_TELEGRAM_BOT_TOKEN || "8833148612:AAHihj3OkapzuM0RemcOv29ahsUEhnRIhuc",
    telegramChatId: "8634088852"
  }
};

const STORAGE_KEY = 'masum_9t9_portfolio_config_v2';

export function loadPortfolioConfig(): PortfolioConfig {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return {
        ...INITIAL_PORTFOLIO_CONFIG,
        ...parsed,
        hero: {
          ...INITIAL_PORTFOLIO_CONFIG.hero,
          ...(parsed.hero || {})
        },
        about: {
          ...INITIAL_PORTFOLIO_CONFIG.about,
          ...(parsed.about || {})
        },
        socials: {
          ...INITIAL_PORTFOLIO_CONFIG.socials,
          ...(parsed.socials || {})
        },
        contact: {
          ...INITIAL_PORTFOLIO_CONFIG.contact,
          ...(parsed.contact || {}),
          telegramBotToken: (parsed.contact?.telegramBotToken && !parsed.contact.telegramBotToken.includes('AAGSPsGtv4dApiRQ3r-ad7mKxFZUj0MdTc0'))
            ? parsed.contact.telegramBotToken
            : INITIAL_PORTFOLIO_CONFIG.contact.telegramBotToken
        },
        featuredEcosystem: parsed.featuredEcosystem || INITIAL_PORTFOLIO_CONFIG.featuredEcosystem
      };
    }
  } catch (e) {
    console.error("Failed to load portfolio config from storage", e);
  }
  return INITIAL_PORTFOLIO_CONFIG;
}

import { ENGLISH_PORTFOLIO_CONFIG } from './translations';

export function getLocalizedPortfolioConfig(baseConfig: PortfolioConfig, lang: 'bn' | 'en'): PortfolioConfig {
  const safeBase = baseConfig || INITIAL_PORTFOLIO_CONFIG;
  if (lang === 'bn') {
    return {
      ...INITIAL_PORTFOLIO_CONFIG,
      ...safeBase,
      hero: { ...INITIAL_PORTFOLIO_CONFIG.hero, ...(safeBase.hero || {}) },
      about: { ...INITIAL_PORTFOLIO_CONFIG.about, ...(safeBase.about || {}) },
      skills: safeBase.skills || INITIAL_PORTFOLIO_CONFIG.skills,
      services: safeBase.services || INITIAL_PORTFOLIO_CONFIG.services,
      experiences: safeBase.experiences || INITIAL_PORTFOLIO_CONFIG.experiences,
      portfolio: safeBase.portfolio || INITIAL_PORTFOLIO_CONFIG.portfolio,
      featuredEcosystem: safeBase.featuredEcosystem || INITIAL_PORTFOLIO_CONFIG.featuredEcosystem,
      testimonials: safeBase.testimonials || INITIAL_PORTFOLIO_CONFIG.testimonials,
      achievements: safeBase.achievements || INITIAL_PORTFOLIO_CONFIG.achievements,
      faqs: safeBase.faqs || INITIAL_PORTFOLIO_CONFIG.faqs,
      socials: { ...INITIAL_PORTFOLIO_CONFIG.socials, ...(safeBase.socials || {}) },
      contact: { ...INITIAL_PORTFOLIO_CONFIG.contact, ...(safeBase.contact || {}) },
    };
  }

  const eng = ENGLISH_PORTFOLIO_CONFIG || INITIAL_PORTFOLIO_CONFIG;
  return {
    ...INITIAL_PORTFOLIO_CONFIG,
    ...eng,
    hero: { ...eng.hero, ...(safeBase.hero?.profileImage ? { profileImage: safeBase.hero.profileImage } : {}) },
    socials: { ...eng.socials, ...(safeBase.socials || {}) },
    contact: { ...eng.contact, ...(safeBase.contact || {}) },
    skills: eng.skills || safeBase.skills || INITIAL_PORTFOLIO_CONFIG.skills,
    services: eng.services || safeBase.services || INITIAL_PORTFOLIO_CONFIG.services,
    experiences: eng.experiences || safeBase.experiences || INITIAL_PORTFOLIO_CONFIG.experiences,
    portfolio: eng.portfolio || safeBase.portfolio || INITIAL_PORTFOLIO_CONFIG.portfolio,
    featuredEcosystem: eng.featuredEcosystem || safeBase.featuredEcosystem || INITIAL_PORTFOLIO_CONFIG.featuredEcosystem,
    testimonials: (safeBase.testimonials && safeBase.testimonials.length > 0)
      ? safeBase.testimonials
      : (eng.testimonials || INITIAL_PORTFOLIO_CONFIG.testimonials),
    achievements: eng.achievements || safeBase.achievements || INITIAL_PORTFOLIO_CONFIG.achievements,
    faqs: eng.faqs || safeBase.faqs || INITIAL_PORTFOLIO_CONFIG.faqs,
  };
}

export function savePortfolioConfig(config: PortfolioConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (e) {
    console.error("Failed to save portfolio config to storage", e);
  }
}

export function resetPortfolioConfig(): PortfolioConfig {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error("Failed to reset portfolio config", e);
  }
  return INITIAL_PORTFOLIO_CONFIG;
}
