/*
////////////////////////////////////////////////////////////////////////////////////
// Section 6.68
////////////////////////////////////////////////////////////////////////////////////

// IIFE == Immediately Invoked Function Expression
// 			== anonymous function wrapped in parentheses
var budgetController = (function() {
  var x = 23;

  var add = function(a) {
    return x + a;
  };
  // Writing like this gives us access from the outside
  return {
    publicTest: function(b) {
      return add(b);
    }
  };
})();

var UIController = (function() {
  // Some code
})();

var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  };
})(budgetController, UIController);
*/

////////////////////////////////////////////////////////////////////////////////////
// Section 6.69
////////////////////////////////////////////////////////////////////////////////////

var budgetController = (function() {})();

var UIController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var DOM = UIController.getDOMstrings();

  var ctrlAddItem = function() {
    // Get the field input data
    var input = UIController.getInput();
    console.log(input);

    // Add the item to the budget controller

    // Add the item to the UI

    // Calculate the budget

    // Display the budget on the UI
  };

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode == 13 || event.which == 13) {
      ctrlAddItem();
    }
  });
})();
