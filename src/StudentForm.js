import React from 'react'
import './css/StudentForm.css'
import { Link } from 'react-router-dom'

class StudentForm extends React.Component {
    render() {
        return (
            <>
                <Link to='/'>
                    <button className='FormButton'>Return To Main</button>
                </Link>
                <section>
                <form>
                    <label>First Name</label>
                    <div className='form-section'>
                        <input type="text" placeholder="First Name" required></input>
                    </div>
                    <label>Last Name</label>
                    <div className='form-section'>
                        <input type="text" placeholder="Last Name" required></input>
                    </div>
                    <Link to='/GradeSection'>
                        <button className='FormButton'>Submit</button>
                    </Link>
                </form>
                </section>
            </>
        )
    }
}

export default StudentForm