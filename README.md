# ts-help

ts-help is a Typescript library to handle and group together helpers and coding principles

## Contents

- [Installation](#installation)
- [Extra types](#extra-types)
- [Usage](#usage)
- [Features list](#features-list)
    - [Primitive types](#primitive-types)
    - [Algebraic data types](#algebraic-data-types)
    - [Compiler helper](#compiler-helper)
- [Contributors](#contributors)

## Installation

```
npm install ts-help

OR

yarn add ts-help
```

### Extra types

Some custom types have been added to the library. You can add them to your `tsconfig.json` in order to access them like built-in types way

```json
{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./node_modules/ts-help/@types"]
  }
}
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

### Compiler helper

- [CompilerWarnerHelpers](https://github.com/Hurobaki/ts-help/tree/develop/src/helpers/CompilerWarnerHelpers)

## Contributors

<a href="https://github.com/Hurobaki/ts-help/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Hurobaki/ts-help" />
</a>

<!-- Made with [contrib.rocks](https://contrib.rocks). -->
