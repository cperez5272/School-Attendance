import React, { useState, useEffect, useContext } from 'react'
import '../css/AllStudents.css'
import { Link, withRouter } from 'react-router-dom'
import AppContext from '../context/AppContext';

const AllStudents = (props) => {

    const { students, removeStudentsCtx } = useContext(AppContext);
    const [ allStudents, setAllStudents ] = useState([]);

    useEffect(() => {
        setAllStudents(students);
    });

    const renderStudents = () => {
        return allStudents.map(student => <h3 className="student-card" key={student.id}> {`${student.firstName} ${student.lastName}`} </h3>)
    }

    const clearAttendance = async () => {
        console.log('clicked')
        const response = await fetch(`${process.env.REACT_APP_ATTENDANCE_API}/remove-students`, {
            method: "DELETE", 
            cors: "no-cors",
            headers: {
                "Content-type": "application/json", 
                "Accepts": "application/json"
            }
        });
        const json = await response.json(); 
        if (json.status === 204) {
            removeStudentsCtx();
            props.history.push("/");
        }
        console.log(json)
    }

    return(
        <>
            <Link to='/'>
                <button className='MainButton'>Return To Main</button>
            </Link>
            <button onClick= {clearAttendance} className='MainButton'>Clear Attendance </button>
            {renderStudents()}
        </>
    )
    
}

export default withRouter(AllStudents);