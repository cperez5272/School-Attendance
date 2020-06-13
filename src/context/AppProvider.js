import React, { useState, useEffect } from 'react'; 
import AppContext from './AppContext';

const AppProvider = (props) => {
  const { children } = props; 
  const [ students, setStudents ] = useState(null);
  const [ loaded, setLoaded ] = useState(false); 

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_ATTENDANCE_API}/students`);
      const json = await response.json(); 
      setStudents(json);
    } catch (error) {
    }
  } 

  const addStudentCtx = (newStudent) => {
    console.dir(newStudent);
    setStudents([...students, newStudent]);
  }

  const removeStudentsCtx = () => {
    setStudents([]);
  }

  useEffect(() => {
    if (students) return;
    fetchStudents(); 
  }, [students]);

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