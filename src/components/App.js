import React from 'react';
import Header from './Header'
import GradeFolder from './GradeFolder'
import GradeSection from './GradeSection'
import StudentForm from './StudentForm'
import AllStudents from './AllStudents'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = (props) => {
  return(
    <Router>
      <>
        <Header/>
        <Switch>
            <Route path='/' exact component={GradeFolder}/>
            {/* <GradeFolder/> */}
            <Route path='/GradeSection' component={GradeSection}/>
            <Route path='/StudentForm' component={StudentForm}/>
            <Route path='/AllStudents' component={AllStudents}/>
        </Switch>
      </>
    </Router>
  )

} 
export default App;