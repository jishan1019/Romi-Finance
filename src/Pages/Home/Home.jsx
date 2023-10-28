import React from "react";
import Hero from "./Hero/Hero";
import HomeMoreDetails from "../HomeMoreDetails/HomeMoreDetails";

const Home = () => {
  return (
    <section className="pt-20 pb-20 space-y-10">
      <Hero />
      <div className="borderTop">
        <HomeMoreDetails />
      </div>
    </section>
  );
};

export default Home;
