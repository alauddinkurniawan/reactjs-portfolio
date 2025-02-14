import { useState, useEffect } from "react";
import { useRef } from "react";
import VariableProximity from "../VariableProximity";


const roles = [
  "Frontend Developer, Game Programmer, UI/UX Designer, Storyteller, Active Volunteer",
  "Agent of Change.",
];

const typingSpeed = 50;
const delayBetweenRoles = 3000;

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isErasing) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, typingSpeed / 2);
      } else {
        setIsErasing(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (charIndex < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + roles[roleIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsErasing(true);
        }, delayBetweenRoles);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isErasing, roleIndex]);

  return (
    <section id="hero">

      <div className="hero-container">
        <h2>
          <div ref={containerRef} style={{ position: "relative" }}>
            <VariableProximity
              label={"Change the world, take a step"}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
        </h2>

        <p className="animated-text-wrapper">
          <span id="animated-role">{text}</span>
        </p>
        <a href="#projects" className="hero-button">
          View My Work{" "}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
