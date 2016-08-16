$(document).ready(function() {
    $("#input form").submit(function(event) {
    var countBy = parseInt($("#count-by").val());
    var countTo = parseInt($("#count-to").val());
    event.preventDefault();

    var numbers = [];
    var calculate = function(countBy, countTo) {
      for (var i = countBy; i <= countTo; i += countBy) {
        numbers.push(i + " ");
      }
    }

    if ((countBy < 0)||(countTo < 0)) {
      alert("Please enter a positive number.")
    } else if ((countBy < 0)&&(countTo < 0)) {
      alert("Please enter a positive number.")
    } else if (countBy > countTo) {
      alert("Invalid number. Please enter a Count By number that is smaller than your Count To number.")
    }

    calculate(countBy, countTo);
    $("#result").append(numbers);

    });
});
