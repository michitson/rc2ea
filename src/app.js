import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses'
import {setTextFilter} from './actions/filters'
import {addExpense} from './actions/expenses'

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()

//add expense -> water bill
//add expense -> gas bill
//set text filter bill (2 items) - water (1 item)
//get visible expenses  - print to screen

const expenseOne = store.dispatch(addExpense({description: 'Water bill', amount: 4500}))
const expenseTwo = store.dispatch(addExpense({description: 'Gas bill', amount: 0, createdAt: 1000}))
const expenseThree = store.dispatch(addExpense({description: 'Rent', amount: 109500}))


//store.dispatch(setTextFilter('water'))

// setTimeout(() =>{
//   store.dispatch(setTextFilter('bill'))

// }, 3000)

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
