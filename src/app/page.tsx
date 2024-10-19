"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Work from "@/components/home/Work";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollLevel, setScrollLevel] = useState(1);
  const isInitialLoad = useRef(true);

  const scrollToSection = (index: number) => {
    const targetScroll = window.innerHeight * index;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  useEffect(() => {
    if (isInitialLoad.current) {
      const currentScrollLevel =
        Math.round(window.scrollY / window.innerHeight) + 1;
      setScrollLevel(currentScrollLevel);
      scrollToSection(currentScrollLevel - 1);
      isInitialLoad.current = false;
    }
  }, []);

  useEffect(() => {
    const roundToNearest100vh = (value: number) => {
      return Math.round(value / window.innerHeight) * window.innerHeight;
    };

    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      let newScrollLevel = scrollLevel;
      const scrollAmount = window.innerHeight * newScrollLevel;
      const currentScroll = window.scrollY;

      const nextScroll =
        event.deltaY > 0
          ? currentScroll + scrollAmount
          : currentScroll - scrollAmount;
      const roundedScroll = roundToNearest100vh(nextScroll);

      window.scrollTo({ top: roundedScroll, behavior: "smooth" });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateScrollLevel = () => {
      const currentScroll = window.scrollY;
      const newScrollLevel = Math.round(currentScroll / window.innerHeight) + 1;
      setScrollLevel(newScrollLevel);
    };

    window.addEventListener("scroll", updateScrollLevel);

    return () => {
      window.removeEventListener("scroll", updateScrollLevel);
    };
  }, []);

  return (
    <main>
      <Header
        dots={scrollLevel <= 5}
        active={scrollLevel}
        scrollToSection={scrollToSection}
        setScrollLevel={setScrollLevel}
      />
      <Hero />
      <About />
      <Story />
      <Work />
      <Contact />
      <Footer type="full" />
    </main>
  );
}
