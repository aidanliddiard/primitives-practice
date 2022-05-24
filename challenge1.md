## Reverse Words

## Rules

You can (and should) use built in methods

## Challenge

Write a function that takes a sentence string and returns a new string that is the same sentence, but with each word reversed (backwards). The order of words does not change.

**HINT:** Maybe arrays already have a way to do this?

```js
const sentence = 'hello world!';
function reverseWords(sentence) {
  const words = sentence.split(' ');
  // console.log(words);
  const reverseWords = words.reverse();
  const result = reverseWords.join(' ');
  return result;
}
```

> **You can assume valid inputs and no punctuation**

## Test Cases

| Input                  | Output                 |
| ---------------------- | ---------------------- |
| `'alchemy rocks gold'` | `'ymehcla skcor dlog'` |
