import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should set up remove expense action object', () => {
  const action = removeExpense({id: '123abc'})
  expect(action).toEqual({ 
    type:'REMOVE_EXPENSE',
    id: '123abc'
  })
})


test('should set up edit expense action object', () => {
  const action = editExpense('123abc', {note: 'nooooote'})
  expect(action).toEqual({ 
    type:'EDIT_EXPENSE',
    id: '123abc',
    updates: {note: 'nooooote'}
  })
})

test('should set up add expense action object', () => {
  const expenseData = {amount: 109500, description: 'rent', createdAt: 1000, note: 'this was last months rent'}
  const action = addExpense(expenseData)
  expect(action).toEqual({ 
    type:'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }

  })
})

test('should set up add expense action object wtih default values', () => {
  const thisExpense = {}
  const action = addExpense()
  expect(action).toEqual({ 
    type:'ADD_EXPENSE',
    expense: {
      createdAt: 0,
      note: '',
      amount: 0,
      description: '',
      id: expect.any(String)
    }

  })
})