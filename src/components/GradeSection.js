import React, { useState, useEffect, useContext } from 'react';
import '../css/GradeSection.css'
import { Link } from 'react-router-dom'
import StudentForm from './StudentForm';
import AppContext from '../context/AppContext';

const GradeSection = (props) => {

    const { students } = useContext(AppContext);
    const [ gradeStudents, setGradeStudents ] = useState([]);
    const [ loaded, setLoaded ] = useState(false); 

    console.log(students, gradeStudents);

    useEffect(() => {

        if (gradeStudents.length > 0) return;
        const filterStudentsByGrade = () => {
            const gradeRoute = props.match.params.grade;
            const filteredStudents = students.filter(student => student.grade === gradeRoute);
            setGradeStudents(filteredStudents);
            setLoaded(true);
        }

        filterStudentsByGrade();

    }, [loaded])

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

