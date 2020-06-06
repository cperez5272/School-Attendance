import React from 'react'
import ReactDOM from 'react-dom'
import GradeSection from './GradeSection'
import { MemoryRouter, Route } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MemoryRouter initialEntries={["/GradeSection/2"]}>
        <Route path='/GradeSection/:grade' component={GradeSection}/>
    </MemoryRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})