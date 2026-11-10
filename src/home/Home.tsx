import {
  Explore,
  Hero,
  Location,
  Offers,
  Rooms,
  SliderServices,
  Welcome
} from "./sections";

export const Home = () => {
  return (
    <>
      <Hero />
      <Welcome />
      <Rooms />
      <SliderServices />
      <Explore />
      <Offers />
      <Location />
    </>
  );
};
