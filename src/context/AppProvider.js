import React, { useState, useEffect } from 'react'; 
import AppContext from './AppContext';

const AppProvider = (props) => {
  const { children } = props; 
  const [ students, setStudents ] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_ATTENDANCE_API}/api/students`);
      const json = await response.json(); 
      console.log(json);
      setStudents(json);
    } catch (error) {
      console.log(error);
    }
  } 

  const addStudentCtx = (newStudent) => {
    setStudents([...students, newStudent]);
  }

  useEffect(() => {
    fetchStudents(); 
  }, []);

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