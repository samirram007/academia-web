import { useSelector } from 'react-redux';
import Profile from '../../../assets/images/profileImage.jpg';




const NavbarLayout = () =>{

    const nameUrl = useSelector(state => state.breadCrumbReducer.urlName);
    const childUrl = useSelector(state => state.breadCrumbChildReducer.childUrl);
    // console.log(childUrl);


    return(
        <>
            <div className="z-50 fixed left-0 right-0 top-0 h-[76px] px-6 py-4 bg-white border-b border-neutral-200 justify-between items-center gap-5 inline-flex">
                <div className="flex items-center gap-6">
                    <div className="border-6 pr-6 border-[#e4e4e4] ">
                        {/* <img src={Profile} alt="Profile Image" /> */}
                        <span>School</span>
                    </div>
                    <div className="text-sm  leading-8 underline underline-offset-2 text-[# 19191c]">
                        <span className='text-blue-700'>{nameUrl ? nameUrl : 'admin'}</span><span>{`/`}</span> <span className='text-sky-500'>{childUrl ? childUrl : ''}</span>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-8">
                    <div className="hidden rounded-[50px] border border-neutral-200 justify-start items-start md:flex">
                        {/* <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-l-full duration-300 items-center gap-2 flex">
                            <div className="relative w-6 h-6">
                                <div className="h-5 top-0.5 left-[6px] absolute">

                                </div>
                            </div>
                            <div className="text-base text-zinc-900">
                                Key
                            </div>
                        </div>
                        <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-l-full duration-300 items-center gap-2 flex">
                            <div className="relative w-6 h-6">
                                <div className="h-5 top-0.5 left-[6px] absolute">

                                </div>
                            </div>
                            <div className="text-base text-zinc-900">
                                Key2
                            </div>
                        </div> */}
                    </div>
                    <div className="flex items-center gap-8">
                        <img src={Profile} alt="" className='rounded-full w-11 h-11' />
                    </div>
                </div>
            </div>
        </>
    )
}




export default NavbarLayout;