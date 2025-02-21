import { useEffect, useRef } from "react";

function About() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  function addAnimation() {
    const scrollers = scrollerRef.current?.querySelectorAll(".scroller") as NodeListOf<HTMLDivElement>;

    scrollers?.forEach((scroller) => {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLDivElement | null;
      if (!scrollerInner) return;

      const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <section id="about">
      <div className="about-container">
        <img src="../../../src/assets/foto.jpeg" alt="My Photo" className="about-photo" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            <b>Alauddin</b>, an undergraduate student at Telkom University majoring in Informatics, with a solid blend
            of academic and practical experience in game development, UX research, and problem-solving. A strong
            background in people development gained through active involvement in organizations like AIESEC, Student
            English Society, and Kontent HIMAF. Focused on leveraging technology to enhance human experiences and create
            innovative solutions. Passionate about driving positive change through technology, with a commitment to
            improving user experiences and solving complex challenges in diverse fields.
          </p>
        </div>
      </div>
      <div className="container" ref={scrollerRef}>
        <div className="scroller" data-direction="right" data-speed="fast">
          <div className="scroller__inner">
            <img height="100px" src="reactPortfolio/src/assets/Aiesec_Bandung.png" alt="AIESEC In Bandung" />
            <img height="100px" src="reactPortfolio/src/assets/Ses.png" alt="Student English Society" />
            <img height="100px" src="reactPortfolio/src/assets/Kontent_Logo.png" alt="Kontent HIMA IF" />
            <img height="100px" src="reactPortfolio/src/assets/Nabati_Logo.png" alt="Nabati Group" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
