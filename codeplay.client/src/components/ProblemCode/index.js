import "./index.css";
import { useState } from "react";
import { submission } from "../../services/api/index"
import { connect } from 'react-redux'

function ProblemCode(props) {
  const infoPlaceholder =
    "INSTRUÇÕES:\n- Use input(), sem nenhum valor entre os parênteses, para fazer uma leitura do teclado. Ex: int(input()) para ler um número e convertê-lo para inteiro.\n\n- Seu programa não deve conter acentos e as saídas devem seguir o padrão exibido em SAÍDA.";

  const [code, setCode] = useState("");
  const currentProblem = props.problemId;

  async function handleCodeSubmission(e) {
    e.preventDefault()

    const jsonData = {
      codeInput: code,  
      problem_id: currentProblem.id, 
      language_id: null
    }

    const response = await submission(jsonData);
    console.log("meu response: ", response);
    const submissionResult = response.data
    console.log("submissionResult: ", submissionResult)
    if (submissionResult.result) {
        console.log(submissionResult);
        alert("Sua solução foi aprovada! PARABÉNS!");
    } else 
        alert("Erro. Motivo:\n\n" + submissionResult.error);
  }

  return (
    <form onSubmit={handleCodeSubmission} id="form-problemcode">
      <div className="problemcode-container">
        <div className="text-problem"><p className="text-problem-p"> CODEPLAY </p></div>
        <textarea
          value={code} 
          onChange={e => setCode(e.target.value)}
          type="textarea"
          placeholder={infoPlaceholder}
          rows="5"
          cols="5"
          className="textarea-problem"
        />
        <div className="area-btn">
          <input
            type="button"
            onClick={() => setCode("")}
            className="input-problem"
            value="LIMPAR"
          />
          <button type="submit" value="enviar" className="btn-problem">
            ENVIAR
          </button>
        </div>
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  return {
      tiles: state.map.tiles,
      position: state.player.position,
      id: state.player.id,
      problemId: state.quest
  }
};

export default connect(mapStateToProps)(ProblemCode)