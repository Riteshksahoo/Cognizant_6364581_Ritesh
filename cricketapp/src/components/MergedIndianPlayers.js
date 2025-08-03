import React from 'react';
function MergedIndianPlayers({ players }) 
{
  return (
    <div>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        )
        )
        }
      </ul>
    </div>
  );
}
export default MergedIndianPlayers;
