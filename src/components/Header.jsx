import '../styles/header.css';
import logo from '../assets/recycle-logo.png';
import { useSelector } from 'react-redux';



export const Header = ({onLoginClick}) => {
  const user = useSelector(
    (state) => state.recycle.loginUser
  );
    const point =useSelector(
      (state) => state.recycle.users.find(u =>u.userName===user).points
    )

  return (
    <header>

        <div className='header-user'>
          <button className='loginButton'  onClick={() => onLoginClick()} > 
            login
          </button>
          <p>Hi, {user}!</p>
        </div>
        <div className='header-logo'>
            <img src={logo} alt='RealCycle logo' width='60px' height='60px'/>
            <h1>RealCycle App</h1>
        </div>
        <div className='header-points'>
            <h3>Current Points</h3>
            <p>{point}</p>
        </div>
    </header>
  )
}