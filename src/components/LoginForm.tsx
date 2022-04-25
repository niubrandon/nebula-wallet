import { useState } from "react"

export default function LoginForm () {
  const  [email, setEmail] = useState<string>("")
  const  [password, setPassword] = useState<string>("")

  const login = (e) => {
    e.preventDefault()
    console.log("signup form submitted")
    setEmail(e.email)
    setPassword(e.password)
  }
  return (
    <>
      <form id="login-form" onSubmit={login}>
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" required></input>
        <label for="password">Password:</label>
        <input id="password" type="password" name="password" required></input>
        <button type="submit">Login</button>
      </form>
    </>
  )
}