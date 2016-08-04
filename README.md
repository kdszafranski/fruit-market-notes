# Fruit Market Notes

This code illustrates the differences between non-abstracted and repeated code and proper DRY/abstracted approaches.

Each block intends to process an array of Fruit objects.

## Block 1

This block of code intends that every re-usable piece of code is in a function (good!) but each function must process the entire array. Not only that, each one relies on a global variable, which is generally considered bad practice with JavaScript because variables are so easy to change. There is also no way to process only one piece of fruit if we wanted to.

## Block 2

Given the same fruit array, this block of code recognizes that each fruit is basically the same and processing it is best performed on each single fruit. Every step of processing could be called for any purpose and at any time. Each function does one thing to the given object and returns the results. This allows us to perform each thing discreetly apart from any other.
