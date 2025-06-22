import React from 'react'

const About = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 text-center drop-shadow-lg">About Us</h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">Dataswift is dedicated to empowering businesses with modern data solutions. Our team of experts leverages the latest technologies to deliver fast, secure, and scalable services tailored to your needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-bold text-green-700 mb-2">Our Mission</h2>
                    <p className="text-gray-600">To help organizations unlock the full potential of their data through innovative solutions and expert guidance.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-xl font-bold text-green-700 mb-2">Why Choose Us?</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Experienced and passionate team</li>
                        <li>Cutting-edge technology</li>
                        <li>Client-focused approach</li>
                        <li>Reliable support</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About