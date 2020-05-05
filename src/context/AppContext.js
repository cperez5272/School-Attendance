import { createContext } from 'react';

const AppContext = createContext({
  students: [], 
  addStudentCtx: () => {}, 
  removeStudent: () => {}
});

export default AppContext;