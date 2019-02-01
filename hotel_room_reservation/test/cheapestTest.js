var expect = require('chai').expect;
var cheapest = require('../cheapest');
var data = require("../input.js")

describe('cheapest()', function () {
  it('should find cheapest hotel', function () {
    
    // 1. ARRANGE
    var inputs = data.inputs,
    outputs = data.outputs

    // 2. ACT
    inputs.forEach((v,i) => {
      // 3. ASSERT
      expect(cheapest(v)[0]).to.be.equal(outputs[i]);
    })
  });
});