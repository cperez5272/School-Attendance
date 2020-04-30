import React, { useContext } from 'react'
import '../css/AllStudents.css'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';

const AllStudents = (props) => {

    const students = useContext(AppContext);
    console.log(students);

    return(
        <>
            <Link to='/'>
                <button className='MainButton'>Return To Main</button>
            </Link>
            <button className='MainButton'>Clear Attendance</button>
        </>
    )
    
}

export default AllStudents;