// Reversing a Binary String
// https://edabit.com/challenge/4s93F8ZiEdHjmMnMv

function reversedBinaryInteger(num) {
    return parseInt(num.toString(2).split('').reverse().join(''), 2)
}