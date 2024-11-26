import React, { createContext, useState, useEffect } from 'react';
import { getlocalStorage, setlocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();
 
const AuthProvider = ({ children }) => {
  setlocalStorage()
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
  
