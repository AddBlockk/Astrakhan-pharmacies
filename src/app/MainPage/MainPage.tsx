"use client";

import AboutSection from "./sections/AboutSection";
import Activity from "./sections/Activity";
import Appeal from "./sections/Appeal";
import Competencies from "./sections/Competencies";
import History from "./sections/History";
import Information from "./sections/Information";
import { motion } from "framer-motion";
export default function MainPage() {
  return (
    <div>
      <Information />
      <AboutSection />
      <History />
      <Appeal />
      <Activity />
      <Competencies />
    </div>
  );
}
