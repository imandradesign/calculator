$(document).ready(function(){
  $("#add-value").hide();
  $("#sub-value").hide();
  $("#mult-value").hide();
  $("#divi-value").hide();

  var addedNums = function(numberOne, numberTwo) {
      return numberOne + numberTwo;
    };
  var subNums = function(numberOne, numberTwo) {
      return numberOne - numberTwo;
    };
  var multNums = function(numberOne, numberTwo) {
  return numberOne * numberTwo;
  };
  var diviNums = function(numberOne, numberTwo) {
    return numberOne / numberTwo;
  };

  $("button").click(function(){
    var numOneInput = parseInt($("input#numone").val());
    var numTwoInput = parseInt($("input#numtwo").val());

    if ($(this).attr("id") == "add-button" && $.isNumeric(numOneInput) && $.isNumeric(numTwoInput)){
      $("#sub-value").hide();
      $("#mult-value").hide();
      $("#divi-value").hide();
      $("#add-value").show();
      $("#add-total").text(addedNums(numOneInput, numTwoInput));
    } else if ($(this).attr("id") == "sub-button" && $.isNumeric(numOneInput) && $.isNumeric(numTwoInput)){
      $("#add-value").hide();
      $("#mult-value").hide();
      $("#divi-value").hide();
      $("#sub-value").show();
      $("#sub-total").text(subNums(numOneInput, numTwoInput));
    } else if ($(this).attr("id") == "mult-button" && $.isNumeric(numOneInput) && $.isNumeric(numTwoInput)){
      $("#add-value").hide();
      $("#sub-value").hide();
      $("#divi-value").hide();
      $("#mult-value").show();
      $("#mult-total").text(multNums(numOneInput, numTwoInput));
    } else if ($(this).attr("id") == "divi-button" && $.isNumeric(numOneInput) && $.isNumeric(numTwoInput)){
      $("#add-value").hide();
      $("#sub-value").hide();
      $("#mult-value").hide();
      $("#divi-value").show();
      $("#divi-total").text(diviNums(numOneInput, numTwoInput));
    } else {
      alert("Please enter a valid number");
    }
  });
});
