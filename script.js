// To-Do List
function addTask() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => li.remove(); // click to delete
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }
}

// Quiz Maker
let quizzes = [];

function addQuiz() {
  const q = document.getElementById("question").value.trim();
  const a = document.getElementById("answer").value.trim();
  if (q && a) {
    quizzes.push({ q, a });
    renderQuiz();
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
  }
}

function renderQuiz() {
  const container = document.getElementById("quiz-list");
  container.innerHTML = "";
  quizzes.forEach((quiz, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><b>Q${index+1}:</b> ${quiz.q}</p>
      <input type="text" id="ans-${index}" placeholder="Your answer">
      <button onclick="checkAnswer(${index})">Check</button>
      <p id="result-${index}"></p>
    `;
    container.appendChild(div);
  });
}

function checkAnswer(index) {
  const userAns = document.getElementById(`ans-${index}`).value.trim().toLowerCase();
  const correctAns = quizzes[index].a.toLowerCase();
  const result = document.getElementById(`result-${index}`);
  result.textContent = (userAns === correctAns) ? "✅ Correct!" : "❌ Wrong!";
}
