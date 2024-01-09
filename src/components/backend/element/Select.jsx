





const UserSelectBox = () => {
    return (
        <div>
            <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select User</label>
            <select name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" id="user">
                <option defaultValue={`${0}`}>Select Address</option>
                <option value={`${1}`}>User1</option>
                <option value={`${2}`}>User2</option>
                <option value={`${3}`}>User3</option>
            </select>
        </div>
    )
}




const AddressSelectBox = () => {

    

    const addressData = [
        {
            "id": 1,
            "name": "Permanent"
        },
        {
            "id": 2,
            "name": "Temporary"
        },
        {
            "id": 3,
            "name": "Other"
        }
    ];

   

    return (
        <div>
            <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select User</label>
            <select name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" id="user">
                <option defaultValue={`${0}`}>Select User of India</option>
                {
                    addressData.map((indexData, index) => (
                        <option key={index} value={indexData.name}>{indexData.name}</option>
                    ))
                }


            </select>
        </div>
    )
}



export { UserSelectBox, AddressSelectBox };