import './index.css'
import InfoProblem from "./../InfoProblem";
import ProblemCode from "./../ProblemCode";
import GameSpace from "./../../resources/GameSpace";

function RenderPage() {
    return (
        <>
            <div className="group-code">
                <span className="code-c">C</span>
                <span className="code-o">O</span>
                <span className="code-d">D</span>
                <span className="code-e">E</span> 
            </div>
            <div className="master-container">
                <div className="ff-container">
                <ProblemCode />
                </div>
                <GameSpace />
            </div>
            <InfoProblem />
            <div className="group-right">
                <span className="code-p">P</span>
                <span className="code-l">L</span>
                <span className="code-a">A</span>
                <span className="code-y">Y</span> 
            </div>
        </>
    );
}
export default RenderPage;