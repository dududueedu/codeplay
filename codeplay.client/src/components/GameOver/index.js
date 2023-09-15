import "./index.css"
import audio from '../../data/Map/audio/negative.mp3'
import { useNavigate } from 'react-router-dom' 

function GameOver() { 
    const navigate = useNavigate();

    const backpag =()=> {
        navigate('/codeplay');
    }

    const backpagOne =()=> {
        navigate('/');
    }

    return (
        <>
            <audio src={audio} autoPlay></audio>
            <div className='container_go'>
                <div className='gamer-over'>
                    <div className="textgo">GameOver</div>
                    <div className="btn_gameplay"><button className="btn-go" onClick={backpag}>Jogar novamente</button></div>
                    <div className="btn_gameplay"><button className="btn-go" onClick={backpagOne}>Voltar a Página Inicial</button></div>
                </div>
            </div>
        </>
    );
  }
  
export default GameOver;