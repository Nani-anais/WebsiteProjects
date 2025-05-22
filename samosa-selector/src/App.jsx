import './App.css';
import './index.css';
import samosa from './samosa.png'; //samosa png had to be in the same directory
import { useState } from 'react';

const App = () => 
{ 
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);

  const upgrade = [
    {
      name: '👯‍♂️ Double Stuffed 👯‍♀️',
      description: '2x per click',
      cost: '10 samosa',
      buyUpgrade: () => buyDoubleStuffed()
    },
    {
      name: '🕺 Party Pack 💃',
      description: '5x per click',
      cost: '100 samosa',
      buyUpgrade: () => buyPartyPack()
    },
    {
      name: '🍽️ Full Feast 🍽️',
      description: '10x per click',
      cost: '1,000 samosa',
      buyUpgrade: () => buyFullFeast()
    }
  ];

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count + multiplier);
      setCount(count - 10);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count + multiplier);
      setCount(count - 100);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier( multiplier * 10);
      setCount(count + multiplier);
      setCount(count - 1000);
    }
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Clicks: {count} </h2>
        <img className="samosa" src={samosa} alt="Samosa" onClick={updateCount} />
      </div>
      <div className="container">
        {upgrade.map((upgrade, index) => 
        (
          <div className="upgrade">step
            <h3> {upgrade.name} </h3>
            <p> {upgrade.description} </p>
            <button onClick ={upgrade.buyUpgrade}>Cost: {upgrade.cost} Clicks</button>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default App