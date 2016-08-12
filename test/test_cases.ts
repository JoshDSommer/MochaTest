import { expect } from 'chai';
import { ValidationService } from '../src/validation.service';

describe.only('ValidationService', () => {
	let validationService: ValidationService;

	// These are you test cases for iterating through
	const invalidCharacterTestCases: string[] = ['!', '^', '%', '*', '~', '&', '$', '#', '?', '`', '=', '/', '\\', ',', ':', ';', '"', '\'', '{', '}', '[', ']', '(', ')', '|', '>', '<'];

	beforeEach(() => {
		validationService = new ValidationService();
	});

	it('should return true when a string does not contain invalid characters', () => {
		//Build your string to test.
		const fakeStringToTest = `FakeValidString`;

		// test
		let isValid = validationService.isValidString(fakeStringToTest);

		expect(isValid).to.be.true;
	});

	// Iterate though each item in the array and run it through the test case.
	invalidCharacterTestCases.forEach((invalidCharacter): void => {

		it(`should return false when a string contains the invalid character ${invalidCharacter}`, () => {
			//Build your string to test.
			const fakeStringToTest = `Fake${invalidCharacter}InvalidString`;

			// test
			let isValid = validationService.isValidString(fakeStringToTest);

			expect(isValid).to.be.false;
		});
	});

});