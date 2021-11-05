import React from 'react';
import Nav from './components/Nav';
import Front from './components/Front';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
  
      <Front />
      {/* <Nav /> */}
      <About />
      <Projects />
    </div>
  );
}

export default App;
