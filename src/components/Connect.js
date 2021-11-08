import React from "react";


const Connect = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col text-center">
          <h3>03.Connect</h3>
          <p>
            If you want to get in touch regarding an employment opportunity or
            just want to chat,
            <br />
            please feel free to reach out to me via email or the below social
            media platforms.
          </p>
          <a href="mailto:stephwuh@gmail.com" className='email'>stephwuh@gmail.com</a>
        </div>
      </div>

      <div className="icons-container mt-3">
        <a href="https://github.com/stephwuh" target="_blank">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            className="img-fluid connect-icon"
          />
        </a>

        <a href="https://www.linkedin.com/in/stephenwuh/" target="_blank">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            className="img-fluid connect-icon"
          />
        </a>

        <a href="https://www.facebook.com/pseudonym87/" target="_blank">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
            className="img-fluid connect-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Connect;
