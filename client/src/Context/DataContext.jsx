import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosRequest";
const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {
  const [loggedUserData, setLoggedUserData] = useState({});
  const getUserData = async (email) => {
    try {
      const endpoint = `api/userData/${email}`;
      let response = await axiosInstance.get(endpoint);
      if (response.status === 200) {
        setLoggedUserData(response.data.data);
        console.log(response.data.data);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <DataContext.Provider value={{ getUserData, loggedUserData }}>
        {children}
      </DataContext.Provider>
    </>
  );
};
export const useDataContext = () => useContext(DataContext);
export default DataContextProvider;
