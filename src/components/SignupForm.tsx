import { useState } from "react"
import '../styles/modal.css'
import axios from 'axios';

export default function SignupForm () {

  const  [username, setUsername] = useState<string>("")
  const  [email, setEmail] = useState<string>("")
  const  [password, setPassword] = useState<string>("")

  const signup = (e) => {
    e.preventDefault()
    console.log("signup form submitted")
    setUsername(e.username)
    setEmail(e.email)
    setPassword(e.password)

    axios({
      method: 'post',
      url: 'http://localhost:8080/user',
      data: {
        username: username,
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
        id="signup-form" 
        className="w-[600px] h-[450px] px-24 flex flex-col justify-center items-center gap-2 shadow-md rounded-md modal" 
        onSubmit={signup}>
        <label>Username:</label>
        <input 
          id="username" 
          type="text" 
          name="username" 
          className="border-2 border-slate-100 hover:border-slate-300 w-full rounded-md" required></input>
        <label>Email:</label>
        <input 
          id="email" 
          type="email" name="email" 
          className="border-2 border-slate-100 hover:border-slate-300 w-full rounded-md" required></input>
        <label>Password:</label>
        <input 
          id="password" 
          type="password" 
          name="password" 
          className="mt-2 border-2 border-slate-100 hover:border-slate-300 w-full rounded-md" required></input>
        <button 
          type="submit" 
          className="h-[45px] w-[120px] bg-sky-600 rounded text-white font-bold" >Signup</button>
      </form>
    </>
  )
}