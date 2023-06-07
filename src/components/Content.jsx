import React from "react";
import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import HeroContent from "./HeroContent";
import NewsList from "./NewsList";
import Link from "./Link";

import linkImg1 from "../assets/images/image-retro-pcs.jpg";
import linkImg2 from "../assets/images/image-top-laptops.jpg";
import linkImg3 from "../assets/images/image-gaming-growth.jpg";

export default function Content() {
  return (
    <main>
      <div className="grid layout">
        <span className="sr-only">Frontend Mentor | News homepage</span>
        <HeroImage />
        <HeroTitle />
        <HeroContent />
        <NewsList />
        <Link
          key="01"
          id="01"
          img={linkImg1}
          title="Reviving Retro PCs"
          content="What happens when old PCs are given modern upgrades?"
        />
        <Link
          key="02"
          id="02"
          img={linkImg2}
          title="Top 10 Laptops of 2022"
          content="Our best picks for various needs and budgets."
        />
        <Link
          key="03"
          id="03"
          img={linkImg3}
          title="The Growth of Gaming"
          content="How the pandemic has sparked fresh opportunities."
        />
      </div>
    </main>
  );
}
