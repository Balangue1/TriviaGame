$(document).ready(function () {

  // Create countdown timer for 90 seconds, If timeleft=0 show results
  var timeleft = 90;
  var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    console.log(timeleft)

    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      alert("Time is UP!");
      showResults();

    };
  }, 1000);

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  // Create question bank with answers

  const myQuestions = [
    {
      question: "Which dog breed is noted for it's spotted coat?",
      answers: {
        a: "Chihuahua",
        b: "Dalmation",
        c: "Poodle"
      },
      correctAnswer: "b"
    },
    {
      question: "What animal's diet is made up almost entirely of eucalypti leaves?",
      answers: {
        a: "Panda",
        b: "Elephant",
        c: "Koala"
      },
      correctAnswer: "c"
    },
    {
      question: "Who was the first guest star on the Muppet Show?",
      answers: {
        a: "Lena Horne",
        b: "Alice Cooper",
        c: "John Denver",
      },
      correctAnswer: "a"
    },
    {
      question: "Who is the famous artist who painted Starry Night?",
      answers: {
        a: "Vincent van Gogh",
        b: "Donald Trump",
        c: "DaVinci"
      },
      correctAnswer: "a"
    },
    {
      question: "Who directed The Passion of the Christ?",
      answers: {
        a: "Stan Lee",
        b: "Mel Gibson",
        c: "Robert Redford"
      },
      correctAnswer: "b"
    },
    {
      question: "The dingo is a type of feral dog native to what country?",
      answers: {
        a: "Australia",
        b: "Asia",
        c: "North America",
      },
      correctAnswer: "a"
    },
    {
      question: "Stratus, Cirrus and Cumulus are types of what?",
      answers: {
        a: "Sand",
        b: "Fossils",
        c: "Clouds",
      },
      correctAnswer: "c"
    },
    {
      question: "What is the world's largest ocean?",
      answers: {
        a: "Atlantic",
        b: "Pacific",
        c: "Indian",
      },
      correctAnswer: "b"
    },
    {
      question: "Lox, often served on a bagel, is a fillet of brined what?",
      answers: {
        a: "Squid",
        b: "Salmon",
        c: "Shrimp",
      },
      correctAnswer: "b"
    },
    {
      question: "What is the name of the Disney cartoon character that is the girlfriend of Donald Duck?",
      answers: {
        a: "Maria",
        b: "Lucy",
        c: "Daisy",
      },
      correctAnswer: "c"
    },
  ];


  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];


    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // we'll want to store the list of answer choices
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
        );

      });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  };

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener('click', showResults);



  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question' + questionNumber + ']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' correct out of ' + myQuestions.length;

    // clear countdown timer
    clearInterval(downloadTimer);

  };


});


