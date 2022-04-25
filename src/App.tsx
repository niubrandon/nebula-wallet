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
        <div className="flex items-center">
          <img className="w-[64px] h-[64px]" src="../asset/logo.png"></img>
          <span className="text-4xl font-extrabold text-sky-600">Nebula Wallet</span>
        </div>
        <div className="flex gap-2">
          <button className="h-[45px] w-[120px] rounded font-bold">Sign in</button>
          <button className="h-[45px] w-[120px] bg-sky-600 rounded text-white font-bold">Get started</button>
        </div>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <footer>
        <div className='flex w-full h-fit items-center justify-center text-lg text-gray-400'>© 2022 Nebula Wallet</div>
     
      </footer>
    </div>
  )
}

export default App
