import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='bg-indigo-600 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
      <h1 className='font-extrabold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-white text-2xl'>Bharat</span>
        <span className='text-black text-2xl'>Estate</span> 
      </h1>
      </Link>
      <form className='bg-slate-800 p-2 rounded-lg flex items-center px-3'>
        <input type="text" placeholder='Search...' 
        className='bg-transparent text-white placeholder-white outline-none w-24 sm:w-64 cursor-pointer' />
        <FaSearch className="text-white cursor-pointer"/>
      </form>
      <ul className="flex gap-4 text-xl font-semibold text-white">
       <Link to="/"> <li className="hidden sm:inline cursor-pointer hover:text-black">Home</li></Link>
        <Link to="/about">
        <li className="hidden sm:inline cursor-pointer hover:text-black">About</li>
        </Link>
        <Link to="/signin">
        <li className="hidden sm:inline cursor-pointer hover:text-black">Sign In</li>
        </Link>
      </ul>
      </div>
    </header>
  )
}

export default Header
