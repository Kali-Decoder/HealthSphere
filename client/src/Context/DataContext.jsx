import React, { useContext,useEffect,useState } from "react";
import axiosInstance from "../utils/axiosRequest";
const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {
    const [loggedUserData,setLoggedUserData] = useState({});
    // useEffect(()=>{
    //     const getLoggedUserData = async () => {
    //         const endpoint = "api/user";
    //         let response = await axiosInstance.get(endpoint);
    //         if (response.status === 200) {
    //             setLoggedUserData(response.data);
    //             return;
    //         }
    //     }
    //     getLoggedUserData();
    // },[]);
  return (
    <>
      <DataContext.Provider value={{}}>{children}</DataContext.Provider>
    </>
  );
};
export const useDataContext = () => useContext(DataContext);
export default DataContextProvider;
