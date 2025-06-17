
import { Link } from 'react-router-dom'
import './index.css'

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <h2>Home</h2>
          </Link>
        </li>
        <li><Link to="/goals">
          <h2>Goals</h2>
        </Link></li>
        <Link to="/events">
          <h2>Events</h2>
        </Link>
        <Link to="/notes">
          <h2>Notes</h2>
        </Link>
        <Link to="/stats">
          <h2>Stats</h2>
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation
