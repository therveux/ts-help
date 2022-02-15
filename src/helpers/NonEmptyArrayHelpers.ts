import { Maybe } from './MaybeHelpers';
import { ArrayHelpers } from './ArrayHelpers';

export class NonEmptyArray<T> {
    firstElement: T;
    otherElements: T[];
    constructor(firstElement: T, otherElements: T[]) {
        this.firstElement = firstElement;
        this.otherElements = otherElements;
    }
    map<U>(fn: (value: T, index: number, array: NonEmptyArray<T>) => U): NonEmptyArray<U> {
        return build(
            fn(this.firstElement, 0, this),
            this.otherElements.map((element, index) => fn(element, index + 1, this))
        );
    }
    filter(predicate: (value: T) => boolean): Maybe<NonEmptyArray<T>> {
        const array = this.toArray();
        const filteredArray = array.filter(predicate);
        return ArrayHelpers.getValue(filteredArray, 0).maybeMap(firstElement =>
            build(firstElement, filteredArray.slice(1, filteredArray.length))
        );
    }
    length(): number {
        return this.otherElements.length + 1;
    }
    find(predicate: (value: T) => boolean): Maybe<T> {
        const array = this.toArray();
        return ArrayHelpers.find(array, predicate);
    }
    reduce<U>(fn: (acc: U, curr: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
        const array = this.toArray();
        return array.reduce(fn, initialValue);
    }
    some(predicate: (value: T) => boolean): boolean {
        const array = this.toArray();
        return array.some(predicate);
    }
    every(predicate: (value: T) => boolean): boolean {
        const array = this.toArray();
        return array.every(predicate);
    }
    join(separator?: string): string {
        const array = this.toArray();
        return array.join(separator);
    }
    push(value: T): NonEmptyArray<T> {
        this.otherElements.push(value);
        return this;
    }
    toArray(): T[] {
        return [this.firstElement, ...this.otherElements];
    }
}

const build = <T>(firstElement: T, otherElements: T[]) => new NonEmptyArray(firstElement, otherElements);

const fromArray = <T>(elements: T[]): Maybe<NonEmptyArray<T>> => {
    return ArrayHelpers.getValue(elements, 0).maybeMap(firstElement =>
        build(firstElement, elements.slice(1, elements.length))
    );
};

const toArray = <T>(nonEmpty: NonEmptyArray<T>): T[] => {
    return [nonEmpty.firstElement, ...nonEmpty.otherElements];
};

export const NonEmptyArrayHelpers = {
    build,
    fromArray,
    toArray
};
