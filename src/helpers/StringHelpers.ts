//TODO: TESTS !

const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
};

const capitalizeLastNameFirstLetters = (string: string): string => {
    return string.split(' ').map(capitalizeFirstLetter).join(' ');
};

const removeSpaces = (stringValue: string): string => {
    const regexRemoveSpace = /\s+/g;
    return stringValue.replace(regexRemoveSpace, '');
};

const isBlank = (string: string): boolean => {
    return !removeSpaces(string);
};

const isEmpty = (string: string): boolean => {
    return !string || string.length === 0;
};

export const StringHelpers = {
    capitalizeFirstLetter,
    capitalizeLastNameFirstLetters,
    isEmpty,
    isBlank,
    removeSpaces
};
