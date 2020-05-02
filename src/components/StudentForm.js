import React, { useState, useEffect } from 'react'
import '../css/StudentForm.css'
import { Link } from 'react-router-dom'

const StudentForm = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('clicked')
        addStudent();
    }

    const addStudent = async () => {
        const studentObj = {
            firstName, //firstName: firstName
            lastName, //lastName: lastName
            grade: props.match.params.grade
        }
        try {
            if (!firstName || !lastName) {
                throw 'you cannot leave it blank';
            }
            const response = await fetch(`http://localhost:10001/students`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accepts": "application/json"
                },
                body: JSON.stringify(studentObj)
            });
            const json = await response.json();
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
                <form onSubmit={(event) => { submitHandler(event) }, () => addStudent()}>
                    <label>First Name</label>
                    <div className='form-section'>
                        <input
                            type="text"
                            placeholder="First Name"
                            required
                            onChange={(event) => setFirstName(event.target.value)}
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
                    <Link to={`/GradeSection/${props.match.params.grade}`}>
                        <button className='FormButton'>Submit</button>
                    </Link>
                </form>
            </section>
        </>
    )
}

export default StudentForm;