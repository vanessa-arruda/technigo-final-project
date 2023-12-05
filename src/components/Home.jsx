import '../styles/home.css';
import { Challenges } from '../components/Challenges';

export const Home = () => {
  return (
    <main className='home'>
        <div className='main-image'>
          <p>Let's recycle some stuff today?</p>
        </div>
        <h2>Daily Challenges</h2>
        <Challenges />
        <h2>User History Overview</h2>
        <h2>Daily Quiz</h2>
    </main>
  )
}
