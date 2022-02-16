export type NonNullInteger<T> = number extends T
    ? never
    : T extends number
    ? `${T}` extends `0${string}`
        ? `${T}` extends `${string}.${string}`
            ? 'Number must be an integer'
            : T
        : 'Number must be non null'
    : 'Value must be a number';
