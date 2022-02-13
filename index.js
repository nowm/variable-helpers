/**
 * Checks if a variable is an object.
 *
 * @param {*} variable
 *
 * @return {boolean}
 */
function isObject(variable) {
    if (typeof variable === 'function') {
        return /^\s*class\s+/.test(variable.toString());
    }

    if (typeof variable !== 'object') {
        return false;
    }

    return variable !== null && !Array.isArray(variable);
}

/**
 * Checks if a variable is a finite number.
 *
 * NaN and Infinity values considered to be non-numbers
 *
 * @param {*} variable
 *
 * @return {boolean}
 */
function isNumber(variable) {
    if (typeof variable === 'bigint') {
        return true;
    }

    if (typeof variable !== 'number') {
        return false;
    }

    let result;

    try {
        result = isFinite(variable);
    } catch (error) {
        result = false;
    }

    return result;
}

/**
 * Checks if a variable is empty.
 *
 * Uses standard JS to-boolean conversion with few exceptions:
 *
 * - Objects having no properties are empty
 * - Empty arrays are empty
 *
 * @param {*} variable
 * @return {boolean}
 */
function isEmpty(variable) {
    if (isObject(variable)) {
        return Object.keys(variable).length === 0;
    }

    if (Array.isArray(variable)) {
        return variable.length === 0;
    }

    return !variable;
}

module.exports = {
    isObject,
    isNumber,
    isEmpty,
};
