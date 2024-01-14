"use client";

import { About } from "@/components/componen_app/about";
import { Navbar } from "@/components/componen_app/navbar";
import { Portfolios } from "@/components/componen_app/portfolios";
import { Profile } from "@/components/componen_app/profile";
import { Skills } from "@/components/componen_app/skills";

const Home = () => {
  return (
    <>
      <Navbar isHomepage={true} />
      <Profile />
      <About />
      <Skills />
      <Portfolios />
    </>
  );
};

export default Home;
