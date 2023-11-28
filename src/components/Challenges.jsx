import '../styles/challenges.css';

export const Challenges = () => {

    const challenges = [
        {
            id: 1,
            name: 'Plastic hunter',
            description: 'collect 3 plastic bottles',
            points: 15,
            image: '',
        },
        {
            id: 2,
            name: 'Heavy Metal',
            description: 'collect 5 metal cans',
            points: 15,
            image: '',
        },
        {
            id: 3,
            name: 'Plastic Exterminator',
            description: 'collect 10 plastic bags',
            points: 35,
            image: '',
        },
    ]
  return (
    <article>
        <h2>Current Challenges</h2>
            {challenges.map((challenge) => (
                <div key={challenge.id} className='challenge-container'>
                    <img src={challenge.image}/>
                    <h4>{challenge.name}</h4>
                    <p>{challenge.description}</p>
                    <p>{challenge.points}</p>
                </div>
            ))}
    </article>
  )
}
