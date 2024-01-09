/* eslint-disable react/prop-types */
import { NavbarButton } from "../element/Buttons";






const NavbarHeader = ({openClick}) => {
    return (
        <div className="w-full px-8 py-2 rounded-md bg-zinc-700">
            <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center">
                    <span className="text-lg font-semibold text-white">Index</span>
                </div>
                <div>
                    <span className="flex float-right">
                        <NavbarButton btnName={'Add'} onCilckBtn={openClick} />
                    </span>
                </div>
            </div>
        </div>
    )
}


export default NavbarHeader;