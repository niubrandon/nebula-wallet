import { useEffect, useState } from "react"
import {useNavigate } from 'react-router-dom';
import '../styles/modal.css'
import axios from 'axios';

interface Props {
  authUser: string
  setAuthUser: Function
}

export default function LoginForm ({authUser, setAuthUser}: Props) {
  const  [email, setEmail] = useState<string>("")
  const  [password, setPassword] = useState<string>("")

  let navigate = useNavigate();

  useEffect(() => {
    console.log("user is", email, password)
    if(!email) {
      return
    }
    console.log("after user is", email, password)
    axios({
      method: 'post',
      url: 'http://localhost:8080/users/login',
      data: {
        email: email,
        password: password
      },
      withCredentials: true
    }).then(function (response: any) {
      console.log("post request response:", response)
      if (response.status === 200) {
        setAuthUser(email)
        navigate('/')
      }
      let data = sessionStorage.getItem('token');
      console.log("jwt token is", data, document.cookie)
    }).catch(function (error: any) {
      console.log(error)
    })

    
  
  },[email, password]) 

  const onLogin = (e) => {
    e.preventDefault()
    console.log("signup form submitted",e)
    setEmail(e.target[0].value)
    setPassword(e.target[1].value)
  }
  return (
    <>
      <form 
        id="login-form" 
        className="w-[600px] h-[450px] px-24 flex flex-col justify-center items-center gap-2 shadow-md rounded-md modal" 
        onSubmit={onLogin}>
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