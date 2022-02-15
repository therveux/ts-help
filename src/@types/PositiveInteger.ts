export type PositiveInteger<T> = number extends T
    ? never
    : T extends number
    ? `${T}` extends `-${string}`
        ? 'Number must be positive'
        : `${T}` extends `${string}.${string}`
        ? 'Number must be an integer'
        : T
    : 'Value must be a number';
