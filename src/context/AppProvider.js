import React, { useState, useEffect } from 'react'; 
import AppContext from './AppContext';

const AppProvider = (props) => {
  const { children } = props; 
  const [ students, setStudents ] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_ATTENDANCE_API}/students`);
      const json = await response.json(); 
      console.log('JSON FROM FETCHSTUDENTS', json);
      setStudents(json);
    } catch (error) {
      console.log(error);
    }
  } 

  const addStudentCtx = (newStudent) => {
    console.log("Adding student...");
    console.log(newStudent);
    console.dir(newStudent);
    setStudents([...students, newStudent]);
  }
  console.log('HELLLLLLOOOOO :O')
  console.log(addStudentCtx)

  useEffect(() => {
    if (students[0]) {
      if (students[0].firstName) return;
    }
    fetchStudents(); 
  }, [students]);

  return (
    <AppContext.Provider value={{
      students, 
      addStudentCtx
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider; 