export type PositiveNumber<T> = number extends T
    ? never
    : T extends number
    ? `${T}` extends `-${string}`
        ? 'Number must be positive'
        : T
    : 'Value must be a number';
