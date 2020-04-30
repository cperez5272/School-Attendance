import React from 'react'

const Context = React.createContext({
    students: [],
    addStudent: () => {},
})

export default Context