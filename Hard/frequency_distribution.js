// Frequency Distribution
// https://edabit.com/challenge/uScx6aGXmNu27NYWz

function getFrequencies(arr) {
    const obj = {}
    for (let el of arr) {
        obj[el] = ++obj[el] || 1
    }
    return obj
}