"use strict";

global.utilities = undefined;

const changeCaseBundled = require("../dist/change-case-bundled.js");
const changeCase = require("change-case");
const utilities = require("extra-utilities");
const chai = require("chai");
const expect = chai.expect;

const functionNames = [];

const expectedFunctionNames = [
	"camelCase",
	"capitalCase",
	"constantCase",
	"dotCase",
	"headerCase",
	"lowerCase",
	"lowerCaseFirst",
	"noCase",
	"paramCase",
	"pascalCase",
	"pathCase",
	"sentenceCase",
	"snakeCase",
	"spongeCase",
	"swapCase",
	"titleCase",
	"upperCase",
	"upperCaseFirst"
];

const changeCaseAttributes = Object.keys(changeCase);

for(let i = 0; i < changeCaseAttributes.length; i++) {
	if(utilities.isFunction(changeCase[changeCaseAttributes[i]])) {
		functionNames.push(changeCaseAttributes[i]);
	}
}

describe("Change Case Bundled", function() {
	it("should contain the same functions as the original module", function() {
		for(let i = 0; i < functionNames.length; i++) {
			expect(changeCaseBundled[functionNames[i]]).to.be.an.instanceof(Function);
		}
	});

	it("should contain the expected set of functions from the original module", function() {
		for(let i = 0; i < expectedFunctionNames.length; i++) {
			expect(changeCaseBundled[expectedFunctionNames[i]]).to.be.an.instanceof(Function);
		}
	});
});
