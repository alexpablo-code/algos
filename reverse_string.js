//Create a function that reverses a string 


//My first attempt
function reverse(str){
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--){
        reversedStr += "" + str[i];
    }
    return reversedStr;
}

console.log(reverse('Hi my name is Alex')); 




//what is undefined or no string or less than 2 characters or if it is not a string

function reverse1(str){
    //check input
    if (!str || str.length < 2 || typeof str !== 'string'){
        return 'not good invalid type or length'
    }

    const backwardsStr = [];
    const totalItems = str.length - 1;

    for(let i = totalItems; i >= 0; i--){
        backwardsStr.push(str[i]);
    }
    
    console.log(backwardsStr);

    return backwardsStr.join('');
}

console.log(reverse1('Hi my name is Alex'));



//shorter code and using buitin methods
function reverse2(str){
    return str.split('').reverse().join('')
    //split to make it into array, reverse the array, and then join the array into string
}

console.log(reverse2('Hi my name is Alex'));