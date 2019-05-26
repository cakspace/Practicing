// EXERCISES
//-------------------------

// FIND THE LONGEST WORD

function longestWord(str) {
  //str to array
  let splitTxt = str.split(" ");

  let longest = "";
  for (let i = 0; i < splitTxt.length; i++) {
    if (splitTxt[i].length > longest.length) {
      longest = splitTxt[i];
    }
  }
  console.log(longest);
}
const str1 = "do you have the time to listen to me whine?";
// const input = prompt("Enter a series of words to find the longest word:");
// longestWord("what is happening in this great sushi buffet?");
// longestWord(str1);
// longestWord(input);

//------QUIZ----------------------------------------------------------------------
//------using ulti-dimensional--
//------ARRAY-------------------

function startQuiz() {
  const quiz = [
    ["What animal barks?", "dog"],
    ["What animal meows?", "cat"],
    ["What animal moos?", "cow"]
  ];

  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
    let answer = prompt(quiz[i][0]);
    let correctAnswer = answer.toLowerCase().trim();

    if (correctAnswer == quiz[i][1]) {
      score++;
    } else {
      alert(`Sorry. The correct answer is ${quiz[i][1]}`);
    }
  }
  let percent = ((score / quiz.length) * 100).toFixed(2);
  console.log(
    `You answered ${score} of 3 questions correctly, which is ${percent}% accurate.`
  );
}
// startQuiz();
