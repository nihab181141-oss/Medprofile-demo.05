/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TranslationText {
  en: string;
  bn: string;
}

export interface DoctorProfile {
  name: TranslationText;
  titles: TranslationText;
  specialization: TranslationText;
  subtitle: TranslationText;
  intro: TranslationText;
  longBio: TranslationText;
  yearsOfExperience: number;
  patientsCared: string;
  successRate: string;
  phone: string;
  whatsapp: string;
  email: string;
  facebook: string;
  linkedin: string;
  youtube?: string;
  addressSummary: TranslationText;
}

export interface Degree {
  year: string;
  degree: TranslationText;
  institution: TranslationText;
}

export interface Experience {
  period: string;
  role: TranslationText;
  institution: TranslationText;
}

export interface Membership {
  title: TranslationText;
}

export interface Award {
  year: string;
  title: TranslationText;
  issuer: TranslationText;
}

export interface MedicalService {
  id: string;
  title: TranslationText;
  description: TranslationText;
  icon: string;
  details: TranslationText[];
}

export interface TreatmentCondition {
  name: TranslationText;
  category: string;
}

export interface Chamber {
  id: string;
  name: TranslationText;
  address: TranslationText;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  visitingHours: TranslationText;
  schedule: TranslationText[];
  assistantPhone: string;
  fee: TranslationText;
  notes: TranslationText;
}

export interface Testimonial {
  id: string;
  author: TranslationText;
  age: number;
  condition: TranslationText;
  rating: number;
  text: TranslationText;
  date: string;
}

export interface Article {
  id: string;
  title: TranslationText;
  category: TranslationText;
  excerpt: TranslationText;
  content: TranslationText;
  readTime: TranslationText;
  date: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: TranslationText;
  answer: TranslationText;
}

export interface GalleryItem {
  id: string;
  title: TranslationText;
  category: "chamber" | "medical" | "certificate" | "events";
  image: string;
}

export interface AppointmentRequest {
  id: string;
  patientName: string;
  patientPhone: string;
  preferredDate: string;
  preferredTime: string;
  chamberId: string;
  reason: string;
  status: "pending" | "confirmed";
  createdAt: string;
}
