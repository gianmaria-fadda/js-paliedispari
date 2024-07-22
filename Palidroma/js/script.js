const userQuestion = prompt('Inserisci una parola "Palindroma" qui sotto');
checkPalindrome(userQuestion);

// FUNCTION
function checkPalindrome(word) {

let reverseWord= ''
  for (let i = word.length - 1; i >= 0; i--) {
    console.log(word[i]);

    reverseWord = reverseWord + word[i];
  }

  console.log('reverseWord', reverseWord, reverseWord.length, typeof reverseWord);

  if (word == reverseWord) {
    alert('La parola è palindroma')
  } else {
    alert('La parola non è palindroma')
  }
}
