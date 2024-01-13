import { Link } from "react-router-dom";
import { SignUpButton } from "../elements/Buttons";
import SchoolLogo from '../../../assets/images/schoolLogo.jpeg';





const Header = () => {
    return (


        <nav className="bg-[#F2EFE4] py-4 px-8">
            <div className="grid grid-cols-2 gap-4">
                <div className="">
                    <p className="text-center text-md">Admission Open for 2024 <span className="text-xs underline text-blue-500">click here</span></p>
                </div>
                <div className=" flex justify-between px-12">
                    <div>
                        <p className="text-sm">Email: <span>info@email.com</span></p>
                    </div>
                    <div>
                        <p className="text-sm">Contact us: +91 999999999/ 9898989898</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 pt-4">
                <div className=" flex ">
                    <div className="mr-8">
                        <img src={SchoolLogo} className="w-12 rounded-full" alt="School Logo" />
                    </div>
                    <div className="align-center content-center flex align-middle flex-wrap">
                        <p className="text-uppercase text-xl font-semibold">NAVA JYOTI VIDYAPITH <span className="text-schoolName underline underline-offset-4">NAIHATI</span></p>
                    </div>
                </div>
                <div className="overflow-hidden px-8">
                    <ul className="flex flex-wrap text-sm justify-between pt-2"  style={{alignItems:'center'}}>
                        <li className="pr-4 underline underline-offset-2">Home</li>
                        <li className="pr-4">About</li>
                        <li className="pr-4">Admission</li>
                        <li className="pr-4">Gallery</li>
                        <li className="pr-4">Academics</li>
                        <li className="pr-4">Administration</li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}



export default Header;