# ts-help

ts-help is a Typescript library to handle and group together helpers and coding principles

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features list](#features-list)
    - [Primitive types](#primitive-types)
    - [Algebraic data types](#algebraic-data-types)
    - [Compiler helper](#compiler-helper)
    - [Custom types](#custom-types)
- [Contributors](#contributors)

## Installation

```
npm install ts-help

OR

yarn add ts-help
```

## Usage

You can import any available helper and use it as simple as this

```ts
import { ArrayHelpers } from 'ts-help'

const myArray = [1,2,3]

console.log(ArrayHelpers.isEmpty(myArray)) // false

```

## Features list

### Primitive types

- [ArrayHelpers](https://github.com/Hurobaki/ts-help/tree/develop/src/helpers/ArrayHelpers)
- [NumberHelpers](https://github.com/Hurobaki/ts-help/tree/develop/src/helpers/NumberHelpers)
- [ObjectHelpers](https://github.com/Hurobaki/ts-help/tree/develop/src/helpers/ObjectHelpers)
- [StringHelpers](https://github.com/Hurobaki/ts-help/tree/develop/src/helpers/StringHelpers)

### Algebraic data types

- [MaybeHelpers](https://github.com/Hurobaki/ts-help/tree/develop/src/helpers/MaybeHelpers)
- [ResultHelpers](https://github.com/Hurobaki/ts-help/tree/develop/src/helpers/ResultHelpers)

### Compiler helper

- [CompilerWarnerHelpers](https://github.com/Hurobaki/ts-help/tree/develop/src/helpers/CompilerWarnerHelpers)

### Custom types

- [NegativeInteger](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/NegativeInteger)
- [NegativeNonNullInteger](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/NegativeNonNullInteger)
- [NegativeNonNullNumber](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/NegativeNonNullNumber)
- [NegativeNumber](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/NegativeNumber)
- [NonEmptyArray](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/NonEmptyArray)
- [NonNullInteger](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/NonNullInteger)
- [NonNullNumber](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/NonNullNumber)
- [Nullable](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/Nullable)
- [Optional](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/Optional)
- [PositiveInteger](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/PositiveInteger)
- [PositiveNonNullInteger](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/PositiveNonNullInteger)
- [PositiveNonNullNumber](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/PositiveNonNullNumber)
- [PositiveNumber](https://github.com/Hurobaki/ts-help/tree/develop/src/@types/PositiveNumber)

## Contributors

<a href="https://github.com/Hurobaki/ts-help/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Hurobaki/ts-help" />
</a>

<!-- Made with [contrib.rocks](https://contrib.rocks). -->
