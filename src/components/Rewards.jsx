import '../styles/rewards.css';
import partnersData from '../partners.json';

export const Rewards = () => {

    const partners = partnersData.partners;
  return (
    <article className='rewards-container'>
        <h1>List of Partners and Rewards</h1>
        <section className='partners-container'>
            {partners.map((data) => (
                <div 
                key={data.id}
                className='partner-card-container'
                >

                    <h2>{data.name}</h2>
                    <img src={data.logo}/>
                    <h4>Points needed: {data.points}</h4>
                    <p>Reward: {data.reward}</p>
                    
                </div>
            ))}
        </section>
    </article>
  )
}
