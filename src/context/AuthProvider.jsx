import React, { createContext, useState, useEffect } from 'react';
import { getlocalStorage, setlocalStorage } from '../utils/LocalStorage';
localStorage.clear()
export const AuthContext = createContext();
 
const AuthProvider = ({ children }) => {
  
    const [authData, setUserData] = useState({ employees: [], admin: null });

     function modifiedData(){

      // setlocalStorage()
      const { employees = [], admin = null } = getlocalStorage();
      setUserData({ employees, admin });
    }
    useEffect(() => {
     modifiedData();
    },[]);
  
    return (
      <AuthContext.Provider value={{authData,modifiedData}}>
        {children}
      </AuthContext.Provider>
    );
  };
  

 
  export default AuthProvider;
  
