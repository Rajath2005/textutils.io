import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'  // Set the default background to white
  });

  const [butntext, setbutntext] = useState('Enable Dark mode');

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',
      });
      setbutntext('Enable Light mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setbutntext('Enable Dark mode');
    }
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="mx-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What Textutils does?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>About TextUtils</strong>
              <p>
                Welcome to TextUtils, your simple yet powerful text analysis tool! 
                It helps you analyze, format, and enhance text effortlessly.
              </p>
              <h2 className="mt-4">Key Features:</h2>
              <ul>
                <li><strong>Text Conversion:</strong> Convert text to uppercase/lowercase.</li>
                <li><strong>Text Cleaning:</strong> Remove extra spaces.</li>
                <li><strong>Text-to-Speech:</strong> Read text out loud.</li>
                <li><strong>Word & Character Count:</strong> Get real-time stats.</li>
                <li><strong>Copy to Clipboard:</strong> Quickly copy text.</li>
                <li><strong>Dark Mode Support:</strong> Switch between light/dark themes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enable Dark Mode Button */}
      <div className="container my-3">
        <button className="btn btn-dark mx-2 my-2" onClick={toggleStyle}>
          {butntext}
        </button>
      </div>
    </div>
  );
}
