import { useState } from "react";
import { CustomInputLabel } from "../../../components/backend/element/Input";
import { LoginButton } from "../../../components/backend/element/Buttons";
import AuthService from "../../../services/AuthService";




const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   

    const {http,setDetail} = AuthService();

   
    const handleLogin = () =>{


        http.post('/login', { username: username, password: password })
        .then((response) => {
            if (response) {
                
                setDetail(response.data, response.data.token);

            }
            else if (response.data.status == 401) {
                console.log(response);
            }
        });
    }

    


    return (
        <div className="bg-[#f5eedff2] flex flex-col align-middle items-center h-screen">
            <div className="w-full max-w-sm p-4 m-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <div className="text-center">
                <span className="text-3xl font-semibold">School</span>
            </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-center ">Lets Get Started</span>
                    <p className="text-xs text-center">Welcome! <span>Please enter your details</span></p>
                </div>
                <form action="">
                    <CustomInputLabel 
                    placeHolderName={'username'} 
                    labelName={'Username'} 
                    type={'text'} 
                    labelClass={'block mb-2 text-sm font-medium text-gray-900 font-semibold'} 
                    inputClass={'bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '}
                    inputValue={username}
                    setInputValue={setUsername} />
                    <CustomInputLabel 
                    placeHolderName={'••••••••'} 
                    labelName={'Password'} 
                    type={'password'} 
                    labelClass={'block mb-2 text-sm font-medium text-gray-900 font-semibold'} 
                    inputClass={'bg-gray-100 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '}
                    inputValue={password}
                    setInputValue={setPassword} />
                    <LoginButton name={'Login'} type={'button'} onLoginSubmit={handleLogin} />
                </form>
            </div>
        </div>

    )
}



export default Login;