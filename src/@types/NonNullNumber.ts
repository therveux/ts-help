export type NonNullNumber<T> = number extends T
    ? never
    : T extends number
    ? `${T}` extends `0${string}`
        ? T
        : 'Number must be non null'
    : 'Value must be a number';
