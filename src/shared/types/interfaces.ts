export interface INavItem {
  title: string;
  route: string;
  icon?: JSX.Element;
}

export interface SocialLink {
  icon: JSX.Element;
  route: string;
}

export interface IDrawerContext {
  toggleDrawer: () => void;
}

export interface INewsletter {
  email: string;
}

export interface IContactUs {
  full_name: string;
  message: string;
  message_sender: string;
}

export interface IHomeService {
  title: string;
  imageUrl: string;
  description: string;
}
