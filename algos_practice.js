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

console.log(difference([
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]))