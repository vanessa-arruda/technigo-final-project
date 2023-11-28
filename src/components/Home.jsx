import '../styles/home.css';
import { Challenges } from '../components/Challenges';

export const Home = () => {
  return (

    <div className='home'>
        <h2>Current Challenges</h2>
        <Challenges />
        <h2>User History Overview</h2>
        <h2>Daily Quiz</h2>
    </div>
  )
}
