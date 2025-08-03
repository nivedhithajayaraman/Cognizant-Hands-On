// src/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat Kohli', score: 88 },
    { name: 'Rohit Sharma', score: 65 },
    { name: 'KL Rahul', score: 72 },
    { name: 'Hardik Pandya', score: 45 },
    { name: 'Ravindra Jadeja', score: 70 },
    { name: 'Rishabh Pant', score: 55 },
    { name: 'Shubman Gill', score: 85 },
    { name: 'Bumrah', score: 60 },
    { name: 'Shami', score: 75 },
    { name: 'Ashwin', score: 50 },
    { name: 'Surya Kumar', score: 78 },
  ];

  // Filter players with score < 70 using arrow function
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score less than 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
