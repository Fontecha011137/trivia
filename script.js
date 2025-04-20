const tabsContainer = document.getElementById("tabs");
const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");

let currentTabIndex = 0;
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;

const questionsByCategory = {};

jsonTrivia.results.forEach((q) => {
  if (!questionsByCategory[q.category]) {
    questionsByCategory[q.category] = [];
  }
  questionsByCategory[q.category].push(q);
});

const categories = Object.keys(questionsByCategory);

categories.forEach((category, index) => {
  const tab = document.createElement("button");
  tab.textContent = category;
  tab.onclick = () => {
    currentTabIndex = index;
    currentQuestionIndex = 0;
    renderQuestion();
  };
  tabsContainer.appendChild(tab);
});

function renderQuestion() {
  questionContainer.innerHTML = "";
  const category = categories[currentTabIndex];
  const questions = questionsByCategory[category];
  const questionObj = questions[currentQuestionIndex];

  const question = document.createElement("h2");
  question.innerHTML = questionObj.question;
  questionContainer.appendChild(question);

  const answers = [...questionObj.incorrect_answers];
  const correct = questionObj.correct_answer;
  answers.splice(Math.floor(Math.random() * (answers.length + 1)), 0, correct);

  answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.innerHTML = answer;
    btn.onclick = () => {
      if (answer === correct) {
        correctCount++;
        document.getElementById("correct").textContent = correctCount;
        btn.style.backgroundColor = "lightgreen";
      } else {
        incorrectCount++;
        document.getElementById("incorrect").textContent = incorrectCount;
        btn.style.backgroundColor = "tomato";
      }

      document.querySelectorAll(".answer-btn").forEach(b => b.disabled = true);
    };
    questionContainer.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  const category = categories[currentTabIndex];
  const questions = questionsByCategory[category];

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    alert("No hay más preguntas en esta categoría.");
  }
};
let correctas = 0;
let incorrectas = 0;
let totalRespondidas = 0;
const LIMITE_PREGUNTAS = 5;

function verificarRespuesta(elemento, respuestaCorrecta) {
  const opciones = elemento.parentElement.querySelectorAll('.opcion');
  opciones.forEach(op => {
    op.onclick = null;
    if (op.textContent === respuestaCorrecta) {
      op.classList.add('correcta');
    } else if (op === elemento) {
      op.classList.add('incorrecta');
    }
  });

  if (elemento.textContent === respuestaCorrecta) {
    correctas++;
  } else {
    incorrectas++;
  }

  totalRespondidas++;
  actualizarContador();

  if (totalRespondidas === LIMITE_PREGUNTAS) {
    setTimeout(() => {
      if (correctas >= 3) {
        alert("🎉 ¡Aprobaste! ✅\nRespuestas correctas: " + correctas);
      } else {
        alert("❌ Reprobaste.\nRespuestas correctas: " + correctas);
      }
    }, 500);
  }
}

function actualizarContador() {
  const marcador = document.getElementById("marcador");
  if (marcador) {
    marcador.textContent = `✅ ${correctas} | ❌ ${incorrectas}`;
  }
}


// Mostrar la primera pregunta al cargar
renderQuestion();
