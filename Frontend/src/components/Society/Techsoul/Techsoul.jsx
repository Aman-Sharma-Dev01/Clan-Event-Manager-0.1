import React from "react"

import "./Techsoul.css"

export const Techsoul = () => {
    return (
        <div id="webcrumbs">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 py-12 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-16 text-center">
                        <div className="flex justify-center mb-6">
                            <div className="h-24 w-24 rounded-full bg-primary-600 flex items-center justify-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-500/30">
                                <span className="material-symbols-outlined text-5xl">devices</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-indigo-400">
                            Tech Soul Society
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                            From the latest gadgets to apps to cutting-edge technology, the tech society of MRU covers
                            it all.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 justify-center">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUxm28UF8rWU5Q1dqvKQHqaNxsyw6KvwcamiKjNbhN0i9gpA/viewform" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 flex items-center gap-2">
                                <span className="material-symbols-outlined">rocket_launch</span>
                                Join Our Community
                            </a>
                            {/* <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/30 flex items-center gap-2">
                                <span className="material-symbols-outlined">event</span>
                                Upcoming Events
                            </button> */}
                        </div>
                        {/* Next: "Add animated waves divider" */}
                    </div>

                    {/* Mission Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                            <div className="h-1 w-24 bg-primary-500 mx-auto rounded-full"></div>
                        </div>
                        <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl hover:shadow-primary-500/10 transition-all duration-500">
                            <p className="text-lg text-center text-slate-300 mb-8">
                                Our goal is to provide students with a platform to showcase their technical skills,
                                organize exciting events, and participate in competitions to foster innovation and
                                technological growth.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="h-16 w-16 bg-primary-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <span className="material-symbols-outlined text-3xl text-primary-400">
                                            school
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-center">Skill Development</h3>
                                    <p className="text-slate-300 text-center">
                                        Workshops, training sessions, and hands-on projects to develop technical
                                        expertise.
                                    </p>
                                </div>
                                <div className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="h-16 w-16 bg-primary-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <span className="material-symbols-outlined text-3xl text-primary-400">
                                            groups
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-center">Community Building</h3>
                                    <p className="text-slate-300 text-center">
                                        Creating a network of tech enthusiasts to collaborate and innovate together.
                                    </p>
                                </div>
                                <div className="bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="h-16 w-16 bg-primary-600/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <span className="material-symbols-outlined text-3xl text-primary-400">
                                            emoji_events
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-center">Competitions</h3>
                                    <p className="text-slate-300 text-center">
                                        Representing MRU in various tech competitions and hackathons nationwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Next: "Add testimonials from society members" */}
                    </div>

                    {/* Events Section */}
                    {/* <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Events</h2>
                            <div className="h-1 w-24 bg-primary-500 mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-slate-800/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-48 bg-slate-700 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107"
                                        alt="Hackathon"
                                        className="w-full h-full object-cover"
                                        keywords="hackathon, coding, programming, competition"
                                    />
                                    <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Annual
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">MRU Hackathon</h3>
                                    <p className="text-slate-300 mb-4">
                                        A 48-hour coding marathon where teams compete to build innovative solutions to
                                        real-world problems.
                                    </p>
                                    <div className="flex items-center text-sm text-slate-400">
                                        <span className="material-symbols-outlined text-primary-400 mr-1">
                                            calendar_month
                                        </span>
                                        October 2023
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-800/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-48 bg-slate-700 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2"
                                        alt="Tech Workshop"
                                        className="w-full h-full object-cover"
                                        keywords="workshop, learning, technology, education"
                                    />
                                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Monthly
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">Tech Workshops</h3>
                                    <p className="text-slate-300 mb-4">
                                        Hands-on workshops covering the latest technologies, programming languages, and
                                        tools.
                                    </p>
                                    <div className="flex items-center text-sm text-slate-400">
                                        <span className="material-symbols-outlined text-primary-400 mr-1">
                                            calendar_month
                                        </span>
                                        Every Month
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-800/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-48 bg-slate-700 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                                        alt="Tech Talk"
                                        className="w-full h-full object-cover"
                                        keywords="tech talk, seminar, industry experts, learning"
                                    />
                                    <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                        Quarterly
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">Industry Tech Talks</h3>
                                    <p className="text-slate-300 mb-4">
                                        Engaging sessions with industry experts sharing insights on emerging
                                        technologies and career paths.
                                    </p>
                                    <div className="flex items-center text-sm text-slate-400">
                                        <span className="material-symbols-outlined text-primary-400 mr-1">
                                            calendar_month
                                        </span>
                                        Quarterly
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/30 inline-flex items-center gap-2">
                                <span className="material-symbols-outlined">landscape</span>
                                View All Events
                            </button>
                        </div>
                       
                    </div> */}

                    {/* Tech Areas Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Areas We Cover</h2>
                            <div className="h-1 w-24 bg-primary-500 mx-auto rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-primary-900/30 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-16 w-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-primary-400">
                                        developer_mode
                                    </span>
                                </div>
                                <h3 className="font-semibold">App Development</h3>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-primary-900/30 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-16 w-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-primary-400">memory</span>
                                </div>
                                <h3 className="font-semibold">Artificial Intelligence</h3>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-primary-900/30 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-16 w-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-primary-400">
                                        database
                                    </span>
                                </div>
                                <h3 className="font-semibold">Blockchain</h3>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-primary-900/30 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-16 w-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-primary-400">
                                        precision_manufacturing
                                    </span>
                                </div>
                                <h3 className="font-semibold">Robotics</h3>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-primary-900/30 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-16 w-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-primary-400">cloud</span>
                                </div>
                                <h3 className="font-semibold">Cloud Computing</h3>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-primary-900/30 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-16 w-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-primary-400">
                                        security
                                    </span>
                                </div>
                                <h3 className="font-semibold">Cybersecurity</h3>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-primary-900/30 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-16 w-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-primary-400">
                                        devices_other
                                    </span>
                                </div>
                                <h3 className="font-semibold">IoT</h3>
                            </div>

                            <div className="bg-slate-800/50 p-6 rounded-xl text-center hover:bg-primary-900/30 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="h-16 w-16 bg-primary-600/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-primary-400">
                                        view_in_ar
                                    </span>
                                </div>
                                <h3 className="font-semibold">AR/VR</h3>
                            </div>
                        </div>
                  
                    </div>

                    {/* Contact Section */}
                    {/* <div className="bg-slate-800/60 rounded-2xl p-8 mb-12 shadow-xl">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">Join Tech Soul Society</h2>
                            <p className="text-slate-300 max-w-2xl mx-auto">
                                Become a part of our tech community and explore the exciting world of technology with
                                like-minded peers.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-slate-700/50 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                                <div className="flex items-center mb-4">
                                    <div className="h-10 w-10 rounded-full bg-primary-600/20 flex items-center justify-center mr-3">
                                        <span className="material-symbols-outlined text-primary-400">mail</span>
                                    </div>
                                    <span className="text-slate-300">techsoul@mru.edu</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <div className="h-10 w-10 rounded-full bg-primary-600/20 flex items-center justify-center mr-3">
                                        <span className="material-symbols-outlined text-primary-400">call</span>
                                    </div>
                                    <span className="text-slate-300">+91 98765 43210</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-primary-600/20 flex items-center justify-center mr-3">
                                        <span className="material-symbols-outlined text-primary-400">landscape</span>
                                    </div>
                                    <span className="text-slate-300">Tech Hub, MRU Campus, Delhi</span>
                                </div>
                                <div className="mt-6 flex gap-4">
                                    <button className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-all duration-300">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </button>
                                    <button className="h-10 w-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-all duration-300">
                                        <i className="fa-brands fa-instagram"></i>
                                    </button>
                                    <button className="h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-all duration-300">
                                        <i className="fa-brands fa-twitter"></i>
                                    </button>
                                    <button className="h-10 w-10 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-700 transition-all duration-300">
                                        <i className="fa-brands fa-youtube"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-slate-700/50 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Sign Up</h3>
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-slate-300 mb-1" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-sm font-medium text-slate-300 mb-1"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-sm font-medium text-slate-300 mb-1"
                                            htmlFor="course"
                                        >
                                            Course
                                        </label>
                                        <select
                                            id="course"
                                            className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                                        >
                                            <option>Select your course</option>
                                            <option>B.Tech Computer Science</option>
                                            <option>B.Tech Electronics</option>
                                            <option>BCA</option>
                                            <option>MCA</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-2 bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">person_add</span>
                                        Join Now
                                    </button>
                                </form>
                            </div>
                        </div>
                      
                    </div> */}

                    {/* Footer Section */}
                    <div className="text-center text-slate-400 text-sm">
                        <p>© 2023 Tech Soul Society - MRU. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techsoul;
