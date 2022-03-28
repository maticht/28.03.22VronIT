function sortArray(arr) {
    let newArr = [];
    let length = arr.length
    for (let i = 0; i < length; ++i) {
        if (arr[i] % 2 !== 0) newArr.push(arr[i]);
    }
    newArr.sort((a,b) => a-b)
    for (let j = 0; j < length; ++j) {
        if (arr[j] % 2 !== 0) arr[j] = newArr.shift();
    }
    return arr
}



console.log(sortArray([7, 1]))
console.log(sortArray([5, 8, 6, 3, 4]))
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
