import { useState } from "react"

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
  }
  return (
    <>
      <form id="signup-form" onSubmit={signup}>
        <label for="username">Username:</label>
        <input id="username" type="text" name="username" required></input>
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" required></input>
        <label for="password">Password:</label>
        <input id="password" type="password" name="password" required></input>
        <button type="submit" >Signup</button>
      </form>
    </>
  )
}