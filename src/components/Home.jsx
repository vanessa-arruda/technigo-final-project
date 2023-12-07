import '../styles/home.css';
import { Challenges } from '../components/Challenges';
import dailyQuiz from '../../public/daily-quiz-ss.webp';

export const Home = () => {
  return (
    <main className='home'>
        <div className='main-image'>
          <p>Let's recycle some stuff today?</p>
        </div>
        <h2>Daily Challenges</h2>
        <Challenges />
        {/* <h2>User History Overview</h2> */}
        <h2>Daily Quiz</h2>
        <div className='home-quiz-container'>
          <img src={dailyQuiz} alt="daily quiz" width="200px" height="auto"/>
          <p>Take the chance to win up to more 5 points with our daily quiz!</p>
        </div>
    </main>
  )
}
