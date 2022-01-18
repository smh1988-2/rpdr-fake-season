import React from "react";

function CurrentQueens({ queens, setQueens, setWinner }) {

    const episode_challenge = ["Roast of Rupaul", "Rusical" , "Makeover" , "Snatch Game" , "Lipsync Extraganza", "The Coding Ball", "Parody Commericials", "Rumix"]

    let randomNumber = Math.floor(Math.random() * (episode_challenge.length - 0) + 0)

    function handleFormSubmit(e) {
        e.preventDefault();
        let id = parseInt(e.target[0].selectedOptions[0].attributes[0].value)
        let newArray = queens
        newArray = newArray.filter(obj => obj.id !== id)
        setQueens(newArray)
    }

    function handleWinner(e) {
        let id = parseInt(e.target.attributes[0].value)
        let newArray = queens
        newArray = newArray.filter(obj => obj.id === id)
        setWinner(newArray)
    }

  return (
    <div>
        {queens.length === 4 ? 
        <><h1>Top 4!</h1>
        {queens.map((q) => {
            return <><img key={q.id} data-id={q.id} src={q.image} height="200px"/><br /><button data-id={q.id} onClick={e => handleWinner(e)}>Winner</button><br /><br /></>
          })}</>
         : 
         <>
         <h1>This Week's Challenge: {episode_challenge[randomNumber]}</h1>
         {queens.map((q) => {
        return  <p key={q.id}>{q.name}</p>;
      })}

      <form onSubmit={e => handleFormSubmit(e)}>
        <br />
        <label>Choose the eliminated queen:</label>
        <br />
        <select>
          {queens.map((q) => {
            return <option key={q.id} data-id={q.id}>{q.name}</option>;
          })}
        </select>

        <br />
        <br />
        <button>Submit</button>
      </form>
         </>}

      
    </div>
  );
}

export default CurrentQueens;
