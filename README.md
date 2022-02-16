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

- [ArrayHelpers](https://github.com/Hurobaki/ts-help/tree/main/src/helpers/ArrayHelpers)
- [NumberHelpers](https://github.com/Hurobaki/ts-help/tree/main/src/helpers/NumberHelpers)
- [ObjectHelpers](https://github.com/Hurobaki/ts-help/tree/main/src/helpers/ObjectHelpers)
- [StringHelpers](https://github.com/Hurobaki/ts-help/tree/main/src/helpers/StringHelpers)

### Algebraic data types

- [MaybeHelpers](https://github.com/Hurobaki/ts-help/tree/main/src/helpers/MaybeHelpers)
- [ResultHelpers](https://github.com/Hurobaki/ts-help/tree/main/src/helpers/ResultHelpers)

### Compiler helper

- [CompilerWarnerHelpers](https://github.com/Hurobaki/ts-help/tree/main/src/helpers/CompilerWarnerHelpers)

### Custom types

- [NegativeInteger](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [NegativeNonNullInteger](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [NegativeNonNullNumber](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [NegativeNumber](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [NonEmptyArray](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [NonNullInteger](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [NonNullNumber](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [Nullable](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [Optional](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [PositiveInteger](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [PositiveNonNullInteger](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [PositiveNonNullNumber](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [PositiveNumber](https://github.com/Hurobaki/ts-help/tree/main/src/@types)
- [Tuple](https://github.com/Hurobaki/ts-help/tree/main/src/@types)

## Contributors

<a href="https://github.com/Hurobaki/ts-help/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Hurobaki/ts-help" />
</a>

<!-- Made with [contrib.rocks](https://contrib.rocks). -->
