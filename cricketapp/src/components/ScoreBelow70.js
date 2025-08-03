import React from 'react';
function ScoreBelow70({ players }) 
{
  const filtered = players.filter((player) => player.score < 70);
  return (
    <div>
      <ul>
        {filtered.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>({item.score})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ScoreBelow70;
