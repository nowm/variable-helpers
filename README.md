# variable-helpers

Simple functions to check variables

## Installation

```shell script
npm install variable-helpers
```

## Functions

### isObject

Checks if a variable is an object. ES6 classes considered to be objects.

```javascript
import {isObject} from 'variable-helpers';

class MyClass {
    a = 1;
}

function MyFunction() {
    return 'hi';
}

isObject({});               // true
isObject(MyClass);          // true
isObject(new MyClass());    // true
isObject(MyFunction);       // false
isObject(new MyFunction()); // true
isObject(null);             // false
isObject([1, 2, 3]);        // false
isObject('hi');             // false
```

### isNumber

Checks if a variable is a number. `BigInt` variables considered to be numbers. Both `NaN` and `Infinity` considered to be non-numbers.

```javascript
import {isNumber} from 'variable-helpers';

isNumber(0);     // true
isNumber('hi');  // false
isNumber(0 / 0); // false
isNumber(1 / 0); // false
isNumber(123n);  // true
```

### isEmpty

Checks if a variable is empty. Uses standard JS to-boolean conversion with few exceptions:

- Objects having no properties are empty (private properties are invisible);
- Empty arrays are empty.

```javascript
import {isEmpty} from 'variable-helpers';

class Class1 {
    // Nothing here
}

class Class2 {
    a = 1;
}

class Class3 {
    static a = 1;
}

class Class4 {
    #a = 1;
    static #b = 1;
}

isEmpty(Class1);       // true
isEmpty(new Class1()); // true
isEmpty(Class2);       // true
isEmpty(new Class2()); // false
isEmpty(Class3);       // false
isEmpty(new Class3()); // true
isEmpty(Class4);       // true
isEmpty(new Class4()); // true
isEmpty({});           // true
isEmpty({a: 1});       // false
isEmpty([]);           // true
isEmpty([1, 2, 3]);    // false
isEmpty(null);         // true
isEmpty('');           // true
isEmpty(-1);           // false
isEmpty(0);            // true
isEmpty(1);            // false
isEmpty(123n);         // false
isEmpty(0n);           // true
isEmpty('0');          // false

```
