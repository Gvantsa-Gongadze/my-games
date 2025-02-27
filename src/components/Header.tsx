import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white p-4 pr-10 pl-10 rounded-full border border-2 border-black uppercase">
      <Link to="/" className="mr-4 hover:underline">
        Home
      </Link>
      <Link to="/games" className="mr-4 hover:underline">
        Games
      </Link>
      <Link to="/animations" className="hover:underline">
        Animations
      </Link>
    </div>
  )
}

export default Header
