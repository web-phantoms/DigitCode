# DigitCode

A very useful pure javascript library to creating digit code inputs.

[Demo](https://web-phantoms.github.io/DigitCode/)

## Include

```js
import DigitCode from './DigitCode.js'
```

```html
<script src="./DigitCode.js"></script>
```

## Usage

```html
<div id="demo"></div>
```

```js
DigitCode({
   id: "#demo",
   type: "number",
   count: 6,
 }, (value) => {
     console.log(value);
 });
```

## Parameters

| Name            | Type     | Default      | Description                                               |
| :-------------- | :------  | :----------- | :-------------------------------------------------------- |
| id              | text     | "#DigitCode" | id of Parent Element                                      |
| count           | number   | 4            | Count of the fields.                                      |
| type            | text     | "text"       | Set to `password` to use the inputs with `type="password` or Set to `number` to use the inputs with `type="number" |

## Callback

| Name     | Description            |
| :------  | :--------------------- |
| function | Returns current value. |


