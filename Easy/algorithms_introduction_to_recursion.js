// Algorithms I: Introduction to Recursion
// https://edabit.com/challenge/vtDnynHfWCnMaKYym

function factorial(num) {
    if (num === 1 || num === 0)
        return 1
    return num * factorial(num - 1)
}