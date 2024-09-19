import React from "react";
import TopBar from "./TopBar";
import MainNav from "./MainNav";
import CategoriesNav from "./CategoriesNav";

const Nav = () => {
  return (
    <header>
      <TopBar></TopBar>
      <MainNav></MainNav>
      <CategoriesNav></CategoriesNav>
    </header>
  );
};

export default Nav;
