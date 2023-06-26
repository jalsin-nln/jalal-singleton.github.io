// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */

function isArray(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)) {
        return true;
    } else {
        return false;
    }



    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //determine if value is 'object' with typeof and that is not null, not an arry, and make sure it is not an instance of the date();

    if (value && typeof value == "object" && !Array.isArray(value) && !(value instanceof Date)) {
        return true;
    } else { return false; }

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //

    if (value && typeof value == "object" && Array.isArray(value) && !(value instanceof Date) || value && typeof value === Array.isArray()) {
        return true;
    } else {
        return false;
    }



    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)) {
        return "array";
    } else if (isObject(value)) {
        return "object";
    } else if (value instanceof Date) {
        return "date";
    } else if (Object.is(value, null)) {
        return "null";
    } else {
        return typeof (value);
    }


    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
