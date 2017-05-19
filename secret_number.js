//'use strict';
module.exports = function() {

  var secretNumber = (function(){
    myNumber = Math.random(0, 1000000);
    return function(){
      return myNumber;
    };

  })();

  return secretNumber;
};