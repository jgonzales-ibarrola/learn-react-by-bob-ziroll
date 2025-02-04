export type ArticleData =  {
  id?: number;
  img: {
      src: string;
      alt: string;
  };
  title: string;
  country: string;
  googleMapsLink: string;
  dates: string;
  text: string;
  className?: string;
}