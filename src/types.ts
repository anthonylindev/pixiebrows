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
  price?: string;
  duration: string;
  painLevel?: string;
  healingTime?: string;
  pricesTitle?: string;
  prices?: PriceDetail[];
  disclaimer?: string;
  image: string
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

export interface DirectMessage {
  messageText: string;
  fromClient: boolean;
}

export type DmJson = DirectMessage[][]