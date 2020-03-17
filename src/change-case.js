"use strict";

var changeCase = require("change-case");
changeCase.titleCase = require("title-case").titleCase;
changeCase.swapCase = require("swap-case").swapCase;
changeCase.lowerCase = require("lower-case").lowerCase;
changeCase.lowerCaseFirst = require("lower-case-first").lowerCaseFirst;
changeCase.upperCase = require("upper-case").upperCase;
changeCase.upperCaseFirst = require("upper-case-first").upperCaseFirst;
changeCase.spongeCase = require("sponge-case").spongeCase;

module.exports = changeCase;
