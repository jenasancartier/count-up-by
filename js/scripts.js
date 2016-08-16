//back-end

var countTo = function(total)

var countBy = function(number)
  {return (number + number);};



//front-end

$(document).ready(function() {
  $("#input form").submit(function(event) {
    var number = parseInt($("#count-by").val();
    var total = parseInt($("#count-to").val();

    $(".output#result").text(result);
  });
});
