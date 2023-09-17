import "./index.css"
import audio from '../../data/Map/audio/celebration.mp3'
import { useNavigate } from 'react-router-dom'
import trophy from '../../data/Characters/trophy.png'; 

function Win() { 
    const navigate = useNavigate();

    const backpagOne =()=> {
        navigate('/');
    }

    return (
        <>
            <audio src={audio} autoPlay></audio>
            <div className='container_win'>
                <div className='gamer-win'>
                    <img className="imgWin" src={trophy} alt="trophy" />
                    <div className="textWin">PARABÉNS, VOCÊ VENCEU!</div>
                    <div className="btn_gameplay"><button onClick={backpagOne}>Yeah!</button></div>
                </div>
            </div>
        </>
    );
  }
  
export default Win;