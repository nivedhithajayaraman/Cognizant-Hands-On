import React from 'react';

function Welcome() {
  const greet = (message) => {
    alert(`Message: ${message}`);
  };

  return (
    <div>
      <button onClick={() => greet("welcome")}>Say Welcome</button>
    </div>
  );
}

export default Welcome;
