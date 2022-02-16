export type Maybe<T> = SomeType<T> | NothingType;

type SomeType<T> = {
    value: T;
    isSome: true;
};

export const Some = <T>(value: T): SomeType<T> => {
    return {
        value,
        isSome: true
    };
};

type NothingType = {
    isSome: false;
};

export const Nothing: NothingType = {
    isSome: false
};

const maybeMap = <T, U>(maybe: Maybe<T>, fn: (value: T) => U): Maybe<U> => {
    if (maybe.isSome) {
        return Some(fn(maybe.value));
    } else {
        return Nothing;
    }
};

const maybeMapAsync = async <T, U>(maybe: Maybe<T>, fn: (value: T) => Promise<U>): Promise<Maybe<U>> => {
    if (maybe.isSome) {
        const result = await fn(maybe.value);
        return Some(result);
    } else {
        return Nothing;
    }
};

const withDefault = <T>(maybe: Maybe<T>, defaultValue: T | (() => T)): T => {
    if (maybe.isSome) {
        return maybe.value;
    } else if (defaultValue instanceof Function) {
        return defaultValue();
    } else {
        return defaultValue;
    }
};

const andThen = <T, U>(maybe: Maybe<T>, fn: (value: T) => Maybe<U>): Maybe<U> => {
    if (maybe.isSome) {
        return fn(maybe.value);
    } else {
        return Nothing;
    }
};

const andThenAsync = async <T, U>(maybe: Maybe<T>, fn: (value: T) => Promise<Maybe<U>>): Promise<Maybe<U>> => {
    if (maybe.isSome) {
        return await fn(maybe.value);
    } else {
        return Nothing;
    }
};

const executeIfNothing = <T>(maybe: Maybe<T>, fn: () => void) => {
    if (!maybe.isSome) {
        fn();
    }
};

const executeIfSome = <T>(maybe: Maybe<T>, fn: (value: T) => void) => {
    if (maybe.isSome) {
        fn(maybe.value);
    }
};

const maybeMap2 = <T, U, K>(
    firstMaybe: Maybe<T>,
    secondMaybe: Maybe<U>,
    fn: (firstValue: T, secondValue: U) => K
): Maybe<K> =>
    andThen(firstMaybe, firstValue => {
        if (secondMaybe.isSome) {
            return Some(fn(firstValue, secondMaybe.value));
        } else {
            return Nothing;
        }
    });

const maybeMap3 = <T, U, K, J>(
    firstMaybe: Maybe<T>,
    secondMaybe: Maybe<U>,
    thirdMaybe: Maybe<K>,
    fn: (firstValue: T, secondValue: U, thirdValue: K) => J
): Maybe<J> =>
    andThen(firstMaybe, firstValue => {
        return andThen(secondMaybe, secondValue => {
            if (thirdMaybe.isSome) {
                return Some(fn(firstValue, secondValue, thirdMaybe.value));
            } else {
                return Nothing;
            }
        });
    });

const maybesMap = <T, U>(maybes: Maybe<T>[], fn: (values: T[]) => U): Maybe<U> => {
    const maybeValues: Maybe<T[]> = maybes.reduce<Maybe<T[]>>(
        (acc: Maybe<T[]>, curr: Maybe<T>) =>
            maybeMap2(acc, curr, (firstValue, secondValue) => [...firstValue, secondValue]),
        Some([])
    );

    return maybeMap(maybeValues, fn);
};

const andThen2 = <T, U, K>(
    firstMaybe: Maybe<T>,
    secondMaybe: Maybe<U>,
    fn: (firstValue: T, secondValue: U) => Maybe<K>
): Maybe<K> =>
    andThen(firstMaybe, firstValue => {
        if (secondMaybe.isSome) {
            return fn(firstValue, secondMaybe.value);
        } else {
            return Nothing;
        }
    });

const andThen2Async = async <T, U, K>(
    firstMaybe: Maybe<T>,
    secondMaybe: Maybe<U>,
    fn: (firstValue: T, secondValue: U) => Promise<Maybe<K>>
): Promise<Maybe<K>> =>
    andThenAsync(firstMaybe, async firstValue => {
        if (secondMaybe.isSome) {
            return await fn(firstValue, secondMaybe.value);
        } else {
            return Nothing;
        }
    });

const getMaybesValues = <T>(maybes: Maybe<T>[]): T[] => {
    return maybes.reduce<T[]>((acc, curr) => {
        return curr.isSome ? [...acc, curr.value] : acc;
    }, []);
};

const fromPossiblyUndefined = <T>(value: T | undefined): Maybe<T> => {
    return value ? Some(value) : Nothing;
};

export const MaybeHelpers = {
    maybeMap,
    maybeMapAsync,
    withDefault,
    andThen,
    andThenAsync,
    executeIfNothing,
    executeIfSome,
    maybeMap2,
    maybeMap3,
    maybesMap,
    andThen2,
    andThen2Async,
    getMaybesValues,
    fromPossiblyUndefined
};
