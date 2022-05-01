import { useEffect, useState } from "react"
import {useNavigate } from 'react-router-dom';
import '../styles/modal.css'
import axios from 'axios';

interface Props {
  authUser: string
  setAuthUser: Function
}

export default function SignupForm ({authUser, setAuthUser}: Props) {

  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [phone, setPhone] = useState<string>("")

  let navigate = useNavigate();
  
  useEffect(()=> {
    if(!email || !password || !username || !phone) {
      return
    }
    axios({
      method: 'post',
      url: 'http://localhost:8080/users',
      data: {
        username: username,
        email: email,
        password: password,
        phone: phone,
      }
    }).then(function (response: any) {
      console.log(response)
      console.log("post request response:", response)
      if (response.status === 200) {
        setAuthUser(email)
        navigate('/')
      }
 
      console.log("jwt token is", document.cookie)
    }).catch(function (error: any) {
      console.log(error)
    })
  }, [username,email,password,phone])

  const onSignup = (e) => {
    e.preventDefault()
    console.log("signup form submitted",e)
    setUsername(e.target[0].value)
    setEmail(e.target[1].value)
    setPassword(e.target[2].value)
    setPhone(e.target[3].value)

  }
  return (
    <>
      <form 
        id="signup-form" 
        className="w-[600px] h-[450px] px-24 flex flex-col justify-center items-center gap-2 shadow-md rounded-md modal" 
        onSubmit={onSignup}>
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
        <label>Phone:</label>
        <input 
          id="phone" 
          type="text" 
          name="phone" 
          className="mt-2 border-2 border-slate-100 hover:border-slate-300 w-full rounded-md" required></input>
        <button 
          type="submit" 
          className="h-[45px] w-[120px] bg-sky-600 rounded text-white font-bold" >Signup</button>
      </form>
    </>
  )
}