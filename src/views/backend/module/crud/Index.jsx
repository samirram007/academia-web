import { useState } from "react";
import { UserAddModal } from "../../../../components/backend/element/Modals";
import NavbarHeader from "../../../../components/backend/headers/NavBarHeader";




const Index = () =>{

    const [modalOpen, setModalOpen] = useState(false);

    const handleShow = () =>{
        setModalOpen(!modalOpen);
    }

    return(
        <>
            <NavbarHeader openClick={handleShow}/>
            {modalOpen && <UserAddModal modalTitle={'Add Addresses'} isOpen={modalOpen} isClose={handleShow} />}
        </>
    )
}




export default Index;