// IIFE == Immediately Invoked Function Expression
// 			== anonymous function wrapped in parentheses
var budgetController = (function() {
  var x = 23;

  var add = function(a) {
    return x + a;
  };

  return {
    publicTest: function(b) {
      console.log(add(b));
    }
  };
})();
