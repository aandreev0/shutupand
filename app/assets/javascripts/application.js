// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

 // wait for the DOM to be loaded
 $(function() {
   // bind 'myForm' and provide a simple callback function
   $('#new_checkin').ajaxForm(function() {
     console.log("success");

     $('#last_checkins').load( "checkins/").hide().fadeIn(500);
     return false;
   });
 });

 function update() {
   console.log('update::');
   $.get("checkins/", function(data) {
     $("#last_checkins").html(data).hide().fadeIn(500);
     window.setTimeout(update, 10000);
   });
 }
update();


// Set the date we're counting down to
var countDownDate = 60*60*1000; // ms
var pause = false;
function restart_timer(){
  countDownDate = 60*60*1000;
  document.getElementById("timer").innerHTML = 'Restarting...';
  pause = true;
  toggle_pause();
}
function toggle_pause(){
  document.getElementById('pause_btn').innerHTML = (pause ? 'I got distracted 😭': 'Resume 👍');pause = !pause;
}
// Update the count down every 1 second
var timer = setInterval(function() {

// Get todays date and time
if(!pause){
  countDownDate = countDownDate - 1000;
  var minutes = Math.floor((countDownDate % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  var timeLeft = minutes + "m " + seconds + "s";
  var activity = document.getElementById("activity_select").value;

  document.getElementById("timer").innerHTML = "Time left: "+timeLeft;
  window.document.title = timeLeft + " Shut up and "+activity;
  howlong_time = 60*60*1000 - countDownDate;
  var howlong_minutes = Math.floor((howlong_time % (1000 * 60 * 60)) / (1000 * 60));
  var howlong_seconds = Math.floor((howlong_time % (1000 * 60)) / 1000);
  howlong_str = howlong_minutes + "m " + howlong_seconds + "s ";
  document.getElementById("tweet_link").href = "https://twitter.com/intent/tweet?text=I%20managed%20to%20shut%20up%20and%20"+activity+" for "+howlong_str+"%21%20https%3A%2F%2Fwww.shutupand.net%2F%20%23shutupand"+activity+"&source=clicktotweet&related=clicktotweet";

  // If the count down is finished, write some text
  if (countDownDate < 2000) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Time for a break!";
  }
}else{ // if paused
    $('timer').hide();
}
}, 1000);
