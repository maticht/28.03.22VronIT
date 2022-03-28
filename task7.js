function getSum(first){
    return function (next){
        if(next) return getSum(first + next)
        return first
    }
}



console.log(getSum(9)());
console.log(getSum(1)(2)());
console.log(getSum(1)(2)(3)());
console.log(getSum(5)(-1)(2)());
console.log(getSum(6)(-1)(-2)(-3)());
console.log(getSum(0)(1)(2)(3)(4)(5)());
