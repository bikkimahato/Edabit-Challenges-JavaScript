// Product of Digits of Sum
// https://edabit.com/challenge/Kzmyf4pLx66ZRsnWk

function sumDigProd() {
    let res = [...arguments].reduce((acc, el) => acc + el, 0)
    if (res === 0)
        return 0
    let d, m;
    do {
        m = 1;
        while (res) {
            d = res % 10;
            m = m * d;
            res = Math.floor(res / 10);
        }
        res = m
    } while (m > 9);
    return m
}