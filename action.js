$(document).ready(function(){
    $(".submit").click.hide();
    var answer = Math.floor(Math.random()*100);

    var guess = $('#guess').val();
    function hint(guess) {
      if (guess === answer) {
        // return ("Congrats!");
        console.log("Congrats");
        $('#answer_hint').html('Congrats!');
      }
      else if (guess < answer) {
        // return ("Too low");
        console.log("Too Low");
        $('#answer_hint').html('Too low');
      }
      else if (guess > answer) {
        // return ("Too high");
        console.log("Too high");
        $('#answer_hint').html('Too high');
      }
    };
    // show(hint(guess));
  });

