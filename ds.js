// // // leetcode 2231

// // var largestInteger = function(num) {
// //     const odd = [];
// //     const even = [];
// //     const nums = String(num).split('');

// //     for (let i = 0; i < nums.length; i++) {
// //         if (nums[i] % 2 === 0) {
// //             even.push(parseInt(nums[i]));
// //         } else {
// //             odd.push(parseInt(nums[i]));
// //         }
// //     }

// //     odd.sort((a, b) => a - b);
// //     even.sort((a, b) => a - b);
// //     console.log(even,odd);

// //     const largestNum = [];
// //     for (let i = 0; i < nums.length; i++) {
// //         if (nums[i] % 2 === 0) {
// //             largestNum.push(even.shift());
// //             console.log(largestNum,"iiiii");
// //         } else {
// //             largestNum.push(odd.shift());
// //             console.log(largestNum,"iiiii");
// //         }
// //     }

// //     return largestNum.join('');
// // };
// // let num = 2736;
// // let largest = largestInteger(num);
// // console.log(largest);
// function countBits(n) {
//     const ans = new Array(n + 1).fill(0);
//     for (let i = 1; i <= n; i++) {
//       // Count the number of 1's in the binary representation of i using bitwise operations.
//       ans[i] = ans[i >> 1] + (i & 1);
//     }
//     return ans;
//   }
//   // Example usage:
//   const n = 2;
//   const result = countBits(n);
//   console.log(result); // Output: [0, 1, 1, 2, 1, 2]