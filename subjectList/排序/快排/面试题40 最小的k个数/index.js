/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    sortNumber(arr, 0, arr.length - 1, k);
    return arr.slice(0, k);
};

function sortNumber(arr, start, end, k) {
    if (start >= end) return;
    let number = arr[end];
    let i = start, j = start;
    for(; i < end; i++) {
        if(arr[i] < number) {
            swap(arr, i, j);
            j ++;
        }
    }
    swap(arr, j, end);
    if (j === k) return;
    if (j > k) {
        sortNumber(arr, start, j - 1, k);
    } else {
        sortNumber(arr, j + 1, end, k);
    }
}
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];   
}