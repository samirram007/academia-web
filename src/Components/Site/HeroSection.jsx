import React from 'react'
import Background from './Background'
import { useTranslation } from 'react-i18next'
const HeroSection = () => {
    const { t } = useTranslation()
    return (
        <>

            <section id="hero" className="  mt-[2rem] mx-5 p-5 md:mx-20 md:p-20  bg-zinc-700/30  dark:bg-zinc-200/10 rounded-lg z-10 animated fadeInDown">

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row  items-center justify-between">
                    <div className="md:w-1/2 md:ml-8 text-center md:text-left  dark:text-violet-300">

                        <h1 className="text-4xl md:text-6xl font-bold mb-4
                            bg-gradient-to-r from-pink-100 to-indigo-600 bg-clip-text text-transparent ">{t("Welcome to Our School")}</h1>
                        <p className="text-lg md:text-xl mb-8 ">{t("Empowering Minds, Shaping Futures")}</p>
                        <div className="flex space-x-4  justify-center md:justify-start">
                            <button className=" ">
                                <div className="h-17 md:h-12 w-full rounded-md bg-gradient-to-r
                                 from-blue-500 via-violet-300 to-pink-500 p-[2px]
                                 hover:bg-gradient-to-l   ease-in-out transition-colors duration-2000
                                 ">
                                    <div className="flex h-full w-full rounded items-center justify-center   bg-zinc-900/90  back">
                                        <h1 className="text-lg py-2 px-4 font-bold  bg-gradient-to-r hover:bg-gradient-to-l from-blue-500 via-violet-300 to-pink-500
                            text-transparent
                            bg-clip-text">{t('Explore More')}</h1>
                                    </div>
                                </div>
                            </button>
                            {/* <button className="
                            bg-gradient-to-r from-blue-500 via-violet-300 to-pink-500
                            text-transparent
                            bg-clip-text font-bold p-1
                            py-2 px-4 rounded-lg border border-white
                             hover:bg-zinc-100/10 hover:text-zinc-100
                            ease-in-out transition duration-500 ">
                                Explore More
                            </button> */}
                            <button className="bg-gradient-background text-blue-900 dark:text-violet-300 py-0 px-2   rounded-lg   border-[3px] border-indigo-900 hover:border-indigo-500/70 hover:bg-blue-900 hover:text-white ease-in-out transition duration-500">
                                <h1 className="text-lg py-2 px-4 font-bold  bg-gradient-to-r hover:bg-gradient-to-l from-blue-500 via-violet-300 to-pink-500
                            text-transparent
                            bg-clip-text">{t('Register Now')}</h1>

                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex flex-wrap justify-center gap-4">
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1494059980473-813e73ee784b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        <img
                            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg shadow-md "
                            src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Image"
                        />
                        {/* Add more img tags for additional images */}
                    </div>
                </div>
            </section >
        </>

    )
}

export default HeroSection
