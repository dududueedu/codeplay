import './index.css'
import { useEffect, useState } from 'react'
import { listProblems } from '../../services/api'
import { connect } from 'react-redux'
import { dispatchProblem } from './dispatchProblem'
import { QUEST, NORTH } from '../../config/gameConstants'

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