// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
  $("#button").click(function(){
        var result= $("input").val();
  	    // $("#result").text(pigResult);
  	    
  	    var words = result.split(" ");
        var pigResult = ""; 	 
        for (var i= 0; i < words.length; i++){
            pigResult = pigResult + wordToPigLatin(words[i] )+ " ";
        }
        $("#result").append(pigResult);


  });

});


// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

function wordToPigLatin(word){

 var vowels = ["a", "e", "i", "o", "u"]
 if (v == 'a' || v == 'e' || v == 'i' || v == 'o' || v == 'u')
 {
            String convertToPigLatin = findFirstVowel + "ay";
            System.out.println(convertToPigLatin);
        }
        else
        {
            String first = findFirstVowel.substring(0,1);
            String slice = findFirstVowel.substring(1,findFirstVowel.length());
            System.out.println(slice + first + "ay");
        }
    
 return word + "ay"; 
 
}



// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance

function sentenceToPigLatin(sentence){
    
}