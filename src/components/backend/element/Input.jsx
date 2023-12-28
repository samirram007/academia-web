/* eslint-disable react/prop-types */


const Input = () =>{
    return(
        <input type="text"  id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
    )
}


const InputWithLabel = ({placeHolder,type,labelName,inputValue, setInputValue}) =>{

   
    return(
        <div>
            <label htmlFor={labelName ? labelName : 'Name'} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{labelName}</label>
            <input type={type ? type: 'text'} id={labelName? labelName: 'Name'} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder={placeHolder} required autoComplete="off" />
        </div>
    )
}


export {Input, InputWithLabel};