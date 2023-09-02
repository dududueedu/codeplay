import "./index.css";
import QUESTIONS from "./questions";
import { useState } from 'react'
import Swal from 'sweetalert2'
import Sad from '../../data/Quizz/sad.png'
import Star from '../../data/Quizz/star.png'
import { useNavigate } from 'react-router-dom'

function Quizz() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    let spnQtd = `${currentIndex + 1}/${QUESTIONS.length}`;
    let currentQuestion = QUESTIONS[currentIndex];
    const navigate = useNavigate();

    const verification =(correct)=> {
        if(correct >= 7) {
            Swal.fire({
                imageUrl: Star,
                imageWidth: 75,
                imageHeight: 75,
                color: '#98be23',
                title: 'Parabéns! Você acertou '+correct+ `/${QUESTIONS.length}`,
                text: 'E passou no teste, boa sorte na próxima Etapa.',
                confirmButtonColor: '#98be23',
                showCancelButton: false,
                confirmButtonText: 'Obrigado, vamos lá!',
              }).then((result) => {
                if (result.isConfirmed) {
                      navigate('/codeplay');
                }
              });
        }
        else {
            Swal.fire({
                imageUrl: Sad,
                imageWidth: 75,
                imageHeight: 75,
                color: '#000000',
                title: 'Você acertou apenas '+correct+ `/${QUESTIONS.length}`,
                text: 'E infelizmente não passou no nosso teste. Não desanime, estude mais e volte em breve.',
                confirmButtonColor: '#008CCC',
                showCancelButton: false,
                confirmButtonText: 'Ok, voltarei.',
              })
        }
    }

    const callanswerOp1 =()=> {
        if(currentQuestion.answers.option1 === 'print' || currentQuestion.answers.option1 === 'int'
        || currentQuestion.answers.option1 === 'if x > y:' || currentQuestion.answers.option1 === 'for'){
            setCorrect(correct+1);
        }
        if(currentIndex < QUESTIONS.length-1){
            setCurrentIndex(currentIndex+1);
        }else{
            verification(correct);
        }
    }
    const callanswerOp2 =()=> {
        if(currentQuestion.answers.option2 === 'print(fruits[1])'){
            setCorrect(correct+1);
            verification(correct+1);
        }
        if(currentIndex < QUESTIONS.length-1){
            setCurrentIndex(currentIndex+1);
        }
    }
    const callanswerOp3 =()=> {
        if(currentQuestion.answers.option3 === 'while' || currentQuestion.answers.option3 === '[2]'
        || currentQuestion.answers.option3 === 'color = "Black"' || currentQuestion.answers.option3 === 'for x in colors:'
        || currentQuestion.answers.option3 === 'print(List.count(3))'){
            setCorrect(correct+1);
        }
        if(currentIndex < QUESTIONS.length-1){
            setCurrentIndex(currentIndex+1);
        }else{
            verification(correct);
        }
    }

    const renderQuest = () => {
        return (
            <>
            <div className="global">
            <div className="document">
                <div className="doc"></div>
                <h1>CodePlay Test</h1>
            </div>
                    <main>
                        <div className="content">
                            <span className="spnQtd">{spnQtd}</span>
                            <span className="tite_question">{currentQuestion.tite_question}</span>
                            <span className="question">{currentQuestion.question}</span>
                            <p className="subquestion">{currentQuestion.subquestion}</p>
                            <p className="subquest">{currentQuestion.subquest}</p>
                            <div className="answers"><button onClick={callanswerOp1}>{currentQuestion.answers.option1}</button></div>
                            <div className="answers"><button onClick={callanswerOp2}>{currentQuestion.answers.option2}</button></div>
                            <div className="answers"><button onClick={callanswerOp3}>{currentQuestion.answers.option3}</button></div>
                        </div>
                    </main>
            </div>
            </>
        );
    }

    return (
        renderQuest()
    );
}

export default Quizz;