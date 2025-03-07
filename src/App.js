import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 4000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#17202a';
      showAlert("Dark Mode Enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" aboutus="About" Search="Search" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3"> 
       <Routes>
  <Route path="/" element={<Textform heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />} />
  <Route path="about" element={<About />} />
</Routes>

      </div>
    </Router>
  );
}

export default App;
