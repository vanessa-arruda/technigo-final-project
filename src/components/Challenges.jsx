import '../styles/challenges.css';
import canImg from '../assets/metal-cans.png';
import plasticBottles from '../assets/plastic-bottles.png';
import plasticBags from '../assets/plastic-bags.png';

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
    ]

  return (
    <article>
        
        <div className='challenge-container'>
            {challenges.map((challenge) => (   
                <div key={challenge.id} className='challenges'>
                    <div className='challenge-img-container'>
                        <img src={challenge.image}/>
                    </div>
                    <h4>{challenge.name}</h4>
                    <p>{challenge.description}</p>
                    <p>Rewards {challenge.points} points</p>
                    <button>Do it</button>
                </div>
            ))}
        </div>    
    </article>
  )
}
