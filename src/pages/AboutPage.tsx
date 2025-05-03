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
    <div className={styles.container}>
      
      {/* Personal Introduction Section */}
      <section 
        ref={intro.ref}
        className={`${styles.section} ${animStyles.fadeIn} ${animStyles.delay1} ${intro.isVisible ? animStyles.visible : ''}`}
      >
        <h2>Hello, I'm [Your Name]</h2>
        <p className={styles.introText}>
          A passionate [Your Role] based in [Your Location], with a focus on creating
          meaningful and impactful digital experiences.
        </p>
        
        <h3>My Journey</h3>
        <p>
          [Brief description of your background, education, and career path.
          What inspired you to get into this field?]
        </p>
        
        <h3>What I Do</h3>
        <p>
          [Describe your main areas of expertise, your approach to work,
          and what makes you unique in your field.]
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
          <h3>[Company/Position]</h3>
          <p className={styles.period}>[Time Period]</p>
          <p>
            [Description of your role and key achievements]
          </p>
        </div>
        
        {/* Education Item */}
        <div className={styles.timelineItem}>
          <h3>[University/School]</h3>
          <p className={styles.period}>[Degree] - [Year]</p>
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
    <Footer />
    </>
  );
};

export default AboutPage;
