import moment from 'moment'
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters'

test('should generate setStartDate action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate: moment(0)
  }) 
})


test('should generate setEndDate action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate: moment(0)
  }) 
})

test('should set Text Filter (default)', () => {
  const action = setTextFilter('')
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: ''
  }) 
})

test('should set Text Filter ', () => {
  const filter = 'waaa'
  const action = setTextFilter(filter)
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: filter
  }) 
})

test('should generate sortByDate action', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type:'SORT_BY_DATE'
  }) 
})


test('should generate sortByAmount action', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type:'SORT_BY_AMOUNT'
  }) 
})
