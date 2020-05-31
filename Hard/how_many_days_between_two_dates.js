// How Many Days Between Two Dates
// https://edabit.com/challenge/3hdXjfJozQySRC3gE

const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
function getDays(date1, date2) {
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
}