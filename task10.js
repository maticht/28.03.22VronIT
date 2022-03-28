function anagrams(word, wordArr){
    let arr = []
    word = word.split('').sort().join('');
    for(let i = 0; i < wordArr.length ; i++){
        if (wordArr[i].split('').sort().join('') === word) arr.push(wordArr[i])
    }
    return arr
}



console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))
