import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from "react-router";
import '../css/StudentForm.css'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';

const StudentForm = (props) => {
    const [firstName, setfirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const { addStudentCtx, students } = useContext(AppContext);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('clicked');
        addStudent();
    }

    const addStudent = async () => {
        //get route parameters, add to the student object being passed in body
        //students should not be able to be added
        const studentObj = {
            firstName, //firstName: firstName
            lastName, //lastName: lastName
            grade: props.match.params.grade.substring(0,1)
        }
        try {
            if (!firstName || !lastName) {
                throw 'you cannot leave it blank';
            }
            console.log(studentObj)
            const response = await fetch(`${process.env.REACT_APP_ATTENDANCE_API}/students`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(studentObj)
            });
            if (response.status === 200) {
                const json =  response.json();
                addStudentCtx(json);
                return props.history.push("/");
            } else {
                console.log(response.status);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(props);
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
                            onChange={(event) => setfirstName(event.target.value)}
                            name='firstName' />
                    </div>
                    <label>Last Name</label>
                    <div className='form-section'>
                        <input
                            type="text"
                            placeholder="Last Name"
                            required
                            onChange={(event) => setLastName(event.target.value)}
                            name='lastName' />
                    </div>
                    <button className='FormButton'>Submit</button>
                </form>
            </section>
        </>
    )
}

export default withRouter(StudentForm);