function Contacts() {
  return (
    <section id="contacts">
      <div className="container">
        <h2>Find me here!</h2>
        <div className="text">
          <a
            href="https://www.linkedin.com/in/alauddinkurniawan"
            style={{ paddingRight: "5px" }}
          >
            <img
              src="/linkedin_logo.png"
              height="30px"
              style={{ paddingRight: "5px" }}
            ></img>
          </a>
          <a href="https://github.com/alauddinkurniawan">
            <img
              src="/github_logo.png"
              height="30px"
              style={{ paddingRight: "5px" }}
            ></img>
          </a>
          <a href="mailto:alauddin.kurniawan@gmail.com">
            <img
              src="/icons8-email.png"
              height="30px"
              width="37.5px"
              style={{ paddingLeft: "5px",paddingRight: "5px" }}
            ></img>
          </a>
          
        </div>
      </div>
    </section>
  );
}

export default Contacts;
