import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// document.querySelector(".nav-menu").classList.toggle("active");
// document.querySelector(".background").classList.add("background-active");

// const iconMenu = document.querySelector(".icon-menu");
// const iconMenuClose = document.querySelector(".icon-menu-close");
// console.log(iconMenuClose);
// iconMenu.style.display = iconMenu.style.display === "none" ? "" : "none";
// iconMenuClose.style.display =
// iconMenuClose.style.display === "none" ? "" : "none";
//  iconMenuClose cannot read the display attribute.

const btnMenu = document.querySelector(".btn-menu");
const background = document.querySelector(".background");

btnMenu.addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("active");
});

background.addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("active");
});
