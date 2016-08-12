"use strict";
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.prototype.isValidString = function (stringToTest) {
        var patternMatcher = /[^a-zA-Z\d\s]/g;
        return !patternMatcher.test(stringToTest);
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
