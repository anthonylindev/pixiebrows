export interface PriceDetail {
  price: string;
  desc: string;
}

export interface Service {
  id: number;
  title: string;
  info: string;
  desc: string;
  moreInfo: string;
  price: string;
  time: string;
  painLevel: string;
  healingTime: string;
  prices?: PriceDetail[]; // Optional because not all services include this
  disclaimer?: string; // Optional because not all services include this
}

export interface Policy {
  title: string;
  description: string
}

export interface Faq {
  question: string;
  answer: string
}

export interface Aftercare {
  aftercareInstructions: string[];
  whatIsNormal: string[];
  importantNote: string
}

export interface Preop {
  instructions: string[];
  tips: string[]
}