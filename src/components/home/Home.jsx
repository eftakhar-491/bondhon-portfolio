import React from "react";
import Hero from "./Hero";
import QualityWork from "./QualityWork";
import Skills from "./Skills";
import { Helmet } from "react-helmet-async";
import Projects from "./Projects";
import Contact from "./Contact";
import Educations from "./Educations";
import Loading from "../Shared/Loading";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Md Hafizur Alam Shikder</title>
      </Helmet>
      <Hero />
      <QualityWork />
      <Skills />
      <Educations />
      <Projects />
      <Contact />
      {/* <Loading /> */}
    </>
  );
}
