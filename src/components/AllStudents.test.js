import React from 'react'
import ReactDOM from 'react-dom'
import AllStudents from './AllStudents'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
        <AllStudents />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})