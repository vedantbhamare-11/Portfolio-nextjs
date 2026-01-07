"use client";
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Blogs from '@/components/Blogs';
import Photography from '@/components/Photography';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Timeline />
      <Blogs />
      <Photography />
      <Connect />
      <Footer />
    </main>
  );
}
