const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Qual é a origem histórica das bicicletas?",
    answers: [
      { text: "China", correct: false},
      { text: " Europa medieval", correct: true },
      { text: "Egito Antigo", correct: false },
      { text: "Londres", correct: false }
    ]
  },
  {
    question: "Qual dos seguintes não é um benefício comum de andar de bicicleta regularmente?",
    answers: [
      { text: "Melhoria da saúde cardiovascular", correct: false },
      { text: "Redução do estresse e da ansiedade.", correct: false },
      { text: "Aumento do risco de lesões musculoesqueléticas.", correct: true },
      { text: "Em outro lugar", correct: false }
    ]
  },
  {
    question: 'Qual é a função do câmbio em uma bicicleta?',
    answers: [
      { text: "Controlar a velocidade da bicicleta.", correct: false },
      { text: "Trocar de marchas para enfrentar diferentes tipos de terreno.", correct: true},
      { text: 'segurar', correct: false },
      { text: "Regular a pressão dos pneus.", correct: false  }
    ]
  },
  {
    question: 'A bicicleta ficou manchada no jornal , por assaltantes roubando de bike',
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false}
    ]
  },
  {
    question: 'Quais são os principais componentes de uma bicicleta?',
    answers: [
      { text: 'Câmbio, freios, buzina', correct: false },
      { text: "Guidão, pedal, banco.", correct: true  },
      { text: 'msgBox("Hello World");', correct: false },
    ]
  },
  {
    question: 'CQual é a parte da bicicleta onde os pedais são fixados?',
    answers: [
      { text: "Guidão.", correct: false },
      { text: 'pedivela', correct: true },
      { text: 'Quadro', correct: false },
      
    ]
  },
  {
    question: 'Como podemos o componente quen nao deixa a bike cair"?',
    answers: [
      { text: 'Corrente', correct: false },
      { text: 'Boia()', correct: false },
      { text: 'Nenhum desses ', correct: false },
      { text: '"Pezinho"()', correct: true },
    ]
  },
  {
    question: 'E verdade que as bicicletas eh um meio de transporte perigoso?',
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false}
    ]
  },
  {
    question: 'A bicicleta quebra se nao trocar oleo',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true}
    ]
  },
  {
    question: 'e verdade que passou a "fama de usar bicicleta"?',
    answers: [
      { text: "Verdadeiro", correct: true },
      { text: "Falso", correct: false}
    ]
  },
]