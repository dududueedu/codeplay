import "./index.css"
import { useNavigate } from 'react-router-dom' 
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Swal from 'sweetalert2'

function Home() {
    const navigate = useNavigate();

    const upQuizz =()=> {
        Swal.fire({
            imageWidth: 75,
            imageHeight: 75,
            color: '#141313',
            title: 'AVISO',
            text: 'Aqui você passará por um teste de conhecimento. Logo após, se obter 7 ou mais acertos, passará para próxima fase.',
            confirmButtonColor: '#008CCC',
            showCancelButton: false,
            confirmButtonText: 'Avançar!'
        });
        setTimeout(function() {
            navigate('/quizz')
        }, 3000)
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