import "./index.css"
import { useNavigate } from 'react-router-dom' 


function Home() {
    const navigate = useNavigate();

    const upQuizz =()=> {
        navigate('/quizz');
    }

    return (
        <div className='container_home'>
            <div className='space_home'>
                <div className="text-home">BEM VINDO AO CODEPLAY</div>
                <div className="btn_gameplay_home">
                    <button className="btn-home" onClick={upQuizz}>Começar</button>
                </div>
            </div>
        </div>
    );
  }
  
export default Home;