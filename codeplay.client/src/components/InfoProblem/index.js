import './index.css'
import { useEffect, useState } from 'react'
import { listProblems } from '../../services/api'
import { connect } from 'react-redux'
import { dispatchProblem } from './dispatchProblem'
import { EAST, QUEST, SOUTH, WEST, NORTH } from '../../config/gameConstants'
import Swal from 'sweetalert2'
import gameOver from '../../data/Map/game-over.png'

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
      (props.position[0] === 288 && props.position[1] === 320)||
      (props.position[0] === 672 && props.position[1] === 160)||
      (props.position[0] === 352 && props.position[1] === 480)||
      (props.position[0] === 832 && props.position[1] === 352)||
      (props.position[0] === 832 && props.position[1] === 288)||
      (props.position[0] === 800 && props.position[1] === 320)||
      (props.position[0] === 864 && props.position[1] === 320)
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