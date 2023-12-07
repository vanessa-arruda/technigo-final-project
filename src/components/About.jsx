import '../styles/about.css';
import imageTwo from '../assets/unplash-mert-guller-img.webp'
import imageThree from '../assets/unplash-jed-together.webp'

export const About = () => {
  return (
    <article className='about-wrapper'>
      <section className='first-row'>
          <p className='first-row-text'>Welcome to RealCycle App. This project was created as the 
            Final Project of Technigo's bootcamp and follows the agenda 2030.</p>
        <div className='first-row-img'>
          <img src={imageTwo} alt="girl with leaf image"/>
        </div>
      </section>
      <section className='second-row'>
        <div class="second-row-title">
          <h1>About us</h1>
        </div>
        <div className="second-row-text">
          <p className='about-middle'>RealCycle App was created as an educational purpose, to incentivize students to learn more about sustainability
            and the impact that recycling can have in the future of the planet and teaching that if everyone does it's own part we can impact as minimum,
            our environment.
          </p>
          <p>Via a gamefication, the recycling process rewards the users if they properly recycle items from the streets and also for answering
            quiz about sustainability. The reward is via points accumulated per actions and exchanged by discounts via our partners that also suport the topic and agenda 2030.</p>
        </div>
        <div className='empty-container'>
          {/* empty container with color */}
        </div>
      </section>
      <section className='third-row'>
        <div class="third-row-img">
          {/* <img src={imageThree} alt="people running happy in nature"/> */}
        </div>
        <div class="third-row-text">
          <p>When you are logged in, you are able to win points by doing daily challenges in our home page;</p>
          <p>You will win points by recycling new items every day, just go to "add new item" and follow the easy steps.</p>
          <p>You can also participate in the daily quiz - it will secure up to 5 points for you if you get all questions right!</p>
          <p>Easily exchange your points in our Reward page - by clicking the buttom, you will exchange the points for discount vouchers.</p>
        </div>
      </section>
    </article>

  )
}
