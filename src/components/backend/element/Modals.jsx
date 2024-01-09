/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { AddressSelectBox, UserSelectBox } from "./Select";



const ImageUploadModal = ({ closeModal }) => {

    const [uploadedImage, setUploadeImage] = useState(null);


    console.log(uploadedImage);
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 outline-none focus:outline-none backdrop-filter backdrop-blur-sm">
                <div className="relative z-50 w-auto max-w-3xl mx-auto my-6 overflow-hidden">
                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-gray-300 border-solid rounded-t">
                            <span className="text-xl font-semibold">Upload Your Image</span>
                            <button onClick={closeModal} className="float-right text-black bg-transparent border-0">
                                <span className="block w-6 h-6 text-xl text-black opacity-7"><IoClose size={26} /></span>
                            </button>
                        </div>
                        <div className="relative flex-auto p-6 overflow-auto">
                            <div className="grid grid-cols-2 gap-6">
                                <form className="w-full px-8 pt-6 pb-8 overflow-hidden bg-gray-200 rounded shadow-md ">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                                    <input onChange={(event) => setUploadeImage(event.target.files[0])} className="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer text-md bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

                                    {uploadedImage &&
                                        <div className="pt-6">
                                            <span className="text-sm underline underline-offset-2">Image Description</span>
                                            <div className="pt-4">
                                                <span>Name: </span><span>{uploadedImage.name}</span>
                                            </div>
                                        </div>
                                    }
                                </form>

                                {uploadedImage &&
                                    <div className="flex flex-row justify-center w-full py-6">
                                        <div className="">
                                            <img src={URL.createObjectURL(uploadedImage)} height={'300px'} alt="Not Found" />
                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}






const UserAddModal = ({ isOpen, isClose, modalTitle }) => {


    


    return (
        <div className={isOpen ? 'fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center':'hidden'}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-50 w-auto p-4 overflow-y-auto bg-white rounded-lg">
          <div className="flex items-center justify-between pb-2 border-b">
            <h2 className="text-lg font-semibold">{modalTitle ? modalTitle : 'Modal Title'}</h2>
            <button onClick={isClose}>
              <MdClose size={30} />
            </button>
          </div>
          <div className="w-auto h-auto p-4">
            <div className="grid grid-cols-5 gap-6">
              <div className="">
                <UserSelectBox />
              </div>
              <div className="">
                <AddressSelectBox/>
              </div>
            <div>
             
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}


export { ImageUploadModal, UserAddModal };