import { useState } from 'react';
import './App.css';
import Couter from './components/Couter';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Redux Tutorials</h1>
      <Couter />
    </div>
  )
}

export default App
