import { useState } from 'react'
import './App.css'
import ProgressBar from "./ProgressBar.jsx"

export default function App() {
  const [progress, setProgress] = useState(0);
  function updateProgress() {
    if (progress < 100) {
    setProgress(progress + 10);
    } else {
      setProgress(progress + 0);
    }
  }
  return <div>
    <ProgressBar progress={progress} />
    <button onClick={updateProgress}>Increase Progress</button>
  </div>
}