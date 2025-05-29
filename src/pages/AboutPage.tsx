import Hero from "../components/About/HeroAbout.tsx";
import Footer from "../components/Home/Footer.tsx";
import styles from "../components/About/About.module.css";
import animStyles from "../components/animations.module.css";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutPage = () => {
  const intro = useScrollAnimation();
  const experience = useScrollAnimation();
  const interests = useScrollAnimation();

  return (
    <>
    
    <Hero />
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width:'100%', height: 80, pointerEvents: 'none', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%)' }} />
    <main style={{ background: 'linear-gradient(180deg, #000 0%, #fbc02d 100%)', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
    <div className={styles.container}>
      
      {/* Personal Introduction Section */}
      <section 
        ref={intro.ref}
        className={`${styles.section} ${animStyles.fadeIn} ${animStyles.delay1} ${intro.isVisible ? animStyles.visible : ''}`}
      >
        <h2>Hello, I'm Alki!</h2>
        <p className={styles.introText}>
          A passionate Informatics major based in Indonesia, with a focus on creating
          meaningful and impactful experiences.
        </p>
        
        <h3>What I Do</h3>
        <p>
          As the home page says, I am a passionate Tech Enthusiast with various blends of skills and experiences. Currently, I am working as a Game Developer at Animesme
          Even though that, I am always open to new opportunities to help people and make a difference in the world.
        </p>
      </section>

      {/* Experience & Education Section */}
      <section 
        ref={experience.ref}
        className={`${styles.experienceSection} ${animStyles.fadeIn} ${animStyles.delay2} ${experience.isVisible ? animStyles.visible : ''}`}
      >
        <h2>Experience & Education</h2>
        
        {/* Experience Item */}
        <div className={styles.timelineItem}>
          <h3>[Nabati Group / IT Consultant Intern]</h3>
          <p className={styles.period}>[Time Period]</p>
          <p>
            [Description of role and key achievements]
          </p>
        </div>

        <div className={styles.timelineItem}>
          <h3>[Animesme / Game Programmer Intern]</h3>
          <p className={styles.period}>[Time Period]</p>
          <p>
            [Description of role and key achievements]
          </p>
        </div>
        
        {/* Education Item */}
        <div className={styles.timelineItem}>
          <h3>[Telkom University]</h3>
          <p className={styles.period}>[S1 Komputer / Bachelor of Informatics] - [2025]</p>
          <p>
            [Brief description of your studies and achievements]
          </p>
        </div>
      </section>

      {/* Interests & Hobbies Section */}
      <section 
        ref={interests.ref}
        className={`${styles.section} ${animStyles.fadeIn} ${animStyles.delay3} ${interests.isVisible ? animStyles.visible : ''}`}
      >
        <h2>Beyond Work</h2>
        
        <div className={styles.interestCard}>
          <h3>Interests</h3>
          <p>
            [List your interests and what you're passionate about outside of work]
          </p>
        </div>
        
        <div className={styles.interestCard}>
          <h3>Hobbies</h3>
          <p>
            [Share some of your favorite hobbies and activities]
          </p>
        </div>
        
        <div className={styles.interestCard}>
          <h3>Goals</h3>
          <p>
            [Describe your professional or personal goals]
          </p>
        </div>
      </section>
    </div> 
    </main>
    <Footer />
    </>
  );
};

export default AboutPage;
