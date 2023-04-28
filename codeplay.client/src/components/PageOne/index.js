import './index.css'
import InfoProblem from "./../InfoProblem";
import ProblemCode from "./../ProblemCode";
import GameSpace from "./../../resources/GameSpace";

function RenderPage() {
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
export default RenderPage;