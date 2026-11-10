export interface IFOOTER {
  BRAND: {
    NAME: string;
    TEXT: string;
  };
  SOCIALS: {
    id: number;
    label: string;
    href: string;
  }[];
  COLUMNS: {
    id: number;
    title: string;
    links: {
      id: number;
      label: string;
      href: string;
    }[];
  }[];
  CONTACT_TITLE: string;
  CONTACT: {
    ADDRESS: string;
    PHONE: {
      label: string;
      href: string;
    };
    WHATSAPP: {
      label: string;
      href: string;
    };
    EMAIL: {
      label: string;
      href: string;
    };
  };
  LEGAL: {
    id: number;
    label: string;
    href: string;
  }[];
  DISCLAIMER: string;
}
