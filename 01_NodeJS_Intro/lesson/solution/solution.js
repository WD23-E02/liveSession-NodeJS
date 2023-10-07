function parseNumberArgs(arg) {
  const number = parseFloat(arg);
  if (isNaN(number)) {
    console.log(
      `Sorry, the argument '${arg}' is not a number, please try again`
    );
    process.exit();
  }

  return number;
}

function sum(numArray) {
  return numArray.reduce((sum, n) => sum + n, 0);
}

function average(numArray) {
  return sum(numArray) / numArray.length;
}

function median(numArray) {

  // By default, sort will use an alphabetical sort. So:
  // [ 2, 3, 5, 8, 13] will be sorted as
  // [13, 2, 3, 5, 8 ]
  // To use an arithmetical sort, you must provide a
  // sort function as the argument to sort()
  const sorted = numArray.slice().sort((a, b) => a - b);


  const middle = sorted.length / 2; // this is a more accurate middle
  const floor = Math.floor(middle); // perform just one Math operation

  if (middle === floor) {
    // There are an even number of entries in numArray|sorted
    // floor contains the zero-indexed value of the entry
    // to the right of the middle
    return (sorted[floor - 1] + sorted[floor]) / 2;
  }

  // There are an odd number of entries in numArray|sorted
  // floor contains the zero-indexed index for the median value
  return sorted[floor];
}

const args = process.argv.slice(2);
const [operation, ...rest] = args;
const numbers = rest.map(parseNumberArgs);

switch (operation) {
  case "sum":
    console.log(sum(numbers));
    break;
  case "avg":
    console.log(average(numbers));
    break;
  case "med":
    console.log(median(numbers));
    break;
  default:
    console.log(
      'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
    );
}