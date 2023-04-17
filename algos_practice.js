function difference(arr){

    // left = arr[0][0] + arr[1][1] + arr[2][2];
    // right = arr[0][2] + arr[1][1] + arr[2][0];
    let left = 0;
    let right = 0;
    let leftpoint = 0
    let rightpoint = 2
    
    let diff = 0;
    for(let i = 0; i < arr.length; i++){
        left += arr[i][leftpoint];
        console.log(arr[i]);
        leftpoint++;
        right += arr[i][rightpoint];
        rightpoint--;
    }
    // console.log(left);
    // console.log(right);
    diff = Math.abs(left - right);
    
    return diff;
    
}

function twoNumberSum(array, targetSum) {
    // Write your code here.
    let sumArr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == targetSum) {
                sumArr.push(array[i]);
                sumArr.push(array[j]);
                return sumArr;
            }
        }
    }
    return sumArr;
}
function twoNumberSumHash(array, targetSum) {
    // Write your code here.
    const resultNums = {};
    let sumArr=[];
    for(let i = 0; i < array.length; i++){
        let currentNum = array[i];
        let otherNum = targetSum - array[i];
        console.log(otherNum);
        if(otherNum in resultNums){
            console.log('found other');
            sumArr.push(array[i]);
            sumArr.push(otherNum);
            return sumArr;
        }
        resultNums[currentNum]=true;
    }
    
    return resultNums;
}

// console.log(difference([
//     [11,2,4],
//     [4,5,6],
//     [10,8,-12]
// ]))
console.log(twoNumberSumHash([3, 5, -4, 8, 11, 1, -1, 6], 10));