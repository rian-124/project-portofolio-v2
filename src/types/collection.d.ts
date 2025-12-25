export interface About {
  description: string;
  profilImage: string;
}

export interface Hero {
  avatar: string;
  name: string;
  role: [];
  socials: {
    github: string;
    instagram: string;
    linkdin: string;
    tiktok: string;
  };
  tagline: string;
}

export interface Experience {
  company: string;
  date: string;
  description: string;
  sites: string;
  role: string;
}

export interface Certificates {
  issuer: string;
  link: string;
  preview: string;
  title: string;
}

export interface Projects {
  date: string;
  description: string;
  demo: string;
  github: string;
  image: string[];
  tech: string[];
  title: string;
  category: string;
}
