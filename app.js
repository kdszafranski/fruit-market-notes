// Block 1: Unabstracted, Repeats code
var apples = {name: "Apple", price: 2.00, count: 0};
var oranges = {name: "Orange", price: 2.00, count: 0};
var pears = {name: "Pear", price: 2.00, count: 0};
var bananas = {name: "Banana", price: 2.00, count: 0};

var fruit = [apples, oranges, pears, bananas];

processFruit();
nextStepOfProcessing();

function processFruit() {
  // Relies on a global array variable
  // function does more than one thing. 1) loops thru the fruit array 2) applies some logic to each one
  fruits.forEach(function(theFruit, index) {
    // all logic for a single fruit object here
    // no way to process just one fruit if there was a need to do so
  });
}

function nextStepOfProcessing() {
  fruits.forEach(function(theFruit, index) {
    // all logic for a single fruit object here
  });
}

/************************************************************************************/
/*  Abstracted for reuse
/************************************************************************************/

// Block 2: Abstracted functionality, DRY (Don't Repeat Yourself)
var apples = {name: "Apple", price: 2.00, count: 0};
var oranges = {name: "Orange", price: 2.00, count: 0};
var pears = {name: "Pear", price: 2.00, count: 0};
var bananas = {name: "Banana", price: 2.00, count: 0};

var fruit = [apples, oranges, pears, bananas];

// moves the loop of processing into a function, so we can run this by itself if needed.
processAllFruit();

// still relies on the global array of fruit
// can be called repeatedly at different times as needed
function processAllFruit() {
  fruit.forEach(function(theFruit, index) {
    // each step of processing could be called in turn, in any order that makes sense
    fruit[index] = processFruit(theFruit);
    fruit[index] = nextStepOfProcessing(fruit[index]);
    // and so on...
  });
}

// abstracts the processing of an individual fruit so it can be called at any time
// takes one fruit in, returns the changed fruit object
function processSingleFruit(aFruit) {
  // logic for a single fruit object here
  //
  return processedFruit;
}

function nextStepOfProcessing(aFruit) {
  // some other thing done to a single fruit object
  //
  return processedFruit;
}
