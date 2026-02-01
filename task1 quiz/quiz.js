/***********************
 * QUIZ DATA
 ***********************/
const quizData = {
  Aptitude: [
    {
      question: "A person crosses 600m in 5 minutes. What is his speed (km/hr)?",
      options: ["3.6", "7.2", "8.4", "10"],
      answer: "7.2"
    },
    {
      question: "What is 25% of 200?",
      options: ["25", "50", "75", "100"],
      answer: "50"
    },
    {
      question: "If 3x = 27, what is x?",
      options: ["6", "9", "12", "3"],
      answer: "9"
    },
    {
      question: "Average of 10 and 20 is?",
      options: ["10", "15", "20", "25"],
      answer: "15"
    },
    {
      question: "What is the square of 12?",
      options: ["124", "144", "134", "154"],
      answer: "144"
    }
  ],

  Verbal_Ability: [
    {
      question: "Choose the synonym of 'Happy'",
      options: ["Sad", "Angry", "Joyful", "Weak"],
      answer: "Joyful"
    },
    {
      question: "Opposite of 'Strong' is?",
      options: ["Powerful", "Weak", "Hard", "Bold"],
      answer: "Weak"
    },
    {
      question: "Fill in the blank: He ___ to school daily.",
      options: ["go", "goes", "gone", "going"],
      answer: "goes"
    },
    {
      question: "Plural of 'Child' is?",
      options: ["Childs", "Children", "Childes", "Childrens"],
      answer: "Children"
    },
    {
      question: "Choose the correct spelling:",
      options: ["Recieve", "Receive", "Receeve", "Recevie"],
      answer: "Receive"
    }
  ],

  Technical: [
    {
      question: "Which language is used for web styling?",
      options: ["HTML", "Python", "CSS", "C"],
      answer: "CSS"
    },
    {
      question: "JavaScript is a ___ language.",
      options: ["Markup", "Programming", "Database", "Design"],
      answer: "Programming"
    },
    {
      question: "Which tag is used for JavaScript?",
      options: ["<js>", "<javascript>", "<script>", "<code>"],
      answer: "<script>"
    },
    {
      question: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlinks Text Mark Language",
        "Home Tool Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which symbol is used for comments in JS?",
      options: ["//", "<!-- -->", "#", "**"],
      answer: "//"
    }
  ]
};
/***********************
 * VARIABLES
 ***********************/
let questions = [];
let currentIndex = 0;
let score = 0;
let timer = null;
let timeLeft = 15;
let quizActive = false;

/***********************
 * DOM ELEMENTS
 ***********************/
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

const timeEl = document.getElementById("time");
const progressEl = document.getElementById("progress");
const scoreText = document.getElementById("scoreText");

/***********************
 * START QUIZ
 ***********************/
function startQuiz() {
  const username = document.getElementById("username").value.trim();
  const category = document.getElementById("categorySelect").value;

  if (!username || !category) {
    alert("Please enter name and select category");
    return;
  }

  questions = quizData[category];
  currentIndex = 0;
  score = 0;

  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  loadQuestion();
}

/***********************
 * LOAD QUESTION
 ***********************/
function loadQuestion() {
  clearInterval(timer);

  quizActive = true;
  timeLeft = 15;

  timeEl.textContent = timeLeft;
  feedbackEl.textContent = "";
  nextBtn.style.display = "none";

  progressEl.style.width = "100%";
  progressEl.style.background =
    "linear-gradient(90deg, #4facfe, #00f2fe)";

  const q = questions[currentIndex];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;

    li.onclick = () => {
      if (!quizActive) return;
      checkAnswer(option);
    };

    optionsEl.appendChild(li);
  });

  startTimer();
}

/***********************
 * TIMER (SIMPLE & CORRECT)
 ***********************/
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;

    const percent = (timeLeft / 15) * 100;
    progressEl.style.width = percent + "%";

    if (timeLeft <= 5) {
      progressEl.style.background =
        "linear-gradient(90deg, #ff416c, #ff4b2b)";
    }

    if (timeLeft <= 0) {
      clearInterval(timer);
      quizActive = false;
      feedbackEl.textContent = "⏰ Time up!";
      nextBtn.style.display = "block";
      progressEl.style.width = "0%";
    }
  }, 1000);
}

/***********************
 * CHECK ANSWER
 ***********************/
function checkAnswer(selected) {
  if (!quizActive) return;

  quizActive = false;
  clearInterval(timer);

  const correct = questions[currentIndex].answer;

  if (selected === correct) {
    feedbackEl.textContent = "✅ Correct!";
    score++;
  } else {
    feedbackEl.textContent = `❌ Wrong! Correct answer: ${correct}`;
  }

  nextBtn.style.display = "block";
}

/***********************
 * NEXT QUESTION
 ***********************/
nextBtn.onclick = () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
};

/***********************
 * SHOW RESULT
 ***********************/
// function showResult() {
//   clearInterval(timer);

//   quizScreen.classList.add("hidden");
//   resultScreen.classList.remove("hidden");

//   const totalQuestions = questions.length;
//   const percentage = Math.round((score / totalQuestions) * 100);

//   document.getElementById("finalPercentage").textContent = percentage + "%";

//   document.getElementById("bestScore").textContent = percentage + "%";


  //scoreText.textContent = `You scored ${score} out of ${questions.length}`;
//}

function showResult() {
  clearInterval(timer);

  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);

  // TEXT
  finalPercentage.textContent = percentage + "%";
  bestScore.textContent = percentage + "%";

  // MESSAGE (SMART LOGIC)
  const messageEl = document.getElementById("resultMessage");

  if (percentage === 100) {
    messageEl.textContent = "Excellent! Perfect score! 🎉🔥";
  } else if (percentage >= 60) {
    messageEl.textContent = "Good job! You're doing great 👍";
  } else {
    messageEl.textContent = "Keep practicing, you'll get better 💪";
  }

  // CIRCLE ANIMATION
  const circle = document.getElementById("progressCircle");
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset =
    circumference - (percentage / 100) * circumference;
}