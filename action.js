
//$(document).ready(function(){

$(function (){
  hint();
})
    var answer = Math.floor(Math.random()*100);
    console.log(answer);
    var t = null;
    var prev_distance = null;
    var tries = 1

    function hint() {   
  
    $('#submit').click(submit);
    $('#guess').keydown(function(e){
      if (e.keyCode == 13) {
        submit();
      }
    });
      
      function submit(){
        var guess = $('#guess').val();
        console.log(guess);
        validate(guess); 
      }

      function validate(guess) {
        if(guess == '') {
          $('#answer_hint').html('Please select a value');
          return;
        }else if (guess > 100 || guess != Math.floor(guess) || guess < 1) {
          $('#answer_hint').html("Error: Must be between 1 and 100").css({color:'red'});
          return;
        }
        
        distance = Math.abs(guess - answer);

        if (guess == answer) {
          console.log("Congrats");
          $('#answer_hint').html('Congrats - '+tries+' Guesses!').css({'color':'#000', 'font-weight':'bold'}).effect("pulsate", {times:10}, 100);
        }
        else if (prev_distance == null) {
          firstGuess(guess, answer);    
        } else {
          hotOrCold(prev_distance, distance);
        }
        prev_distance = distance;
        
      }
      

    function firstGuess (guess, answer){
      if (guess < answer) {
        // return ("Too low");
        console.log("Too Low");
        $('#answer_hint').html('Too low').css({color:'#000'}).effect("pulsate", {times:2}, 200);
      }
      else if (guess > answer) {
        // return ("Too high");
        console.log("Too high");
        $('#answer_hint').html('Too high').css({color:'#000'}).effect("pulsate", {times:2}, 200);
      }
      tries = tries + 1;
    }

    function hotOrCold (prev_distance, distance){
      if (prev_distance > distance){
        $('#answer_hint').html('Getting Warmer').css({color:'#000'}).effect("pulsate", {times:2}, 200);
      } 
      else if (prev_distance < distance){
        $('#answer_hint').html('Brrr... Colder').css({color:'#000'}).effect("pulsate", {times:2}, 200);
      }
      tries = tries + 1;
    }

    $('#newgame').click(function(e){
      e.preventDefault();
      answer = Math.floor(Math.random()*100);
      console.log(answer);
      $('#answer_hint').html('');
    });

    $('#cheat').click(function(e){
      e.preventDefault();
      alert(answer);
    });

    };

// });

  /*    $('#submit').click(function(e){
        e.preventDefault(); 
        var guess = $('#guess').val();
        console.log(guess);
        if (guess > 100 || guess != Math.floor(guess) || guess < 1) {
          $('#answer_hint').html("Error: Must be between 1 and 100").css({color:'red'});
          return false;
        }
        
  $('#guess').click(function(event){
        //console.log(String.fromCharCode(event.keyCode));
        if (t != null) {
          clearTimeout(t);
        }
        t = setTimeout(timeout, 500);
      });

      function timeout() {
        var guess = $('#guess').val();
        console.log(guess);
        validate(guess);       
      }



        if (guess == answer) {
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
        return false;
      });

    };
*/