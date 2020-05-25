import React, { useState, useEffect } from 'react'; 
import AppContext from './AppContext';

const AppProvider = (props) => {
  const { children } = props; 
  const [ students, setStudents ] = useState([]);
  const [ loaded, setLoaded ] = useState(false)
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
    console.dir(newStudent);
    console.log(students)
    setStudents([...students, newStudent]);
  }

  const removeStudentsCtx = () => {
    setStudents([]);
  }

  useEffect(() => {
    if (loaded) return
    if (students[0]) {
      if (students[0].firstName) return;
    }
    fetchStudents(); 
    setLoaded(true)
  }, [loaded, students]);

  return (
    <AppContext.Provider value={{
      students, 
      addStudentCtx, 
      removeStudentsCtx
    }}>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider; 