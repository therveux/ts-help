import { StringHelpers } from '../helpers/StringHelpers';

/* ############### Exploitable data ############### */

const emptyStringWihoutSpace = '';

/* ############### Test 1 ############### */

const inputTest1 = emptyStringWihoutSpace;

const expectedTest1 = true;

/* ############### Test 2 ############### */

const inputTest2 = 'string';

const expectedTest2 = false;

/* ############### Test 3 ############### */

const inputTest3 = '  ';

const expectedTest3 = false;

/* ############### Test 4 ############### */

const inputTest4 = 'string';

const expectedTest4 = 'String';

/* ############### Test 5 ############### */

const inputTest5 = 'string string';

const expectedTest5 = 'String String';

/* ############### Test 6 ############### */

const inputTest6 = 'String     String';

const expectedTest6 = 'StringString';

/* ############### Test 7 ############### */

const inputTest7 = 'string';

const expectedTest7 = false;

/* ############### Test 8 ############### */

const inputTest8 = '  ';

const expectedTest8 = true;

/* ############### Test 9 ############### */

const inputTest9 = emptyStringWihoutSpace;

const expectedTest9 = emptyStringWihoutSpace;

/* ############### Test 10 ############### */

const inputTest10 = 'String string' || 'string String';

const expectedTest10 = 'String String';

/* ############### Test 11 ############### */

const inputTest11 = 'sTring';

const expectedTest11 = 'String';

/* ############### Test 12 ############### */

const inputTest12 = emptyStringWihoutSpace;

const expectedTest12 = emptyStringWihoutSpace;

/* ############### Test 13 ############### */

const inputTest13 = 'sTring sTring';

const expectedTest13 = 'String String';

/* ############### Test 14 ############### */

const inputTest14 = 'string string string';

const expectedTest14 = 'String String String';

/* ############### Test 15 ############### */

const inputTest15 = ' string string';

const expectedTest15 = ' String String';

/* ############### Test 16 ############### */

const inputTest16 = '        string        ';

const expectedTest16 = 'string';

/* ############### Test 17 ############### */

const inputTest17 = 's t r i n g';

const expectedTest17 = 'string';

/* ############### Test 18 ############### */

const inputTest18 = 'string string string string string';

const expectedTest18 = 'stringstringstringstringstring';

/* ############### Test 19 ############### */

const inputTest19 = '    string    ';

const expectedTest19 = false;

/* ############### Test 20 ############### */

const inputTest20 = emptyStringWihoutSpace;

const expectedTest20 = true;

/* ############### Test 21 ############### */

const inputTest21 = emptyStringWihoutSpace;

const expectedTest21 = '';

/* ############### Test 22 ############### */

const inputTest22 = ' ';

const expectedTest22 = '';

describe('StringHelpers', () => {
    describe('isEmpty', () => {
        it('should return true when string has empty value - Test 1', () => {
            const stringEmpty = StringHelpers.isEmpty(inputTest1);
            expect(stringEmpty).toEqual(expectedTest1);
        });
        it('should return false when string has value - Test 2', () => {
            const stringEmpty = StringHelpers.isEmpty(inputTest2);
            expect(stringEmpty).toEqual(expectedTest2);
        });
        it('should return false when string has only space as value - Test 3', () => {
            const stringEmpty = StringHelpers.isEmpty(inputTest3);
            expect(stringEmpty).toEqual(expectedTest3);
        });
    });

    describe('capitalizeFirstLetter', () => {
        it('should return an empty string when given an empty string - Test 9', () => {
            const stringCapitalizeFirstLetter = StringHelpers.capitalizeFirstLetter(inputTest9);
            expect(stringCapitalizeFirstLetter).toEqual(expectedTest9);
        });
        it('should return a string with the first letter in uppercase when given a lowercase string - Test 4', () => {
            const stringCapitalizeFirstLetter = StringHelpers.capitalizeFirstLetter(inputTest4);
            expect(stringCapitalizeFirstLetter).toEqual(expectedTest4);
        });
        it('should return a string with the first letter in uppercase when given a string with the second letter in uppercase - Test 11', () => {
            const stringCapitalizeFirstLetter = StringHelpers.capitalizeFirstLetter(inputTest11);
            expect(stringCapitalizeFirstLetter).toEqual(expectedTest11);
        });
    });

    describe('capitalizeLastNameFirstLetters', () => {
        it('should return a string with the first letter of lastname and firstname in uppercase when given a lastname and firstname with the first letter in lowercase - Test 10', () => {
            const stringCapitalizeLastNameFirstLetters = StringHelpers.capitalizeLastNameFirstLetters(inputTest10);
            expect(stringCapitalizeLastNameFirstLetters).toEqual(expectedTest10);
        });
        it('should return a string with the first letter of lastname and firstname in uppercase when given a lastname and firstname in lowercase - Test 5', () => {
            const stringCapitalizeLastNameFirstLetters = StringHelpers.capitalizeLastNameFirstLetters(inputTest5);
            expect(stringCapitalizeLastNameFirstLetters).toEqual(expectedTest5);
        });
        it('should return an empty string when given an empty string - Test 12', () => {
            const stringCapitalizeLastNameFirstLetters = StringHelpers.capitalizeLastNameFirstLetters(inputTest12);
            expect(stringCapitalizeLastNameFirstLetters).toEqual(expectedTest12);
        });
        it('should return a string with first letter of lastname and firname in uppercase when given the second of lastname and firstname are uppercase - Test 13', () => {
            const stringCapitalizeLastNameFirstLetters = StringHelpers.capitalizeLastNameFirstLetters(inputTest13);
            expect(stringCapitalizeLastNameFirstLetters).toEqual(expectedTest13);
        });
        it('should return a string with all first letter of words in uppercase when given more than two words - Test 14', () => {
            const stringCapitalizeLastNameFirstLetters = StringHelpers.capitalizeLastNameFirstLetters(inputTest14);
            expect(stringCapitalizeLastNameFirstLetters).toEqual(expectedTest14);
        });
        it('should return a string with a space before the first letter of lastname in uppercase when given a lastname with space before in lowercase - Test 15', () => {
            const stringCapitalizeLastNameFirstLetters = StringHelpers.capitalizeLastNameFirstLetters(inputTest15);
            expect(stringCapitalizeLastNameFirstLetters).toEqual(expectedTest15);
        });
    });

    describe('removeSpaces', () => {
        it('should return a string wihout spaces when given two words - Test 6', () => {
            const stringRemoveSpaces = StringHelpers.removeSpaces(inputTest6);
            expect(stringRemoveSpaces).toEqual(expectedTest6);
        });
        it('should return a string wihout spaces when given a word with spaces after and before - Test 16', () => {
            const stringRemoveSpaces = StringHelpers.removeSpaces(inputTest16);
            expect(stringRemoveSpaces).toEqual(expectedTest16);
        });
        it('should return a string wihout spaces when given a word with a space between each letter - Test 17', () => {
            const stringRemoveSpaces = StringHelpers.removeSpaces(inputTest17);
            expect(stringRemoveSpaces).toEqual(expectedTest17);
        });
        it('should return a string wihout spaces when given a sentence with a space between each word - Test 18', () => {
            const stringRemoveSpaces = StringHelpers.removeSpaces(inputTest18);
            expect(stringRemoveSpaces).toEqual(expectedTest18);
        });
        it('should return a string wihout spaces when given an empty string - Test 21', () => {
            const stringRemoveSpaces = StringHelpers.removeSpaces(inputTest21);
            expect(stringRemoveSpaces).toEqual(expectedTest21);
        });
        it('should return a string without spaces when given a string with only spaces - Test 22', () => {
            const stringRemoveSpaces = StringHelpers.removeSpaces(inputTest22);
            expect(stringRemoveSpaces).toEqual(expectedTest22);
        });
    });

    describe('isBlank', () => {
        it('should return false when given a string with a word - Test 7', () => {
            const stringBlank = StringHelpers.isBlank(inputTest7);
            expect(stringBlank).toEqual(expectedTest7);
        });
        it('should return true when given a string with only spaces - Test 8', () => {
            const stringBlank = StringHelpers.isBlank(inputTest8);
            expect(stringBlank).toEqual(expectedTest8);
        });
        it('should return false when given a string with spaces after and before the word - Test 19', () => {
            const stringBlank = StringHelpers.isBlank(inputTest19);
            expect(stringBlank).toEqual(expectedTest19);
        });
        it('should return true when given an empty string - Test 20', () => {
            const stringBlank = StringHelpers.isBlank(inputTest20);
            expect(stringBlank).toEqual(expectedTest20);
        });
    });
});
