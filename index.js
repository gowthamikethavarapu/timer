var inputdate=prompt("Set countdown date in format 'MON dd,yyyy hh:mm:ss'");
var countDown = new Date(inputdate).getTime();

var x = setInterval(function() {
 
  var now = new Date().getTime();
    
  var difference = countDown - now;
  var d = Math.floor(difference / (1000 * 60 * 60 * 24));
  var h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((difference % (1000 * 60)) / 1000);
    
  document.getElementById('day').innerText = d+"d";
  document.getElementById('hour').innerText = h+"h";
  document.getElementById('minute').innerText = m+"m";
  document.getElementById('second').innerText = s+"s";

    
  if (difference < 0) {
    clearInterval(x);
    document.getElementById('day').innerText = "E";
  document.getElementById('hour').innerText = "X";
  document.getElementById('minute').innerText = "P";
  document.getElementById('second').innerText = "!";
  }
}, 1000);
