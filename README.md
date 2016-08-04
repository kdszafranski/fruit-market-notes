# Fruit Market Notes

This code illustrates the differences between non-abstracted,repeated code versus a proper DRY/abstracted approach.

Each block intends to process an array of Fruit objects.

`abstraction` here refers to thinking of how piece of logic can be made to handle processing types of things instead of a specific instance of a thing.

`DRY` stands for Don't Repeat Yourself, a programming maxim to remind us to be looking for repeatable chunks of logic and put those into functions.

Together, these concepts help us identify and build functions that can handle general situations, not specific objects of data.

## Block 1

This block of code intends that every re-usable piece of code is in a function (good!) but each function must process the entire array. Not only that, each one relies on a global variable, which is generally considered bad practice with JavaScript because variables are so easy to change. There is also no way to process only one piece of fruit if we wanted to.

This arrangement works but will get more and more complex as each step is coupled to an entire array of fruit objects.

## Block 2

Given the same fruit array, this block of code recognizes that each fruit is basically the same and processing it is best performed on each single fruit. Every step of processing could be called for any purpose and at any time. Each function does one thing to the given object and returns the results. This allows us to perform each thing discreetly apart from any other.

The processing of a whole array of fruit is also abstracted so if we had many arrays of fruit, each one could be processed or not, based on need.
