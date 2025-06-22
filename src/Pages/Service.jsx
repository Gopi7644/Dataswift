import React from 'react'

const services = [
    {
        title: 'Data Analytics',
        description: 'Unlock insights from your data with our advanced analytics solutions tailored to your business needs.',
        icon: '📊',
    },
    {
        title: 'Cloud Integration',
        description: 'Seamlessly integrate and manage your data in the cloud for scalability and security.',
        icon: '☁️',
    },
    {
        title: 'AI & Automation',
        description: 'Leverage artificial intelligence and automation to streamline your operations and boost productivity.',
        icon: '🤖',
    },
    {
        title: 'Consulting',
        description: 'Get expert advice and support for your digital transformation journey.',
        icon: '💡',
    },
]

const Service = () => {
    return (
        <div className="min-h-[70vh] bg-gradient-to-br from-green-50 to-green-100 py-12 px-4 flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 text-center drop-shadow-lg">Our Services</h1>
            <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">Discover the range of services we offer to help your business grow and succeed in the digital age.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
                {services.map((service, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center hover:scale-105 transition">
                        <div className="text-5xl mb-4">{service.icon}</div>
                        <h2 className="text-xl font-bold text-green-700 mb-2">{service.title}</h2>
                        <p className="text-gray-600 text-center">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service