import expensesReducer from '../../reducers/expenses'
//import moment from 'moment';
import expenses from '../fixtures/expenses'

test('should setup default state', () => {
  const expensesReducerDefaultState = []
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual(expensesReducerDefaultState)
})

test('should remove expense by id', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})


test('should NOT remove expense if id not found', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

//add expense
test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  }
  const action = {
    type:'ADD_EXPENSE',
    expense   
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})
//should edit expense - valid ID
test('', () => {
  const note = 'noted'

  const action = {
    type:'EDIT_EXPENSE',
    id: expenses[0].id,
    updates:  {
      note,
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].note).toBe(note)
  
})
//should NOT edit expense if ID not found
test('', () => {
  const note = 'noted'

  const action = {
    type:'EDIT_EXPENSE',
    id: '-1000',
    updates:  {
      note,
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
  
})