import React, { useEffect, useState } from 'react';
import './ScrollSpyNav.css';
import { FaUser, FaFolderOpen, FaTools, FaCode, FaEnvelope } from 'react-icons/fa';

const SECTIONS = [
  { id: 'about', label: '', icon: <FaUser /> },
  { id: 'projects', label: '', icon: <FaFolderOpen /> },
  { id: 'skills', label: '', icon: <FaTools /> },
  { id: 'languages', label: '', icon: <FaCode /> },
  { id: 'contacts', label: '', icon: <FaEnvelope /> },
];

const ScrollSpyNav: React.FC = () => {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Intersection Observer for Hero section
    const heroEl = document.getElementById('#hero');
    let observer: IntersectionObserver | null = null;
    if (heroEl) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          setShow(!entry.isIntersecting); // Show navbar only when Hero is NOT visible
        },
        {
          root: null,
          threshold: 0.01,
        }
      );
      observer.observe(heroEl);
    }

    // Scrollspy logic
    const handleScroll = () => {
      let found = SECTIONS[0].id;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            found = section.id;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer && heroEl) observer.unobserve(heroEl);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`scrollspy-nav${show ? ' show' : ''}`} aria-label="Section Navigation">
      <ul>
        {SECTIONS.map((section) => (
          <li
            key={section.id}
            className={active === section.id ? 'active' : ''}
            onClick={() => scrollToSection(section.id)}
            title={section.label}
          >
            <span className="icon">{section.icon}</span>
            <span className="label">{section.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ScrollSpyNav;
