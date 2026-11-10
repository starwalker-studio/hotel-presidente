import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";

export const HotelSiteRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
