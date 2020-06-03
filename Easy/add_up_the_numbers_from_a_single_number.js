// Add up the Numbers from a Single Number
// https://edabit.com/challenge/4gzDuDkompAqujpRi

function addUp(num) {
    let s = 0;
    for (let i = 1; i <= num; i++)
        s += i;
    return s;
}