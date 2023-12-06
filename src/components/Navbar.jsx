import '../styles/navbar.css';
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaChalkboardTeacher  } from "react-icons/fa";
import { MdStars, MdDashboard, MdFormatListBulletedAdd } from "react-icons/md";
import { FaClipboardQuestion } from "react-icons/fa6";
import { IconContext } from 'react-icons';

export const Navbar = () => {
  return (
    <nav className='navBar'>
        <NavLink to='/' className='navlink'>
        <IconContext.Provider value={{className: 'nav-icon'}}>
            <FaHome />
        </IconContext.Provider>
            <p>Home</p>
        </NavLink>
        <NavLink to='/rewards' className='navlink'>
        <IconContext.Provider value={{className: 'nav-icon'}}>
            <MdStars />
        </IconContext.Provider>
            <p>Rewards</p>
        </NavLink>
        {/* <NavLink to='/history' className='navlink'>
        <IconContext.Provider value={{className: 'nav-icon'}}>
            <MdDashboard/>
        </IconContext.Provider>
            <p>User history</p>
        </NavLink> */}
        <NavLink to='/about' className='navlink'>
        <IconContext.Provider value={{className: 'nav-icon'}}>
            <FaChalkboardTeacher/>
        </IconContext.Provider>
            <p>About</p>
        </NavLink>
        <NavLink to='/quiz' className='navlink'>
        <IconContext.Provider value={{className: 'nav-icon'}}>
            <FaClipboardQuestion />
        </IconContext.Provider>
            <p>Quiz</p>
        </NavLink>
        <NavLink to='/addItem' className='navlink'>
        <IconContext.Provider value={{className: 'nav-icon'}}>
            <MdFormatListBulletedAdd />
        </IconContext.Provider>
            <p>Add new item</p>
        </NavLink>
    </nav>
  )
}
