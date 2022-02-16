import { NumberHelpers } from '../helpers/NumberHelpers';
import { Nothing, Some } from '../helpers/MaybeHelpers';

/* ############### Exploitable data ############### */

const floatCommaString = '45,77';

const floatPointString = '45.77';

const floatNumber = 45.77;

const intString = '45';

const intNumber = 45;

const nonNumberString = 'whatever';

const emptyString = '';

/* ############### Test 1 ############### */

const inputTest1 = emptyString;

const expectedTest1 = Nothing;

/* ############### Test 2 ############### */

const inputTest2 = nonNumberString;

const expectedTest2 = Nothing;

/* ############### Test 3 ############### */

const inputTest3 = floatCommaString;

const expectedTest3 = Some(floatNumber);

/* ############### Test 4 ############### */

const inputTest4 = floatPointString;

const expectedTest4 = Some(floatNumber);

/* ############### Test 5 ############### */

const inputTest5 = intString;

const expectedTest5 = Some(intNumber);

/* ############### Test 6 ############### */

const inputTest6 = emptyString;

const expectedTest6 = Nothing;

/* ############### Test 7 ############### */

const inputTest7 = nonNumberString;

const expectedTest7 = Nothing;

/* ############### Test 8 ############### */

const inputTest8 = floatCommaString;

const expectedTest8 = Some(intNumber);

/* ############### Test 9 ############### */

const inputTest9 = floatPointString;

const expectedTest9 = Some(intNumber);

/* ############### Test 10 ############### */

const inputTest10 = intString;

const expectedTest10 = Some(intNumber);

/* ############### Tests ############### */

describe('NumberHelpers', () => {
    describe('parseFloatMaybe', () => {
        it('should return Nothing when passed a empty string - Test 1', () => {
            const result = NumberHelpers.parseFloatMaybe(inputTest1);
            expect(result).toEqual(expectedTest1);
        });
        it('should return Nothing when passed a non number string - Test 2', () => {
            const result = NumberHelpers.parseFloatMaybe(inputTest2);
            expect(result).toEqual(expectedTest2);
        });
        it('should return Some float number when passed a float number string with a comma - Test 3', () => {
            const result = NumberHelpers.parseFloatMaybe(inputTest3);
            expect(result).toEqual(expectedTest3);
        });
        it('should return Some float number when passed a float number string with a point - Test 4', () => {
            const result = NumberHelpers.parseFloatMaybe(inputTest4);
            expect(result).toEqual(expectedTest4);
        });
        it('should return Some float number when passed an int number string - Test 5', () => {
            const result = NumberHelpers.parseFloatMaybe(inputTest5);
            expect(result).toEqual(expectedTest5);
        });
    });

    describe('parseIntMaybe', () => {
        it('should return Nothing when passed a empty string - Test 6', () => {
            const result = NumberHelpers.parseIntMaybe(inputTest6);
            expect(result).toEqual(expectedTest6);
        });
        it('should return Nothing when passed a non number string - Test 7', () => {
            const result = NumberHelpers.parseIntMaybe(inputTest7);
            expect(result).toEqual(expectedTest7);
        });
        it('should return Some int number when passed a float number string with a comma - Test 8', () => {
            const result = NumberHelpers.parseIntMaybe(inputTest8);
            expect(result).toEqual(expectedTest8);
        });
        it('should return Some int number when passed a float number string with a point - Test 9', () => {
            const result = NumberHelpers.parseIntMaybe(inputTest9);
            expect(result).toEqual(expectedTest9);
        });
        it('should return Some int number when passed an int number string - Test 10', () => {
            const result = NumberHelpers.parseIntMaybe(inputTest10);
            expect(result).toEqual(expectedTest10);
        });
    });
});
