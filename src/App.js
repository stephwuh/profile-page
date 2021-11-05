import React from 'react';
import Nav from './components/Nav';
import Front from './components/Front';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App">
  
      <Front />
      {/* <Nav /> */}
      <About />
      <Projects />
      <Connect />
    </div>
  );
}

export default App;
