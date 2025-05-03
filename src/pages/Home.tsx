import Hero from "../components/Home/HeroHome.tsx";
import About from "../components/Home/About.tsx";
import Projects from "../components/Home/Projects.tsx";
import Skills from "../components/Home/Skills.tsx";
import Languages from "../components/Home/Languages.tsx";
import Contacts from "../components/Home/Contacts.tsx";
import Footer from "../components/Home/Footer.tsx";
import styles from '../components/animations.module.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HomePage = () => {
  const about = useScrollAnimation();
  const projects = useScrollAnimation();
  const skills = useScrollAnimation();
  const languages = useScrollAnimation();
  const contacts = useScrollAnimation();

  return (
    <>
      <Hero />
      <section ref={about.ref} className={`${styles.fadeIn} ${styles.delay1} ${about.isVisible ? styles.visible : ''}`}>
        <About />
      </section>
      <section ref={projects.ref} className={`${styles.fadeIn} ${styles.delay2} ${projects.isVisible ? styles.visible : ''}`}>
        <Projects />
      </section>
      <section ref={skills.ref} className={`${styles.fadeIn} ${styles.delay3} ${skills.isVisible ? styles.visible : ''}`}>
        <Skills />
      </section>
      <section ref={languages.ref} className={`${styles.fadeIn} ${styles.delay4} ${languages.isVisible ? styles.visible : ''}`}>
        <Languages />
      </section>
      <section ref={contacts.ref} className={`${styles.fadeIn} ${styles.delay4} ${contacts.isVisible ? styles.visible : ''}`}>
        <Contacts />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
