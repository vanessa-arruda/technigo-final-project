import '../styles/header.css';
import logo from '../assets/recycle-logo.png';
import { useSelector } from 'react-redux';


export const Header = ({onLoginClick}) => {
  const user = useSelector(
    (state) => state.recycle.loginUser
  );
  return (
    <header>
        <button className='loginButton'  onClick={() => onLoginClick()} > 
         login
         </button>
        <div className='header-user'>
            <p>Hi,</p>
            <p>{user}!</p>
        </div>
        <div className='header-logo'>
            <img src={logo} alt='RealCycle logo' width='8%' height='auto'/>
            <h1>RealCycle App</h1>
        </div>
        <div className='header-points'>
            <h3>Current Points</h3>
            <p>300</p>
        </div>
    </header>
  )
}