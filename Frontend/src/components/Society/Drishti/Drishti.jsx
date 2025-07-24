import React from "react"

import "./Drishti.css"

 const Drishti = () => {
    return (
        <div id="webcrumbs">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
                {/* Hero Section */}
                <header className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-indigo-900/10 z-0"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
                        <nav className="flex justify-between items-center mb-16">
                            <div className="flex items-center">
                                <svg
                                    className="w-10 h-10 text-indigo-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 2V4"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12 20V22"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M4 12H2"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22 12H20"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <h1 className="ml-3 text-2xl font-bold text-indigo-900">Drishti</h1>
                            </div>
                            <div className="hidden md:flex space-x-8">
                                <a href="#about" className="font-medium hover:text-indigo-600 transition-colors">
                                    About
                                </a>
                                {/* <a href="#events" className="font-medium hover:text-indigo-600 transition-colors">
                                    Events
                                </a> */}
                                <a href="#gallery" className="font-medium hover:text-indigo-600 transition-colors">
                                    Gallery
                                </a>
                                {/* <a href="#team" className="font-medium hover:text-indigo-600 transition-colors">
                                    Team
                                </a> */}
                                {/* <a href="#contact" className="font-medium hover:text-indigo-600 transition-colors">
                                    Contact
                                </a> */}
                            </div>
                            <div className="md:hidden">
                                <details className="relative">
                                    <summary className="list-none cursor-pointer p-2 rounded-full hover:bg-indigo-100 transition-colors">
                                        <span className="material-symbols-outlined">menu</span>
                                    </summary>
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                        <a
                                            href="#about"
                                            className="block px-4 py-2 hover:bg-indigo-50 transition-colors"
                                        >
                                            About
                                        </a>
                                        {/* <a
                                            href="#events"
                                            className="block px-4 py-2 hover:bg-indigo-50 transition-colors"
                                        >
                                            Events
                                        </a> */}
                                        <a
                                            href="#gallery"
                                            className="block px-4 py-2 hover:bg-indigo-50 transition-colors"
                                        >
                                            Gallery
                                        </a>
                                        {/* <a
                                            href="#team"
                                            className="block px-4 py-2 hover:bg-indigo-50 transition-colors"
                                        >
                                            Team
                                        </a>
                                        <a
                                            href="#contact"
                                            className="block px-4 py-2 hover:bg-indigo-50 transition-colors"
                                        >
                                            Contact
                                        </a> */}
                                    </div>
                                </details>
                            </div>
                        </nav>

                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-10 md:mb-0">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-indigo-900 mb-4">
                                    Capturing Moments, Creating Stories
                                </h2>
                                <p className="text-lg md:text-xl text-gray-700 mb-8">
                                    Drishti is a premier media society dedicated to visual storytelling, photography,
                                    and filmmaking excellence.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSdUxm28UF8rWU5Q1dqvKQHqaNxsyw6KvwcamiKjNbhN0i9gpA/viewform"
                                        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300"
                                    >
                                        Join Us
                                    </a>
                                    {/* <a
                                        href="#events"
                                        className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-indigo-50 transform hover:-translate-y-1 transition-all duration-300"
                                    >
                                        Our Events
                                    </a> */}
                                </div>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                                    alt="Photography equipment"
                                    className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
                                    keywords="camera, photography, media, equipment, professional"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* About Section */}
                <section id="about" className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">About Drishti</h2>
                            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <span className="material-symbols-outlined text-4xl text-indigo-600 mb-4">movie</span>
                                <h3 className="text-xl font-semibold mb-3">Filmmaking</h3>
                                <p className="text-gray-700">
                                    We create compelling short films, documentaries, and video projects that tell
                                    meaningful stories and push creative boundaries.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <span className="material-symbols-outlined text-4xl text-indigo-600 mb-4">
                                    photo_camera
                                </span>
                                <h3 className="text-xl font-semibold mb-3">Photography</h3>
                                <p className="text-gray-700">
                                    Our photography team captures moments with artistic vision, offering workshops and
                                    exhibitions to showcase talent.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <span className="material-symbols-outlined text-4xl text-indigo-600 mb-4">edit</span>
                                <h3 className="text-xl font-semibold mb-3">Content Creation</h3>
                                <p className="text-gray-700">
                                    From social media to digital magazines, we produce engaging content that resonates
                                    with audiences and tells compelling stories.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                                Founded in 2015, Drishti has grown into a vibrant community of creators united by their
                                passion for visual media. Our name "Drishti" means "vision" in Sanskrit, reflecting our
                                mission to see beyond the ordinary and capture the extraordinary.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Events Section */}
                {/* <section id="events" className="py-16 md:py-24 bg-indigo-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Upcoming Events</h2>
                            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                                    alt="Photography workshop"
                                    className="w-full h-48 object-cover"
                                    keywords="workshop, photography, learning, education, camera"
                                />
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm font-medium text-indigo-600">Oct 15, 2023</span>
                                        <span className="text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                                            Workshop
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Portrait Photography Masterclass</h3>
                                    <p className="text-gray-600 mb-4">
                                        Learn the art of portrait photography from industry professionals. Bring your
                                        camera and creativity!
                                    </p>
                                    <a
                                        href="#register"
                                        className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                                    >
                                        Register →
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                                    alt="Film screening"
                                    className="w-full h-48 object-cover"
                                    keywords="film festival, screening, cinema, movie theater, audience"
                                />
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm font-medium text-indigo-600">Nov 5, 2023</span>
                                        <span className="text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                                            Screening
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Student Film Festival</h3>
                                    <p className="text-gray-600 mb-4">
                                        A showcase of the best short films produced by our members and students from
                                        across the region.
                                    </p>
                                    <a
                                        href="#details"
                                        className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                                    >
                                        View Details →
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxnYWxsZXJ5fGVufDB8fHx8MTc1MzAyOTg4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Photo exhibition"
                                    className="w-full h-48 object-cover"
                                    keywords="gallery, exhibition, photography display, art show, museum"
                                />
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-sm font-medium text-indigo-600">Dec 10, 2023</span>
                                        <span className="text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                                            Exhibition
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">Annual Photo Exhibition</h3>
                                    <p className="text-gray-600 mb-4">
                                        Drishti's flagship event showcasing the year's best photographs from our
                                        talented members.
                                    </p>
                                    <a
                                        href="#attend"
                                        className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                                    >
                                        RSVP →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Gallery Section */}
                <section id="gallery" className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Our Gallery</h2>
                            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Nature photography"
                                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                                    keywords="nature, landscape, mountains, scenic, outdoor photography"
                                />
                            </div>
                            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80"
                                    alt="Travel photography"
                                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                                    keywords="travel, journey, road trip, adventure, exploration"
                                />
                            </div>
                            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1551818905-29c07d4802d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                                    alt="Portrait photography"
                                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                                    keywords="portrait, woman, fashion, model, beauty"
                                />
                            </div>
                            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1510265236892-329bfd7de7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzdHJlZXR8ZW58MHx8fHwxNzUzMDI5OTE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Street photography"
                                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                                    keywords="street, urban, city, architecture, people"
                                />
                            </div>
                            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                                    alt="Abstract photography"
                                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                                    keywords="abstract, camera, lens, photography equipment, creative"
                                />
                            </div>
                            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Documentary photography"
                                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                                    keywords="documentary, film making, cinema, director, behind the scenes"
                                />
                            </div>
                        </div>

                        <div className="text-center mt-10">
                            {/* <a
                                href="#more-gallery"
                                className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                View Full Gallery
                            </a> */}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                {/* <section id="team" className="py-16 md:py-24 bg-indigo-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Meet Our Team</h2>
                            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                        alt="Team member"
                                        className="w-full h-full object-cover"
                                        keywords="professional, man, businessman, portrait, headshot"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1">Arjun Sharma</h3>
                                <p className="text-indigo-600 mb-3">President</p>
                                <p className="text-gray-600 mb-4">
                                    Award-winning filmmaker with a passion for storytelling through visual media.
                                </p>
                                <div className="flex justify-center space-x-3">
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
                                        alt="Team member"
                                        className="w-full h-full object-cover"
                                        keywords="professional, woman, businesswoman, portrait, headshot"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1">Priya Patel</h3>
                                <p className="text-indigo-600 mb-3">Head of Photography</p>
                                <p className="text-gray-600 mb-4">
                                    Professional photographer specializing in portrait and documentary photography.
                                </p>
                                <div className="flex justify-center space-x-3">
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                        alt="Team member"
                                        className="w-full h-full object-cover"
                                        keywords="professional, man, young, casual, confident"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1">Vikram Mehta</h3>
                                <p className="text-indigo-600 mb-3">Technical Director</p>
                                <p className="text-gray-600 mb-4">
                                    Cinematographer and technical expert with an eye for perfect lighting and
                                    composition.
                                </p>
                                <div className="flex justify-center space-x-3">
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80"
                                        alt="Team member"
                                        className="w-full h-full object-cover"
                                        keywords="professional, woman, young, creative, portrait"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1">Neha Gupta</h3>
                                <p className="text-indigo-600 mb-3">Content Strategist</p>
                                <p className="text-gray-600 mb-4">
                                    Digital marketing expert who helps bring our visual stories to wider audiences.
                                </p>
                                <div className="flex justify-center space-x-3">
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Contact Section */}
                {/* <section id="contact" className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">Get In Touch</h2>
                            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <span className="material-symbols-outlined text-indigo-600 mr-4">
                                            landscape
                                        </span>
                                        <p className="text-gray-700">
                                            123 Creative Avenue
                                            <br />
                                            Media District, Bangalore
                                            <br />
                                            Karnataka, India 560001
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-indigo-600 mr-4">email</span>
                                        <p className="text-gray-700">info@drishtimedia.org</p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-indigo-600 mr-4">call</span>
                                        <p className="text-gray-700">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
                                    <div className="flex space-x-5">
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                                        >
                                            <i className="fa-brands fa-facebook"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                                        >
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                                        >
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                                        >
                                            <i className="fa-brands fa-youtube"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                                        >
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </div>
    )
}
export default Drishti;