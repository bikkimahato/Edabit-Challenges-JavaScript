// Which Function Returns the Larger Number?
// https://edabit.com/challenge/o7TwicAHWuMkjbDqQ

function whichIsLarger(f, g) {
    () => f;
    () => g;
    if (f() > g())
        return 'f';
    else if (g() > f())
        return 'g';
    else
        return 'neither';
}