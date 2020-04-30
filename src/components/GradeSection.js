import React from 'react'
import '../css/GradeSection.css'
import { Link } from 'react-router-dom'

class GradeSection extends React.Component {
    render() {
        return (
            <> 
                <Link to='/'>
                    <button className='MainButton'>Return To Main</button>
                </Link>
                <Link to='/StudentForm'>
                    <button className='MainButton'>Add Student</button>
                </Link>
            </>
        )
    }
}

export default GradeSection;