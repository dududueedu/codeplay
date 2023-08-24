import "./index.css"
import { useNavigate } from 'react-router-dom' 
import { useTypewriter, Cursor } from 'react-simple-typewriter'


function Home() {
    const navigate = useNavigate();

    const upQuizz =()=> {
        navigate('/quizz');
    }

    const [typewriter] = useTypewriter({
        words: ['Aqui você irá praticar programação de forma mais descontraída. Tome cuidado no caminho que irá trilhar e ao final, tente alcançar o objetivo do jogo.'],
        loop: 1,
        typeSpeed: 75
    })

    return (
        <div className='container_home'>
            <div className='space_home'>
                <div className="text-home">BEM VINDO AO CODEPLAY</div>
                <span className="typewriter-home">{typewriter}<Cursor cursorColor='black'/></span>
                <div className="btn_gameplay_home">
                    <button className="btn-home" onClick={upQuizz}>Começar</button>
                </div>
            </div>
        </div>
    );
  }
  
export default Home;