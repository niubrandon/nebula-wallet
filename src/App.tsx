import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import './App.css';
import './index.css';


function App() {
  //const [count, setCount] = useState(0)
  let navigate = useNavigate();
  const onSignIn = () => {
    navigate("/login")
  }
  const onHomepage = () => {
    navigate("/")
  }
  return (
    <div className="App">
      <header className="h-[64px] w-full flex justify-between px-5 pt-5">
        <div className="flex items-center">
          <img className="w-[64px] h-[64px]" src="../asset/logo.png"></img>
          <span className="text-4xl font-extrabold text-sky-600" onClick={onHomepage}>Nebula Wallet</span>
        </div>
        <div className="flex gap-2">
          <button className="h-[45px] w-[120px] rounded font-bold" onClick={onSignIn}>Sign in</button>
          <button className="h-[45px] w-[120px] bg-sky-600 rounded text-white font-bold">Get started</button>
        </div>
      </header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<SignupForm />}/>
        <Route path="/login" element={<LoginForm />}/>
      </Routes>
      
      <footer>
        <div className='flex w-full h-fit items-center justify-center text-lg text-gray-400'>© 2022 Nebula Wallet</div>
     
      </footer>
    </div>
  )
}

export default App
