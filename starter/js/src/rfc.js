// function findEndPosition(input, rails_cnt) {
//   numPositions = rails_cnt * 2 - 2;
//   position = (input.length % numPositions) - 1;
// }

function encode(input, rail_cnt) {
  // create an array of rail_cnt number of arrays
  const result_arr = [];
  for (let i = 0; i < rail_cnt; i++) {
    result_arr.push([]);
  }
  // initialise counter that will add up till rail_cnt
  // and decrease down till 0
  let counter = 0;
  let sign = '++';

  // loop through each character of input
  for (let i = 0; i < input.length; i++) {
    // place in each array in turn
    result_arr[counter].push(input.charAt(i));

    if (sign == '++') {
      counter++;
    } else {
      counter--;
    }

    if (counter == rail_cnt - 1) {
      sign = '--';
    } else if (counter == 0) {
      sign = '++';
    }
  }
  // flatten result
  return result_arr.join().split(',').join('');
}

console.log(encode('WEAREDISCOVEREDFLEEATONCE', 3));
// console.log(decode('WECRLTEERDSOEEFEAOCAIVDEN', 3));
