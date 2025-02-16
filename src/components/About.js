import React, { useState } from 'react'


export default function About() {

  const [myStyle, setMyStyle] = useState(
    {
      color: 'white',
      backgroundColor: 'white'
    })
  const [butntext, setbutntext] = useState('Enable Light mode')

  const toggleStyle = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setbutntext('Enable Dark mode')
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white',

      })
      setbutntext('Enable Light mode')
    }
  }
  return (
    <div>
      <>
        <div className="container" style={myStyle}>
          <h1 className="mx-2">About Us</h1>
          <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What Textutils does?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>About TextUtils

                    Welcome to TextUtils, your simple yet powerful text analysis tool! 

                    TextUtils is designed to help you analyze, format, and enhance text effortlessly. Whether you need to convert text to uppercase, lowercase, remove extra spaces, copy text to the clipboard, or even have it read aloud, TextUtils makes it quick and easy.

            

                    TextUtils is a lightweight, user-friendly, and efficient tool for anyone who works with text regularly. Whether you're a student, writer, or professional, TextUtils helps you save time and improve productivity.

                    Give it a try and make your text-processing tasks smoother than ever! .</strong> 
                    <h2 className="mt-4">Key Features:</h2>
            <ul>
                <li><strong>Text Conversion:</strong> Convert your text to uppercase or lowercase with a single click.</li>
                <li><strong>Text Cleaning:</strong> Remove extra spaces for a clean and well-structured format.</li>
                <li><strong>Text-to-Speech:</strong> Let your device read the text out loud.</li>
                <li><strong>Word & Character Count:</strong> Instantly check the total words and characters in your text.</li>
                <li><strong>Copy to Clipboard:</strong> Easily copy your formatted text for quick use.</li>
                <li><strong>Dark Mode Support:</strong> Enjoy a comfortable reading experience in both light and dark themes.</li>
            </ul>
            <p className="mt-4 text-center"><em>Give it a try and make your text-processing tasks smoother than ever! 💡✍️</em></p>
                </div>
              </div>
            </div>
           
            
          </div>
          {/* <div className="container my-3">
            <button className="btn btn-dark mx-2 my-2" onClick={toggleStyle} > {butntext}</button>

          </div> */}

        </div>
      </>
    </div>
  )
}
