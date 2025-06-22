import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-green-400 via-green-600 to-green-800 text-white py-8 mt-12 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="font-bold text-lg mb-2 md:mb-0 drop-shadow">&copy; {new Date().getFullYear()} Dataswift. All rights reserved.</div>
                <div className="flex space-x-6">
                    <a href="/" className="hover:text-green-200 transition font-semibold">Home</a>
                    <a href="mailto:gopikumar764482@gmail.com" className="hover:text-green-200 transition font-semibold">Contact</a>
                    <a href="/about" className="hover:text-green-200 transition font-semibold">About</a>
                    <a href="/service" className="hover:text-green-200 transition font-semibold">Services</a>
                </div>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="text-green-200 hover:text-white transition" aria-label="Twitter">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.77c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.82 1.92 3.6-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z" /></svg>
                    </a>
                    <a href="#" className="text-green-200 hover:text-white transition" aria-label="LinkedIn">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer