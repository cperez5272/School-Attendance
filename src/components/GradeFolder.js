import React from 'react'
import '../css/GradeFolder.css'
import { Link } from 'react-router-dom'

class GradeFolder extends React.Component {

    render() {
        return(
            <>
            <p>Welcome! Please select your grade level. You will be sent to a page that contains a list of students of that grade. If you do not see your name listed please click "Add Student" where you will be sent to a form. Complete the form with your full name so you can be marked present for the day. This is important to do so we know you are here today! </p>
            <Link to='/GradeSection/6th'>
                <h2 className='Grade_Folder'>6th Grade</h2>
            </Link>
            <Link to='/GradeSection/7th'>
                <h2 className='Grade_Folder'>7th Grade</h2>
            </Link>
            <Link to='/GradeSection/8th'>
                <h2 className='Grade_Folder'>8th Grade</h2>
            </Link>
            <Link to='/AllStudents'>
                <h2 className= 'Grade_Folder'>All Grades</h2>
            </Link>
            </>
        )
    }
}

export default GradeFolder;