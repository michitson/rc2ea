// import uuid from 'uuid'

// // ADD_EXPENSE
// const addExpense = (
//   {
//     description = '', 
//     note = '', 
//     amount = 0, 
//     createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: { 
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// })

// // REMOVE_EXPENSE
// const removeExpense = ({id} = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   expense: { 
//     id
//   }
// })
// // EDIT_EXPENSE
// const editExpense = (id, updates) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// })
// // SET_TEXT_FILTER
// const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// })
// // SORT_BY_DATE
// const sortByDate = () => ({
//   type: 'SORT_BY_DATE',
// })
// // SORT_BY_AMOUNT
// const sortByAmount = () => ({
//   type: 'SORT_BY_AMOUNT',
// })
// // SET_START_DATE
// const setStartDate = (startDate) => ({
//   type: 'SET_START_DATE',
//   startDate
// })
// // SET_END_DATE
// const setEndDate = (endDate) => ({
//   type: 'SET_END_DATE',
//   endDate
// })

// const expensesReducerDefaultState = []

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch(action.type) {
//     case 'ADD_EXPENSE':
//       return [
//         ...state, 
//         action.expense
//       ]
//     case 'REMOVE_EXPENSE':
//       return state.filter(({id}) => id !== action.expense.id)
//     case 'EDIT_EXPENSE':
//       return state.map((expense) => {
//         if( expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates
//           }
//         } else {
//           return expense
//         }
//       })
//     default: 
//       return state
//   }
// }







store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: -1000}))
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300, createdAt: 1000}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

//store.dispatch(setTextFilter('ffe'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
store.dispatch(sortByDate())

//store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())

// store.dispatch(setEndDate(1250))




const demoState = {
  expenses: [{
    id: 'sfasdfadf',
    description: 'jan rent',
    note: 'this is final payment',
    amount: 54500,
    createdAt: 0
  }],

  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

}