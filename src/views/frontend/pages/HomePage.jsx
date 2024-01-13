import { Facility } from "../../../components/frontend/About/Facility";
import Administration from "../../../components/frontend/Administration/Administration";
import Header from "../../../components/frontend/Navbar/Header.";
import ImageHeader from "../../../components/frontend/Navbar/ImageHeader";





const HomePage = () =>{
    return(
        <>
            <Header/>
            <ImageHeader/>
            <Facility/>
            <Administration/>
        </>
    )
}


export default HomePage;