import "./index.css";
import { useState } from "react";
import { submission } from "../../services/api/index"
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import Star from '../../data/Quizz/star.png'
import Sad from '../../data/Quizz/sad.png'

function ProblemCode(props) {
  const infoPlaceholder =
    "INSTRUÇÕES:\n- Use input(), sem nenhum valor entre os parênteses, para fazer uma leitura do teclado. Ex: int(input()) para ler um número e convertê-lo para inteiro.\n\n- Seu programa não deve conter acentos e as saídas devem seguir o padrão exibido em SAÍDA.";

  const [code, setCode] = useState("");
  const currentProblem = props.problemId;
  const [correctSolution, setCorrectSolution] = useState(0);

  async function handleCodeSubmission(e) {
    e.preventDefault()

    const jsonData = {
      codeInput: code,  
      problem_id: currentProblem.id
    }

    const response = await submission(jsonData);
    const submissionResult = response.data
    if (submissionResult.result === 'true') {
      Swal.fire({
        imageUrl: Star,
        imageWidth: 75,
        imageHeight: 75,
        color: '#98be23',
        title: 'PARABÉNS!',
        text: 'Sua solução foi aprovada!',
        confirmButtonColor: '#98be23',
        showCancelButton: false,
        confirmButtonText: 'Obrigado!'
      });
      setCorrectSolution(correctSolution+1);
    } else {
      Swal.fire({
        imageUrl: Sad,
        imageWidth: 75,
        imageHeight: 75,
        color: '#ff0000',
        title: 'ERRO',
        text: 'Dica:\n\n'+submissionResult.error,
        confirmButtonColor: '#98be23',
        showCancelButton: false,
        confirmButtonText: 'Poxa',
      });
    }
  }

  return (
    <form onSubmit={handleCodeSubmission} id="form-problemcode">
      <div className="problemcode-container">
        <div className="text-problem"><div className="text-sm">PROBLEMAS RESOLVIDOS: {correctSolution} </div></div>
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
          <button
            type="button"
            onClick={() => setCode("")}
            className="input-problem"
          >
            <span>LIMPAR</span>
          </button>
          <button type="submit" value="enviar" className="btn-problem">
            <span>ENVIAR</span>
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