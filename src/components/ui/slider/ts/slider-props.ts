export type SliderProps = {
  slides: Slide[];
  interval?: number;
  autoPlay?: boolean;
};

export type Slide = {
  id: number | string;
  img: string;
  title: string;
  text: string;
};
