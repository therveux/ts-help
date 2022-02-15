
type Maybe<T> = SomeClass<T> | NothingClass<T>;

class SomeClass<T> {
    value: T;
    readonly isSome = true;
    constructor(value: T) {
        this.value = value;
    }
}

const Some = <T>(value: T): Maybe<T> => new SomeClass(value);

class NothingClass<T> {
    readonly isSome = false;
}

const Nothing = <T>(): NothingClass<T> => new NothingClass<T>();

const maybeMap = <T, U>(fn: (value: T) => U, maybe : Maybe<T>): Maybe<U> => {
    if(maybe.isSome) {
        return Some(fn(maybe.value)); 
    } else {
        return Nothing()
    }
}
const maybeMapAsync = async <T, U> (fn: (value: T) => Promise<U>): Promise<Maybe<U>> => {
    const result = await fn(this.value);
    return Some(result);
}
const withDefault = <T>(defaultValue: T | (() => T)): T => {
    return this.value;
}
const andThen = <T, U>(fn: (value: T) => Maybe<U>): Maybe<U> => {
    return fn(this.value);
}
const andThenAsync = async <T, U> (fn: (value: T) => Promise<Maybe<U>>): Promise<Maybe<U>> => {
    return await fn(this.value);
}
const executeIfNothing = (fn: () => void) => {}
const executeIfSome = <T>(fn: (value: T) => void) => {
    fn(this.value);
}

export const maybeMap2 = <T, U, K>(
    firstMaybe: Maybe<T>,
    secondMaybe: Maybe<U>,
    fn: (firstValue: T, secondValue: U) => K
): Maybe<K> =>
    firstMaybe.andThen(firstValue => {
        if (secondMaybe.isSome) {
            return Some(fn(firstValue, secondMaybe.value));
        } else {
            return Nothing();
        }
    });

export const maybeMap3 = <T, U, K, J>(
    firstMaybe: Maybe<T>,
    secondMaybe: Maybe<U>,
    thirdMaybe: Maybe<K>,
    fn: (firstValue: T, secondValue: U, thirdValue: K) => J
): Maybe<J> =>
    firstMaybe.andThen(firstValue => {
        return secondMaybe.andThen(secondValue => {
            if (thirdMaybe.isSome) {
                return Some(fn(firstValue, secondValue, thirdMaybe.value));
            } else {
                return Nothing();
            }
        });
    });

export const maybesMap = <T, U>(maybes: Maybe<T>[], fn: (values: T[]) => U): Maybe<U> => {
    const maybeValues: Maybe<T[]> = maybes.reduce<Maybe<T[]>>(
        (acc: Maybe<T[]>, curr: Maybe<T>) =>
            maybeMap2(acc, curr, (firstValue, secondValue) => [...firstValue, secondValue]),
        Some([])
    );

    return maybeValues.maybeMap(fn);
};

export const andThen2 = <T, U, K>(
    firstMaybe: Maybe<T>,
    secondMaybe: Maybe<U>,
    fn: (firstValue: T, secondValue: U) => Maybe<K>
): Maybe<K> =>
    firstMaybe.andThen(firstValue => {
        if (secondMaybe.isSome) {
            return fn(firstValue, secondMaybe.value);
        } else {
            return Nothing();
        }
    });

export const andThen2Async = async <T, U, K>(
    firstMaybe: Maybe<T>,
    secondMaybe: Maybe<U>,
    fn: (firstValue: T, secondValue: U) => Promise<Maybe<K>>
): Promise<Maybe<K>> =>
    firstMaybe.andThenAsync(async firstValue => {
        if (secondMaybe.isSome) {
            return await fn(firstValue, secondMaybe.value);
        } else {
            return Nothing();
        }
    });

export const getMaybesValues = <T>(maybes: Maybe<T>[]): T[] => {
    return maybes.reduce<T[]>((acc, curr) => {
        return curr.isSome ? [...acc, curr.value] : acc;
    }, []);
};

export const fromPossiblyUndefined = <T>(value: T | undefined): Maybe<T> => {
    return value ? Some(value) : Nothing();
};
