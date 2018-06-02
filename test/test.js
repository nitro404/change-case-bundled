"use strict";

global.utilities = undefined;

var changeCaseBundled = require("../dist/change-case-bundled.js");
var changeCase = require("change-case");
var utilities = require("extra-utilities");
var chai = require("chai");
var expect = chai.expect;

var functionNames = [];

var changeCaseAttributes = Object.keys(changeCase);

for(var i = 0; i < changeCaseAttributes.length; i++) {
	if(utilities.isFunction(changeCase[changeCaseAttributes[i]])) {
		functionNames.push(changeCaseAttributes[i]);
	}
}

describe("Change Case Bundled", function() {
	it("should contain the same functions as the original module", function() {
		for(var i = 0; i < functionNames.length; i++) {
			expect(utilities.isFunction(changeCaseBundled[functionNames[i]])).to.equal(true);
		}
	});
});
