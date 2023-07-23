// leetcode 2231

var largestInteger = function(num) {
    const odd = [];
    const even = [];
    const nums = String(num).split('');

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            even.push(parseInt(nums[i]));
        } else {
            odd.push(parseInt(nums[i]));
        }
    }

    odd.sort((a, b) => a - b);
    even.sort((a, b) => a - b);
    console.log(even,odd);

    const largestNum = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            largestNum.push(even.shift());
            console.log(largestNum,"iiiii");
        } else {
            largestNum.push(odd.shift());
            console.log(largestNum,"iiiii");
        }
    }

    return largestNum.join('');
};
let num = 2736;
let largest = largestInteger(num);
console.log(largest);