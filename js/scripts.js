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
    
    calculate(countBy, countTo);
    $("#result").append(numbers);

    });
});
