import "./App.css";
import { useEffect, useState } from "react";
import CurrentQueens from "./CurrentQueens";
import Winner from "./Winner";

function App() {
  const [queens, setQueens] = useState([]);
  const [winner, setWinner] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/queens")
      .then((r) => r.json())
      .then((data) => {
        setQueens(data);
      });
  }, []);

  return (
    <div className="App">
      {winner.length > 0 ? (
        <Winner winner={winner} setWinner={setWinner} setQueens={setQueens} />
      ) : (
        <CurrentQueens
          queens={queens}
          setQueens={setQueens}
          winner={winner}
          setWinner={setWinner}
        />
      )}
    </div>
  );
}

export default App;
