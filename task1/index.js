function calculate(str) {
  if (str.includes("+")) {
    let additions = str.split(' + ');
    return additions.join('');
  }

  let result = "";
  let countDots = 0;

  if (str.includes("-")) {
    let arr = str.split(' - ');
    countDots = arr[0].length - arr[1].length;
  }

  if (str.includes("*")) {
    let arr = str.split(' * ');
    countDots = arr[0].length * arr[1].length;
  }

  if (str.includes("//")) {
    let arr = str.split(' // ');
    countDots = ~~(arr[0].length/arr[1].length);
  }

  for (let n = 0; n < countDots; n++) {
    result += ".";
  }
  return result;
}


console.log(calculate("..... + ..............."));
console.log(calculate("..... - ..."));
console.log(calculate("..... - ."));
console.log(calculate("..... * ..."));
console.log(calculate("..... * .."));
console.log(calculate("..... // .."));
console.log(calculate("..... // ."));
console.log(calculate(". // .."));
console.log(calculate(".. - .."));