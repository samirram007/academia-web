import { SignUpButton } from "./Buttons";
import { InputWithLabel } from "./InputBox";





const LoginForm = () =>{
    return(
        <div>
            <div className="mb-4">
                <InputWithLabel placeHolder={'username@email.com'} type={'email'} labelName={'Email'}  />
            </div>
            <div className="mb-4">
                <InputWithLabel placeHolder={'•••••••••••'} type={'password'} labelName={'Password'}  />
            </div>
            <p className="text-xs underline underline-offset-1 text-blue-700">Forgot Password?</p>
            <div className="">
                <SignUpButton name={'Login'} />
            </div>
        </div>
    )
}




export {LoginForm};