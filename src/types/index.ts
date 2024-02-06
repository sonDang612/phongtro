export type Post = {
  id: string;
  description: string;
  star: string;
  address: string;
  title: string;
  attributes: {
    acreage: string;
    hashtag: string;
    price: string;
    published: string;
  };
  images: {
    image: string[];
  };
  user: {
    name: string;
    phone: string;
    zalo: string;
  };
};
