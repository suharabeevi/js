// function binarysearch(array,target){
//     let leftindex=0
//     let rightindex=array.length-1
//     while(leftindex<=rightindex){
//         let middle=Math.floor((leftindex+rightindex)/2)
//         if(array[middle]===target){
//             return middle
//         }if(target>=array[middle]){
//             leftindex=middle+1
//         }else{
//             rightindex=middle-1
//         }
//     }
//     return -1
// }
// let array=[11,33,99,200,400]
// let target=200;
// console.log(binarysearch(array,target));

// linear search

//  function linearsearch(array,target){
//     for(i=0;i<=array.length;i++){
// if(array[i]===target){
//     return i
// }
//     }
//     return -1
//  }
//  let array=[21,33,44,22,1,2,1,3,4]
//  let target=3
// console.log(linearsearch(array,target));

//bubble sort
// function bubbleSort(arr) {
//     const n = arr.length;
  
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           const temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//       console.log(arr);
//     }
  
//     return arr;
//   }
  
//   // Example usage:
//   const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
//   const sortedArray = bubbleSort(unsortedArray);
//   console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

// bubble sort
function bubbleSort(array){
    let n =array.length
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(array[j]>array[j+1]){
                let temp =array[j]
                array[j]=array[j+1]
                array[j+1]=temp
            }
        }
    }
return array
}

let array=[44,2,6,7,5,2,223,13]

console.log(bubbleSort(array))