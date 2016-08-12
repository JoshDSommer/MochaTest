"use strict";
var chai_1 = require('chai');
var validation_service_1 = require('../src/validation.service');
describe.only('ValidationService', function () {
    var validationService;
    // These are you test cases for iterating through
    var invalidCharacterTestCases = ['!', '^', '%', '*', '~', '&', '$', '#', '?', '`', '=', '/', '\\', ',', ':', ';', '"', '\'', '{', '}', '[', ']', '(', ')', '|', '>', '<'];
    beforeEach(function () {
        validationService = new validation_service_1.ValidationService();
    });
    it('should return true when a string does not contain invalid characters', function () {
        //Build your string to test.
        var fakeStringToTest = "FakeValidString";
        // test
        var isValid = validationService.isValidString(fakeStringToTest);
        chai_1.expect(isValid).to.be.true;
    });
    // Iterate though each item in the array and run it through the test case.
    invalidCharacterTestCases.forEach(function (invalidCharacter) {
        it("should return false when a string contains the invalid character " + invalidCharacter, function () {
            //Build your string to test.
            var fakeStringToTest = "Fake" + invalidCharacter + "InvalidString";
            // test
            var isValid = validationService.isValidString(fakeStringToTest);
            chai_1.expect(isValid).to.be.false;
        });
    });
});
