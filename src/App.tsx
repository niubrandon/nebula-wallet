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
      
      <section className="flex w-full h-[400px]">
        <div className="flex flex-col items-start justify-between w-2/3 px-8 py-3 mx-6">
          <span className="text-7xl font-bold">Create you first crypto wallet! </span>
          <span className="text-3xl">Nebula wallet is the easiest place to keep your crptocurrency! </span>
          <div className="flex gap-4">
          <input className="w-[240px] h-[64px] shadow-lg" placeholder='Email address' name="email" type="email" />
          <button className="h-[64px] w-[144px] bg-sky-600 rounded text-white">Get started</button>
          </div>
        
        </div>
        <div className="grow">
          SVG. PLACEHOLDER
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
