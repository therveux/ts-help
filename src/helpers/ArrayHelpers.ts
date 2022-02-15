import { Maybe, Nothing, Some } from './MaybeHelpers';
import { NonEmptyArray, NonEmptyArrayHelpers } from './NonEmptyArrayHelpers';

export enum SORT_TYPE {
    ASC,
    DESC
}

const sortObjectsByValue = <K extends keyof T, T extends Record<K, string | number>>(
    key: K,
    array: T[],
    sort: SORT_TYPE = SORT_TYPE.ASC
): T[] => {
    return array.sort((a, b) => {
        if (sort === SORT_TYPE.ASC) {
            return a[key] < b[key] ? -1 : 1;
        } else {
            return a[key] < b[key] ? 1 : -1;
        }
    });
};

const chunk = <T>(array: T[], size: number): Maybe<T[][]> => {
    if (size <= 0) {
        return Nothing;
    } else {
        const numberOfArrays = Math.ceil(array.length / size);
        const chunkedArray: T[][] = [];

        for (let i = 0; i < numberOfArrays; i++) {
            chunkedArray.push(array.splice(0, size));
        }

        return Some(chunkedArray);
    }
};

const getValue = <T>(array: T[], index: number): Maybe<T> => (!!array[index] ? Some(array[index]) : Nothing);

const flatten = <T>(array: T[][]): T[] => array.reduce((acc, curr) => [...acc, ...curr], []);

const dictionaryFromArrayOfObjects = <T extends Record<K, string | number>, K extends keyof T>(
    arrayOfObjects: T[],
    key: K,
    otherKeys: K[] = [],
    separator = ','
): Record<string, T> =>
    arrayOfObjects.reduce<Record<string, T>>((acc, curr) => {
        const keyValues = [curr[key], ...otherKeys.map(key_ => curr[key_])];
        const finalKey = keyValues.join(separator);
        return { ...acc, [finalKey]: curr };
    }, {});

const find = <T>(array: T[], predicate: (item: T) => boolean): Maybe<T> => {
    const foundItem = array.find(predicate);
    return foundItem ? Some(foundItem) : Nothing;
};

const isEmpty = <T>(array: T[]): boolean => {
    return !(array.length > 0);
};

const filter = <T>(array: T[], predicate: (item: T) => boolean): Maybe<NonEmptyArray<T>> => {
    const filteredArray = array.filter(predicate);
    return NonEmptyArrayHelpers.fromArray(filteredArray);
};

const filterMap = <T, U>(array: T[], predicate: (item: T) => Maybe<U>): Maybe<NonEmptyArray<U>> =>
    array.reduce<Maybe<NonEmptyArray<U>>>((acc, curr) => {
        const maybeMappedItem = predicate(curr);
        return acc.isSome
            ? Some(maybeMappedItem.isSome ? acc.value.push(maybeMappedItem.value) : acc.value)
            : maybeMappedItem.isSome
            ? Some(NonEmptyArrayHelpers.build(maybeMappedItem.value, []))
            : Nothing;
    }, Nothing);

export const ArrayHelpers = {
    filter,
    filterMap,
    isEmpty,
    find,
    dictionaryFromArrayOfObjects,
    sortObjectsByValue,
    chunk,
    getValue,
    flatten
};
