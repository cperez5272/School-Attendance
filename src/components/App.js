import React from 'react';
import Header from './Header'
import GradeFolder from './GradeFolder'
import GradeSection from './GradeSection'
import StudentForm from './StudentForm'
import AllStudents from './AllStudents'
import Context from '../Context'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    const value = {
    }
    return(
      <Context.Provider value= {value}>
      <Router>
        <>
          <Header/>
          <Switch>
            <Route path='/' exact component={GradeFolder}/>
            {/* <GradeFolder/> */}
            <Route path='/GradeSection/:grade' component={GradeSection}/>
            <Route path='/StudentForm/:grade' component={StudentForm}/>
            <Route path='/StudentForm' component={StudentForm}/>
            <Route path='/AllStudents' component={AllStudents}/>
          </Switch>
        </>
      </Router>
      </Context.Provider>
    )
  }
} 
export default App;