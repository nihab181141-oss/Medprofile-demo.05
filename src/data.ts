/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  DoctorProfile,
  Degree,
  Experience,
  Membership,
  Award,
  MedicalService,
  TreatmentCondition,
  Chamber,
  Testimonial,
  Article,
  FAQItem,
  GalleryItem
} from "./types";

export const doctorProfile: DoctorProfile = {
  name: {
    en: "Prof. Dr. Adnan Chowdhury",
    bn: "প্রফেসর ড. আদনান চৌধুরী"
  },
  titles: {
    en: "PhD (Cardiology), MBBS, FCPS, FRCP (London)",
    bn: "পিএইচডি (কার্ডিওলজি), এমবিবিএস, এফসিপিএস, এফআরসিপি (লন্ডন)"
  },
  specialization: {
    en: "Senior Consultant Cardiologist & Medicine Specialist",
    bn: "সিনিয়র কনসালটেন্ট কার্ডিওলজিস্ট ও মেডিসিন বিশেষজ্ঞ"
  },
  subtitle: {
    en: "Over 18 years of pioneering clinical excellence in adult cardiology, interventional medicine, and comprehensive cardiovascular care.",
    bn: "প্রাপ্তবয়স্ক কার্ডিওলজি, ইন্টারভেনশনাল মেডিসিন এবং কমপ্রিহেনসিভ হৃদরোগ চিকিৎসায় ১৮ বছরেরও বেশি অভিজ্ঞতাসম্পন্ন অগ্রগামী কার্ডিওলজিস্ট।"
  },
  intro: {
    en: "Dr. Adnan Chowdhury is a world-class cardiologist with specialization in advanced interventional cardiology and cardiac care. He represents the pinnacle of medical empathy, combining state-of-the-art diagnostics with therapeutic solutions that respect the patient's convenience, lifestyle, and financial choices.",
    bn: "ড. আদনান চৌধুরী উন্নত ইন্টারভেনশনাল কার্ডিওলজি এবং হৃদরোগ সুরক্ষায় একজন বিশ্বমানের বিশেষজ্ঞ। তিনি যুগের সেরা প্রযুক্তির সাথে মায়া ও সহানুভূতির মেলবন্ধন ঘটিয়ে রোগীদের সুচিকিৎসা প্রদান করেন, যা জীবনযাত্রার মান উন্নত করতে সাহায্য করে।"
  },
  longBio: {
    en: "Prof. Dr. Adnan Chowdhury is a highly respected Senior Consultant Cardiologist and Head of Interventional Cardiology, with over 18 years of clinical instruction and surgical leadership. Recognized with numerous fellowships worldwide, including Royal College of Physicians and Surgeons, his philosophy prioritizes compassionate medical consultation, high-accuracy early diagnosis, and precise cardiac intervention procedures when absolutely necessary. He splits his time between active operating suites, academic research, and community-driven awareness seminars.",
    bn: "প্রফেসর ড. আদনান চৌধুরী একজন অত্যন্ত শ্রদ্ধেয় সিনিয়র কনসালটেন্ট কার্ডিওলজিস্ট এবং ইন্টারভেনশনাল কার্ডিওলজি বিভাগের প্রধান, যার প্রায় ১৮ বছরেরও বেশি ক্লিনিক্যাল ও সার্জিক্যাল নেতৃত্ব দেওয়ার অনন্য ইতিহাস রয়েছে। লন্ডনের রয়্যাল কলেজ অফ ফিজিশিয়ানস-সহ বহু মর্যাদাপূর্ণ বৈশ্বিক ফেলোশিপে ভূষিত এ চিকিৎসকের মূল দর্শন হলো পরম সহমর্মিতা, নিখুঁত প্রারম্ভিক রোগ নির্ণয় এবং প্রয়োজনীয় ক্ষেত্রে অত্যন্ত নির্ভুল কার্ডিয়াক ইন্টারভেনশন। তিনি তাঁর কর্মব্যস্ততার একটি বড় অংশ সাজিয়েছেন অপারেশন থিয়েটার, উচ্চতর গবেষণাকর্ম এবং জনসচেতনতামূলক স্বাস্থ্য সেমিনারের মাধ্যমে।"
  },
  yearsOfExperience: 18,
  patientsCared: "25,000+",
  successRate: "99.4%",
  phone: "+8801712345678",
  whatsapp: "https://wa.me/8801712345678",
  email: "dr.adnanchowdhury@gmail.com",
  facebook: "https://facebook.com/dr.adnan.cardiology",
  linkedin: "https://linkedin.com/in/dr-adnan-chowdhury-cardio",
  youtube: "https://youtube.com/@dr.adnanchowdhury",
  addressSummary: {
    en: "Dhaka, Bangladesh",
    bn: "ঢাকা, বাংলাদেশ"
  }
};

export const degrees: Degree[] = [
  {
    year: "2012",
    degree: {
      en: "PhD in Clinical Cardiology",
      bn: "ক্লিনিক্যাল কার্ডিওলজিতে পিএইচডি"
    },
    institution: {
      en: "Imperial College London, UK",
      bn: "ইম্পেরিয়াল কলেজ লন্ডন, যুক্তরাজ্য"
    }
  },
  {
    year: "2008",
    degree: {
      en: "FCPS in Cardiology",
      bn: "কার্ডিওলজিতে এফসিপিএস"
    },
    institution: {
      en: "Bangladesh College of Physicians and Surgeons (BCPS)",
      bn: "বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস"
    }
  },
  {
    year: "2006",
    degree: {
      en: "MRCP (Medicine)",
      bn: "এমআরসিপি (মেডিসিন)"
    },
    institution: {
      en: "Royal College of Physicians, London, UK",
      bn: "রয়্যাল কলেজ অব ফিজিশিয়ানস, লন্ডন, যুক্তরাজ্য"
    }
  },
  {
    year: "2002",
    degree: {
      en: "MBBS (First Class Honors)",
      bn: "এমবিবিএস (প্রথম শ্রেণী অনার্স)"
    },
    institution: {
      en: "Dhaka Medical College, Bangladesh",
      bn: "ঢাকা মেডিকেল কলেজ, বাংলাদেশ"
    }
  }
];

export const experiences: Experience[] = [
  {
    period: "2018 - Present",
    role: {
      en: "Professor & Senior Consultant, Cardiology",
      bn: "অধ্যাপক ও সিনিয়র কনসালটেন্ট, কার্ডিওলজি বিভাগ"
    },
    institution: {
      en: "National Heart Foundation of Bangladesh, Dhaka",
      bn: "ন্যাশনাল হার্ট ফাউন্ডেশন অব বাংলাদেশ, ঢাকা"
    }
  },
  {
    period: "2013 - 2018",
    role: {
      en: "Associate Professor, Interventional Cardiology",
      bn: "সহযোগী অধ্যাপক, ইন্টারভেনশনাল কার্ডিওলজি"
    },
    institution: {
      en: "Bangabandhu Sheikh Mujib Medical University (BSMMU)",
      bn: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয় (বিএসএমএমইউ)"
    }
  },
  {
    period: "2009 - 2013",
    role: {
      en: "Consultant Cardiologist",
      bn: "কনসালটেন্ট কার্ডিওলজিস্ট"
    },
    institution: {
      en: "Evercare Hospital (Formerly Apollo Hospital), Dhaka",
      bn: "এভারকেয়ার হসপিটাল (সাবেক অ্যাপোলো হসপিটাল), ঢাকা"
    }
  }
];

export const memberships: Membership[] = [
  {
    title: {
      en: "Life Member, Bangladesh Cardiac Society",
      bn: "আজীবন সদস্য, বাংলাদেশ কার্ডিয়াক সোসাইটি"
    }
  },
  {
    title: {
      en: "Fellow, European Society of Cardiology (FESC)",
      bn: "ফেলো, ইউরোপিয়ান সোসাইটি অব কার্ডিওলজি"
    }
  },
  {
    title: {
      en: "Member, American College of Cardiology (ACC)",
      bn: "সদস্য, আমেরিকান কলেজ অব কার্ডিওলজি (এসিসি)"
    }
  },
  {
    title: {
      en: "Fellow, Society for Cardiovascular Angiography & Interventions (FSCAI)",
      bn: "ফেলো, সোসাইটি ফর কার্ডিওভাসকুলার অ্যাঞ্জিওগ্রাফি অ্যান্ড ইন্টারভেনশন"
    }
  }
];

export const awards: Award[] = [
  {
    year: "2023",
    title: {
      en: "National Outstanding Medical Pioneer Award",
      bn: "জাতীয় অসামান্য চিকিৎসা পথপ্রদর্শক পদক"
    },
    issuer: {
      en: "Ministry of Health & Family Welfare, Bangladesh",
      bn: "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয়, বাংলাদেশ"
    }
  },
  {
    year: "2019",
    title: {
      en: "Presidential Shield for Social Cardiac Care",
      bn: "সামাজিক কার্ডিয়াক সুরক্ষায় মহামান্য রাষ্ট্রপতির মেডেল"
    },
    issuer: {
      en: "Bangladesh Red Crescent Society",
      bn: "বাংলাদেশ রেড ক্রিসেন্ট সোসাইটি"
    }
  },
  {
    year: "2011",
    title: {
      en: "Best Young Investigator in Cardiovascular Science",
      bn: "হৃদরোগ গবেষণায় শ্রেষ্ঠ তরুণ বিজ্ঞানী অ্যাওয়ার্ড"
    },
    issuer: {
      en: "British Cardiovascular Society, London",
      bn: "ব্রিটিশ কার্ডিওভাসকুলার সোসাইটি, লন্ডন"
    }
  }
];

export const services: MedicalService[] = [
  {
    id: "cardiac-consultation",
    title: {
      en: "Premium Cardiac Consultation",
      bn: "উন্নত কার্ডিয়াক কনসাল্টেশন"
    },
    description: {
      en: "In-depth, empathetic consultation for all categories of cardiovascular health, medication review, and life-changing cardiac advice.",
      bn: "হৃদরোগ সংক্রান্ত সকল জটিলতা, জীবনযাত্রা ও ওষুধের সঠিক ব্যবহারের বিষয়ে গভীর এবং সহমর্মিতাপূর্ণ দীর্ঘ পরমার্শ।"
    },
    icon: "HeartPulse",
    details: [
      { en: "High blood pressure (Hypertension) management", bn: "উচ্চ রক্তচাপ বা হাইপারটেনশন নিয়ন্ত্রণ" },
      { en: "Ischemic heart disease assessment & protocol", bn: "ইস্কেমিক হার্ট ডিজিজের আধুনিক চিকিৎসা" },
      { en: "Cardiac prevention strategies for busy executives", bn: "ব্যস্ত পেশাজীবীদের জন্য হৃদরোগ প্রতিরোধ প্রকল্প" },
      { en: "Post-heart attack rehabilitation guidance", bn: "হার্ট অ্যাটাক-পরবর্তী পুনর্বাসন নির্দেশনা" }
    ]
  },
  {
    id: "interventional-cardio",
    title: {
      en: "Interventional Cardiology",
      bn: "ইন্টারভেনশনাল কার্ডিওলজি"
    },
    description: {
      en: "State-of-the-art catheterization procedures designed to heal your heart system with absolute precision, minimal discomfort, and swift recovery.",
      bn: "নিখুঁত ও অত্যাধুনিক ক্যাথেটারাইজেশন প্রক্রিয়া, যার মাধ্যমে বুকে ব্যথা ছাড়াই দ্রুত পুনরুদ্ধার ও নিরাময় সম্ভব।"
    },
    icon: "Activity",
    details: [
      { en: "Diagnostic coronary angiogram (Radial/Femoral)", bn: "নিখুঁত করোনারি এনজিওগ্রাম (হাত/পায়ের ধমনী ও শিরা দিয়ে)" },
      { en: "Complex coronary angioplasty with premium drug-eluting stents", bn: "আমদানিকৃত উন্নত ড্রাগ-এলুটিং স্টেন্ট বা রিং পরানো" },
      { en: "Pacemaker & ICD implantation (Single & Double chamber)", bn: "পেসমেকার ও আইসিডি ইমপ্লান্টেশন (সিঙ্গেল ও ডাবল চেম্বার)" },
      { en: "Heart hole closure without open heart surgery (ASD/VSD device)", bn: "বুক না কেটে হার্টের ছিদ্র বন্ধ করার ডিভাইস চিকিৎসা (ASD/VSD)" }
    ]
  },
  {
    id: "advanced-diagnostics",
    title: {
      en: "Advanced Imaging & Diagnostics",
      bn: "উন্নত ডায়াগনস্টিক ও ইমেজিং"
    },
    description: {
      en: "Advanced high-precision cardiology laboratory assessments utilizing the latest digital ultrasound and ECG technology for secure diagnostic results.",
      bn: "নিরাপদ ও নির্ভরযোগ্য রিপোর্টের জন্য সর্বাধুনিক ডিজিটাল আল্ট্রাসাউন্ড ও ইসিজি প্রযুক্তিশোভিত কার্ডিওলজি রোগ নির্ণয়।"
    },
    icon: "Layers",
    details: [
      { en: "High-resolution Color Doppler Echocardiography", bn: "উচ্চ রেজল্যুশন কালার ডপলার ইকোকার্ডিওগ্রাফি" },
      { en: "Digital Exercise Tolerance Test (ETT / Stress Test)", bn: "ডিজিটাল এক্সারসাইজ টলারেন্স টেস্ট বা ইটিটি" },
      { en: "24/48-Hour Holter ECG monitoring for Arrhythmia", bn: "২৪/৪৮ ঘণ্টা হোল্টার ইসিজি মনিটরিং" },
      { en: "Ambulatory Blood Pressure Monitoring (ABPM)", bn: "অ্যাম্বুলেরেটরি ব্লাড প্রেসার মনিটরিং (এবিপিএম)" }
    ]
  },
  {
    id: "preventive-care",
    title: {
      en: "Preventive Cardiovascular Suite",
      bn: "হৃদরোগ প্রতিরোধ ও চেকআপ"
    },
    description: {
      en: "Tailored health wellness solutions focusing on genetic predispositions, dietary enhancements, and cardiac monitoring targeting long-term health protection.",
      bn: "বংশগত ঝুঁকি নির্ণয়, খাদ্যাভ্যাসের বৈজ্ঞানিক আধিক্য এবং নিয়মিত সুরক্ষামূলক ট্র্যাকিংয়ের সমন্বয়ে দীর্ঘস্থায়ী হার্ট কেয়ার।"
    },
    icon: "ShieldCheck",
    details: [
      { en: "Custom dietary plans & cholesterol management programs", bn: "কোলেস্টেরল নিয়ন্ত্রণ ও ব্যক্তিকেন্দ্রিক ডায়েট সুবিধা" },
      { en: "Genetic risk profiling for generational heart conditions", bn: "পারিবারিক হার্ট অ্যাটাকের ঝুঁকি নিরসনে জেনেটিক প্রোফাইল" },
      { en: "Smoking cessation and medical detox counseling", bn: "ধূমপান বর্জন ও তামাকমুক্ত হার্ট তৈরির চিকিৎসা" },
      { en: "Stress-relieving lifestyle coaching & heart-safe workout presets", bn: "মানসিক চাপ কমানো ও হার্ট-বান্ধব শারীরিক ব্যায়ামের গাইড" }
    ]
  }
];

export const treatedConditions: TreatmentCondition[] = [
  { name: { en: "Hypertension / High Blood Pressure", bn: "উচ্চ রক্তচাপ বা হাইপারটেনশন" }, category: "general" },
  { name: { en: "Chest Pain / Angina", bn: "বুকে ব্যথা বা অ্যানজাইনা" }, category: "emergency" },
  { name: { en: "Heart Attacks & Blockages", bn: "হার্ট অ্যাটাক ও ব্লকেজ" }, category: "emergency" },
  { name: { en: "Heart Failure management", bn: "হার্ট ফেইলিওর ব্যবস্থাপনা" }, category: "general" },
  { name: { en: "Irregular Heartbeats / Arrhythmia", bn: "অনিয়মিত হৃদস্পন্দন বা অ্যারিদমিয়া" }, category: "general" },
  { name: { en: "Valvular Heart Disease", bn: "হার্ট ভালভের সমস্যা" }, category: "surgical" },
  { name: { en: "High Cholesterol / Dyslipidemia", bn: "উচ্চ রক্ত কোলেস্টেরল" }, category: "general" },
  { name: { en: "Congenital Heart Defects (Heart Hole)", bn: "জন্মগত গুটি বা হার্টের ছিদ্র" }, category: "surgical" }
];

export const chambers: Chamber[] = [
  {
    id: "labaid-dhanmondi",
    name: {
      en: "Labaid Specialized Hospital, Dhanmondi",
      bn: "ল্যাবএইড স্পেশালাইজড হাসপাতাল, ধানমন্ডি"
    },
    address: {
      en: "House-06, Road-04, Dhanmondi, Dhaka - 1205",
      bn: "বাড়ি-০৬, রোড-০৪, ধানমন্ডি, ঢাকা - ১২০৫"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3652.2741549448883!2d90.37894931536294!3d23.737637894178553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0e8c61adb%3A0xcbe6861214081fff!2sLabaid%20Specialized%20Hospital!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd",
    mapDirectionsUrl: "https://maps.app.goo.gl/r6f2q8Hq8v7B7WdE8",
    visitingHours: {
      en: "05:00 PM - 09:00 PM (Saturday - Thursday)",
      bn: "বিকাল ৫:০০ টা - রাত ৯:০০ টা (শনিবার - বৃহস্পতিবার)"
    },
    schedule: [
      { en: "Saturday: 5:00 PM - 9:00 PM", bn: "শনিবার: ৫:০০ বিকাল - ৯:০০ রাত" },
      { en: "Sunday: 5:00 PM - 9:00 PM", bn: "রবিবার: ৫:০০ বিকাল - ৯:০০ রাত" },
      { en: "Monday: 5:00 PM - 9:00 PM", bn: "সোমবার: ৫:০০ বিকাল - ৯:০০ রাত" },
      { en: "Tuesday: 5:00 PM - 9:00 PM", bn: "মঙ্গলবার: ৫:০০ বিকাল - ৯:০০ রাত" },
      { en: "Wednesday: 5:00 PM - 9:00 PM", bn: "বুধবার: ৫:০০ বিকাল - ৯:০০ রাত" },
      { en: "Thursday: 5:00 PM - 9:00 PM", bn: "বৃহস্পতিবার: ৫:০০ বিকাল - ৯:০০ রাত" }
    ],
    assistantPhone: "+8801811223344",
    fee: {
      en: "৳1,500 (New Patient) / ৳1,000 (Follow-up)",
      bn: "১,৫০০ টাকা (নতুন রোগী) / ১,০০০ টাকা (রিপোর্ট)"
    },
    notes: {
      en: "Note: For serials, call the booking number strictly between 8:00 AM - 1:00 PM.",
      bn: "বিশেষ দ্রষ্টব্য: সিরিয়ালের জন্য সকাল ৮:০০ টা থেকে দুপুর ১:০০ টার মধ্যে সহকারীকে কল করুন।"
    }
  },
  {
    id: "national-heart",
    name: {
      en: "National Heart Foundation (Hospital Wing)",
      bn: "ন্যাশনাল হার্ট ফাউন্ডেশন (হাসপাতাল উইং)"
    },
    address: {
      en: "Plot-4, Road-2, Section-2, Mirpur-2, Dhaka - 1216",
      bn: "প্লট-৪, রোড-২, সেকশন-২, মিরপুর-২, ঢাকা - ১২১৬"
    },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3650.366750376136!2d90.35467431536417!3d23.805537391584742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12000000001%3A0xe6bf44b5efc1c9c4!2sNational%20Heart%20Foundation%20Hospital%20%26%20Research%20Institute!5e0!3m2!1sen!2sbd!4v1680000000001!5m2!1sen!2sbd",
    mapDirectionsUrl: "https://maps.app.goo.gl/g69U5Z6gZ4y78QWbA",
    visitingHours: {
      en: "09:00 AM - 02:00 PM (Sunday & Monday)",
      bn: "সকাল ৯:০০ টা - দুপুর ২:০০ টা (রবি ও সোমবার)"
    },
    schedule: [
      { en: "Sunday: 9:00 AM - 2:00 PM", bn: "রবিবার: ৯:০০ সকাল - ২:০০ দুপুর" },
      { en: "Monday: 9:00 AM - 2:00 PM", bn: "সোমবার: ৯:০০ সকাল - ২:০০ দুপুর" }
    ],
    assistantPhone: "+8801999887766",
    fee: {
      en: "৳1,000 (New Patient) / ৳600 (Follow-up)",
      bn: "১,০০০ টাকা (নতুন রোগী) / ৬০০ টাকা (রিপোর্ট)"
    },
    notes: {
      en: "Note: Highly subsidized institutional consultation. Serials are allocated on arrival.",
      bn: "বিশেষ দ্রষ্টব্য: কার্ডিয়াক ফাউন্ডেশনের অধীনে সরকারি অনুদানপ্রাপ্ত সেবা। সিরিয়াল আগে আসলে আগে পাবেন ভিত্তিতে দেওয়া হয়।"
    }
  }
];

export const FAQData: FAQItem[] = [
  {
    id: "faq-1",
    question: {
      en: "When should I see a cardiologist instead of a general physician?",
      bn: "সাধারণ চিকিৎসকের পরিবর্তে কখন আমার কার্ডিওলজিস্টের শরণাপন্ন হওয়া উচিত?"
    },
    answer: {
      en: "You should see a cardiologist if you experience unexplained chest pains, regular palpitations or fluttering in the chest, breathing difficulties during mild exercises, or have strong family history of young cardiac deaths. Also if you have chronic hypertension or diabetes, regular heart checks are recommended.",
      bn: "যদি আপনার বুকে অস্বাভাবিক ব্যথা, নিয়মিত বুক ধড়ফড় বা পিন্ড অনুভূত হওয়া, হালকা পরিশ্রমেই শ্বাসকষ্ট হওয়া অথবা বংশে কম বয়সে হৃদরোগে মারা যাওয়ার ইতিহাস থাকে, তবে অবিলম্বে কার্ডিওলজিস্ট দেখানো উচিত। এছাড়া উচ্চ রক্তচাপ বা ডায়াবেটিস আক্রান্তদের নিয়মিত হার্ট চেকআপের পরামর্শ দেওয়া হয়।"
    }
  },
  {
    id: "faq-2",
    question: {
      en: "How do I secure an appointment with Dr. Adnan Chowdhury?",
      bn: "ড. আদনান চৌধুরীর অ্যাপয়েন্টমেন্ট কীভাবে বুক করব?"
    },
    answer: {
      en: "You can easily request an appointment directly over this website using our 'Book Appointment' form, book via our WhatsApp action, or call Dr. Adnan’s assistants directly (+8801811223344 for Labaid or +8801999887766 for Heart Foundation) during chamber desk hours.",
      bn: "আপনি আমাদের ওয়েবসাইটে দেওয়া 'অ্যাপয়েন্টমেন্ট বুকিং' ফর্মটি ফিলে আপ করে সরাসরি রিকোয়েস্ট পাঠাতে পারেন। এছাড়া হোয়াটসঅ্যাপ আইকন ক্লিক করে মেসেজ দিয়ে অথবা রেজিস্ট্রেশন ফোনে কল দিয়েও সহজেই সিরিয়াল বুক করা সম্ভব।"
    }
  },
  {
    id: "faq-3",
    question: {
      en: "What should I bring during my first cardiac visit?",
      bn: "প্রথমবার চেম্বারে আসার সময় সাথে কী কী আনা আবশ্যক?"
    },
    answer: {
      en: "Please bring all your ongoing medications (or actual prescription list), any recent blood test reports (done within the last 3 months), and all old ECG, Echo, or Angioplasty reports/DVDs if you had surgery before. This prevents duplicate tests and saves you money.",
      bn: "অনুগ্রহ করে আপনার চলমান সকল ওষুধ (অথবা স্পষ্ট ব্যবস্থাপত্র), গত ৩ মাসের মধ্যে করা রক্ত পরীক্ষার রিপোর্ট এবং পুরোনো কোনো ইসিজি, ইকোকার্ডিওগ্রাম বা রিঙের রিপোর্ট সঙ্গে নিয়ে আসবেন। এতে অপ্রীতিকর অতিরিক্ত খরচ ও একই ট্রায়াল বারবার করার ঝামেলা বাঁচে।"
    }
  },
  {
    id: "faq-4",
    question: {
      en: "What is Dr. Adnan's visiting fee structure?",
      bn: "ডক্টরের ভিজিট ফি কত?"
    },
    answer: {
      en: "At Labaid Dhanmondi, the consultation fee is ৳1,500 for the first visit and ৳1,000 for visits within 15 days (follow-up). At National Heart Foundation, it is subsidized at ৳1,000 for new patients and ৳600 for follow-ups.",
      bn: "ধানমন্ডি ল্যাবএইডে নতুন রোগীর পরামর্শ ফি ১,৫০০ টাকা এবং ১৫ দিনের মধ্যে ফলো-আপ বা রিপোর্টের ফি ১,০০০ টাকা। ন্যাশনাল হার্ট ফাউন্ডেশনে বিশেষ ছাড়ে নতুন রোগীর ফি ১,০০০ টাকা এবং রিপোর্টের জন্য ৬০০ টাকা।"
    }
  },
  {
    id: "faq-5",
    question: {
      en: "What is Interventional Cardiology and is it safe?",
      bn: "ইন্টারভেনশনাল কার্ডিওলজি কী এবং এটি কতটুকু নিরাপদ?"
    },
    answer: {
      en: "Interventional cardiology is a non-surgical branch that uses tiny flexible tube catheters to treat heart blockages without cracking the sternum or open surgery (e.g. Angioplasty / Stenting). Under Dr. Adnan's highly trained expertise, these radial artery-based access procedures have a 99.4% standard success rate and allow next-day discharge.",
      bn: "ইন্টারভেনশনাল কার্ডিওলজি হলো হৃদরোগ চিকিৎসার এমন একটি আধুনিক নন-সার্জিক্যাল শাখা, যেখানে বুক না কেটে ক্যাথেটারের সাহায্যে সূক্ষ্মভাবে বন্ধ হয়ে যাওয়া ধমনীর চিকিৎসা (যেমন রিং পরানো বা এনজিওপ্লাস্টি) করা হয়। ড. আদনানের সুদক্ষ তত্ত্বাবধানে এই পদ্ধতিতে জটিলতা প্রায় শূন্য এবং সাধারণত রোগী পরের দিনই বাসায় ফিরে যেতে পারেন।"
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    author: {
      en: "Haji Mohammad Yusuf",
      bn: "হাজী মোহাম্মদ ইউসুফ"
    },
    age: 62,
    condition: {
      en: "Triple Vessel Disease (Radial Stenting)",
      bn: "ট্রিপল ভেসেল ডিজিজ (রিং পরানো)"
    },
    rating: 5,
    text: {
      en: "Dr. Adnan saved my life. I was extremely scared of open-heart surgery, but he accurately placed two medical stents through my wrist radial artery. I walked back home the very next day. His compassionate behavior is like therapy itself.",
      bn: "ড. আদনান চৌধুরী আমার জীবন বাঁচিয়েছেন। আমি ওপেন হার্ট সার্জারি করাতে খুব ভয় পাচ্ছিলাম। কিন্তু উনি আমার কবজির ধমনী দিয়ে অত্যন্ত নিপুণভাবে দুটি রিং পরিয়ে দিলেন। পরের দিনই আমি ভালো হয়ে হেঁটে বাড়ি ফিরেছি। ওনার অমায়িক ব্যবহারই অর্ধেক মনের জোর ফিরিয়ে দেয়।"
    },
    date: "May 12, 2026"
  },
  {
    id: "t-2",
    author: {
      en: "Dr. Nusrat Jahan",
      bn: "ডা. নুসরাত জাহান"
    },
    age: 45,
    condition: {
      en: "Complex Hypertension Management",
      bn: "জটিল রক্তচাপ নিয়ন্ত্রণ"
    },
    rating: 5,
    text: {
      en: "As a fellow medical practitioner, I only trust Dr. Adnan for my elderly mother's cardiac challenges. His diagnostic logic is stellar. He does not recommend unneeded medical investigations, which is incredibly rare and respectable in modern medical landscape.",
      bn: "নিজে একজন চিকিৎসক হওয়া সত্ত্বেও আমার বৃদ্ধা মায়ের হার্টের চিকিৎসার জন্য আমি কেবল ড. আদনানের ওপরেই ভরসা রাখি। ওনার ডায়াগনস্টিক বিচক্ষণতা অনন্য। অনাবশ্যক বাড়তি টেস্ট না লিখে উনি একদম মূল সমস্যার চিকিৎসা করেন।"
    },
    date: "April 29, 2026"
  },
  {
    id: "t-3",
    author: {
      en: "Shaheen Akhter",
      bn: "শাহীন আকতার"
    },
    age: 51,
    condition: {
      en: "Heart Failure with Severe Fluid Retention",
      bn: "তীব্র শ্বাসকষ্ট ও হার্ট ফেইলিওর"
    },
    rating: 5,
    text: {
      en: "I was struggling with high shortness of breath and fluid overload in my lungs. Dr. Adnan carefully balanced my medications and drafted a customized fluid management lifestyle guide. Today I can play with my grandchildren pain-free.",
      bn: "আমি খুব খারাপভাবে শ্বাসকষ্ট এবং ফুসফুসে পানি জমার সমস্যায় ভুগছিলাম। ড. আদনান আমাদের কষ্ট করে সব বুঝিয়ে ওষুধ ও তরল খাওয়ার জীবনযাত্রার নিয়ম নির্ধারণ করে দিলেন। এখন আল্লাহর রহমতে আমি একদম সুস্থভাবে নাতি-নাতনিদের সাথে খেলা করতে পারি।"
    },
    date: "March 18, 2026"
  }
];

export const articles: Article[] = [
  {
    id: "art-1",
    title: {
      en: "Silent Heart Attacks: 5 Hidden Indicators You Must Not Ignore",
      bn: "নীরব হার্ট অ্যাটাক: ৫টি গোপন লক্ষণ যা কখনোই অবহেলা করবেন না"
    },
    category: {
      en: "Cardiac Awareness",
      bn: "হার্ট সচেতনতা"
    },
    excerpt: {
      en: "Not all cardiac arrests start with dramatic crushing central chest pains. Learn to recognize the subtle, silent markers of modern heart stress.",
      bn: "সব হার্ট অ্যাটাক তীব্র বা নাটকীয় বুকে ব্যথা নিয়ে শুরু হয় না। বর্তমান ব্যস্ত সময়ে হার্টের তীব্র অবসাদের সুক্ষ্ম লক্ষণগুলো চিনতে শিখুন।"
    },
    content: {
      en: "Silent myocardial infarction, commonly known as a silent heart attack, accounts for nearly 45% of all heart attacks worldwide. Patients often mistake the symptoms for acute indigestion, throat strain, or standard breathing stress. The primary warning flags include: 1. Unexplained breaking cold sweats, especially during rest. 2. A nagging discomfort, heaviness or pressure in the center of your chest rather than sharp pain. 3. Shooting numbness radiating upward to your throat, jawline, or down the left arm. 4. Sudden unexplained nausea paired with extreme physical fatigue. If you experience these, especially when combined with a history of high blood sugar or chronic smoking, consult a doctor immediately and run a preliminary ECG.",
      bn: "সাইলেন্ট হার্ট অ্যাটাক অত্যন্ত বিপজ্জনক কারণ এতে কোনো লক্ষণীয় তীব্র কষ্ট ধরা পড়ে না। এটি মোট হার্ট অ্যাটাকের প্রায় ৪৫ শতাংশ জুড়ে অবদান রাখে! অনেক রোগী একে গ্যাস্ট্রিকের সমস্যা, গলা খুশখুশ বা সাধারণ ক্লান্তি বলে ভুল করেন। লক্ষণীয় সতর্কতাগুলো হলো: ১. কোনো কারণ ছাড়াই ঠান্ডা ও চটচটে ঘাম দেওয়া। ২. বুকের ঠিক মাঝখানে সুক্ষ্ম ভারী ভাব, যন্ত্রণাদায়ক চাপ অনুভব হওয়া। ৩. চোয়াল, গলা অথবা বাঁ হাতের দিকে ব্যথা ছড়িয়ে পড়া। ৪. তীব্র হড়হড় ও আচমকা শরীর ঝিমিয়ে যাওয়া। আপনার যদি অনিয়ন্ত্রিত ডায়াবেটিসের ইতিহাস থাকে তবে এই নীরব লক্ষণগুলো দেখামাত্রই ইসিজি এবং ট্রপোনিন আই টেস্ট করা আবশ্যক।"
    },
    readTime: {
      en: "4 min read",
      bn: "৪ মিনিট পাঠ"
    },
    date: "June 10, 2026",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "art-2",
    title: {
      en: "High Cholesterol: Medical Myths vs. Scientific Reality",
      bn: "উচ্চ কোলেস্টেরল: প্রচলিত কুসংস্কার বনাম বৈজ্ঞানিক সত্যতা"
    },
    category: {
      en: "Lifestyle & Diet",
      bn: "খাদ্যাভ্যাস ও লাইফস্টাইল"
    },
    excerpt: {
      en: "Does completely cutting out healthy dietary fats protect your heart? We analyze cholesterol myths with science-backed clinical research.",
      bn: "সব ধরণের চর্বি বা তেল বর্জন করলেই কি রক্তনালী পরিষ্কার থাকে? কোলেস্টেরল সংক্রান্ত অন্ধবিশ্বাসগুলো বিজ্ঞানসম্মত চিকিৎসাবিজ্ঞান দিয়ে যাচাই করুন।"
    },
    content: {
      en: "Many believe cholesterol is inherently toxic for your heart system. In truth, your liver synthesizes nearly 80% of necessary cholesterol to generate vital hormones and protect cell walls. We must differentiate between HDL (good cholesterol) and LDL/Triglycerides (potentially bad cholesterol). Completely starving your body of fats can actually trigger compensatory liver over-synthesis! It is critical to abandon saturated trans-fats (processed fast food, deeply fried baked goods) and integrate high-potency monounsaturated fats (nuts, seeds, olive oils, local mustard oil in limits). Regular physical aerobic exercise like brisk walking 30 minutes a day is twice more effective in lifting HDL cholesterol than standard lifestyle starvation plans.",
      bn: "অনেকে মনে করেন সব ধরণের কোলেস্টেরল বুঝি হার্টের শত্রু। কিন্তু সত্য হলো আমাদের যকৃৎ বা লিভার শরীরের অতিপ্রয়োজনীয় হরমোন ও কোষের সুরক্ষায় ৮০% কোলেস্টেরল নিজ থেকেই তৈরি করে! আমাদের জানতে হবে এইচডিএল (ভালো চর্বি) এবং এলডিএল (অনুপকারী চর্বি) এর চমৎকার তফাৎ। হঠাৎ চর্বিযুক্ত খাবার শূন্যে নামালে দেহ উল্টো বেশি খারাপ চর্বি উৎপাদন করতে পারে! ফাস্টফুড বা ডালডার মতো ক্ষতিকর ট্রান্স-ফ্যাট বর্জন করে বাদাম, বীজ অথবা সরিষার তেল পরিমিত ব্যবহার করতে হবে। প্রতিদিন ৩০ মিনিট জোরে হাঁটা আপনার ভালো কোলেস্টেরলকে সুস্থ মাত্রায় ধরে রাখতে ডায়েটের চেয়ে বেশি কার্যকর ভূমিকা রাখে।"
    },
    readTime: {
      en: "5 min read",
      bn: "৫ মিনিট পাঠ"
    },
    date: "May 25, 2026",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: "art-3",
    title: {
      en: "Beating 'Executive Hypertension': Managing Stress & Heart Health",
      bn: "উচ্চ রক্তচাপ নিয়ন্ত্রণ: আধুনিক পেশাজীবীদের হার্ট সুস্থ রাখার কৌশল"
    },
    category: {
      en: "Preventive Care",
      bn: "প্রতিরোধমূলক টিপস"
    },
    excerpt: {
      en: "Corporate workloads and late nights are secretly destroying modern blood pressure cycles. Read our actionable cardiological protection protocol.",
      bn: "অতিরিক্ত কাজের চাপ ও রাত জাগার কারণে নীরবে বেড়ে চলছে করপোরেট কর্মীদের ব্লাড প্রেসার। হৃদযন্ত্র সুরক্ষিত রক্তচাপের সঠিক গাইড পড়ুন।"
    },
    content: {
      en: "Modern high-stress jobs and lack of deep rest trigger continuous adrenaline release, keeping blood vessels restricted and elevating your heart rate indefinitely. This leads to early arterial hardening and severe chronic hypertension. To cope, adopt the 20-20-20 corporate cardiac protocol: Every 20 minutes look away, stretch your shoulders, and drink water. Most importantly, strictly restrict processed snacks in office drawers (which contain massive hidden sodium) and optimize sleeping rooms to block artificial blue-light screens at least 1 hour before sleep to let the coronary system safely recover.",
      bn: "অফিসের মানসিক চাপ এবং পরিমিত বিশ্রামের অভাবে রক্তে প্রতিনিয়ত অ্যাড্রেনালিন হরমোন ক্ষরিত হয়, যা রক্তনালীগুলোকে সংকুচিত করে তোলে এবং হৃদস্পন্দনের হার বৃদ্ধি করে। এটি দীর্ঘমেয়াদে উচ্চ রক্তচাপের সৃষ্টি করে। প্রতিকার হিসেবে কাজের মাঝে ২০-২০-২০ নিয়ম অনুসরণ করুন: প্রতি ২০ মিনিট পর শরীর শিথিল করুন, বুক ফুলিয়ে প্রশ্বাস নিন ও ডেস্কটপ চোখ থেকে সরিয়ে নিন। এছাড়া প্রক্রিয়াজাত প্যাকেটজাত স্ন্যাকস পরিহার করুন (যাতে অতিমাত্রায় সোডিয়াম থাকে) এবং ঘুমানোর ১ ঘণ্টা পূর্বে সব প্রকার মোবাইল-স্ক্রিন বন্ধের মাধ্যমে রক্তনালীকে স্বাভাবিক অবসাদ কাটানোর সময় দিন।"
    },
    readTime: {
      en: "6 min read",
      bn: "৬ মিনিট পাঠ"
    },
    date: "May 04, 2026",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&auto=format&fit=crop"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: {
      en: "Prof. Dr. Adnan Chowdhury in Consultation",
      bn: "রোগীর সাধারণ স্বাস্থ্য পরামর্শে ড. চৌধুরী"
    },
    category: "chamber",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gal-2",
    title: {
      en: "State-of-the-Art Dhanmondi Labaid Chamber Office",
      bn: "ল্যাবএইড স্পেশালাইজড হাসপাতাল চেম্বার"
    },
    category: "chamber",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gal-3",
    title: {
      en: "Advanced Cardiac Color-Doppler Ultrasound Scanner",
      bn: "উন্নত কালার ডপলার আল্ট্রাসাউন্ড স্ক্যানার"
    },
    category: "medical",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gal-4",
    title: {
      en: "Royal College of Physicians fellowship verification London",
      bn: "রয়্যাল কলেজ অফ ফিজিশিয়ানস ফেলোশিপ সনদ"
    },
    category: "certificate",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gal-5",
    title: {
      en: "Cardiology Annual Seminar Speech at BSMMU",
      bn: "বিএসএমএমইউ কার্ডিওলজি বার্ষিক সেমিনারে বক্তব্য"
    },
    category: "events",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gal-6",
    title: {
      en: "Dr. Adnan Chowdhury Leading Cardiac Angioplasty Team",
      bn: "সার্জিক্যাল রুমে ইন্টারভেনশন প্রক্রিয়া পরিচালনায় ড. চৌধুরী"
    },
    category: "medical",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop"
  }
];
