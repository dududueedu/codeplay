const QUESTIONS = [
    {
      question: "Qual o comando utilizado para imprimir alguma coisa na tela?",
      answers: {
        option1: "print",
        option2: "imprimir",
        option3: "echo"
      },
    },
    {
      question: "Qual o comando a seguir, NÃO é uma estrutura condicional?",
      answers: {
        option1: "else", 
        option2: "if",
        option3: "while"
      },
    },
    {
      tite_question: 'O exemplo de código a seguir imprimiria o tipo de dados de x, que tipo de dados seria esse?',
      question: 'x = 7',
      subquestion: 'print(type(x))',
      answers: {
        option1: 'int',
        option2: 'float',
        option3: 'bool',
      },
    },
    {
      tite_question: 'O que será impresso ao executar o seguinte código?',
      question: 'x = [1, 2, 3]',
      subquestion: 'y = [i for i in x if i % 2 == 0]',
      subquest: 'print(y)',
      answers: {
        option1: '[1, 2, 3]',
        option2: '[1, 3]',
        option3: '[2]',
      },
    },
    {
      tite_question: 'Crie uma variável chamada color e atribua o valor Black a ela.',
      answers: {
        option1: 'color = Black',
        option2: 'color = "Preto"',
        option3: 'color = "Black"',
      }
    },
    {
      tite_question: 'Qual o laço utilizado para navegar por Listas?',
      answers: {
        option1: 'for',
        option2: 'loop',
        option3: 'laço',
      }
    },
    {
      tite_question: 'Marque a opção cujo o comando seja capaz de percorrer os itens na lista colors.',
      question: 'colors = ["yellow", "blue", "red", "pink"]',
      answers: {
        option1: 'for (x in cores):',
        option2: 'loop x in colors:',
        option3: 'for x in colors:',
      }
    },
    {
      tite_question: 'Qual opção para que seja impresso "Hello World", dado a condição "se x for maior que y".',
      question: 'Considere que o print("Hello World") já esteja incluso no escopo do código.',
      subquestion: 'x = 60',
      subquest: 'y = 15',
      answers: {
        option1: 'if x > y:',
        option2: 'se x maior y',
        option3: 'se x > y:'
      },
    },
    {
      tite_question: 'Dado a seguinte lista: List = [1,2,2,3,3,3,3,4,4,4,]',
      question: 'Qual comando imprime a quantidade de vezes que um item 3 está presente nesta lista?',
      answers: {
        option1: 'print(List.qtd(3))',
        option2: 'print(List(3))',
        option3: 'print(List.count(3))'
      },
    },
    {
      tite_question: 'Qual o comando para que você consiga imprimir o segundo item na lista de frutas?',   
      question: 'fruits = ["apple", "banana", "cherry"]',
      answers: {
        option1: 'print(2)',
        option2: 'print(fruits[1])',
        option3: 'print("banana")',
      },
    }
  ];
  
  export default QUESTIONS;