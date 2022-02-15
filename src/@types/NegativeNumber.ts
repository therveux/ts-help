export type NegativeNumber<T> = number extends T
    ? never
    : T extends number
    ? `${T}` extends `-${string}`
        ? T
        : 'Number must be negative'
    : 'Value must be a number';
