import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  // Change The Mode To Different Themes
  const [mode, setMode] = useState(null);

  const toggleMode = (modeName) => {
    if (modeName === 'themeOne') {
      setMode(modeName);
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
    }
    else if (modeName === 'themeTwo') {
      setMode(modeName);
      document.body.style.backgroundColor = '#0B163E';
      document.body.style.color = 'white';
    }
    else if (modeName === 'themeThree') {
      setMode(modeName);
      document.body.style.backgroundColor = '#1B1F22';
      document.body.style.color = 'white';
    }
    else if (modeName === 'themeFour') {
      setMode(modeName);
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }



  return (
    <Router>
      <div>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About TextUtils" />

        <div className="container my-3">

          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm mode={mode} heading="Enter Your Text To Analyze" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
