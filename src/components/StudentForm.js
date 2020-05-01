import React from 'react'
import '../css/StudentForm.css'
import { Link } from 'react-router-dom'

class StudentForm extends React.Component {
    
    constructor(props) { 
        super(props)
  
        this.state = {
            firstName: "", 
            lastName: ""
        }
    }

    showName = () => {
        console.log(this.state.firstName)
        console.log(this.state.lastName)
    }

    submitHandler = (event) => {
        event.preventDefault(); 
        console.log('clicked')
        this.addStudent();
    }

    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
        console.log('I am typing!')
    }

    addStudent = async () => {
        try {
            if (!this.state.firstName || !this.state.lastName) {
                throw 'you cannot leave it blank';
            }
            const response = await fetch(`http://localhost:10001/students`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json", 
                    "Accepts": "application/json"
                }, 
                body: JSON.stringify(this.state)
            });
            const json = await response.json();
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <>
                <Link to='/'>
                    <button className='FormButton'>Return To Main</button>
                </Link>
                <section>
                <form onSubmit={(event) => this.submitHandler(event)}>
                    <label>First Name</label>
                    <div className='form-section'>
                        <input type="text" placeholder="First Name" required onChange={(event) => this.changeHandler(event)} name='firstName'></input>
                    </div>
                    <label>Last Name</label>
                    <div className='form-section'>
                        <input type="text" placeholder="Last Name" required onChange={(event) => this.changeHandler(event)} name='lastName'></input>
                    </div>
                        {/* <Link to='/GradeSection'> */}
                            <button onClick={this.showName} className='FormButton'>Submit</button>
                        {/* </Link> */}
                </form>
                </section>
            </>
        )
    }
}

export default StudentForm;