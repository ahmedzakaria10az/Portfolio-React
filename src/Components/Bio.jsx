import React from 'react';

const Bio = () => {
  return (
    <section className="bio p-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-md-start text-center">
            <h2>About Me</h2>
          </div>
          <div className="col-md-8 text-md-start text-center">
            <p>
              As a passionate web developer with a strong foundation in both frontend and backend technologies, I specialize in creating seamless, user-friendly web applications that are both functional and visually appealing. With a deep understanding of the MERN stack (MongoDB, Express.js, React, Node.js), I craft responsive, dynamic websites and applications that provide real-world solutions.
            </p>
            <a
              href="/Ahmed Zakaria_Resume.pdf" 
              download
              className="btn btn-dark mt-3"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;