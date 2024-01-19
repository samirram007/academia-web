import React from 'react';

const ContactSection = () => {
    return (
        <>
            <section id="contact" className="mt-[10rem] mx-5 mb-5  p-5 md:mx-20 md:mb-[10rem] md:p-20  bg-zinc-700/30  dark:bg-zinc-200/10 rounded-lg z-10 animated fadeInDown">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 pb-2 border-zinc-100">Contact Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                            <p className="mb-2">RGM-11/2, Hatiara Extention, Hatiara,</p>
                            <p className="mb-2">Rajarhat, Kolkata,</p>
                            <p className="mb-2">West Bengal 700157</p>
                            <p className="mb-2">Email: samir@gmail.com</p>
                            <p>Phone: +824 070 7689</p>

                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Google Map</h3>
                            <div className="h-80 rounded-lg shadow-md">
                                {/* Replace the URL with your Google Map Embed URL */}
                                <iframe
                                    title="Google Map"
                                    className="w-full h-full rounded-lg"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7366.501605547548!2d88.45003734116945!3d22.6071077166979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02757fcaf5fa09%3A0x8fa854cbea6d83f5!2sWISH%20COMPUTER%20%26%20EDUCATION%20CENTER!5e0!3m2!1sen!2sin!4v1702426062313!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactSection;
