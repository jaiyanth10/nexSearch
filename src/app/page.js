import React from "react";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
const Home = () => {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col justify-center items-center mt-24">
        <h1 className="font-extrabold text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-nunito text-primary ">
          NEXSEARCH
        </h1>
      </div>
      <HomeSearch/>
    </div>
  );
};

export default Home;
