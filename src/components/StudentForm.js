import React, { useState, useContext } from 'react'
import '../css/StudentForm.css'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';

const StudentForm = (props) => {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const { addStudentCtx, students } = useContext(AppContext);

    const submitHandler = (event) => {
        event.preventDefault(); 
        addStudent();
    }

    const addStudent = async () => {
        try {
            if (!firstName || !lastName) {
                throw new Error('please try again');
            }
            const response = await fetch(`http://localhost:10001/students`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json", 
                    "Accepts": "application/json"
                }, 
                body: JSON.stringify({firstName, lastName})
            });
            const json = await response.json();
            addStudentCtx(json);
            console.log(json, students);
        } catch (error) {
            console.log(error)
        }
    }

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
                            onChange={(event) => setFirstName(event.target.value)} 
                            name='firstName'
                        />
                    </div>
                    <label>Last Name</label>
                    <div className='form-section'>
                        <input 
                            type="text" 
                            placeholder="Last Name" 
                            required 
                            onChange={(event) => setLastName(event.target.value)} 
                            name='lastName'
                        />
                    </div>
                        <button className='FormButton'>Submit</button>
                </form>
            </section>
        </>
    )
}

export default StudentForm;