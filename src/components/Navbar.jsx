import '../styles/navbar.css';
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaChalkboardTeacher  } from "react-icons/fa";
import { MdStars, MdDashboard, MdFormatListBulletedAdd } from "react-icons/md";
import { FaClipboardQuestion } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className='navBar'>
        <NavLink to='/' className='navlink'>
            <FaHome />
            <p>Home</p>
        </NavLink>
        <NavLink to='/rewards' className='navlink'>
            <MdStars />
            <p>Rewards</p>
        </NavLink>
        <NavLink to='/history' className='navlink'>
            <MdDashboard/>
            <p>User history</p>
        </NavLink>
        <NavLink to='/tutorial' className='navlink'>
            <FaChalkboardTeacher/>
            <p>Tutorial</p>
        </NavLink>
        <NavLink to='/quiz' className='navlink'>
            <FaClipboardQuestion />
            <p>Quiz</p>
        </NavLink>
        <NavLink to='/add' className='navlink'>
            <MdFormatListBulletedAdd />
            <p>Add new item</p>
        </NavLink>
    </nav>
  )
}
