export type Post = {
  id: string;
  description: string;
  star: string;
  address: string;
  title: string;
  attributes: {
    acreage: string;
    hashtag: string;
    price?: string;
    published: string;
  };
  images?: {
    image?: string[];
  };
  user: {
    name: string;
    phone: string;
    zalo: string;
  };
};

export type Category = {
  code: string;
  value: string;
  label: string;
};

export type Province = {
  code: string;
  value: string;
};

export type Price = {
  code: string;
  value: string;
};

export type Area = {
  code: string;
  value: string;
};

export type User = {
  id: string;
  name: string;
  phone: string;
  zalo?: string;
  fbUrl?: string;
  avatar?: string;
};
