import React, { useState, useEffect, useContext } from 'react';
import '../css/GradeSection.css'
import { Link } from 'react-router-dom'
import StudentForm from './StudentForm';
import AppContext from '../context/AppContext';

const GradeSection = (props) => {

    const { students } = useContext(AppContext);
    const [ gradeStudents, setGradeStudents ] = useState([]);
    const [ loaded, setLoaded ] = useState(false); 

    useEffect(() => {
        if (loaded) return;
        const filterStudentsByGrade = () => {
            const gradeRoute = parseInt(props.match.params.grade);
            const filteredStudents = students.filter(student => student.grade == gradeRoute);
            setGradeStudents(filteredStudents);
            console.log(filteredStudents, "FILTERED")
        }
        filterStudentsByGrade();
        if (students[0]) {
            setLoaded(true);
        }
    }, [loaded, gradeStudents])

    const renderStudents = () => {
        return gradeStudents.map(student => {
            console.log(student);
            return <h3 className="student-card" key={student.id}> {`${student.firstName} ${student.lastName}`} </h3>
        })
    }

    return (
        <> 
            <Link to='/'>
                <button className='MainButton'>Return To Main</button>
            </Link>
            <Link to={`/StudentForm/${props.match.params.grade}`}>
                <button className='MainButton'>Add Student</button>
            </Link>
            {renderStudents()}
        </>
    )
}

export default GradeSection;

