
import { useRef } from "react";
import VariableProximity from "../VariableProximity";

function Hero() {

  const containerRef = useRef(null);

  

  return (
    <section id="hero">
    
      <div className="hero-container">
        <h2>
          <div ref={containerRef} style={{ position: "relative" }}>
            <VariableProximity
              label={'"We all make choices, but in the end, our choices make us."'}
              className={"variable-proximity-demo"}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={100}
              falloff="linear"
            />
          </div>
        </h2>
        <h3>Andrew Ryan</h3>
      </div>
    </section>
  );
}

export default Hero;
