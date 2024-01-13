import HomeCss from '../../../styles/modules/HomeCss.module.css';
import { IoMdPerson } from "react-icons/io";





const Administration = () => {
    return (
        <div className="">
            <div className={`${HomeCss.administration}`}>
                <p className='text-center text-3xl font-semibold text-white tracking-widest pt-10 pb-4'>Administration</p>
                <p className='text-center text-gray-300 font-semibold pb-6'>"Education is the passport to the future, for tomorrow belongs to those who prepare for it today”</p>
            </div>
            <div className='px-8 pt-8 grid grid-cols-3 gap-4'>
                <div className='col-span-1' >
                    <div className='flex flex-col w-48 text-center content-center items-center overflow-hidden'>
                        <IoMdPerson size={180} />
                        <p className='text-sm'>Shri Ram Ghosh</p>
                        <p className='text-xs'>Principal</p>
                    </div>
                </div>
                <div className='col-span-2 border-l-2 px-6 flex items-center'>
                    <p>Welcome to <span className='uppercase text-md font-semibold'>nava jyoti vidyapith <span className='text-schoolName'>naihati</span></span>, a place where dreams take flight and futures are crafted. As the principal of this vibrant institution, I am privileged to witness the incredible journey of growth and learning that unfolds within these walls.

                        Each of you carries boundless potential and unique talents. Embrace curiosity, challenge yourself, and dare to dream big. Here, in our nurturing environment, we foster not just academic excellence, but also character, resilience, and empathy. <span className='text-sm text-blue-600 underline underline-offset-2'>Read More</span></p>
                </div>
            </div>
        </div>
    )
}



export default Administration;