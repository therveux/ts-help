import { ArrayHelpers, SORT_TYPE } from '../helpers/ArrayHelpers';
import { Maybe, MaybeHelpers, Nothing, Some } from '../helpers/MaybeHelpers';
import { NonEmptyArray } from '../@types/NonEmptyArray';
// import { NumberHelpers } from '../helpers/NumberHelpers';

/* ############### Exploitable data ############### */

const arrayOf3: number[] = Array.from(Array(3).keys());
const arrayOf9: number[] = Array.from(Array(9).keys());
const arrayOf10: number[] = Array.from(Array(10).keys());

const chunkArrayMaybeDefaultValue = [[42]];

const getArrayValueMaybeDefaultValue = 42;

const findInArrayMaybeDefaultValue = 42;

/* ############### Test 1 ############### */

const inputTest1 = arrayOf10;

const expectedTest1 = [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9]
];

/* ############### Test 2 ############### */

const inputTest2: number[] = [];

const expectedTest2: number[][] = [];

/* ############### Test 3 ############### */

const inputTest3 = arrayOf9;

const expectedTest3 = [[0, 1], [2, 3], [4, 5], [6, 7], [8]];

/* ############### Test 4 ############### */

const inputTest4 = arrayOf3;

const expectedTest4 = [[0, 1, 2]];

/* ############### Test 5 ############### */

const inputTest5 = arrayOf10;

const expectedTest5 = chunkArrayMaybeDefaultValue;

/* ############### Test 6 ############### */

const inputTest6 = arrayOf10;

const expectedTest6 = chunkArrayMaybeDefaultValue;

/* ############### Test 7 ############### */

const inputTest7: Record<string, string>[] = [];

const expectedTest7: Record<string, string>[] = [];

/* ############### Test 8 ############### */

const inputTest8 = [{ number: 8 }, { number: 4 }, { number: 12 }, { number: 1 }, { number: 7 }];

const expectedTest8 = [{ number: 1 }, { number: 4 }, { number: 7 }, { number: 8 }, { number: 12 }];

/* ############### Test 9 ############### */

const inputTest9 = [{ number: 8 }, { number: 4 }, { number: 12 }, { number: 1 }, { number: 7 }];

const expectedTest9 = [{ number: 12 }, { number: 8 }, { number: 7 }, { number: 4 }, { number: 1 }];

/* ############### Test 10 ############### */

const inputTest10 = [
    { string: 'Martin' },
    { string: 'Theo' },
    { string: 'Thibaud' },
    { string: 'Valentin' },
    { string: 'Jeremy' }
];

const expectedTest10 = [
    { string: 'Jeremy' },
    { string: 'Martin' },
    { string: 'Theo' },
    { string: 'Thibaud' },
    { string: 'Valentin' }
];

/* ############### Test 11 ############### */

const inputTest11 = [
    { string: 'Martin', test: true },
    { string: 'Theo', test: false },
    { string: 'Thibaud', test: true },
    { string: 'Valentin', test: false },
    { string: 'Jeremy', test: true }
];

const expectedTest11 = [
    { string: 'Valentin', test: false },
    { string: 'Thibaud', test: true },
    { string: 'Theo', test: false },
    { string: 'Martin', test: true },
    { string: 'Jeremy', test: true }
];

/* ############### Test 12 ############### */

const inputTest12: number[] = [];

const expectedTest12 = getArrayValueMaybeDefaultValue;

/* ############### Test 13 ############### */

const inputTest13 = [4577];

const expectedTest13 = 4577;

/* ############### Test 14 ############### */

const inputTest14 = [4577, 1234, 5432, 7894, 1972];

const expectedTest14 = 7894;

/* ############### Test 15 ############### */

const inputTest15 = [4577, 1234, 5432, 7894, 1972];

const expectedTest15 = getArrayValueMaybeDefaultValue;

/* ############### Test 16 ############### */

const inputTest16: number[][] = [];

const expectedTest16: number[][] = [];

/* ############### Test 17 ############### */

const inputTest17 = [['element']];

const expectedTest17 = ['element'];

/* ############### Test 18 ############### */

const inputTest18 = [['element'], ['theGame', 'anotherElement'], ['anotherOne', 'elementAgain']];

const expectedTest18 = ['element', 'theGame', 'anotherElement', 'anotherOne', 'elementAgain'];

/* ############### Test 19 ############### */

const inputTest19: Record<string, string>[] = [];

const expectedTest19 = {};

/* ############### Test 20 ############### */

const inputTest20 = [{ id: 'id1' }, { id: 'id2' }, { id: 'id3' }, { id: 'id4' }];

const expectedTest20 = {
    id1: { id: 'id1' },
    id2: { id: 'id2' },
    id3: { id: 'id3' },
    id4: { id: 'id4' }
};

/* ############### Test 21 ############### */

const inputTest21 = [
    { id: 'id1', type: 'even' },
    { id: 'id2', type: 'even' },
    { id: 'id3', type: 'odd' },
    { id: 'id4', type: 'even' }
];

const expectedTest21 = {
    'id1,even': { id: 'id1', type: 'even' },
    'id2,even': { id: 'id2', type: 'even' },
    'id3,odd': { id: 'id3', type: 'odd' },
    'id4,even': { id: 'id4', type: 'even' }
};

/* ############### Test 22 ############### */

const inputTest22 = [
    { id: 'id1', type: 'even' },
    { id: 'id2', type: 'even' },
    { id: 'id3', type: 'odd' },
    { id: 'id4', type: 'even' }
];

const expectedTest22 = {
    'id1-even': { id: 'id1', type: 'even' },
    'id2-even': { id: 'id2', type: 'even' },
    'id3-odd': { id: 'id3', type: 'odd' },
    'id4-even': { id: 'id4', type: 'even' }
};

/* ############### Test 23 ############### */

const inputTest23: number[] = [];

const expectedTest23 = findInArrayMaybeDefaultValue;

/* ############### Test 24 ############### */

const inputTest24 = [4, 3, 10, 1, 2, 7];

const expectedTest24 = 1;

/* ############### Test 25 ############### */

const inputTest25 = [4, 3, 10, 7];

const expectedTest25 = findInArrayMaybeDefaultValue;

/* ############### Test 26 ############### */

const inputTest26: number[] = [];

const expectedTest26 = true;

/* ############### Test 27 ############### */

const inputTest27 = [2, 4, 5];

const expectedTest27 = false;

/* ############### Test 28 ############### */

// const inputTest28 = ['5', '3', 'badNumber', '4'];
//
// const expectedTest28: NonEmptyArray<number> = [5, 3, 4];
//
// /* ############### Test 29 ############### */
//
// const inputTest29 = ['whatever', 'veryBad', 'badNumber', 'hystericalDate'];
//
// const expectedTest29: Maybe<NonEmptyArray<number>> = Nothing;
//
// /* ############### Test 30 ############### */
//
// const inputTest30: string[] = [];
//
// const expectedTest30: Maybe<NonEmptyArray<number>> = Nothing;

/* ############### Test 31 ############### */

const inputTest31: number[] = [];

const expectedTest31: Maybe<NonEmptyArray<number>> = Nothing;

/* ############### Test 32 ############### */

const inputTest32: number[] = [1, 2, 3, 4];

const expectedTest32: Maybe<NonEmptyArray<number>> = Some([1, 2]);

/* ############### Test 33 ############### */

const inputTest33: number[] = [3, 4, 6, 7];

const expectedTest33: Maybe<NonEmptyArray<number>> = Nothing;

/* ############### Tests ############### */

describe('ArrayHelpers', () => {
    describe('chunkArray', () => {
        it('should chunk an array of 10 numbers into an array of 5 arrays of 2 numbers, when given a size of 2 - Test 1', () => {
            const chunkedArray = ArrayHelpers.chunk(inputTest1, 2);
            expect(MaybeHelpers.withDefault(chunkedArray, chunkArrayMaybeDefaultValue)).toEqual(expectedTest1);
        });
        it('should return an empty array when given an empty array, when given any size - Test 2', () => {
            const chunkedArray = ArrayHelpers.chunk(inputTest2, 15);
            expect(MaybeHelpers.withDefault(chunkedArray, chunkArrayMaybeDefaultValue)).toEqual(expectedTest2);
        });
        it('should chunk an array of 9 numbers into an array of 4 arrays of 2 numbers and 1 array of 1 number, when given a size of 2 - Test 3', () => {
            const chunkedArray = ArrayHelpers.chunk(inputTest3, 2);
            expect(MaybeHelpers.withDefault(chunkedArray, chunkArrayMaybeDefaultValue)).toEqual(expectedTest3);
        });
        it('should chunk an array of 3 numbers into an array of 1 array of 3 numbers, when given a size > 3 - Test 4', () => {
            const chunkedArray = ArrayHelpers.chunk(inputTest4, 15);
            expect(MaybeHelpers.withDefault(chunkedArray, chunkArrayMaybeDefaultValue)).toEqual(expectedTest4);
        });
        it('should return Nothing when given a size of 0 - Test 5', () => {
            const chunkedArray = ArrayHelpers.chunk(inputTest5, 0);
            expect(MaybeHelpers.withDefault(chunkedArray, chunkArrayMaybeDefaultValue)).toEqual(expectedTest5);
        });
        it('should return Nothing when given a negative size - Test 6', () => {
            const chunkedArray = ArrayHelpers.chunk(inputTest6, -15);
            expect(MaybeHelpers.withDefault(chunkedArray, chunkArrayMaybeDefaultValue)).toEqual(expectedTest6);
        });
    });

    describe('sortObjectsByValue', () => {
        it('should return an empty array when given a whatever key and an empty array - Test 7', () => {
            const sortedArray = ArrayHelpers.sortObjectsByValue('whatever', inputTest7);
            expect(sortedArray).toEqual(expectedTest7);
        });
        it('should return an array with objects ascendently sorted by "number" key when given "number" as key and an array with objects with a "number" key with a number as value - Test 8', () => {
            const sortedArray = ArrayHelpers.sortObjectsByValue('number', inputTest8);
            expect(sortedArray).toEqual(expectedTest8);
        });
        it('should return an array with objects descendently sorted by "number" key when given "number" as key and an array with objects with a "number" key with a number as value and SORT_TYPE.DESC- Test 9', () => {
            const sortedArray = ArrayHelpers.sortObjectsByValue('number', inputTest9, SORT_TYPE.DESC);
            expect(sortedArray).toEqual(expectedTest9);
        });
        it('should return an array with objects alphabetically sorted by "string" key when given "string" as key and an array with objects with a "string" key with a string as value - Test 10', () => {
            const sortedArray = ArrayHelpers.sortObjectsByValue('string', inputTest10);
            expect(sortedArray).toEqual(expectedTest10);
        });
        it('should return an array with objects descending alphabetical sorted by "string" key when given "string" as key and an array with objects with a "string" key with a string as value and SORT_TYPE.DESC- Test 11', () => {
            const sortedArray = ArrayHelpers.sortObjectsByValue('string', inputTest11, SORT_TYPE.DESC);
            expect(sortedArray).toEqual(expectedTest11);
        });
    });

    describe('getValue', () => {
        it('should return Nothing when given an empty array and an index of 0 - Test 12', () => {
            const maybeArrayValue = ArrayHelpers.getValue(inputTest12, 0);
            expect(MaybeHelpers.withDefault(maybeArrayValue, getArrayValueMaybeDefaultValue)).toEqual(expectedTest12);
        });
        it('should return a value when given an array of numbers with one element and an index of 0 - Test 13', () => {
            const maybeArrayValue = ArrayHelpers.getValue(inputTest13, 0);
            expect(MaybeHelpers.withDefault(maybeArrayValue, getArrayValueMaybeDefaultValue)).toEqual(expectedTest13);
        });
        it('should return a value when given an array of numbers with five elements and an index of 3 - Test 14', () => {
            const maybeArrayValue = ArrayHelpers.getValue(inputTest14, 3);
            expect(MaybeHelpers.withDefault(maybeArrayValue, getArrayValueMaybeDefaultValue)).toEqual(expectedTest14);
        });
        it('should return Nothing when given an array of numbers with five elements and an index of 5 - Test 15', () => {
            const maybeArrayValue = ArrayHelpers.getValue(inputTest15, 5);
            expect(MaybeHelpers.withDefault(maybeArrayValue, getArrayValueMaybeDefaultValue)).toEqual(expectedTest15);
        });
    });

    describe('flatten', () => {
        it('should return an empty array when given an empty array - Test 16', () => {
            const flattenedArray = ArrayHelpers.flatten(inputTest16);
            expect(flattenedArray).toEqual(expectedTest16);
        });
        it('should return an array with one element when given an array of arrays with one array with one element - Test 17', () => {
            const flattenedArray = ArrayHelpers.flatten(inputTest17);
            expect(flattenedArray).toEqual(expectedTest17);
        });
        it('should return an array with five elements when given an array of arrays with three arrays with elements - Test 18', () => {
            const flattenedArray = ArrayHelpers.flatten(inputTest18);
            expect(flattenedArray).toEqual(expectedTest18);
        });
    });

    describe('dictionaryFromArrayOfObjects', () => {
        it('should return an empty dictionary when given an empty array and a whatever key - Test 19', () => {
            const result = ArrayHelpers.dictionaryFromArrayOfObjects(inputTest19, 'whatever');
            expect(result).toEqual(expectedTest19);
        });
        it('should return a dictionary using "id" keys from given array of objects when given "id" as key - Test 20', () => {
            const result = ArrayHelpers.dictionaryFromArrayOfObjects(inputTest20, 'id');
            expect(result).toEqual(expectedTest20);
        });
        it('should return a dictionary using "id" and "type" keys from given array of objects when given "id" and "types" as keys - Test 21', () => {
            const result = ArrayHelpers.dictionaryFromArrayOfObjects(inputTest21, 'id', ['type']);
            expect(result).toEqual(expectedTest21);
        });
        it('should return a dictionary using "id" and "type" keys combined using the "-" separator from given array of objects when given "id" and "types" as keys and "-" as separator - Test 22', () => {
            const result = ArrayHelpers.dictionaryFromArrayOfObjects(inputTest22, 'id', ['type'], '-');
            expect(result).toEqual(expectedTest22);
        });
    });

    describe('find', () => {
        it('should return Nothing when given an empty array and a whatever predicate- Test 23', () => {
            const foundElement = ArrayHelpers.find(inputTest23, () => true);
            expect(MaybeHelpers.withDefault(foundElement, findInArrayMaybeDefaultValue)).toEqual(expectedTest23);
        });
        it('should return 1 when given an array with numbers and a predicate matching a number lower than 3 - Test 24', () => {
            const foundElement = ArrayHelpers.find(inputTest24, number => number < 3);
            expect(MaybeHelpers.withDefault(foundElement, findInArrayMaybeDefaultValue)).toEqual(expectedTest24);
        });
        it('should return Nothing when given an array with numbers with no number lower than 3 and a predicate matching a number lower than 3 - Test 25', () => {
            const foundElement = ArrayHelpers.find(inputTest25, number => number < 3);
            expect(MaybeHelpers.withDefault(foundElement, findInArrayMaybeDefaultValue)).toEqual(expectedTest25);
        });
    });

    describe('isEmpty', () => {
        it('should return true when given an empty array - Test 26', () => {
            const result = ArrayHelpers.isEmpty(inputTest26);
            expect(result).toEqual(expectedTest26);
        });
        it('should return false when given a non empty array - Test 27', () => {
            const result = ArrayHelpers.isEmpty(inputTest27);
            expect(result).toEqual(expectedTest27);
        });
    });

    // describe('filterMap', () => {
    //     it('should return Nothing when given an empty array - Test 30', () => {
    //         const result = ArrayHelpers.filterMap(inputTest30, NumberHelpers.parseIntMaybe);
    //         expect(result).toEqual(expectedTest30);
    //     });
    //     it('should return an array of numbers when given an array of strings and a parseInt as predicate - Test 28', () => {
    //         const result = ArrayHelpers.filterMap(inputTest28, NumberHelpers.parseIntMaybe);
    //         expect(result).toEqual(expectedTest28);
    //     });
    //     it('should return an empty array when given an array of non number strings and a parseInt as predicate - Test 29', () => {
    //         const result = ArrayHelpers.filterMap(inputTest29, NumberHelpers.parseIntMaybe);
    //         expect(result).toEqual(expectedTest29);
    //     });
    // });

    describe('filter', () => {
        it('should return Nothing when given an empty array - Test 31', () => {
            const result = ArrayHelpers.filter(inputTest31, number => number < 3);
            expect(result).toEqual(expectedTest31);
        });
        it('should return an array of numbers when given an array of numbers and a predicate of < 3 - Test 32', () => {
            const result = ArrayHelpers.filter(inputTest32, number => number < 3);
            expect(result).toEqual(expectedTest32);
        });
        it('should return an empty array when given an array of numbers >= 3 and a predicate of < 3 - Test 33', () => {
            const result = ArrayHelpers.filter(inputTest33, number => number < 3);
            expect(result).toEqual(expectedTest33);
        });
    });
});
