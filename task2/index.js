function grid(n) {
    if (n > 0) {
        let arr = [];

        for (let i = 0; i < n; i++) {
            let subArr = [];
            for (let j = 0; j < n; j++) {
                subArr.push(String.fromCharCode(97 + ((i + j) % 26)));
            }
            arr.push(subArr);
        }
        return arr;
    }
    return null;
}


console.log(grid(4));
console.log(grid(10));
console.log(grid(0));
console.log(grid(-10));
