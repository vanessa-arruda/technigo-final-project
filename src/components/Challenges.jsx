import '../styles/challenges.css';
import canImg from '../assets/metal-cans.webp';
import plasticBottles from '../assets/plastic-bottles.webp';
import plasticBags from '../assets/plastic-bags.webp';
import glassPaperPlastic from '../assets/glass-paper-plastic-recycle.webp';
import { Link } from 'react-router-dom';


export const Challenges = () => {

    const challenges = [
        {
            id: 1,
            name: 'Plastic hunter',
            description: 'collect 3 plastic bottles',
            points: 15,
            image: plasticBottles,
            itemId: 'plastic',
            numberOfItems: 3,
        },
        {
            id: 2,
            name: 'Heavy Metal',
            description: 'collect 5 metal cans',
            points: 15,
            image: canImg,
            itemId: 'metal',
            numberOfItems: 5,
        },
        {
            id: 3,
            name: 'Paper Exterminator',
            description: 'collect 10 paper',
            points: 35,
            image: plasticBags,
            itemId: 'paper',
            numberOfItems: 10,
        },
        {
            id: 4,
            name: 'Glass',
            description: 'collect 10 Glass',
            points: 50,
            image: glassPaperPlastic,
            itemId: 'glass',
            numberOfItems: 10,
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
                        <h3>{challenge.name}</h3>
                        <p>{challenge.description}</p>
                        <p>Rewards {challenge.points} points</p>
                    </div>
                    <Link to="/AddItem" state={{numberOfItems: challenge.numberOfItems, itemId: challenge.itemId, challengePoint: challenge.points}} >Do it</Link >
                </div>
            ))}
        </div>    
    </article>
  )
}
