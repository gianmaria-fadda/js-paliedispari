 const userQuestion = prompt('Inserisci la parola "Palindroma" qui sotto');

 isPalindromo(Palindromo);
 
 console.log('userQuestion', userQuestion, typeof userQuestion);

 
 function isPalindromo(myPalindromo) {
  console.log('myPalindromo', myPalindromo, typeof myPalindromo);

   if (userQuestion == myPalindromo) {
     console.log(`La parola "${userQuestion}" è un palindromo.`);
   } else {
     console.log(`La parola "${userQuestion}" non è un palindromo.`);
   }
    return;
  }
