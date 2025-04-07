import React from 'react';
import Header from './Components/Header';
import Bio from './Components/Bio';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

//Commands :
//npm create vite@latest | npm create vite@latest my-app -- --template react 
//cd my-app
//npm install
//npm run dev


function App() {
  return (
    <div>
      <Header />
      <Bio />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;