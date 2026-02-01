
  // ELEMENT REFERENCES


const home = document.getElementById("home");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const usernameInput = document.getElementById("username");
const categorySelect = document.getElementById("category");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");
const countEl = document.getElementById("count");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const skipBtn = document.getElementById("skipBtn");
const backHomeBtn = document.getElementById("backHomeBtn");

const scorePercent = document.getElementById("scorePercent");
const messageEl = document.getElementById("message");


   //AUDIO


let soundOn = true;

const clickSound   = document.getElementById("clickSound");
const correctSound = document.getElementById("correctSound");
const wrongSound   = document.getElementById("wrongSound");
const timerSound   = document.getElementById("timerSound");

function play(sound) {
  if (!soundOn || !sound) return;

  sound.pause();
  sound.currentTime = 0;
  sound.play().catch(() => {});
}


  // QUIZ STATE


let current = 0;
let score = 0;
let timer;
let timeLeft = 10;
let answered = false;


   //QUESTIONS


const questions = {
  aptitude: [
    { q: "15 / 3 = ?", o: ["3", "4", "5", "6"], a: "5" },
    { q: "10 + 20 = ?", o: ["10", "20", "30", "40"], a: "30" },
    { q: "5 × 6 = ?", o: ["20", "25", "30", "35"], a: "30" },
    { q: "50% of 100?", o: ["10", "25", "50", "75"], a: "50" },
    { q: "Square of 4?", o: ["8", "12", "16", "20"], a: "16" }
  ],

  verbal: [
    { q: "Opposite of happy?", o: ["Sad", "Joy", "Smile", "Fun"], a: "Sad" },
    { q: "Synonym of fast?", o: ["Quick", "Slow", "Late", "Weak"], a: "Quick" },
    { q: "Plural of child?", o: ["Childs", "Children", "Childes", "Kids"], a: "Children" },
    { q: "He ___ to school daily.", o: ["go", "goes", "gone", "going"], a: "goes" },
    { q: "Antonym of hot?", o: ["Cold", "Warm", "Heat", "Cool"], a: "Cold" }
  ],

  technical: [
    { q: "HTML stands for?", o: ["Hyper Text Markup Language", "High Text", "Hyper Tool", "None"], a: "Hyper Text Markup Language" },
    { q: "CSS is used for?", o: ["Design", "Logic", "Database", "Server"], a: "Design" },
    { q: "JS is?", o: ["Language", "Framework", "Database", "OS"], a: "Language" },
    { q: "Tag for JS?", o: ["<js>", "<script>", "<code>", "<style>"], a: "<script>" },
    { q: "CSS file extension?", o: [".html", ".css", ".js", ".txt"], a: ".css" }
  ],

  gk: [
    { q: "Capital of India?", o: ["Mumbai", "Delhi", "Kolkata", "Chennai"], a: "Delhi" },
    { q: "National animal?", o: ["Lion", "Tiger", "Elephant", "Leopard"], a: "Tiger" },
    { q: "Earth is ___ planet", o: ["1st", "2nd", "3rd", "4th"], a: "3rd" },
    { q: "Largest ocean?", o: ["Indian", "Pacific", "Atlantic", "Arctic"], a: "Pacific" },
    { q: "National bird?", o: ["Crow", "Peacock", "Eagle", "Sparrow"], a: "Peacock" }
  ]
};


 //  START QUIZ

startBtn.onclick = () => {
  if (!usernameInput.value.trim() || !categorySelect.value) {
    alert("Enter name and pick a topic");
    return;
  }

  play(clickSound);

  current = 0;
  score = 0;

  home.classList.add("hidden");
  quiz.classList.remove("hidden");

  loadQuestion();
};

 
  // LOAD QUESTION


function loadQuestion() {
  clearInterval(timer);
  answered = false;
  timeLeft = 10;
  nextBtn.disabled = true;

  const q = questions[categorySelect.value][current];

  questionEl.textContent = q.q;
  optionsEl.innerHTML = "";
  countEl.textContent = `${current + 1} / 5`;

  q.o.forEach(opt => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = opt;

    btn.onclick = () => {
      play(clickSound);
      setTimeout(() => {
        selectAnswer(btn, opt);

      }, 0);
      
    };

    optionsEl.appendChild(btn);
  });

  startTimer();
}
   //TIMER

function startTimer() {
  timerEl.textContent = timeLeft + "s";
  progressEl.style.width = "100%";

  timer = setInterval(() => {
    timeLeft--;

    timerEl.textContent = timeLeft + "s";
    progressEl.style.width = (timeLeft / 10) * 100 + "%";

    if (timeLeft === 0 && soundOn) {
        timerSound.pause();
        timerSound.currrentTime = 0;
        timerSound.play();

    }

    if (timeLeft === 0) {
      clearInterval(timer);
      revealCorrectAnswer();
      nextBtn.disabled = false;
    }
  }, 1000);
}


  // ANSWER SELECT



function selectAnswer(btn, choice) {
  if (answered) return;
  answered = true;

  clearInterval(timer);

  const correct = questions[categorySelect.value][current].a;

  // Disable ONLY options (not buttons)
  document.querySelectorAll(".option").forEach(opt => {
    opt.classList.add("disabled");
    opt.onclick = null;

    if (opt.textContent === correct) {
      opt.classList.add("correct");
    }
  });

  if (choice === correct) {
    btn.classList.add("correct");
    score++;
    if (soundOn) play(correctSound);
  } else {
    btn.classList.add("wrong");
    if (soundOn) play(wrongSound);
  }

  
  nextBtn.disabled = false;
  nextBtn.style.opacity = "1";
}





  // REVEAL ANSWER (TIME UP)


function revealCorrectAnswer() {
  answered = true;

  const correct = questions[categorySelect.value][current].a;

  document.querySelectorAll(".option").forEach(b => {
    b.onclick = null;
    if (b.textContent === correct) b.classList.add("correct");
  });
}


  // NEXT & SKIP


nextBtn.onclick = () => {
  play(clickSound);
  current++;

  if (current < 5) loadQuestion();
  else showResult();
};

skipBtn.onclick = () => {

  play(clickSound);
  clearInterval(timer);
  current++;

  if (current < 5) loadQuestion();
  else showResult();
};


backHomeBtn.addEventListener("click", () => {
  if (soundOn) {
    clickSound.currentTime = 0;
    clickSound.play().catch(()=> {});
  }

  setTimeout(() => {
    location.reload(); // goes back to home screen
  }, 200);
});


 //  RESULT


function showResult() {
  quiz.classList.add("hidden");
  result.classList.remove("hidden");

  const percent = Math.round((score / 5) * 100);
  scorePercent.textContent = percent + "%";

  messageEl.textContent =
    percent === 100
      ? "Outstanding! You did wonderful 🌟"
      : percent >= 60
      ? "Good job! Keep improving 💪"
      : "Don’t worry! Practice makes perfect 😊";
}

 // Toggle

// document.getElementById("soundToggle").onclick = () => {
//   soundOn = !soundOn;
// };

 document.getElementById("modeToggle").onclick = () => {
   document.body.classList.toggle("light");
 };
document.getElementById("soundToggle").onclick = () => {
  soundOn = !soundOn;

  document.getElementById("soundToggle").textContent =
    soundOn ? "🔊" : "🔇";

  // stop all sounds instantly when muted
  [clickSound, correctSound, wrongSound, timeSound].forEach(s => {
    if (s) {
      s.pause();
      s.currentTime = 0;
    }
  });
};