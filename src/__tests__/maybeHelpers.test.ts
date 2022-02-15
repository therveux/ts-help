import { MaybeHelpers, Nothing, Some } from '../helpers/MaybeHelpers';
import { NumberHelpers } from '../helpers/NumberHelpers';

/* ############### Exploitable data ############### */

const nothingDefaultValue = 4577;

const someNumber = Some(1972);

const nothingNumber = Nothing;

const someStringNumber = Some('12345');

const someString = Some('whatever');

const nothingString = Nothing;

/* ############### Test 1 ############### */

const inputTest1 = nothingDefaultValue;

const expectedTest1 = 1972;

/* ############### Test 2 ############### */

const inputTest2 = nothingDefaultValue;

const expectedTest2 = nothingDefaultValue;

/* ############### Test 3 ############### */

const inputTest3 = (numberValue: number) => numberValue + 1;

const expectedTest3 = nothingDefaultValue;

/* ############### Test 4 ############### */

const inputTest4 = (numberValue: number) => numberValue + 1;

const expectedTest4 = 1973;

/* ############### Test 5 ############### */

const inputTest5 = NumberHelpers.parseIntMaybe;

const expectedTest5 = nothingDefaultValue;

/* ############### Test 6 ############### */

const inputTest6 = NumberHelpers.parseIntMaybe;

const expectedTest6 = 12345;

/* ############### Test 7 ############### */

const inputTest7 = NumberHelpers.parseIntMaybe;

const expectedTest7 = nothingDefaultValue;

/* ############### Test 8 ############### */

const expectedTest8 = 'updated';

/* ############### Test 9 ############### */

const expectedTest9 = 'initiated';

/* ############### Test 10 ############### */

const expectedTest10 = 'initiated';

/* ############### Test 11 ############### */

const expectedTest11 = 'updated';

/* ############### Test 12 ############### */

const inputTest12 = async (numberValue: number) => numberValue + 1;

const expectedTest12 = nothingDefaultValue;

/* ############### Test 13 ############### */

const inputTest13 = async (numberValue: number) => numberValue + 1;

const expectedTest13 = 1973;

/* ############### Test 14 ############### */

const inputTest14 = async (stringValue: string) => NumberHelpers.parseIntMaybe(stringValue);

const expectedTest14 = nothingDefaultValue;

/* ############### Test 15 ############### */

const inputTest15 = async (stringValue: string) => NumberHelpers.parseIntMaybe(stringValue);

const expectedTest15 = 12345;

/* ############### Test 16 ############### */

const inputTest16 = async (stringValue: string) => NumberHelpers.parseIntMaybe(stringValue);

const expectedTest16 = nothingDefaultValue;

/* ############### Test 17 ############### */

const inputTest17 = {
    firstMaybe: nothingNumber,
    secondMaybe: nothingNumber,
    mapFunction: (number1: number, number2: number) => number1 + number2
};

const expectedTest17 = nothingDefaultValue;

/* ############### Test 18 ############### */

const inputTest18 = {
    firstMaybe: someNumber,
    secondMaybe: nothingNumber,
    mapFunction: (number1: number, number2: number) => number1 + number2
};

const expectedTest18 = nothingDefaultValue;

/* ############### Test 19 ############### */

const inputTest19 = {
    firstMaybe: nothingNumber,
    secondMaybe: someNumber,
    mapFunction: (number1: number, number2: number) => number1 + number2
};

const expectedTest19 = nothingDefaultValue;

/* ############### Test 20 ############### */

const inputTest20 = {
    firstMaybe: someNumber,
    secondMaybe: someNumber,
    mapFunction: (number1: number, number2: number) => number1 + number2
};

const expectedTest20 = 3944;

/* ############### Test 21 ############### */

const inputTest21 = {
    firstMaybe: nothingNumber,
    secondMaybe: nothingNumber,
    thirdMaybe: nothingNumber,
    mapFunction: (number1: number, number2: number, number3: number) => number1 + number2 + number3
};

const expectedTest21 = nothingDefaultValue;

/* ############### Test 22 ############### */

const inputTest22 = {
    firstMaybe: someNumber,
    secondMaybe: nothingNumber,
    thirdMaybe: nothingNumber,
    mapFunction: (number1: number, number2: number, number3: number) => number1 + number2 + number3
};

const expectedTest22 = nothingDefaultValue;

/* ############### Test 23 ############### */

const inputTest23 = {
    firstMaybe: nothingNumber,
    secondMaybe: someNumber,
    thirdMaybe: nothingNumber,
    mapFunction: (number1: number, number2: number, number3: number) => number1 + number2 + number3
};

const expectedTest23 = nothingDefaultValue;

/* ############### Test 24 ############### */

const inputTest24 = {
    firstMaybe: someNumber,
    secondMaybe: someNumber,
    thirdMaybe: nothingNumber,
    mapFunction: (number1: number, number2: number, number3: number) => number1 + number2 + number3
};

const expectedTest24 = nothingDefaultValue;

/* ############### Test 25 ############### */

const inputTest25 = {
    firstMaybe: nothingNumber,
    secondMaybe: nothingNumber,
    thirdMaybe: someNumber,
    mapFunction: (number1: number, number2: number, number3: number) => number1 + number2 + number3
};

const expectedTest25 = nothingDefaultValue;

/* ############### Test 26 ############### */

const inputTest26 = {
    firstMaybe: someNumber,
    secondMaybe: nothingNumber,
    thirdMaybe: someNumber,
    mapFunction: (number1: number, number2: number, number3: number) => number1 + number2 + number3
};

const expectedTest26 = nothingDefaultValue;

/* ############### Test 27 ############### */

const inputTest27 = {
    firstMaybe: nothingNumber,
    secondMaybe: someNumber,
    thirdMaybe: someNumber,
    mapFunction: (number1: number, number2: number, number3: number) => number1 + number2 + number3
};

const expectedTest27 = nothingDefaultValue;

/* ############### Test 28 ############### */

const inputTest28 = {
    firstMaybe: someNumber,
    secondMaybe: someNumber,
    thirdMaybe: someNumber,
    mapFunction: (number1: number, number2: number, number3: number) => number1 + number2 + number3
};

const expectedTest28 = 5916;

/* ############### Test 29 ############### */

const inputTest29 = {
    maybes: [nothingNumber, nothingNumber, nothingNumber],
    mapFunction: (numbers: number[]) => numbers.reduce((acc, curr) => acc + curr, 0)
};

const expectedTest29 = nothingDefaultValue;

/* ############### Test 30 ############### */

const inputTest30 = {
    maybes: [nothingNumber, someNumber, nothingNumber],
    mapFunction: (numbers: number[]) => numbers.reduce((acc, curr) => acc + curr, 0)
};

const expectedTest30 = nothingDefaultValue;

/* ############### Test 31 ############### */

const inputTest31 = {
    maybes: [someNumber, someNumber, someNumber],
    mapFunction: (numbers: number[]) => numbers.reduce((acc, curr) => acc + curr, 0)
};

const expectedTest31 = 5916;

/* ############### Test 32 ############### */

const inputTest32 = {
    firstMaybe: nothingString,
    secondMaybe: nothingNumber,
    mapFunction: (string: string, number: number) =>
        MaybeHelpers.maybeMap(NumberHelpers.parseIntMaybe(string), numberFromString => numberFromString + number)
};

const expectedTest32 = nothingDefaultValue;

/* ############### Test 33 ############### */

const inputTest33 = {
    firstMaybe: someString,
    secondMaybe: nothingNumber,
    mapFunction: (string: string, number: number) =>
        MaybeHelpers.maybeMap(NumberHelpers.parseIntMaybe(string), numberFromString => numberFromString + number)
};

const expectedTest33 = nothingDefaultValue;

/* ############### Test 34 ############### */

const inputTest34 = {
    firstMaybe: someStringNumber,
    secondMaybe: nothingNumber,
    mapFunction: (string: string, number: number) =>
        MaybeHelpers.maybeMap(NumberHelpers.parseIntMaybe(string), numberFromString => numberFromString + number)
};

const expectedTest34 = nothingDefaultValue;

/* ############### Test 35 ############### */

const inputTest35 = {
    firstMaybe: nothingString,
    secondMaybe: someNumber,
    mapFunction: (string: string, number: number) =>
        MaybeHelpers.maybeMap(NumberHelpers.parseIntMaybe(string), numberFromString => numberFromString + number)
};

const expectedTest35 = nothingDefaultValue;

/* ############### Test 36 ############### */

const inputTest36 = {
    firstMaybe: someString,
    secondMaybe: someNumber,
    mapFunction: (string: string, number: number) =>
        MaybeHelpers.maybeMap(NumberHelpers.parseIntMaybe(string), numberFromString => numberFromString + number)
};

const expectedTest36 = nothingDefaultValue;

/* ############### Test 37 ############### */

const inputTest37 = {
    firstMaybe: someStringNumber,
    secondMaybe: someNumber,
    mapFunction: (string: string, number: number) =>
        MaybeHelpers.maybeMap(NumberHelpers.parseIntMaybe(string), numberFromString => numberFromString + number)
};

const expectedTest37 = 14317;

/* ############### Test 38 ############### */

const inputTest38 = [nothingNumber, nothingNumber, nothingNumber];

const expectedTest38: number[] = [];

/* ############### Test 39 ############### */

const inputTest39 = [nothingNumber, someNumber, nothingNumber];

const expectedTest39 = [1972];

/* ############### Test 40 ############### */

const inputTest40 = [someNumber, someNumber, someNumber];

const expectedTest40 = [1972, 1972, 1972];

/* ############### Tests ############### */

describe('MaybeHelpers', () => {
    describe('withDefault', () => {
        it('should return 4577 when called on a Nothing and given 4577 - Test 1', () => {
            const result = MaybeHelpers.withDefault(someNumber, inputTest1);
            expect(result).toEqual(expectedTest1);
        });
        it('should return 1972 when called on a Some(1972) and given 4577 - Test 2', () => {
            const result = MaybeHelpers.withDefault(nothingNumber, inputTest2);
            expect(result).toEqual(expectedTest2);
        });
    });

    describe('maybeMap', () => {
        it('should return Nothing when called on a Nothing and given a function that adds 1 - Test 3', () => {
            const mappedMaybe = MaybeHelpers.maybeMap(nothingNumber, inputTest3);
            expect(MaybeHelpers.withDefault(mappedMaybe, nothingDefaultValue)).toEqual(expectedTest3);
        });
        it('should return Some(1973) when called on Some(1972) and given a function that adds 1 - Test 4', () => {
            const mappedMaybe = MaybeHelpers.maybeMap(someNumber, inputTest4);
            expect(MaybeHelpers.withDefault(mappedMaybe, nothingDefaultValue)).toEqual(expectedTest4);
        });
    });

    describe('maybeMapAsync', () => {
        it('should return Nothing when called on a Nothing and given a function that adds 1 - Test 12', () => {
            return MaybeHelpers.maybeMapAsync(nothingNumber, inputTest12).then(maybeNumber => {
                expect(MaybeHelpers.withDefault(maybeNumber, nothingDefaultValue)).toEqual(expectedTest12);
            });
        });
        it('should return Some(1973) when called on Some(1972) and given a function that adds 1 - Test 13', () => {
            return MaybeHelpers.maybeMapAsync(someNumber, inputTest13).then(maybeNumber => {
                expect(MaybeHelpers.withDefault(maybeNumber, nothingDefaultValue)).toEqual(expectedTest13);
            });
        });
    });

    describe('andThen', () => {
        it('should return Nothing when called on a Nothing and given a function that parses an Int - Test 5', () => {
            const maybeMappedAndThen = MaybeHelpers.andThen(nothingString, inputTest5);
            expect(MaybeHelpers.withDefault(maybeMappedAndThen, nothingDefaultValue)).toEqual(expectedTest5);
        });
        it('should return Some(12345) when called on a Some("12345") and given a function that parses an Int - Test 6', () => {
            const maybeMappedAndThen = MaybeHelpers.andThen(someStringNumber, inputTest6);
            expect(MaybeHelpers.withDefault(maybeMappedAndThen, nothingDefaultValue)).toEqual(expectedTest6);
        });
        it('should return Nothing when called on a Some("whatever") and given a function that parses an Int - Test 7', () => {
            const maybeMappedAndThen = MaybeHelpers.andThen(someString, inputTest7);
            expect(MaybeHelpers.withDefault(maybeMappedAndThen, nothingDefaultValue)).toEqual(expectedTest7);
        });
    });

    describe('andThenAsync', () => {
        it('should return Nothing when called on a Nothing and given a function that parses an Int - Test 14', () => {
            return MaybeHelpers.andThenAsync(nothingString, inputTest14).then(maybeValue => {
                expect(MaybeHelpers.withDefault(maybeValue, nothingDefaultValue)).toEqual(expectedTest14);
            });
        });
        it('should return Some(12345) when called on a Some("12345") and given a function that parses an Int - Test 15', () => {
            return MaybeHelpers.andThenAsync(someStringNumber, inputTest15).then(maybeValue => {
                expect(MaybeHelpers.withDefault(maybeValue, nothingDefaultValue)).toEqual(expectedTest15);
            });
        });
        it('should return Nothing when called on a Some("whatever") and given a function that parses an Int - Test 16', () => {
            return MaybeHelpers.andThenAsync(someString, inputTest16).then(maybeValue => {
                expect(MaybeHelpers.withDefault(maybeValue, nothingDefaultValue)).toEqual(expectedTest16);
            });
        });
    });

    describe('executeIfNothing', () => {
        it('should return "updated" when called on a Nothing and passed a function that sets a string let to "updated" - Test 8', () => {
            let temp = 'initiated';
            MaybeHelpers.executeIfNothing(nothingString, () => {
                temp = 'updated';
            });
            expect(temp).toEqual(expectedTest8);
        });
        it('should return "initiated" when called on a Some("whatever") and passed a function that sets a string let to "updated" - Test 9', () => {
            let temp = 'initiated';
            MaybeHelpers.executeIfNothing(someString, () => {
                temp = 'updated';
            });
            expect(temp).toEqual(expectedTest9);
        });
    });

    describe('executeIfSome', () => {
        it('should return "initiated" when called on a Nothing and passed a function that sets a string let to "updated" - Test 10', () => {
            let temp = 'initiated';
            MaybeHelpers.executeIfSome(nothingString, () => {
                temp = 'updated';
            });
            expect(temp).toEqual(expectedTest10);
        });
        it('should return "updated" when called on a Some("whatever") and passed a function that sets a string let to "updated" - Test 11', () => {
            let temp = 'initiated';
            MaybeHelpers.executeIfSome(someString, () => {
                temp = 'updated';
            });
            expect(temp).toEqual(expectedTest11);
        });
    });

    describe('maybeMap2', () => {
        it('should return Nothing when given Nothing, Nothing and an addition function - Test 17', () => {
            const maybeSum = MaybeHelpers.maybeMap2(
                inputTest17.firstMaybe,
                inputTest17.secondMaybe,
                inputTest17.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest17);
        });
        it('should return Nothing when given Some(1972), Nothing and an addition function - Test 18', () => {
            const maybeSum = MaybeHelpers.maybeMap2(
                inputTest18.firstMaybe,
                inputTest18.secondMaybe,
                inputTest18.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest18);
        });
        it('should return Nothing when given Nothing, Some(1972) and an addition function - Test 19', () => {
            const maybeSum = MaybeHelpers.maybeMap2(
                inputTest19.firstMaybe,
                inputTest19.secondMaybe,
                inputTest19.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest19);
        });
        it('should return Some(3944) when given Some(1972), Some(1972) and an addition function - Test 20', () => {
            const maybeSum = MaybeHelpers.maybeMap2(
                inputTest20.firstMaybe,
                inputTest20.secondMaybe,
                inputTest20.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest20);
        });
    });

    describe('maybeMap3', () => {
        it('should return Nothing when given Nothing, Nothing, Nothing and an addition function - Test 21', () => {
            const maybeSum = MaybeHelpers.maybeMap3(
                inputTest21.firstMaybe,
                inputTest21.secondMaybe,
                inputTest21.thirdMaybe,
                inputTest21.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest21);
        });
        it('should return Nothing when given Some(1972), Nothing, Nothing and an addition function - Test 22', () => {
            const maybeSum = MaybeHelpers.maybeMap3(
                inputTest22.firstMaybe,
                inputTest22.secondMaybe,
                inputTest22.thirdMaybe,
                inputTest22.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest22);
        });
        it('should return Nothing when given Nothing, Some(1972), Nothing and an addition function - Test 23', () => {
            const maybeSum = MaybeHelpers.maybeMap3(
                inputTest23.firstMaybe,
                inputTest23.secondMaybe,
                inputTest23.thirdMaybe,
                inputTest23.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest23);
        });
        it('should return Nothing when given Some(1972), Some(1972), Nothing and an addition function - Test 24', () => {
            const maybeSum = MaybeHelpers.maybeMap3(
                inputTest24.firstMaybe,
                inputTest24.secondMaybe,
                inputTest24.thirdMaybe,
                inputTest24.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest24);
        });
        it('should return Nothing when given Nothing, Nothing, Some(1972) and an addition function - Test 25', () => {
            const maybeSum = MaybeHelpers.maybeMap3(
                inputTest25.firstMaybe,
                inputTest25.secondMaybe,
                inputTest25.thirdMaybe,
                inputTest25.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest25);
        });
        it('should return Nothing when given Some(1972), Nothing, Some(1972) and an addition function - Test 26', () => {
            const maybeSum = MaybeHelpers.maybeMap3(
                inputTest26.firstMaybe,
                inputTest26.secondMaybe,
                inputTest26.thirdMaybe,
                inputTest26.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest26);
        });
        it('should return Nothing when given Nothing, Some(1972), Some(1972) and an addition function - Test 27', () => {
            const maybeSum = MaybeHelpers.maybeMap3(
                inputTest27.firstMaybe,
                inputTest27.secondMaybe,
                inputTest27.thirdMaybe,
                inputTest27.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest27);
        });
        it('should return Some(5916) when given Some(1972), Some(1972), Some(1972) and an addition function - Test 28', () => {
            const maybeSum = MaybeHelpers.maybeMap3(
                inputTest28.firstMaybe,
                inputTest28.secondMaybe,
                inputTest28.thirdMaybe,
                inputTest28.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest28);
        });
    });

    describe('maybesMap', () => {
        it('should return Nothing when given an array of Nothings and an addition function - Test 29', () => {
            const maybeSum = MaybeHelpers.maybesMap(inputTest29.maybes, inputTest29.mapFunction);
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest29);
        });
        it('should return Nothing when given an array of two Nothings and a Some(1972) and an addition function - Test 30', () => {
            const maybeSum = MaybeHelpers.maybesMap(inputTest30.maybes, inputTest30.mapFunction);
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest30);
        });
        it('should return Some(5916) when given an array of three Some(1972) and an addition function - Test 31', () => {
            const maybeSum = MaybeHelpers.maybesMap(inputTest31.maybes, inputTest31.mapFunction);
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest31);
        });
    });

    describe('andThen2', () => {
        it('should return Nothing when given Nothing, Nothing and an addition function - Test 32', () => {
            const maybeSum = MaybeHelpers.andThen2(
                inputTest32.firstMaybe,
                inputTest32.secondMaybe,
                inputTest32.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest32);
        });
        it('should return Nothing when given Some("whatever"), Nothing and an addition function - Test 33', () => {
            const maybeSum = MaybeHelpers.andThen2(
                inputTest33.firstMaybe,
                inputTest33.secondMaybe,
                inputTest33.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest33);
        });
        it('should return Nothing when given Some("12345"), Nothing and an addition function - Test 34', () => {
            const maybeSum = MaybeHelpers.andThen2(
                inputTest34.firstMaybe,
                inputTest34.secondMaybe,
                inputTest34.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest34);
        });
        it('should return Nothing when given Nothing, Some(1972) and an addition function - Test 35', () => {
            const maybeSum = MaybeHelpers.andThen2(
                inputTest35.firstMaybe,
                inputTest35.secondMaybe,
                inputTest35.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest35);
        });
        it('should return Nothing when given Some("whatever"), Some(1972) and an addition function - Test 36', () => {
            const maybeSum = MaybeHelpers.andThen2(
                inputTest36.firstMaybe,
                inputTest36.secondMaybe,
                inputTest36.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest36);
        });
        it('should return Some(14317) when given Some("12345"), Some(1972) and an addition function - Test 37', () => {
            const maybeSum = MaybeHelpers.andThen2(
                inputTest37.firstMaybe,
                inputTest37.secondMaybe,
                inputTest37.mapFunction
            );
            expect(MaybeHelpers.withDefault(maybeSum, nothingDefaultValue)).toEqual(expectedTest37);
        });
    });

    describe('getMaybesValues', () => {
        it('should return [] when given an array of Nothings - Test 38', () => {
            const result = MaybeHelpers.getMaybesValues(inputTest38);
            expect(result).toEqual(expectedTest38);
        });
        it('should return [1972] when given an array with two Nothings and a Some(1972) - Test 39', () => {
            const result = MaybeHelpers.getMaybesValues(inputTest39);
            expect(result).toEqual(expectedTest39);
        });
        it('should return [1972, 1972] when given an array with three Some(1972) - Test 40', () => {
            const result = MaybeHelpers.getMaybesValues(inputTest40);
            expect(result).toEqual(expectedTest40);
        });
    });
});
