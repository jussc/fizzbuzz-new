$(document).ready(function() {

  var i = prompt('Enter a number between 1 and 100');

  //console.log(i);
  calculate(i);

  function calculate(i) {

    var int = parseInt(+i);
    //console.log(int);

      if (int > 100) {
        $('div ul').append('<li>' + 'The number needs to be between 1 and 100.' + '</li>');
      }

      else if ((int % 5 == 0) && (int % 3 == 0)) {
        $('div ul').append('<li>' + 'fizz buzz' + '</li>');
      }

      else if (int % 3 == 0) {
        $('div ul').append('<li>' + 'fizz' + '</li>');
      }  

      else if (int % 5 == 0) {
        $('div ul').append('<li>' + 'buzz' + '</li>');
      }


      else {
        $('div ul').append('<li>' + int + '</li>');
      }

  }


});