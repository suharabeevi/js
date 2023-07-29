//insertion sort

// function insertionSort(arr) {
//   const n = arr.length;

//   for (let i = 1; i < n; i++) {
//     let current = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > current) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = current;
//   }

//   return arr;
// }

//heap sort
  // Helper function to heapify the array
function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  console.log(largest,left,right);
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
    console.log(arr[left],arr[largest]);
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }
  
  function heapSort(arr) {
    const n = arr.length;
  
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap root with last element
      heapify(arr, i, 0); // Heapify the reduced heap
    }
  
    return arr;
  }
  
  // Example usage:
  const arrayToSort = [12, 11, 13, 5, 6, 7];
  const sortedArray = heapSort(arrayToSort);
  console.log(sortedArray); 
  