import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
  <>
    <div className="position-relative">
      <img
        src="/man.jpg"
        alt="Cover"
        className="img-fluid w-100"
        style={{ height: '145vh', objectFit: 'cover' }} 
      />
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
        <h1 className="display-4">Ahmed Zakaria</h1>
        <p className="lead">Frontend Developer</p>
      </div>
    </div>
  </>
);

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
