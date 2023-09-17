import "./index.css";
import { useState } from "react";
import { submission } from "../../services/api/index"
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import Star from '../../data/Quizz/star.png'
import Sad from '../../data/Quizz/sad.png'
import { useNavigate } from 'react-router-dom'

function ProblemCode(props) {

  const navigate = useNavigate();

  const infoPlaceholder =
    "INSTRUÇÕES:\n- Use input(), sem nenhum valor entre os parênteses, para fazer uma leitura do teclado. Ex: int(input()) para ler um número e convertê-lo para inteiro.\n\n- Seu programa não deve conter acentos e as saídas devem seguir o padrão exibido em SAÍDA.";

  const [code, setCode] = useState("");
  const [codeAdditional, setCodeAdditional] = useState("");
  const currentProblem = props.problemId;
  const [correctSolution, setCorrectSolution] = useState(0);

  const verifSolution =()=>{
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
      }).then((result) => {
        if (result.isConfirmed) {
          if(correctSolution+1 === 3) {
            navigate('/win');
          }
        }
      });
    }

  async function handleCodeSubmission(e) {
    e.preventDefault()

    const jsonData = {
      codeInput: code,  
      problem_id: currentProblem.id
    }
    setCodeAdditional(code);

    const response = await submission(jsonData);
    const submissionResult = response.data

    if(codeAdditional === code){
      Swal.fire({
        imageUrl: Sad,
        imageWidth: 75,
        imageHeight: 75,
        color: '#ff0000',
        title: 'ERRO',
        text: 'Dica:\n\n Você está inserindo o mesmo código, isso não contabiliza seus pontos!',
        confirmButtonColor: '#98be23',
        showCancelButton: false,
        confirmButtonText: 'Poxa',
      });
    } else {
        if (submissionResult.result === 'true') {
          setCorrectSolution(correctSolution+1);
          verifSolution();
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