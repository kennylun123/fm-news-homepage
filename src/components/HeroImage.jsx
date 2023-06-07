import React from "react";
import heroImg from "../assets/images/image-web-3-desktop.jpg";
import heroImgMobile from "../assets/images/image-web-3-mobile.jpg";

export default function HeroImage() {
  return (
    <picture id="hero-img">
      <source srcset={heroImg} media="(min-width: 35rem)" />
      <img src={heroImgMobile} alt="hero-img" />
    </picture>
  );
}
