/* eslint-disable react/prop-types */

import { ImageUploadButton } from "../element/Buttons";






const DashBoardHeader = ({ headerName }) => {
    return (
        <div className="w-full py-2 px-4 bg-slate-600 rounded-md">
            <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                    <span className="text-white  font-semibold">{headerName ? headerName : 'Index'}</span>
                </div>
                <div className="px-8">
                    <span className="flex float-right">
                        <ImageUploadButton type={'button'} btnName={'Upload'} />
                    </span>
                </div>
            </div>
        </div>
    )
}



export default DashBoardHeader;