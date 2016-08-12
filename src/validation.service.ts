

export class ValidationService {

	public isValidString(stringToTest: string) {
		const patternMatcher = /[^a-zA-Z\d\s]/g;
		return !patternMatcher.test(stringToTest);
	}
}