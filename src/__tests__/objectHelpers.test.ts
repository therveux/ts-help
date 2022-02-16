import { ObjectHelpers } from '../helpers/ObjectHelpers';
import { Nothing, Some } from '../helpers/MaybeHelpers';

/* ############### Exploitable data ############### */

const stringKey1 = 'founded';

const numberValue1 = 1972;

const objectStringNumbers: Record<string, number> = { founded: 1972, carpentry: 4577, members: 3 };

const numberKey1 = 1337;

const stringValue1 = 'leet';

const objectNumberStrings: Record<number, string> = { 1337: 'leet', 6041: 'goal' };

const nonKeyString = 'nonKeyString';

const nonKeyNumber = 0;

/* ############### Test 1 ############### */

const inputTest1: { obj: Record<string, number>; key: string } = { obj: objectStringNumbers, key: nonKeyString };

const expectedTest1 = Nothing;

/* ############### Test 2 ############### */

const inputTest2: { obj: Record<string, number>; key: number } = { obj: objectStringNumbers, key: nonKeyNumber };

const expectedTest2 = Nothing;

/* ############### Test 3 ############### */

const inputTest3: { obj: Record<string, number>; key: string } = { obj: objectStringNumbers, key: stringKey1 };

const expectedTest3 = Some(numberValue1);

/* ############### Test 4 ############### */

const inputTest4: { obj: Record<number, string>; key: number } = { obj: objectNumberStrings, key: nonKeyNumber };

const expectedTest4 = Nothing;

/* ############### Test 5 ############### */

const inputTest5: { obj: Record<number, string>; key: string } = { obj: objectNumberStrings, key: nonKeyString };

const expectedTest5 = Nothing;

/* ############### Test 6 ############### */

const inputTest6: { obj: Record<number, string>; key: number } = { obj: objectNumberStrings, key: numberKey1 };

const expectedTest6 = Some(stringValue1);

/* ############### Tests ############### */

describe('objectHelpers', () => {
    describe('getValue', () => {
        it('should return Nothing when passed a record with string keys and number values and a non key string - Test 1', () => {
            const result = ObjectHelpers.getValue(inputTest1.obj, inputTest1.key);
            expect(result).toEqual(expectedTest1);
        });
        it('should return Nothing when passed a record with string keys and number values and a non key number - Test 2', () => {
            const result = ObjectHelpers.getValue(inputTest2.obj, inputTest2.key);
            expect(result).toEqual(expectedTest2);
        });
        it('should return Some number when passed a record with string keys and number values and a key string - Test 3', () => {
            const result = ObjectHelpers.getValue(inputTest3.obj, inputTest3.key);
            expect(result).toEqual(expectedTest3);
        });
        it('should return Nothing when passed a record with number keys and string values and a non key number - Test 4', () => {
            const result = ObjectHelpers.getValue(inputTest4.obj, inputTest4.key);
            expect(result).toEqual(expectedTest4);
        });
        it('should return Nothing when passed a record with number keys and string values and a non key string - Test 5', () => {
            const result = ObjectHelpers.getValue(inputTest5.obj, inputTest5.key);
            expect(result).toEqual(expectedTest5);
        });
        it('should return Some string when passed a record with number keys and string values and a key number - Test 6', () => {
            const result = ObjectHelpers.getValue(inputTest6.obj, inputTest6.key);
            expect(result).toEqual(expectedTest6);
        });
    });
});
