window.onload = () => {
  countdown()
}

countdownFormat = (key, value) => {
  return '<span class="countdown-element">' + numberStringFormat(value) + '</br>' + timeStringFormat(key) + '</span>'
}

numberStringFormat = (number) => {
  if (number < 10) {
    return "0" + number
  }
  return number
}

timeStringFormat = (word) => {
  return "<h2>" + word + " </h2>"
}

countdown = () => {
  var countDownDate = new Date("Oct 5, 2019 15:00:00").getTime();
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "NOW";
  } else {
    document.getElementById("countdown").innerHTML =
            countdownFormat("Days", days) +
            countdownFormat("Hours" , hours) +
            countdownFormat("Minutes", minutes) +
            countdownFormat("Seconds", seconds);
  }
}

var intervalFunction = setInterval(() => {
    countdown()
}, 1000);
