export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  channels: string[];
  useCases: string[];
  deliverables: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceInterest: string[];
  message: string;
  privacyAccepted: boolean;
}

export type LegalDocType = 'aviso-legal' | 'privacidad' | 'cookies' | null;
