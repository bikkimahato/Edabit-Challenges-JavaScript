// Default Mood
// https://edabit.com/challenge/DdAkLaw4eyuWgCMmF

function moodToday(mood) {
    if (mood === undefined)
        mood = 'neutral'
    return `Today, I am feeling ${mood}`
}