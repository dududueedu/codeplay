import "./App.css";
import InfoProblem from "./components/InfoProblem";
import ProblemCode from "./components/ProblemCode";
import GameSpace from "./resources/GameSpace";

function App() {
  return (
    <>
      <div className="master-container">
        <div className="ff-container">
          <ProblemCode />
        </div>
        <GameSpace />
      </div>
      <InfoProblem />
    </>
  );
}

export default App;
