//Array 

const arr = ['a','b','c'];
// Indexes    0   1   2    


//Push 
arr.push ('d');
//add to the end of the array
//O(1)

//Pop
arr.pop();
//removes last item from array
//O(1)

//Onshift
arr.unshift('z');
//add item to the beginning of array
//shift all items over 1 index
//O(n)

//Splice
arr.splice(2, 0, 'ramen');
//add to a specific index
//1st parameter is index to start adding
//2nd parameter number of items to be deleted if any
//3rd parameter is item to be added
//O(n)


console.log(arr);