import "./index.css";
import { useState } from "react";
import { submission } from "../../services/api/index"
import { connect } from 'react-redux'

function ProblemCode(props) {
  const infoPlaceholder =
    "Para fazer uma leitura do teclado, use sempre input(), sem nenhum valor nos parênteses.\nExemplo: int(input()) para ler um número e convertê-lo para inteiro.\n\nSeu programa não deve conter acentos.\nAs saídas do seu programa devem seguir o padrão exibido em 'Saída'.\n\nDivirta-se, bom jogo!";

    const [code, setCode] = useState("")

    const currentProblem = props.problemId;
    //console.log("challenge", currentProblem);

    async function handleCodeSubmission(e) {
      e.preventDefault()

      const jsonData = {
        codeInput: code,  
        problem_id: currentProblem.id, 
        language_id: null
      }
      //console.log("meu jSon: ", jsonData);

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