import './index.css'
import InfoProblem from "./../InfoProblem";
import ProblemCode from "./../ProblemCode";
import GameSpace from "./../../resources/GameSpace";
import Student from '../../data/Characters/Student.png';
import Swal from 'sweetalert2';

function RenderPage() {

    const tutorial_func =()=> {
        Swal.fire({
            imageUrl: Student,
            text: 'Arraste o cursor do mouse para dentro do mapa, click no botão esquerdo e utilize as setas do teclado para movimentar o personagem.',
            confirmButtonColor: '#98be23',
            showCancelButton: false,
            confirmButtonText: 'Avançar',
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                imageUrl: Student,
                text: 'O mapa tem cinco casas, em cada uma tem um desafio. Seu objetivo é resolver três desafios, tente evitar os inimigos, pois eles podem dificultar sua tragetória.',
                color: '#141313',
                showConfirmButton: true,
                confirmButtonColor: '#98be23',
                timer: 20000
            })
        }
      });
    }

    return (
        <>
            <button onClick={tutorial_func} type="submit" value="enviar" className="btn-tutorial">
                <span className="span-tutorial">TUTORIAL</span>
            </button>
            <div className="group-code">
                <span className="code-c">C</span>
                <span className="code-o">O</span>
                <span className="code-d">D</span>
                <span className="code-e">E</span> 
            </div>
            <div className="master-container">
                <div className="ff-container">
                <ProblemCode />
                </div>
                <GameSpace />
            </div>
            <InfoProblem />
            <div className="group-right">
                <span className="code-p">P</span>
                <span className="code-l">L</span>
                <span className="code-a">A</span>
                <span className="code-y">Y</span> 
            </div>
        </>
    );
}
export default RenderPage;