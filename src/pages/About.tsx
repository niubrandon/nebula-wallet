import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <p>This is me!</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  )
}