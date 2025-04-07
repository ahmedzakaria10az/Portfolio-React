import React from 'react';

const Skills = () => {
  return (
    <section className="skills p-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Skills</h2>
        <p className="text-center mb-4">
          I possess a diverse set of technical skills that span both frontend and backend development. From building dynamic user interfaces with React and JavaScript to designing responsive layouts with HTML, CSS, and Bootstrap, I ensure seamless user experiences. On the backend, I specialize in creating scalable and efficient web applications using Node.js, Express.js, and MongoDB. Additionally, I have strong expertise in version control systems like Git and GitHub, enabling effective collaboration and code management.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h5>JavaScript</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: '90%' }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>
            <h5>React</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: '85%' }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
            <h5>HTML & CSS</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: '95%' }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>
            <h5>Bootstrap</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: '80%' }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h5>Node.js</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                style={{ width: '75%' }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
            <h5>Express.js</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: '70%' }}
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                70%
              </div>
            </div>
            <h5>MongoDB</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-warning"
                role="progressbar"
                style={{ width: '80%' }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>
            <h5>ِAngular</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: '85%' }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;