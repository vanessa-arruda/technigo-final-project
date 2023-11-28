import '../styles/navbar.css';
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='navBar'>
        <NavLink to='/' className='navlink'>Home</NavLink>
        <NavLink to='/rewards' className='navlink'>Rewards</NavLink>
        <NavLink to='/history' className='navlink'>User history</NavLink>
        <NavLink to='/tutorial' className='navlink'>Tutorial</NavLink>
        <NavLink to='/quiz' className='navlink'>Quiz</NavLink>
        <NavLink to='/add' className='navlink'>Add new item</NavLink>
    </nav>
  )
}
