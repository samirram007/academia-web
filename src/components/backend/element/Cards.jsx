/* eslint-disable no-dupe-else-if */
import { useState } from "react";
import { LoginButton } from "./Buttons";
import { InputWithLabel } from "./Input";
import AuthService from "../../../services/AuthService";
import { LoginError } from "./Errors";
import { saveToken, saveUserDetail } from "../../../redux/features/slice/user/User-Detail-Slice";
import { useDispatch } from "react-redux";




const LoginCard = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const dispatch = useDispatch();
    
    const {http} = AuthService();
    
    const handleSubmit = () =>{
        if(email == '' || password == '')
        {
            setEmailErr(true);
            setPasswordErr(true);
        }
        else if(email == '')
        {
            setEmailErr(true);
            setPasswordErr(false);
        }
        else if(password == '')
        {
            setEmailErr(false);
            setPasswordErr(true);
        }
        else 
        {
            setEmailErr(false);
            setPasswordErr(false);
            try{
                http.post('login',{email: email, password: password})
                .then((response) =>{
                    if(response)
                    {
                        dispatch(saveUserDetail(response.data.data));
                        dispatch(saveToken(response.data.token));
                        // console.log(response.data.token);
                    }
                })
            }catch(error)
            {
                console.log(error);
            }
           
        }
        

    
    }
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="py-4">
                <InputWithLabel placeHolder={'Enter Username'} type={'text'} labelName={'Username'} inputValue={email} setInputValue={setEmail}  />
                {emailErr ? <LoginError error_msg={'Please do not leave this field empty'} />: ''}
            </div>
            <div className="py-4">
                <InputWithLabel placeHolder={'Enter Password'} type={'password'} labelName={'Password'} inputValue={password} setInputValue={setPassword} />
                {passwordErr ? <LoginError error_msg={'Please do not leave this field empty'} />:''}
            </div>
            <div className="flex justify-center py-4">
                <LoginButton type={'button'} name={'Login'} onLoginSubmit={handleSubmit} />
            </div>



        </div>
    )
}




export { LoginCard };