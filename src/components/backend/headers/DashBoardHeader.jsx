/* eslint-disable react/prop-types */

import { useState } from "react";
import { ModalButton } from "../element/Buttons";
import { ImageUploadModal } from "../element/Modals";






const DashBoardHeader = ({ headerName }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () =>{
        setModalOpen(!modalOpen);     
    }

    // const CloseModal = () =>{setModalOpen(!modalOpen)};


    return (
        <>
        <div className="w-full px-4 py-2 rounded-md bg-slate-600">
            <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                    <span className="font-semibold text-white">{headerName ? headerName : 'Index'}</span>
                </div>
                <div className="px-8">
                    <span className="flex float-right">
                        <ModalButton onclickBtn={handleModal} type={'button'} btnName={'Upload'}  />
                    </span>
                </div>
            </div>
        </div>
        {/* <ImageUploadModal /> */}
        {modalOpen && <ImageUploadModal closeModal={handleModal} />}
        </>
    )
}



export default DashBoardHeader;