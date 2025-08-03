// src/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const T20Players = ['Virat', 'Rohit', 'Rahul', 'Hardik', 'Bumrah'];
  const RanjiPlayers = ['Pujara', 'Rahane', 'Vihari', 'Jadeja', 'Ashwin'];

  // Merge arrays using spread operator
  const allPlayers = [...T20Players, ...RanjiPlayers];

  // Destructure into odd and even teams
  const oddTeam = allPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>Merged Players</h2>
      <p>{allPlayers.join(', ')}</p>

      <h3>Odd Team Players</h3>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Team Players</h3>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
