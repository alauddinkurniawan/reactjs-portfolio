import Hero from "../components/About/HeroAbout.tsx";
import SplashCursor from "../components/SplashCursor.tsx";
import Footer from "../components/Home/Footer.tsx";

const AboutPage = () => {
  return (
    <div>
      <SplashCursor />
      <Hero />
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Footer />
    </div>
  );
};

export default AboutPage;
