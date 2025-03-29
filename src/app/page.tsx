"use client";
import Head from 'next/head';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
// import Projects from '../components/Projects';
// import Timeline from '../components/Timeline';
// import Blogs from '../components/Blogs';
// import Motto from '../components/Motto';
// import Photography from '../components/Photography';
// import Connect from '../components/Connect';
// import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Head>
        <title>Your Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      <div className="font-sans bg-gray-100">
        <Header />
        <AboutMe />
        <Skills />
        {/* <Projects />
        <Timeline />
        <Blogs />
        <Motto />
        <Photography />
        <Connect />
        <Footer /> */}
      </div>
    </>
  );
};

export default Home;
