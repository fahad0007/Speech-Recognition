import React from 'react'
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import "./App.css"

const App = () => {
  
  const startListening = ()=> SpeechRecognition.startListening({ continuous: true, language:"en-IN"});
  const stopListening = ()=> SpeechRecognition.stopListening();
  
  // const { resetTranscript } = useSpeechRecognition()
  // const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  const {
    transcript,
    // listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  

  const [isCopied, setCopied] = useClipboard(transcript);
  

  
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
  return (
    <div className='app'>
      <div className="container">
        <h2>Speach To Text Converter</h2>
        {/* <br /> */}
        <p>A React Hook that converts speach from the microphone to text and makes it available to your Components</p>

        <div className="main-content">
{ transcript }
        </div>
        <div className="btn-style">
        <button onClick={setCopied}>
     {isCopied ? "Copied" : "Copy"}
    </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening} >Stop Listening</button>
          <button onClick={resetTranscript}>Reset</button>
        </div>
      </div>
    </div>
  )
}
export default App;
