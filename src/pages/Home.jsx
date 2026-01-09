import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import AboutCompany from "../components/AboutCompany";
import NewsSection from "../components/NewsSection";
import SafetySection from "../components/SafetySection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories/>
      <AboutCompany/>
      <NewsSection/>
      <SafetySection/>
    </div>
  );
}