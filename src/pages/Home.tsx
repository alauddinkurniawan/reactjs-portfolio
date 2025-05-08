import Hero from "../components/Home/HeroHome.tsx";
import ScrollSpyNav from '../components/ScrollSpyNav';
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

    
      <ScrollSpyNav />
      <Hero />    
      <div style={{ position: 'absolute', bottom: 0, width:'100%', height: 80, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%)' }} />
      <main style={{ background: 'linear-gradient(180deg, #000 0%, #fbc02d 100%)', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
        <section id="about" ref={about.ref} className={`${styles.fadeIn} ${styles.delay1} ${about.isVisible ? styles.visible : ''}`} style={{ minHeight: '100vh', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <About />
        </section>
        <section id="projects" ref={projects.ref} className={`${styles.fadeIn} ${styles.delay2} ${projects.isVisible ? styles.visible : ''}`} style={{ minHeight: '100vh', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Projects />
        </section>
        <section id="skills" ref={skills.ref} className={`${styles.fadeIn} ${styles.delay3} ${skills.isVisible ? styles.visible : ''}`} style={{ minHeight: '100vh', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Skills />
        </section>
        <section id="languages" ref={languages.ref} className={`${styles.fadeIn} ${styles.delay4} ${languages.isVisible ? styles.visible : ''}`} style={{ minHeight: '100vh', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Languages />
        </section>
        <section id="contacts" ref={contacts.ref} className={`${styles.fadeIn} ${styles.delay4} ${contacts.isVisible ? styles.visible : ''}`} style={{ minHeight: '100vh', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Contacts />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
