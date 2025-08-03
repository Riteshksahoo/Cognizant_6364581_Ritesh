import React from 'react';
function ListofPlayers({ players }) {
  return (
    <div>
      {players.map((item, index) => (
        <div key={index}>
          Mr. {item.name} {item.score}
        </div>
      ))}
    </div>
  );
}
export default ListofPlayers;
