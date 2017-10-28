$(document).ready(function() {

	var randomWinningScore;
	var wins = 0;
	var losses = 0;
	var userScore = 0;
	var randomCrystalOneNumber;
	var randomCrystalTwoNumber;
	var randomCrystalThreeNumber;
	var randomCrystalFourNumber;
	var crystalMinNumber = 1;
	var crystalMaxNumber = 12;
  var winningMinNumber = 19;
  var winningMaxNumber = 120;

  function gameWin(){
  	userScore = 0;
  	$("#user-score").text(userScore);
  	wins++;
  	$("#wins").text(wins);
  	$("#result-display").text("You win!");
  	randomNumbers();
  }

  function gameLoss(){
  	userScore = 0;
  	$("#user-score").text(userScore);
  	losses++;
  	$("#losses").text(losses);
  	$("#result-display").text("You lose!");
  	randomNumbers();
  }

  function checkProgress(){
    if ( randomWinningScore === userScore){
     gameWin();
    }
   else if (userScore > randomWinningScore) {
     gameLoss();
   }
  }

  function randomNumbers(){
  	randomWinningScore = Math.floor(Math.random()*(winningMaxNumber - winningMinNumber)+winningMinNumber);
 		$("#random-winning-score").text(randomWinningScore);
 		randomCrystalOneNumber = Math.floor(Math.random()*(crystalMaxNumber - crystalMinNumber)+crystalMinNumber);
  	randomCrystalTwoNumber = Math.floor(Math.random()*(crystalMaxNumber - crystalMinNumber)+crystalMinNumber);
  	randomCrystalThreeNumber = Math.floor(Math.random()*(crystalMaxNumber - crystalMinNumber)+crystalMinNumber);  
 		randomCrystalFourNumber= Math.floor(Math.random()*(crystalMaxNumber - crystalMinNumber)+crystalMinNumber);
  }
 
  randomNumbers();

  $("#crystal-one").on("click", function() {
 		 userScore = userScore + randomCrystalOneNumber;
  	$("#user-score").text(userScore);
 	  checkProgress();
 	});

  $("#crystal-two").on("click", function() {
    userScore = userScore + randomCrystalTwoNumber;
    $("#user-score").text(userScore);
    checkProgress();
 	});

 	$("#crystal-three").on("click", function() {
	  userScore = userScore + randomCrystalThreeNumber;
    $("#user-score").text(userScore);
    checkProgress();
 	});

 	$("#crystal-four").on("click", function() {
     userScore = userScore + randomCrystalFourNumber;
     $("#user-score").text(userScore);
     checkProgress();
 	});	
});
