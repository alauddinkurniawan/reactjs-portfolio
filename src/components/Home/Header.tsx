import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const header = document.querySelector("header") as HTMLElement | null;
    const headerButtons = document.querySelectorAll<HTMLAnchorElement>("header nav ul li a");
    const nameElements = document.querySelectorAll<HTMLElement>(".name");
    const menuBtn = document.querySelector(".menu-btn") as HTMLButtonElement | null;
    const closeButton = document.querySelector(".close-btn") as HTMLButtonElement | null;
    const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
    const overlay = document.querySelector(".overlay") as HTMLElement | null;
    const hoverSpan = document.querySelectorAll<HTMLElement>(".hover-text span");

    let lastScrollY = window.scrollY;

    if (!header) return;

    // ───────────────────────────────────────────
    // Header Scroll Behavior (Show/Hide & Color Change)
    // ───────────────────────────────────────────
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      } else {
        header.style.boxShadow = "none";
      }

      if (window.scrollY < 0.2 * window.innerHeight) {
        header.style.top = "0";
        header.classList.add("header-top");
        header.classList.remove("header-bottom");

        headerButtons.forEach((button) => button.classList.add("headerbtns-top"));
        nameElements.forEach((name) => name.classList.add("name-top"));
        menuBtn?.classList.add("menu-btn-top");
        hoverSpan.forEach((span) => span.classList.add("hover-text-top"));

        headerButtons.forEach((button) => button.classList.remove("headerbtns-bottom"));
        nameElements.forEach((name) => name.classList.remove("name-bottom"));
        menuBtn?.classList.remove("menu-btn-bottom");
        hoverSpan.forEach((span) => span.classList.remove("hover-text-bottom"));
      } else if (window.scrollY > lastScrollY && window.scrollY > 0.9 * window.innerHeight) {
        header.style.top = "-100px";
      } else {
        header.style.top = "0";
      }

      if (window.scrollY > 0.1 * window.innerHeight) {
        header.classList.remove("header-top");
        header.classList.add("header-bottom");

        headerButtons.forEach((button) => button.classList.remove("headerbtns-top"));
        nameElements.forEach((name) => name.classList.remove("name-top"));
        menuBtn?.classList.remove("menu-btn-top");
        hoverSpan.forEach((span) => span.classList.remove("hover-text-top"));

        headerButtons.forEach((button) => button.classList.add("headerbtns-bottom"));
        nameElements.forEach((name) => name.classList.add("name-bottom"));
        menuBtn?.classList.add("menu-btn-bottom");
        hoverSpan.forEach((span) => span.classList.add("hover-text-bottom"));
      }

      lastScrollY = window.scrollY;
    };

    // ───────────────────────────────────────────
    // Sidebar Menu Functionality
    // ───────────────────────────────────────────
    const openSidebar = () => {
      sidebar?.classList.add("active");
      overlay?.classList.add("active");
    };

    const closeSidebar = () => {
      sidebar?.classList.remove("active");
      overlay?.classList.remove("active");
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    menuBtn?.addEventListener("click", openSidebar);
    closeButton?.addEventListener("click", closeSidebar);
    overlay?.addEventListener("click", closeSidebar);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      menuBtn?.removeEventListener("click", openSidebar);
      closeButton?.removeEventListener("click", closeSidebar);
      overlay?.removeEventListener("click", closeSidebar);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <h1 className="hover-text">
          <a href="/index.html">
            <div className="name">
              <span>A</span>
              <span>l</span>
              <span>a</span>
              <span>u</span>
              <span>d</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
            </div>
            <div className="name">
              <span>K</span>
              <span>u</span>
              <span>r</span>
              <span>n</span>
              <span>i</span>
              <span>a</span>
              <span>w</span>
              <span>a</span>
              <span>n</span>
            </div>
          </a>
        </h1>

        <nav className="nav-links">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="src/pages/projects.html">Projects</a>
            </li>
            <li>
              <a href="#squircle-border">Skills</a>
            </li>
          </ul>
        </nav>
        <button className="menu-btn">Menu</button>

        {/* Sidebar */}
        <div className="sidebar">
          <button className="close-btn">&times;</button>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#squircle-border">Skills</a>
          </nav>
        </div>

        {/* Overlay */}
        <div className="overlay"></div>
      </div>
    </header>
  );
};

export default Header;
