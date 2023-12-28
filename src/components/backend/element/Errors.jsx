/* eslint-disable react/prop-types */


const LoginError = ({error_msg}) =>{
    return(
        <p className="pt-2 mb-4 text-xs font-medium text-red-800 dark:text-red-800" role="alert">{error_msg}</p>
    )
}



export {LoginError};