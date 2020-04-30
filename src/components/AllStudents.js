import React from 'react'
import '../css/AllStudents.css'
import { Link } from 'react-router-dom'

class AllStudents extends React.Component {
    render() {
        return(
            <>
            <Link to='/'>
                <button className='MainButton'>Return To Main</button>
            </Link>
                <button className='MainButton'>Clear Attendance</button>
            
                <h3 className="Grade_Name">Lalalala</h3>
            </>
        )
    }
}

export default AllStudents;