import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import './App.css';
import './index.css';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="h-[64px] w-full flex justify-between px-5 pt-5">
        <span className="text-4xl font-extrabold text-sky-600">Nebula Wallet</span>
        <div className="flex gap-2">
        <button className="h-[45px] w-[120px] rounded font-bold">Sign in</button>
        <button className="h-[45px] w-[120px] bg-sky-600 rounded text-white font-bold">Get started</button>
        </div>
       
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
