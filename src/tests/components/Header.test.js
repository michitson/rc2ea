import {shallow} from 'enzyme'
import React from 'react'
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header'

//react test renderer

test('should render header correctly', () => {
  const wrapper = shallow(<Header/>)
  expect(toJSON(wrapper)).toMatchSnapshot()
  expect(wrapper.find('h1').text()).toBe('Expensify')
})