## Title Case Words

## Rules

You can (and should) use built in methods

## Challenge

Write a function that takes a sentence string and returns a new string that is the same sentence, but with the first letter of each word capitalized, and the rest lowercase

```js
function titleCase(sentence) {
  const words = sentence.split(' ');
  const splitWords = words.split('');
  const upperCase = splitWords[0].toUpperCase;
}
```

> **You can assume valid inputs=**

## Test Cases

| Input                  | Output                 |
| ---------------------- | ---------------------- |
| `'alchemy ROCKS goLD'` | `'Alchemy Rocks Gold'` |
