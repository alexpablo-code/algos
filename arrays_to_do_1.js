//PUSH FRONT

const pushToFront = (arr, val) => {
    for (var i = arr.length-1; i>=0; i--){
        arr[i + 1] = arr[i];
    }
    arr[0] = val
    return arr
}

console.log(pushToFront([2,5,7,8], 6))


// POP FRONT

const popFront = (arr) =>{
    var x = arr[0]
    for (var i = 1; i<= arr.length; i++){
        arr[i - 1]= arr[i];
    }
    console.log(arr)
    return x
}
console.log(popFront([3,8,5,99]))


const shortenArr = (arr) => {
    arr.length = arr.length - 1
    return arr
}
console.log(shortenArr([3,8,5,99]))

const popFrontShift = (arr) => {
    var removed = arr.shift();
    console.log(arr);
    return removed
}

console.log(popFrontShift([3,8,5,99]))


//Insert At

const insertAtSplice = (arr, pos, val) => {
    arr.splice(pos,0,val)
    return arr
}

console.log(insertAtSplice([1,2,3,4,5],3,99))
