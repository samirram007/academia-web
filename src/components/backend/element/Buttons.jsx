/* eslint-disable react/prop-types */



const LoginButton = ({name,type,onLoginSubmit}) =>{
    return(
        <button onClick={onLoginSubmit} type={type ? type : 'button'} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{name}</button>
    )
}



const ImageUploadButton = ({type,btnName}) =>{
    return(
        <button type={`${type}`} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}>{btnName}</button>
    )
}



export {LoginButton,ImageUploadButton};