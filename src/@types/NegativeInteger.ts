export type NegativeInteger<T> = number extends T
    ? never
    : T extends number
    ? `${T}` extends `-${string}`
        ? `${T}` extends `${string}.${string}`
            ? 'Number must be an integer'
            : T
        : 'Number must be negative'
    : 'Value must be a number';
