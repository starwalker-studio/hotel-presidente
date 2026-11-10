export interface ISECTIONS {
  HERO: {
    TITLE: string;
    SUBTITLE: string;
    MAIN_BUTTON: string;
    SECONDARY_BUTTON: string;
    ADDITIONAL_DATA: {
      id: number;
      label: string;
    }[];
  };
  WELCOME: {
    TITLE: string;
    TEXT: string;
    EST: {
      id: number;
      text: string;
    }[];
    IMG: string;
  };
  ROOMS: {
    TITLE: string;
    SUB_TITLE: string;
    LIST: {
      id: number;
      img: string;
      label: string;
      desc: string;
      cap: string;
      price: string;
      button_label: string;
    }[];
    NOTE: string;
    SEE_ALL_BUTTON: string;
  };
  EXPLORE: {
    TITLE: string;
    SUBTITLE: string;
    EXPERIENCE: {
      id: number;
      title: string;
      desc: string;
      img: string;
    }[];
    BUTTON: string;
  };
  OFFERS: {
    TITLE: string;
    PACKAGES: {
      id: number;
      title: string;
      text: string;
      label: string;
      img: string;
      background: string;
    }[];
  };
  LOCATION: {
    EYEBROW: string;
    TITLE: string;
    TEXT: string;
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
    DISTANCES: {
      id: number;
      place: string;
      time: string;
    }[];
  };
}
