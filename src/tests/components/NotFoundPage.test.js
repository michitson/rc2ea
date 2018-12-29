import {shallow} from 'enzyme'
import React from 'react'
import NotFoundPage from '../../components/NotFoundPage'

test('should render Not Found Page component with expenses', () => {
  const wrapper = shallow(<NotFoundPage/>)
  expect(wrapper).toMatchSnapshot()
})