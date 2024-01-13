





const InputWithLabel = ({labelName,placeHolder,type}) =>{
    return(
        <div className="mb-4">
            <label htmlFor={labelName ? labelName : 'id'} className="block pl-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">{labelName}</label>
            <input type={type ? type : 'text'} className='w-full block bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-black focus:border-blue-600 dark:bg-gray-700  p-2.5' required autoComplete="off"  id={labelName ? labelName : 'id'} placeholder={placeHolder ? placeHolder : 'placeholder'}/>
        </div>
    )
}




export {InputWithLabel};