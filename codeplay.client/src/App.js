import "./App.css";
import InfoProblem from "./components/InfoProblem";
import ProblemCode from "./components/ProblemCode";
import GameMap from "./resources/GameMap";

function App() {
  return (
    <div className="App">
      <GameMap />
      <ProblemCode />
      <InfoProblem />
    </div>
  );
}

export default App;
