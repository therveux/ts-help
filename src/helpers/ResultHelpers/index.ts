export type Result<T> = OkType<T> | ErrType;

type OkType<T> = {
    isOk: true;
    value: T;
};

export const Ok = <T>(value: T): OkType<T> => {
    return {
        isOk: true,
        value
    };
};

type ErrType = {
    isOk: false;
    error: string;
};

export const Err = (error: string): ErrType => {
    return { isOk: false, error };
};

const resultMap = <T, U>(result: Result<T>, fn: (value: T) => U): Result<U> => {
    if (result.isOk) {
        return Ok(fn(result.value));
    } else {
        return Err(result.error);
    }
};

const resultMapAsync = async <T, U>(result: Result<T>, fn: (value: T) => Promise<U>): Promise<Result<U>> => {
    if (result.isOk) {
        const r = await fn(result.value);
        return Ok(r);
    } else {
        return Err(result.error);
    }
};

const withDefault = <T>(result: Result<T>, defaultValue: T | (() => T)): T => {
    if (result.isOk) {
        return result.value;
    } else if (defaultValue instanceof Function) {
        return defaultValue();
    } else {
        return defaultValue;
    }
};

const andThen = <T, U>(result: Result<T>, fn: (value: T) => Result<U>): Result<U> => {
    if (result.isOk) {
        return fn(result.value);
    } else {
        return Err(result.error);
    }
};

const andThenAsync = async <T, U>(result: Result<T>, fn: (value: T) => Promise<Result<U>>): Promise<Result<U>> => {
    if (result.isOk) {
        return await fn(result.value);
    } else {
        return Err(result.error);
    }
};

const executeIfErr = <T>(result: Result<T>, fn: (error: string) => void) => {
    if (!result.isOk) {
        fn(result.error);
    }
};

const executeIfOk = <T>(result: Result<T>, fn: (value: T) => void) => {
    if (result.isOk) {
        fn(result.value);
    }
};

const resultMap2 = <T, U, K>(
    firstResult: Result<T>,
    secondResult: Result<U>,
    fn: (firstValue: T, secondValue: U) => K
): Result<K> =>
    andThen(firstResult, firstValue => {
        if (secondResult.isOk) {
            return Ok(fn(firstValue, secondResult.value));
        } else {
            return Err(secondResult.error);
        }
    });

const resultMap3 = <T, U, K, J>(
    firstResult: Result<T>,
    secondResult: Result<U>,
    thirdResult: Result<K>,
    fn: (firstValue: T, secondValue: U, thirdValue: K) => J
): Result<J> =>
    andThen(firstResult, firstValue => {
        return andThen(secondResult, secondValue => {
            if (thirdResult.isOk) {
                return Ok(fn(firstValue, secondValue, thirdResult.value));
            } else {
                return Err(thirdResult.error);
            }
        });
    });

const resultsMap = <T, U>(results: Result<T>[], fn: (values: T[]) => U): Result<U> => {
    const resultValues: Result<T[]> = results.reduce<Result<T[]>>(
        (acc: Result<T[]>, curr: Result<T>) =>
            resultMap2(acc, curr, (firstValue, secondValue) => [...firstValue, secondValue]),
        Ok([])
    );

    return resultMap(resultValues, fn);
};

const andThen2 = <T, U, K>(
    firstResult: Result<T>,
    secondResult: Result<U>,
    fn: (firstValue: T, secondValue: U) => Result<K>
): Result<K> =>
    andThen(firstResult, firstValue => {
        if (secondResult.isOk) {
            return fn(firstValue, secondResult.value);
        } else {
            return Err(secondResult.error);
        }
    });

const andThen2Async = async <T, U, K>(
    firstResult: Result<T>,
    secondResult: Result<U>,
    fn: (firstValue: T, secondValue: U) => Promise<Result<K>>
): Promise<Result<K>> =>
    andThenAsync(firstResult, async firstValue => {
        if (secondResult.isOk) {
            return await fn(firstValue, secondResult.value);
        } else {
            return Err(secondResult.error);
        }
    });

const getResultsValues = <T>(results: Result<T>[]): T[] => {
    return results.reduce<T[]>((acc, curr) => {
        return curr.isOk ? [...acc, curr.value] : acc;
    }, []);
};

export const ResultHelpers = {
    resultMap,
    resultMapAsync,
    withDefault,
    andThen,
    andThenAsync,
    executeIfErr,
    executeIfOk,
    resultMap2,
    resultMap3,
    resultsMap,
    andThen2,
    andThen2Async,
    getResultsValues
};
