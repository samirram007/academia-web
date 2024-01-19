import React from 'react'

const FooterSection = () => {
    return (
        <section id="footer">
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <p className="text-sm">School Name is dedicated to providing...</p>
                            {/* Add more information about the school */}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/about" className="text-sm hover:text-gray-300">About</a>
                                </li>
                                <li>
                                    <a href="/programs" className="text-sm hover:text-gray-300">Programs</a>
                                </li>
                                {/* Add more quick links */}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p className="text-sm mb-2">123 Street Name</p>
                            <p className="text-sm mb-2">City, State ZIP</p>
                            <p className="text-sm mb-2">Email: example@example.com</p>
                            <p className="text-sm">Phone: +123 456 7890</p>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-700" />
                    <div className="flex justify-between items-center">
                        <p className="text-sm">&copy; {new Date().getFullYear()} School Name. All Rights Reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
                            <a href="#" className="text-sm hover:text-gray-300">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default FooterSection
