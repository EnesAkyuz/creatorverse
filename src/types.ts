// src/types.ts
export interface Socials {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    twitch?: string;
  }
  
  export interface CardItem {
    id: number | string;
    image: string;
    title: string;
    description: string;
    socials: Socials;
    learn: string;
  }
  