import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <p>
      This is Home!
      </p>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}