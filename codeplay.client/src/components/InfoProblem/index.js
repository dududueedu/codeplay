import './index.css'
import { useEffect } from 'react'
import { listProblems } from '../../services/api'

function InfoProblem(props) {

  useEffect(() => {
    listProblems().then(res => {
        console.log("meus problemas", res.data);
    }).catch(error => {
        console.log(error);
    })
  });

  const renderQuest = () => {
    return (
      <div className="text">
        <div className="gridDesc box">
          <p className="boxTitle"> DESCRIÇÃO </p>
          <span className="information">Descrição do problema</span>
        </div>
        <div className="gridInput box">
          <p className="boxTitle"> ENTRADA </p>
          <span className="information">Entrada do problema</span>
        </div>
        <div className="gridOutput box">
          <p className="boxTitle"> SAÍDA </p>
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

export default InfoProblem;
