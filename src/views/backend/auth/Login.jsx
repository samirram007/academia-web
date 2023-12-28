import { useSelector } from "react-redux";
import { LoginCard } from "../../../components/backend/element/Cards";



const Login = () =>{
    const userData = useSelector(state => state.tokenReducer);
    console.log(userData, 'data');
    return(
        <>
            <LoginCard/>
        </>
    )
}



export default Login;