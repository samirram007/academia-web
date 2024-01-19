import React from 'react'
import Background from './Background'

const AboutSection = () => {
    return (
        <>

            <section id="about" className="mt-[10rem] mx-5 p-5 md:mx-[5rem] md:p-20  bg-zinc-700/30  dark:bg-zinc-200/10 rounded-lg z-10 animated fadeInDown">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our School</h2>
                    <div className="flex flex-col md:flex-row items-center md:justify-between">
                        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                            <p className="text-lg leading-relaxed">
                                At [School Name], we are dedicated to fostering a supportive and inclusive environment for our students' growth and development.
                                Our mission is to provide a comprehensive educational experience that nurtures intellectual curiosity, encourages creativity, and
                                instills a lifelong love for learning.
                            </p>
                            <p className="text-lg leading-relaxed mt-4">
                                With experienced educators and state-of-the-art facilities, we offer a range of academic programs and extracurricular activities
                                designed to empower our students to reach their full potential. Our commitment to excellence drives us to create a dynamic learning
                                community where every individual is valued and inspired to thrive.
                            </p>
                        </div>
                        <div className="md:w-1/2 md:h-[500px] overflow-hidden relative rounded-lg shadow-md  ">
                            <img
                                className="w-full h-auto    absolute bottom-0 -translate-x-1/2"
                                src="https://images.unsplash.com/photo-1598966835412-6de6f92c243d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="School Building"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection
