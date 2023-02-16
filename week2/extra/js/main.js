function showDate()
{
  let date = new Date();
  let month = date.toLocaleString('nl-NL', { month: 'long' });
  console.log(`${date.getDate()} ${month} ${date.getFullYear()}`);
}

function reverseString(text)
{
  console.log(text.split('').reverse().join(''));
}

function isTheAnswerToLife(numbers)
{
  if (numbers.includes(42)) {
    return true;
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum === 42;
}

function daysUntilMyBirthday(date)
{
  let today = new Date();
  let birthday = new Date(date);

  let timeDifference = birthday - today;
  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

showDate(); //14 februari 2023
reverseString('hello'); //olleh
reverseString('antwan'); //nawtna
console.log(isTheAnswerToLife([3, 15, 23, 1])); //true
console.log(isTheAnswerToLife([3, 15, 23, 2])); //false
console.log(isTheAnswerToLife([3, 15, 23, 1000, 42])); //true
console.log(daysUntilMyBirthday('2023-05-10')); //85
