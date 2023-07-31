import { Maybe, MaybeHelpers } from '../MaybeHelpers';

type BasePipeParams<T, U> = [T, (firstParams: T) => U];

type SecondPipeParams<T, U, V> = [...BasePipeParams<T, U>, (secondParams: U) => V];

type ThirdPipeParams<T, U, V, W> = [...SecondPipeParams<T, U, V>, (thirdParams: V) => W];

type FourthPipeParams<T, U, V, W, X> = [...ThirdPipeParams<T, U, V, W>, (thirdParams: W) => X];

type FifthPipeParams<T, U, V, W, X, Y> = [...FourthPipeParams<T, U, V, W, X>, (thirdParams: X) => Y];

type SixthPipeParams<T, U, V, W, X, Y, Z> = [...FifthPipeParams<T, U, V, W, X, Y>, (thirdParams: Y) => Z];

const pipe = <T, U>(...props: BasePipeParams<T, U>): U => {
    return props[1](props[0]);
};

const pipe2 = <T, U, V>(...props: SecondPipeParams<T, U, V>): V => {
    return props[2](props[1](props[0]));
};

const pipe3 = <T, U, V, W>(...props: ThirdPipeParams<T, U, V, W>): W => {
    return props[3](props[2](props[1](props[0])));
};

const pipe4 = <T, U, V, W, X>(...props: FourthPipeParams<T, U, V, W, X>): X => {
    return props[4](props[3](props[2](props[1](props[0]))));
};

const pipe5 = <T, U, V, W, X, Y>(...props: FifthPipeParams<T, U, V, W, X, Y>): Y => {
    return props[5](props[4](props[3](props[2](props[1](props[0])))));
};

const pipe6 = <T, U, V, W, X, Y, Z>(...props: SixthPipeParams<T, U, V, W, X, Y, Z>): Z => {
    return props[6](props[5](props[4](props[3](props[2](props[1](props[0]))))));
};

const pipedFunction = <T, P extends Array<unknown>, U>(
    fn: (firstProp: T, ...props: P) => U,
    ...props: P
): ((prop: T) => U) => {
    return (prop: T) => fn(prop, ...props);
};

const pipedMaybeMap = <T, U>(fn: (val: T) => U): ((_: Maybe<T>) => Maybe<U>) => {
    return pipedFunction<Maybe<T>, [(val: T) => U], Maybe<U>>(MaybeHelpers.maybeMap, fn);
};

const pipedMaybeMapAsync = <T, U>(fn: (val: T) => Promise<U>): ((_: Maybe<T>) => Promise<Maybe<U>>) => {
    return pipedFunction<Maybe<T>, [(val: T) => Promise<U>], Promise<Maybe<U>>>(MaybeHelpers.maybeMapAsync, fn);
};

const pipedMaybeAndThen = <T, U>(fn: (val: T) => Maybe<U>): ((_: Maybe<T>) => Maybe<U>) => {
    return pipedFunction<Maybe<T>, [(val: T) => Maybe<U>], Maybe<U>>(MaybeHelpers.andThen, fn);
};

const pipedMaybeAndThenAsync = <T, U>(fn: (val: T) => Promise<Maybe<U>>): ((_: Maybe<T>) => Promise<Maybe<U>>) => {
    return pipedFunction<Maybe<T>, [(val: T) => Promise<Maybe<U>>], Promise<Maybe<U>>>(MaybeHelpers.andThenAsync, fn);
};

const pipedMaybeWithDefault = <T>(defaultValue: T | (() => T)): ((_: Maybe<T>) => T) => {
    return pipedFunction<Maybe<T>, [T | (() => T)], T>(MaybeHelpers.withDefault, defaultValue);
};

const pipedMaybeFromPossiblyUndefined = <T>(): ((_: T | undefined) => Maybe<T>) => {
    return pipedFunction<T | undefined, [], Maybe<T>>(MaybeHelpers.fromPossiblyUndefined);
};

// const numbers: number[] = [1, 2, 3, 4, 5];
//
// const test : NonEmptyArray<string> = pipe3(
//     ArrayHelpers.filter(numbers, number => number % 2 === 0),
//     pipedMaybeMap(numbers => numbers.map(number => number.toString())),
//     pipedMaybeAndThen(stringNumbers => ArrayHelpers.filter(stringNumbers, stringNumber => stringNumber !== '3')),
//     pipedMaybeWithDefault<NonEmptyArray<string>>( ['defaultValue'])
// );

export const PipeHelpers = {
    pipe,
    pipe2,
    pipe3,
    pipe4,
    pipe5,
    pipe6,
    pipedFunction,
    pipedMaybeMap,
    pipedMaybeMapAsync,
    pipedMaybeAndThen,
    pipedMaybeAndThenAsync,
    pipedMaybeWithDefault,
    pipedMaybeFromPossiblyUndefined
};
