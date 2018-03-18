export const ADD_EXPENCE='ADD_EXPENSE';
export const  REMOVE_EXPENSE='REMOVE_EXPENSE';

export const addExpense=expense =>({
    type:ADD_EXPENCE,
    expense
});

export const removeExpense = expense =>({
    type:REMOVE_EXPENSE,
    expense
});