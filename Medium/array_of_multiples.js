// Array of Multiples
// https://edabit.com/challenge/ebcd4Xu8TLizaj6dm

function arrayOfMultiples(num, length) {
    let arr = [];
    for (let i = 1; i <= length; i++)
        arr.push(num * i)
    return arr
}