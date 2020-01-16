
const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
// const app = require('../app');

describe('App', function() {
  it('sayHello sould return hello', function() {
    let result = sayHello();
    assert.equal(result, 'hello');
  });

  it('sayHello should return type string', function() {
    let result = sayHello();
    assert.typeOf(result, 'string');
  });

  it('addNumbers should return a number', function() {
    let result = addNumbers(1, 3);
    assert.isNumber(result);
  });

  it('addNumbers should add two numbers', function() {
    const a = 3;
    const b = -1;
    const result = addNumbers(a, b);
    assert.equal(result, 2);
  });

  it('addNumbers should be above 5', function() {
    const result = addNumbers(3, 4);
    assert.isAbove(result, 5);
  });

  it('addNumbers should return a type number', function() {
    const result = addNumbers('5', 8);    // AssertionError: expected '58' to be a number
    assert.typeOf(result, 'number');
  });

});
