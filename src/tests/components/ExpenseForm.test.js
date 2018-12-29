import React from 'react'
import moment from 'moment'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render expense form', () => {
  const wrapper = shallow(<ExpenseForm/>)
  expect(wrapper).toMatchSnapshot()
})


test('should render expense form with expenses', () => {
  const wrapper = shallow(<ExpenseForm expense = {expenses[1]}/>)
  expect(wrapper).toMatchSnapshot()
})


test ('Should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test ('Should set description on input change', () => {
  const value = 'new description'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  })

  expect(wrapper.state('description')).toBe(value)
})

test ('Should set description on note change', () => {
  const value = 'new Note'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('textarea').simulate('change', {
    target: {value}
  })

  expect(wrapper.state('note')).toBe(value)
})


//shoud set amount if valid input
//23.20
test ('Should set amount if valid input', () => {
  const value = '23.20'
  const wrapper = shallow(<ExpenseForm />)
  
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })

  expect(wrapper.state('amount')).toBe(value)
})

//shoud NOT set amount if valid input
//12.122
test ('Should NOT set amount if valid input', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />)
  
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })

  expect(wrapper.state('amount')).toBe('')

})

test ('Should call on submit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn() 
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  
  expect(wrapper.state('error')).toBe('') 
  
  expect(onSubmitSpy).toHaveBeenCalled() //With('andrew', 'emmy')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
    note: expenses[0].note,
    description: expenses[0].description    
  }) 
})

//on date change

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)

})

//on focus change
test('should set CALENDAR FOCUS ON change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
  expect(wrapper.state('calendarFocused')).toBe(focused)
  
})
