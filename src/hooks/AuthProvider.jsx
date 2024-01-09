import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router";


const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [user, setUser] = useLocalStorage("user",null);
    const navigate = useNavigate();
    
}