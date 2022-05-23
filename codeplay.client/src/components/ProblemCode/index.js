import './index.css'

function ProblemCode(props) {
  const renderQuest = () => {
    return (
      <div className="text">
        <div className="gridName box">
          <h3 className="boxTitle"> Nome </h3>
          <span className="information">nome do problema</span>
        </div>
        <div className="gridDesc box">
          <h3 className="boxTitle"> Descrição </h3>
          <span className="information">Descrição do problema</span>
        </div>
        <div className="gridInput box">
          <h3 className="boxTitle"> Entrada </h3>
          <span className="information">Entrada do problema</span>
        </div>
        <div className="gridOutput box">
          <h3 className="boxTitle"> Saída </h3>
          <span className="information">O que se espera</span>
        </div>
      </div>
    );
  };

  return (
    <div className="text-container">
      <div className="text-box">{renderQuest()}</div>
    </div>
  );
}

export default ProblemCode;
