import React from 'react'

const Contact = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 text-center drop-shadow-lg">Contact Our Team</h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">We'd love to hear from you! Fill out the form below and our team will get back to you as soon as possible.</p>
            <form className="bg-white rounded-xl shadow-md p-8 w-full max-w-md flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" required />
                <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" required />
                <textarea placeholder="Your Message" rows={4} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-200" required></textarea>
                <button type="submit" className="bg-green-700 text-white py-2 rounded-md font-semibold hover:bg-green-800 transition">Send Message</button>
            </form>
        </div>
    )
}

export default Contact