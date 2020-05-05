import React, { useState, useEffect, useContext } from 'react'
import '../css/AllStudents.css'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';

const AllStudents = (props) => {

    const { students } = useContext(AppContext);
    const [loaded, setLoaded ] = useState(false);
    const [ allStudents, setAllStudents ] = useState([]);

    useEffect(() => {
        setAllStudents(students);
        setLoaded(true);
    });

    const renderStudents = () => {
        return allStudents.map(student => <h3 className="student-card" key={student.id}> {`${student.firstName} ${student.lastName}`} </h3>)
    }

    return(
        <>
            <Link to='/'>
                <button className='MainButton'>Return To Main</button>
            </Link>
            <button className='MainButton'>Clear Attendance</button>
            {renderStudents()}
        </>
    )
    
}

export default AllStudents;