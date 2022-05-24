// testing functions

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

reverseWords('hello world');

function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

titleCase('alCHemy ROcks goLd!');

function oddishOrEvenish(number) {
  const sum = number
    .toString()
    .split('')
    .reduce((total, n) => {
      total += Number(n);
      return total;
    }, 0);
  return sum % 2 === 0 ? 'Evenish' : 'Oddish';

  // const nums = number.split('');
  // const inital = 0;
  // const sum = nums.reduce(
  //   (previous, current) => previous + current, inital);
  // let res = '';
  // {(sum % 2 === 0) ? (res = 'Evenish') : (res = 'Oddish')}
  // return res;
}

oddishOrEvenish(`41`);
oddishOrEvenish(`22`);
oddishOrEvenish(`121`);

function at(arr, index) {
  return index >= 0 ? arr[index] : arr[arr.length + index];
}

at(['a', 'b', 'c'], 1);
at(['a', 'b', 'c'], -1);

function fizzBuzz(number) {
  let array = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    } else if (i % 3 === 0) {
      array.push('Fizz');
    } else if (i % 5 === 0) {
      array.push('Buzz');
    } else {
      array.push(i);
    }
  }
  return array;
}

fizzBuzz(16);

function anagrams(wordOne, wordTwo) {
  const word1 = wordOne.split('').sort().join('');
  const word2 = wordTwo.split('').sort().join('');
  return word1 === word2 ? 'true' : 'false';
}

anagrams('superintended', 'unpredestined');
anagrams('Aidan', 'Nadia');
anagrams('unbrella', 'calendar');
anagrams('stellla', 'letslal');
