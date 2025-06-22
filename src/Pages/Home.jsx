import React from 'react'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-green-50 to-green-100 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 text-center drop-shadow-lg">Welcome to Dataswift</h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-2xl">Empowering your data journey with modern solutions. Explore our services and discover how Dataswift can help you achieve your goals.</p>
            <a href="/service" className="inline-block px-8 py-3 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 transition text-lg font-semibold">Get Started</a>
            <div className="mt-12 flex flex-wrap gap-6 justify-center">
                <div className="bg-white rounded-xl shadow-md p-6 w-64 text-center hover:scale-105 transition">
                    <h2 className="text-xl font-bold text-green-700 mb-2">Fast & Secure</h2>
                    <p className="text-gray-600">Experience blazing fast and secure data management for your business.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 w-64 text-center hover:scale-105 transition">
                    <h2 className="text-xl font-bold text-green-700 mb-2">Modern Solutions</h2>
                    <p className="text-gray-600">We use the latest technologies to deliver scalable and reliable services.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6 w-64 text-center hover:scale-105 transition">
                    <h2 className="text-xl font-bold text-green-700 mb-2">Expert Support</h2>
                    <p className="text-gray-600">Our team is here to support you every step of the way.</p>
                </div>
            </div>
        </div>
    )
}

export default Home