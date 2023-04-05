//Given an array, return the first repeated character

case1 = [2,5,1,2,3,5,1,2,4];
//Should return 2

case2 = [7,8,3,1,9,1];
//should return 1


function repeatedChar(arr){
    let mem = {}
    for(let i = 0; i < arr.length; i++){
        if(!mem[arr[i]]){
            mem[arr[i]] = 1
        }else{
            return arr[i];
        }
    }
    return "No repeated";
}

console.log(repeatedChar([2,5,1,8,3]));