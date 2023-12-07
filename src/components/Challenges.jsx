import '../styles/challenges.css';
import canImg from '../assets/metal-cans.webp';
import plasticBottles from '../assets/plastic-bottles.webp';
import plasticBags from '../assets/plastic-bags.webp';
import glassPaperPlastic from '../assets/glass-paper-plastic-recycle.webp';

export const Challenges = () => {

    const challenges = [
        {
            id: 1,
            name: 'Plastic hunter',
            description: 'collect 3 plastic bottles',
            points: 15,
            image: plasticBottles,
        },
        {
            id: 2,
            name: 'Heavy Metal',
            description: 'collect 5 metal cans',
            points: 15,
            image: canImg,
        },
        {
            id: 3,
            name: 'Plastic Exterminator',
            description: 'collect 10 plastic bags',
            points: 35,
            image: plasticBags,
        },
        {
            id: 4,
            name: 'Trash Buster',
            description: 'collect 10 items of different materials',
            points: 50,
            image: glassPaperPlastic,
        },
    ]

  return (
    <article>
        <div className='challenge-container'>
            {challenges.map((challenge) => (   
                <div key={challenge.id} className='challenges'>
                    <div className='challenge-img-container'>
                        <img src={challenge.image} alt={`${challenge.description} photo`} width="200px" height="auto"/>
                    </div>
                    <div className='challenge-text'>
                        <h4>{challenge.name}</h4>
                        <p>{challenge.description}</p>
                        <p>Rewards {challenge.points} points</p>
                    </div>
                    <button>Do it</button>
                </div>
            ))}
        </div>    
    </article>
  )
}
