// Calculate the Total Price of Groceries
// https://edabit.com/challenge/jRSST87NjECBzbwzL

function getTotalPrice(groceries) {
    return groceries.reduce((acc, el) => parseFloat((acc + (el.quantity * el.price)).toFixed(2)), 0)
}