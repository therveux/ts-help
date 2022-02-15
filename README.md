# ts-help

ts-help is a Typescript library to handle and group together helpers and coding principles

## Contents

- [Installation](#installation)
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
  ...
  "typeRoots": ["./node_modules/@types", "./node_modules/ts-help/@types"]
}
```

## Usage

You can import any available helper and use it as simple as this

```ts
import { ArrayHelpers } from 'ts-help'

const myArray = [1,2,3]

console.log(ArrayHelpers.isEmpty(myArray)) // false

```

## Contributors

<a href="https://github.com/Hurobaki/ts-help/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Hurobaki/ts-help" />
</a>

<!-- Made with [contrib.rocks](https://contrib.rocks). -->
