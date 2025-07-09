import React from "react";
import Logo from "../../../svg/Logo";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import Banner from "./banner/Banner";
import Race from "./race/Race";
import Winner from "./winner/Winner";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Race />
      <Winner />
      <Footer />
    </>
  );
};

export default Home;
