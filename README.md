# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jcronier/lotide`

**Require it:**

`const _ = require('@jcronier/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Asserts whether two primitive values are equal.
* `assertArratsEqual(actual, expected)`: Asserts whether two arrays' elements are the same.
* `assertObjectsEqual(actual, expected)`: Asserts whether two objects properties/values are the same.
* `countLetters(sentence)`: Returns an object with the counts of all of the letters in a sentence.
* `countOnly(allItems, itemsToRemove)`: Returns an object that contains the counts of all of the elements in a passed array that are dictated by a passed object.
* `eqArrays(firstArray, secondArray)`: Takes two arrays and returns a boolean, based on a perfect match.
* `eqObjects(firstObject, secondObject)`: Takes two objects and returns a boolean, based on a perfect match.
* `findKey(object, callback)`: Takes an object and a callback function, returns the first key in the object which satisfies the callback function. If no key is found, it returns undefined. 
* `findKeyByValue(object, findValue)`: Returns the first key in a passed object which is equal to a given value. Returns undefined if no key found.
* `flatten(nestedArrays)`: Takes in a array of nested arrays and returns a one-dimensional array.
* `head(array)`: Returns the first element of an array.
* `tail(array)`: Returns an array of all of the elements in a passed array, excluding the first element.
* `middle(array)`: Returns the middle element of an array. If the array has an even amount of elements, an array of the middle two elements is returned.
* `letterPositions(sentence)`: Returns an object which contains the indexed positions of all of the letters in a given sentence.
* `map(array, callback)`: Returns a new array that includes the outcomes of the previous arrays elements called with the given callback function.
* `takeUntil(array, callback)`: Returns an array that contains the elements of a given array from the start up until the first element for which a callback function returns a truthy value.
* `without(source, itemsToRemove)`: Takes two arrays and returns a new array with the elements from the second array having been removed from the first.