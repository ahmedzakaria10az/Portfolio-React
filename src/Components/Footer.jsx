import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-md-start text-center mb-3 mb-md-0">
            <h5>GET IN TOUCH</h5>
            <p>Email: <a href="mailto:email@example.com" className="text-white">email@example.com</a></p>
            <p>Phone: <a href="tel:+123456" className="text-white">+123 456</a></p>
          </div>

          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div
              style={{
                backgroundColor: '#ffffff',
                color: '#000000',
                padding: '10px 20px',
                borderRadius: '5px',
                display: 'inline-block',
              }}
            >
              <strong>Contact Me</strong>
            </div>
          </div>
          
          <div className="col-md-4 text-md-end text-center">
            <div className="social-icons mb-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon mx-2">
                &#x1F465; LinkedIn
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon mx-2">
                &#x1F465; Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon mx-2">
                &#x1F465; Twitter
              </a>
            </div>
            <p className="mt-3">&copy;Ahmed_Zakaria 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;