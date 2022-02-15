export type NegativeNonNullInteger<T> = number extends T
    ? never
    : T extends number
    ? `${T}` extends `-${string}`
        ? `${T}` extends `${string}.${string}`
            ? 'Number must be an integer'
            : `${T}` extends `0${string}`
            ? 'Number must be non null'
            : T
        : 'Number must be negative'
    : 'Value must be a number';
