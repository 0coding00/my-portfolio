'use client'
import Header from "../../components/work/Header";
import Landing from "../../components/work/Landing";
import Projects from "../../components/work/Projects";
import About from "../../components/info/About";
import Contact from "../../components/info/Contact";

export default function Home() {
  return (
    <>
    <Header/>
    <Landing/>
    {/* <ToolsSection/> */}
    <Projects/>
    <About/>
    <Contact/>
    </>
  );
}
