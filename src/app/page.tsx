"use client";

import { About } from "@/components/component_app/about";
import { Final } from "@/components/component_app/final";
import { Footer } from "@/components/component_shared/footer";
import { Navbar } from "@/components/component_shared/navbar";
import { Portfolios } from "@/components/component_app/portfolios";
import { Profile } from "@/components/component_app/profile";
import { Skills } from "@/components/component_app/skills";

const Home = () => {
  return (
    <>
      <Navbar isHomepage={true} />
      <Profile />
      <About />
      <Skills />
      <Portfolios />
      <Final/>
      <Footer isHomepage={true}/>
    </>
  );
};

export default Home;
