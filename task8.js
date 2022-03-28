function getRecursiveSum(startValue) {
    let a = startValue % 10
    let b = Math.floor(startValue / 10)
    if (startValue < 10) return startValue
    return getRecursiveSum(a + getRecursiveSum(b))
}



console.log(getRecursiveSum(9))
console.log(getRecursiveSum(16))
console.log(getRecursiveSum(942))
console.log(getRecursiveSum(132189))
console.log(getRecursiveSum(493193))