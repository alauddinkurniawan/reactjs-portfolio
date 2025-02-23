import Hero from "../components/Home/HeroHome.tsx";
import About from "../components/Home/About.tsx";
import Projects from "../components/Home/Projects.tsx";
import Skills from "../components/Home/Skills.tsx";
import Languages from "../components/Home/Languages.tsx";
import Contacts from "../components/Home/Contacts.tsx";
import Footer from "../components/Home/Footer.tsx";
// import ClickSpark from "../components/ClickSpark";
import SplashCursor from "../components/SplashCursor.tsx";

const HomePage = () => {
  return (
    <>
      {/* <ClickSpark
        defaultSparkColor="#fff"
        alternateSparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        thresholdY={300}
      /> */}
      <SplashCursor />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Languages />
      <Contacts />
      <Footer />
    </>
  );
};

export default HomePage;
