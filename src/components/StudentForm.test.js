import React from 'react'
import ReactDOM from 'react-dom'
import StudentForm from './StudentForm'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
        <StudentForm />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})