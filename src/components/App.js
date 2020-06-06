import React from 'react';
import Header from './Header'
import GradeFolder from './GradeFolder'
import GradeSection from './GradeSection'
import StudentForm from './StudentForm'
import AllStudents from './AllStudents'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppContext from '../context/AppContext';
import '../index.css';

class App extends React.Component {
  render() {
    return(
      <Router>
        <>
          <Header/>
          <Switch>
            <Route path='/' exact component={GradeFolder}/>
            <Route path='/GradeSection/:grade' component={GradeSection}/>
            <Route path='/StudentForm/:grade' component={StudentForm}/>
            <Route path='/StudentForm' component={StudentForm}/>
            <Route path='/AllStudents' component={AllStudents}/>
          </Switch>
        </>
      </Router>
    )
  }
} 
export default App;