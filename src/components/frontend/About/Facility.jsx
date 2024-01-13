import { IoLibrary } from "react-icons/io5";
import { MdSportsHandball } from "react-icons/md";
import { FaBus } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";



const Facility = () => {

    const small = 33;
    const large = 55;
    return (
        <div className="py-8 px-8">
            <div>
                <p className="text-center uppercase text-3xl tracking-wider font-bold">nava jyoti vidyapith <span className="text-schoolName underline underline-offset-4">naihati</span></p>
            </div>
            <div className="px-14 flex justify-between space-x-4 pt-10">
                <div className="flex flex-col items-center">
                    <IoLibrary size={small} />
                    <span className="text-xs pt-2">Library</span>
                </div>
                <div className="flex flex-col items-center">
                    <MdSportsHandball size={small} />
                    <span className="text-xs pt-2">Sports</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaBus size={large} />
                    <span className="text-xs pt-2">Transportation</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaBriefcaseMedical size={small} />
                    <span className="text-xs pt-2">Medicare</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaComputer size={small} />
                    <span className="text-xs pt-2">Comp Labs</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 py-6 mt-6 px-6">
                <div className="pt-10  border-r-2">
                    <ul>
                        <li className="text-xl py-2">Highly Skilled Staff</li>
                        <li className="text-xl py-2">Best Student Teacher Ratio</li>
                        <li className="text-xl py-2">Best Education Across Locality</li>
                    </ul>
                </div>
                <div>
                    <div className="float--right">
                        <p className="tracking-wider">
                            “Step into the realm of <span className="uppercase font-semibold">nava jyoti vidyapith <span className="text-schoolName uppercase font-semibold">naihati</span></span>, a haven where the seeds of knowledge blossom into remarkable achievements.  We're a community devoted to sculpting young minds into empowered individuals. Our ethos revolves around fostering an inclusive environment that celebrates diversity and cultivates a passion for learning. Where innovation and curiosity pave the way for academic excellence, and where every student's potential is cherished and nurtured”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}




export { Facility };