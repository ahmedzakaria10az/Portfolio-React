import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    { title: 'Web Design' },
    { title: 'Logo Design' },
    { title: 'Mobile Design' },
    { title: 'Web Application Development' },
    { title: 'Mobile App Development' },
    { title: 'PWA Development' },
  ];

  return (
    <section className="portfolio p-5">
      <div className="container">
        <h2 className="text-center mb-4">Portfolio</h2>
        <div className="row">
          {portfolioItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className={`card text-white shadow-sm ${
                  index % 2 === 0 ? 'bg-secondary' : 'bg-dark'
                }`}
                style={{
                  height: '200px',
                  width: '300px',
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto', 
                  borderRadius: '10px', 
                }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;