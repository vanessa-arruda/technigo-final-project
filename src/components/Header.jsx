import '../styles/header.css';
import logo from '../assets/recycle-logo.png';

export const Header = () => {
  return (
    <header>
        <div className='header-user'>
            <p>Hi,</p>
            <p>Vanessa!</p>
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