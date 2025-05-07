function Contacts() {
  return (
    <section id="contacts">
      <div className="container">
        <h2>Interested? Find me here!</h2>
        <ul className="channels">
          <li>
          <a
            href="https://www.linkedin.com/in/alauddinkurniawan"
            style={{ paddingRight: "5px" }}
          >
            <img
              src="/linkedin_logo.png"
              height="40px"
              style={{ paddingRight: "5px" }}
            ></img>
          </a>
          </li>
          <li>
          <a href="https://github.com/alauddinkurniawan">
            <img
              src="/github_logo.png"
              height="40px"
              style={{ paddingRight: "5px" }}
            ></img>
          </a>
          </li>
          <li>
          <a href="mailto:alauddin.kurniawan@gmail.com">
            <img
              src="/icons8-email.png"
              height="40px"
              width="47.5px"
              style={{ paddingLeft: "5px",paddingRight: "5px" }}
            ></img>
          </a>
          </li>          
          </ul>
      </div>
    </section>
  );
}

export default Contacts;
