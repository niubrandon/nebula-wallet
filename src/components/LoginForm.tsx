import { useState } from "react"
import '../styles/modal.css'
import axios from 'axios';

export default function LoginForm () {
  const  [email, setEmail] = useState<string>("")
  const  [password, setPassword] = useState<string>("")


  const login = (e) => {
    e.preventDefault()
    console.log("signup form submitted")
    setEmail(e.email)
    setPassword(e.password)

    axios({
      method: 'get',
      url: 'http://localhost:8080/',
      data: {
        email: email,
        password: password
      }
    }).then(function (response: any) {
      console.log(response)
    }).catch(function (error: any) {
      console.log(error)
    })
  }
  return (
    <>
      <form 
        id="login-form" 
        className="w-[600px] h-[450px] px-24 flex flex-col justify-center items-center gap-2 shadow-md rounded-md modal" 
        onSubmit={login}>
        <label>Email:</label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          className="border-2 border-slate-100 hover:border-slate-300 w-full rounded-md" required></input>
        <label>Password:</label>
        <input 
          id="password" 
          type="password" 
          name="password"  
          className="border-2 border-slate-100 hover:border-slate-300 w-full rounded-md" required></input>
        <button
          id="login-buton" 
          type="submit" 
          className="mt-2 h-[45px] w-[120px] bg-sky-600 rounded text-white font-bold">Login</button>
      </form>
    </>
  )
}