export type PositiveNonNullInteger<T> = number extends T
    ? never
    : T extends number
    ? `${T}` extends `-${string}`
        ? 'Number must be positive'
        : `${T}` extends `${string}.${string}`
        ? 'Number must be an integer'
        : `${T}` extends `0${string}`
        ? 'Number must be non null'
        : T
    : 'Value must be a number';
