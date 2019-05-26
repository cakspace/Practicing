// EXERCISES
//-------------------------

// FIND THE LONGEST WORD

function longestWord(str) {
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
const input = prompt("Enter a series of words to find the longest word:");
longestWord("what is happening in this great sushi buffet?");
longestWord(str1);
longestWord(input);
