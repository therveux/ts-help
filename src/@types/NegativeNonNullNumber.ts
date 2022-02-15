export type NegativeNonNullNumber<T> = number extends T
    ? never
    : T extends number
    ? `${T}` extends `-${string}`
        ? `${T}` extends `0${string}`
            ? 'Number must be non null'
            : T
        : 'Number must be negative'
    : 'Value must be a number';
