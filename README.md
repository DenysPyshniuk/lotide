# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @DenysPyshniuk`

**Require it:**

`const _ = require('devronder/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`assertEqual(...)`: comparing elements if they are equal;
`assertArraysEqual(...)`: comparing Arrays if they are equal;
`assertObjectsEqual(...)`: comparing Objects if they are equal;
`countLetters(...)`: count how many of each letters in a string;
`countOnly(...)`: count how many times specific letter showes up in a string;
`eqArrays(...)`: comparing Arrays if they are equal returns true or false;
`eqObjects(...)`: comparing Objects if they are equal returns true or false;
`findKey(...)`: to find keys in Object;
`findKeyByValue(...)`: to find keys in Object by value;
`head: head(...)`: returns only first element from the array;
`letterPositions(...)`: returns possitions of specific letters;
`map(...)`: returns only first letters of each element from the array;
`middle(...)`: returns 2 middle elements from the array if array is not odd and only 1 middle if array.length is odd;
`tail(...)`: returns only the last elements of the array by slicing first element off;
`takeUntil(...)`: returns a values from the array until some specific point(for example comma)
`without(...)`: returns an array of values without specific value