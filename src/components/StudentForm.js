import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from "react-router";
import '../css/StudentForm.css'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';

const StudentForm = (props) => {
    const [first_name, setfirst_name] = useState('')
    const [last_name, setlast_name] = useState('')
    const { addStudentCtx, students } = useContext(AppContext);

    const submitHandler = (event) => {
        event.preventDefault();
        addStudent();
    }

    const addStudent = async () => {
        const studentObj = {
            first_name, 
            last_name, 
            grade: props.match.params.grade.substring(0,1)
        }
        try {
            if (!first_name || !last_name) {
                throw 'you cannot leave it blank';
            }
            const response = await fetch(`${process.env.REACT_APP_ATTENDANCE_API}/students`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(studentObj)
            });
            if (response.status === 200) {
                const json =  await response.json();
                addStudentCtx(json);
                return props.history.push("/");
            } else {
            }
        } catch (error) {
        }
    }

    useEffect(() => {
    }, []);

    return (
        <>
            <Link to='/'>
                <button className='FormButton'>Return To Main</button>
            </Link>
            <section>
                <form onSubmit={(event) => submitHandler(event)}>
                    <label>First Name</label>
                    <div className='form-section'>
                        <input
                            type="text"
                            placeholder="First Name"
                            required
                            onChange={(event) => setfirst_name(event.target.value)}
                            name='first_name' />
                    </div>
                    <label>Last Name</label>
                    <div className='form-section'>
                        <input
                            type="text"
                            placeholder="Last Name"
                            required
                            onChange={(event) => setlast_name(event.target.value)}
                            name='last_name' />
                    </div>
                    <button className='FormButton'>Submit</button>
                </form>
            </section>
        </>
    )
}

export default withRouter(StudentForm);