import Swal from 'sweetalert2'
import cans from '../../../data/Quizz/cans.png'
import Star from '../../../data/Quizz/star.png'
import Sad from '../../../data/Quizz/sad.png'
import book from '../../../data/Quizz/book.png'

export function ModalCans(){
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
              title: 'Que pena! Não foi dessa vez. Tente outra vez!',
              confirmButtonColor: '#98be23',
              showCancelButton: false,
              confirmButtonText: 'Ok!',
            })
            setTimeout(() => {
              window.location.reload();
            }, "5000");
          }
        },
    })
}

export function ModalBook(){
    Swal.fire({
        text: 'Maike com raiva da professora, descontou no livro de Lógica e rasgou as páginas 9, 10, 100, 111, 112. Quantas folhas ele rasgou?',
        imageUrl: book,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'BOOK image',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'ENVIAR',
        confirmButtonColor: '#98be23',
        showLoaderOnConfirm: true,
        preConfirm: (response) => {
          if(response === '3'){
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
              title: 'Que pena! Não foi dessa vez. Tente outra vez!',
              confirmButtonColor: '#98be23',
              showCancelButton: false,
              confirmButtonText: 'Ok!',
            })
            setTimeout(() => {
              window.location.reload();
            }, "5000");
          }
        },
    })
}