import { Maybe, Nothing, Some } from './MaybeHelpers';

const parseFloatMaybe = (stringValue: string): Maybe<number> => {
    const parsedFloat = parseFloat(stringValue.replace(',', '.'));
    return isNaN(parsedFloat) ? Nothing() : Some(parsedFloat);
};

const parseIntMaybe = (stringValue: string): Maybe<number> => {
    const parsedInt = parseInt(stringValue);
    return isNaN(parsedInt) ? Nothing() : Some(parsedInt);
};

export const NumberHelpers = {
    parseFloatMaybe,
    parseIntMaybe
};
