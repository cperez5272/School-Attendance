import React from 'react'
import '../css/GradeSection.css'
import { Link } from 'react-router-dom'
import StudentForm from './StudentForm';

const GradeSection = (props) => {
        return (
            <> 
            <Link to='/'>
                <button className='MainButton'>Return To Main</button>
            </Link>
            <Link to={`/StudentForm/${props.match.params.grade}`}>
                <button className='MainButton'>Add Student</button>
            </Link>
                <h3 className="Grade_Name">Lalalala</h3>
                <StudentForm firstName='Paul' />
            </>
        )
    }

export default GradeSection;