import React from 'react'
import ReactDOM from 'react-dom'
import GradeFolder from './GradeFolder'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
        <GradeFolder />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})