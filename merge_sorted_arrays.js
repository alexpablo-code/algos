//merge given arrays and sort 

function mergeSortedArrays(arr1, arr2){
    let newArr= [...arr1,...arr2]

    console.log(newArr.sort(function(a,b){return a-b}));
}

mergeSortedArrays([0,3,4,31], [4,6,30])

function mergeSortedArrays2(arr1, arr2){
    let newArr= arr1
    newArr=newArr.concat(arr2)

    console.log(newArr.sort(function(a,b){return a-b}));
}

mergeSortedArrays2([0,3,4,31], [4,6,30])