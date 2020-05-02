import React from 'react'
import '../css/GradeFolder.css'
import { Link } from 'react-router-dom'

class GradeFolder extends React.Component {

    render() {
        return(
            <>
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