import React from "react";

function Winner({ winner, setWinner, setQueens }) {
  function handleReplay() {
    setWinner([]);
    fetch("http://127.0.0.1:3000/queens")
      .then((r) => r.json())
      .then((data) => {
        setQueens(data);
      });
  }

  return (
    <div>
      <p>Winner is: {winner[0].name}</p>
      <img src={winner[0].image} height="300px" />
      <br />
      <br />
      <button onClick={handleReplay}>Replay!</button>
    </div>
  );
}

export default Winner;
