// src/OfficeSpace.js
import React from 'react';

const OfficeSpace = () => {
  // Office details list
  const offices = [
    {
      name: "Skyview Tech Park",
      rent: 75000,
      address: "Whitefield, Bangalore",
      image: "https://via.placeholder.com/300x150?text=Skyview+Tech+Park"
    },
    {
      name: "Global Tower",
      rent: 55000,
      address: "HiTech City, Hyderabad",
      image: "https://via.placeholder.com/300x150?text=Global+Tower"
    },
    {
      name: "MindSpace",
      rent: 62000,
      address: "Powai, Mumbai",
      image: "https://via.placeholder.com/300x150?text=MindSpace"
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'blue' }}>Office Space Rental App</h1>
      
      {offices.map((office, index) => {
        const rentStyle = {
          color: office.rent < 60000 ? 'red' : 'green',
          fontWeight: 'bold'
        };

        return (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={office.image} alt={office.name} style={{ width: '300px' }} />
            <h2>{office.name}</h2>
            <p><strong>Address:</strong> {office.address}</p>
            <p><strong>Rent:</strong> <span style={rentStyle}>₹{office.rent}</span></p>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeSpace;
