import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import './App.css';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Nebula Wallet</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
