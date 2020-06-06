// Even or Odd Number of Factors
// https://edabit.com/challenge/uGKSYufSxtBErTrhd

function factorGroup(num) {
    let s = 0
    for (let i = 0; i <= num; i++) {
        if (num % i == 0)
            s++
    }
    return s % 2 == 0 ? 'even' : 'odd'
}