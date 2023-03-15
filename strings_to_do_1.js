//REMOVE BLANKS

const replaceSpace = (arr) => {
    let noSpace = arr.replaceAll(' ', '');
    return noSpace
}

console.log(replaceSpace("a v o c a d o"));

const replaceRegEx = (arr) => {
    let noSpace = arr.replace(/ /g, '');
    return noSpace
}

console.log(replaceRegEx("a v o c a d o"));


//GET DIGITS

const getDigRegEx = (str) => {
    const onlyDig = str.match(/\d/g);
    return onlyDig
}

console.log(getDigRegEx('ihave3dogs2cats5fish1dragon'))

const getDigits = (str) => {
    let onlyDigits = ''
    for(i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            onlyDigits += ""+ str[i]
        }
    }
    return onlyDigits
}

console.log(getDigits('ihave3dogs2cats5fish1dragon'))


//ACRONYMS

function acronym(str){
    let splitWords = str.split(' ')
    console.log(splitWords)
    let acro = ''
    for(i = 0; i < splitWords.length; i++){
        acro += splitWords[i][0]
    }
    return acro.toUpperCase()
}

console.log(acronym('birds are not real'))



//COUNT NON-SPACES

function nonSpace(str){
    let strNum = 0
    for(i=0; i< str.length; i++){
        if(str[i]== ' '){
            null
        }else{
            strNum += 1
        }
    }
    return strNum
}

console.log(nonSpace('coffee keeps me going'))


//REMOVE SHORTER STRINGS

function destroyShorts(arr, len){
    let newArr = []
    for(i=0; i< arr.length; i++){
        if(arr[i].length >= len){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(destroyShorts(['saturn','dinasour','coffee', 'tea', 'cheese', 'pop'], 4))