// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
    if(x > y){
    	console.log("X is bigger than Y")
 }else{
 	console.log ("Y is Bigger than X")
 }
} max(100,10) 

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    if(x > y && x > z){
    	return x
}else if(y > x && y > z){
	return y
}else{
	return z
}
}
console.log(maxOfThree(12,6,3))

// function maxOfThree(x,y,z) {
// 	return Math.max(x,y,z);
// }

// console.log(maxOfThree(12,6,3))





// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

// function isVowel(char){
//   var vowels = ['a','e','i','o','u','y'];

//   if(vowels.indexOf(char) !== -1) {
//   	return true;
//   }
//   else {
//   	return false;
//   }
// }

// function log(resp) {
// 	console.log(resp)
// }

// log(isVowel('t'));
// log(isVowel('e'));

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

//takes a string
// loop over string for...
// check each letter
// if consonant take letter and o then add letter
// if vowel return letter
//return word
//word = ''

 function RSP(letter){
 	var vowels = ["a","e","i","o","u","y"];

 	for(var i = 0;i < letter.length ; i++) {
 		
 		if(vowels.indexOf(letter) === -1) {
 			return false; 
		} else {
			return true;
				
		}
 	}
}

console.log(RSP('yes'))

function lastString(string){
	var word = "";

	for(var i = 0; i < string.length; i++){
		if(RSP(string[i])) {

			word = word + string[i];
}
else {
	word = word + string[i] + "o" + string[i];
	}	
}
	return word;
	
	}

	 console.log(lastString('shabo'))
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    //...
}