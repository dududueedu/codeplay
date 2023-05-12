import './index.css'
import { useEffect, useState } from 'react'
import { listProblems } from '../../services/api'
import { connect } from 'react-redux'
import { dispatchProblem } from './dispatchProblem'
import { EAST, QUEST, SOUTH, WEST, NORTH } from '../../config/gameConstants'
import Swal from 'sweetalert2'
import gameOver from '../../data/Map/game-over.png'
import cans from '../../data/Quizz/cans.png'
import Star from '../../data/Quizz/star.png'
import Sad from '../../data/Quizz/sad.png'

function InfoProblem(props) {

  const initialState = {
    id: "85996511130",
    name: null,
    description: null,
    input: null,
    expectedOutput: null
  };

  const [currentQuest, setCurrentQuest] = useState(initialState);
  const [questList, setQuestList] = useState([]);

  useEffect(() => {
    listProblems().then(res => {
      setQuestList(res.data);
    }).catch(error => {
      console.log(error);
    });
  }, [])

  useEffect(() => {
    if(
      (props.position[0] === 64 && props.position[1] === 96 && props.facing === EAST) ||
      (props.position[0] === 96 && props.position[1] === 64 && props.facing === SOUTH) ||
      (props.position[0] === 128 && props.position[1] === 64 && props.facing === SOUTH)||
      (props.position[0] === 160 && props.position[1] === 64 && props.facing === SOUTH)|| 
      (props.position[0] === 192 && props.position[1] === 64 && props.facing === SOUTH)||
      (props.position[0] === 96 && props.position[1] === 128 && props.facing === NORTH)||
      (props.position[0] === 128 && props.position[1] === 128 && props.facing === NORTH)||
      (props.position[0] === 160 && props.position[1] === 128 && props.facing === NORTH)||
      (props.position[0] === 224 && props.position[1] === 96 && props.facing === WEST)||
      (props.position[0] === 192 && props.position[1] === 128 && props.facing === NORTH)||
      (props.position[0] === 672 && props.position[1] === 160)||
      (props.position[0] === 352 && props.position[1] === 480)
    ) {
        Swal.fire({
          imageUrl: gameOver,
          imageWidth: 75,
          imageHeight: 75,
          color: '#98be23',
          title: 'Você deseja tentar novamente?',
          showDenyButton: true,
          confirmButtonColor: '#98be23',
          showCancelButton: false,
          confirmButtonText: 'Sim, vou tentar.',
          denyButtonText: `Não!`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Ok. Boa sorte!', '', 'success');
            setTimeout(() => {
              window.location.reload();
            }, "3000");
          } else if (result.isDenied) {
            Swal.fire('Ok. Até mais!', 'Não desamine, estude e volte depois ;)', 'info');
          }
        });
      }
      else if((props.position[0] === 288 && props.position[1] === 320)||
              (props.position[0] === 832 && props.position[1] === 352)) {
                Swal.fire({
                  text: 'Quantos latas são necessárias para construir uma pilha de latas no formato acima que tenha a altura de cinco latas?',
                  imageUrl: cans,
                  imageWidth: 500,
                  imageHeight: 200,
                  imageAlt: 'CANS image',
                  input: 'text',
                  inputAttributes: {
                    autocapitalize: 'off'
                  },
                  showCancelButton: false,
                  confirmButtonText: 'ENVIAR',
                  confirmButtonColor: '#98be23',
                  showLoaderOnConfirm: true,
                  preConfirm: (response) => {
                    if(response === '15'){
                      Swal.fire({
                        imageUrl: Star,
                        imageWidth: 75,
                        imageHeight: 75,
                        color: '#98be23',
                        title: 'Parabéns! Você acertou.',
                        confirmButtonColor: '#98be23',
                        showCancelButton: false,
                        confirmButtonText: 'Ok!',
                        })
                    }else{
                      Swal.fire({
                        imageUrl: Sad,
                        imageWidth: 75,
                        imageHeight: 75,
                        color: '#98be23',
                        title: 'Que pena! Não foi dessa vez.',
                        confirmButtonColor: '#98be23',
                        showCancelButton: false,
                        confirmButtonText: 'Ok!',
                      })
                    }
                  },
                })
              }
  }, [props])

  useEffect(() => {
    let currentProblem = null;

    if(
        (props.position[0] === 512 && props.position[1] === 160) ||
        (props.position[0] === 160 && props.position[1] === 352) ||
        (props.position[0] === 576 && props.position[1] === 416) ||
        (props.position[0] === 192 && props.position[1] === 608) ||
        (props.position[0] === 608 && props.position[1] === 608)
      ) {
          if(props.facing === NORTH) {
            const random = Math.round(Math.random() * questList.length);
            currentProblem = questList[random];
          }
        }

        if (currentProblem) {
          setCurrentQuest(currentProblem);
          props.dispatchQuest(QUEST, currentProblem);
        }
  }, [props, questList]);

  const renderQuest = () => {
    return (
      <div className="text">
        <div className="gridDesc box">
          <p className="boxTitle"> DESCRIÇÃO </p>
          <span className="information">{currentQuest.description}</span>
        </div>
        <div className="gridInput box">
          <p className="boxTitle"> ENTRADA </p>
          <span className="information">{currentQuest.input}</span>
        </div>
        <div className="gridOutput box">
          <p className="boxTitle"> SAÍDA </p>
          <span className="information">{currentQuest.expectedOutput}</span>
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

function mapStateToProps(state) {
  return {
      tiles: state.map.tiles,
      position: state.player.position,
      id: state.player.id,
      facing: state.player.facing
  }
}

function mapDispatchToProps(dispatch) {
  return {
      dispatchQuest(type, quest) {
          const action = dispatchProblem(type, quest);
          dispatch(action);
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoProblem);