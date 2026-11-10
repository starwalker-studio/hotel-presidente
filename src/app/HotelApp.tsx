import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/common/footer/Footer";
import { Header } from "../components/common/header/Header";
import { HotelSiteRoutes } from "../routes/HotelSiteRoutes";

export const HotelApp = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Header />
            <HotelSiteRoutes />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};
