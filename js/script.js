

var myMathLibrary = (function(){

    function binaryToDec(number) {
    var digit = parseInt(number, 2);
    return digit;
  }

  function octalToDec(number) {
    var digit = parseInt(number, 8);
    return digit;
  }

  function hexToDec(number) {

    var digit = parseInt(number, 16);
    return digit;
  }

  function decToBinary(number) {
    var digit = Number(number).toString(2);
    return digit;
  }

  function decToOctal(number) {
    var digit = Number(number).toString(8);
    return digit;
  }

  function decToHex(number) {
    var digit = Number(number).toString(16);
    return digit;
  }

  return {
    b2d: binaryToDec,
    o2d: octalToDec,
    h2d: hexToDec,
    d2b: decToBinary,
    d2o: decToOctal,
    d2h: decToHex
  };


})();



$('#convertBtn').on("click", function () {
  var sourceNumber = $("#sourceNumber").val();
  var midNumber;
  var secondMidNumber
  var finalNumber = $("#convertedNumber").val();

  var convertFrom = $('#convertFrom').find(":selected").text();
  var convertTo = $('#convertTo').find(":selected").text();



  //Convert From Configuration
  switch(convertFrom){
     case "Binary":
       midNumber = myMathLibrary.b2d(sourceNumber);
    break;
  case "Octal":
     midNumber = myMathLibrary.o2d(sourceNumber);
    break;
  case "Hexidecimal":
     midNumber = myMathLibrary.h2d(sourceNumber);
    break;
    case "Decimal":
      midNumber = sourceNumber;
  default:
    alert("There has been an error in the convertFROM");
}

  //Convert To Config
 switch(convertTo){
     case "Binary":
      secondMidNumber = myMathLibrary.d2b(midNumber);
    break;
  case "Octal":
    secondMidNumber = myMathLibrary.d2o(midNumber);
    break;
  case "Hexidecimal":
   secondMidNumber = myMathLibrary.d2h(midNumber);
    break;
   case "Decimal":
     midNumber = secondMidNumber;
  default:
    alert("There has been an error in the convertTO");
 }

 finalNumber = secondMidNumber;
  finalNumber.toString();
  alert(finalNumber);

});//End Click






