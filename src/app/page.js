'use client'
import Header from "../../components/work/Header";
import Landing from "../../components/work/Landing";
import Projects from "../../components/work/Projects";
import About from "../../components/info/About";
import Contact from "../../components/info/Contact";
import SkillsSection from "../../components/work/Tools";

export default function Home() {
  return (
    <>
    <Header/>
    <Landing/>
    <SkillsSection/>
    <Projects/>
    <About/>
    <Contact/>
    </>
  );
}
