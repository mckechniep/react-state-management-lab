import { useState } from 'react'
import './App.css' 

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(112);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const handleAddFighter = (zombieFighter) => {
    if (money - zombieFighter.price < 0) {
      console.log('Not enough money');
    } else {
      setTeam([...team, zombieFighter]);
      setMoney(money - zombieFighter.price);
    }
      setTotalStrength(totalStrength + zombieFighter.strength);
      setTotalAgility(totalAgility + zombieFighter.agility);
  };
  
  const handleRemoveFighter = (fighterToRemove) => {
    setTeam(team => team.filter(fighter => fighter !== fighterToRemove));
    setMoney(money + fighterToRemove.price);
    setTotalStrength(totalStrength - fighterToRemove.strength);
    setTotalAgility(totalAgility - fighterToRemove.agility);
  }

  // const addZombieFighter = (newZombieFighters) => {
  //   const newZombieFightersArray = [...zombieFighters, newZombieFighters];
  //   setZombieFighters(newZombieFightersArray);
  // }

  return (
    <>
    <h1>Your Team</h1>
    <h3>Money: ${money}</h3>
    <h3>Team Strength: {totalStrength}</h3>
    <h3>Team Agility: {totalAgility}</h3>
    {team.length === 0 ? ( <p>Pick some team members!</p> ) : 
    ( <ul>{team.map((zombieFighter, index) => (
      <li key={index}> 
      <h2>{zombieFighter.name}</h2>
      <img src={zombieFighter.img} alt={zombieFighter.name} width="150" height="150"/>
      <p>Price: ${zombieFighter.price}</p>
      <p>Strength: {zombieFighter.strength}</p>
      <p>Agility: {zombieFighter.agility}</p>
      <button onClick={() => handleRemoveFighter(zombieFighter)}>Remove from Team</button>
      </li>
    ))}
    </ul>   
    )}
    <h1>Zombie Fighters</h1>
    <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <li key={index}>
          <h2>{zombieFighter.name}</h2>
          <img src={zombieFighter.img} alt={zombieFighter.name} width="150" height="150"/>
          <p>Price: ${zombieFighter.price}</p>
          <p>Strength: {zombieFighter.strength}</p>
          <p>Agility: {zombieFighter.agility}</p>
          <button onClick={() => handleAddFighter(zombieFighter)}>Add to Team</button>
          </li>
        ))}  
    </ul>
    
   
    </>
  );}

export default App
