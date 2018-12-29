import {shallow} from 'enzyme'
import React from 'react'
import toJSON from 'enzyme-to-json'
import {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses = {expenses}/>)
  expect(wrapper).toMatchSnapshot()
})


test('should render expense list with no expenses', () => {
  const wrapper = shallow(<ExpenseList expenses = {[]}/>)
  expect(wrapper).toMatchSnapshot()
})