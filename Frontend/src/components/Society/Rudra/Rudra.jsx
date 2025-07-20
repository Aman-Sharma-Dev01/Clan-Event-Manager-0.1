import React from "react"

import "./Rudra.css"

export const Rudra = () => {
    return (
        <div id="webcrumbs">
            <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 min-h-screen p-6 md:p-12 font-sans text-white">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16 pt-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 tracking-tight leading-tight">
                            <span className="block">RUDRA</span>
                            <span className="text-3xl md:text-4xl font-medium block mt-2">Dance Society</span>
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p className="text-xl md:text-2xl font-light mb-8 text-purple-100">
                                Move to the music, Born From A BomBox (B-FAB)
                            </p>
                            <p className="text-lg md:text-xl italic mb-10 text-purple-200">
                                These terms are nowhere to stay!
                            </p>
                            <div className="inline-flex p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300">
                                <button className="bg-purple-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
                                    Join Mridaksh
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="mb-20 relative">
                        <div className="absolute inset-0 bg-purple-700 opacity-10 rounded-2xl transform -rotate-1"></div>
                        <div className="absolute inset-0 bg-indigo-700 opacity-10 rounded-2xl transform rotate-1"></div>
                        <div className="relative bg-gradient-to-br from-purple-800/40 to-indigo-800/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl border border-purple-700/30">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Mridaksh</h2>
                            <p className="text-lg leading-relaxed mb-6">
                                Join Mridaksh, one of NCR's leading dance teams, on a journey filled with various
                                events, competitions, performances, and get an experience of a lifetime.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Our dance society celebrates the art of movement, rhythm, and expression. Whether you're
                                a beginner or experienced dancer, Mridaksh offers a supportive community where passion
                                for dance thrives.
                            </p>
                            {/* Next: "Add testimonials from dance team members" */}
                        </div>
                    </div>

                    {/* Dance Styles Grid */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Dance Styles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    name: "Hip Hop",
                                    icon: "nightlife",
                                    desc: "Urban dance styles with freestyle movements"
                                },
                                {
                                    name: "Contemporary",
                                    icon: "self_improvement",
                                    desc: "Fluid movements blending ballet, jazz, and modern dance"
                                },
                                {
                                    name: "Classical",
                                    icon: "music_note",
                                    desc: "Traditional Indian dance forms with precise techniques"
                                },
                                {
                                    name: "Breaking",
                                    icon: "sports_gymnastics",
                                    desc: "Dynamic moves including toprock, downrock, and freezes"
                                },
                                {
                                    name: "Bollywood",
                                    icon: "celebration",
                                    desc: "Vibrant fusion of Indian classical and Western styles"
                                },
                                {
                                    name: "Street Jazz",
                                    icon: "directions_run",
                                    desc: "Fusion of jazz technique with hip-hop styles"
                                }
                            ].map((style, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-purple-700/30 to-indigo-700/30 backdrop-blur-sm p-6 rounded-xl border border-purple-600/20 shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <span className="material-symbols-outlined text-4xl mb-4 text-pink-400">
                                        landscape
                                    </span>
                                    <h3 className="text-xl font-bold mb-2">{style.name}</h3>
                                    <p className="text-purple-200">{style.desc}</p>
                                </div>
                            ))}
                        </div>
                        {/* Next: "Add a 'Learn More' button for each dance style" */}
                    </div>

                    {/* Events Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Annual Dance Showcase",
                                    date: "December 15, 2023",
                                    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?q=80&w=1470&auto=format&fit=crop",
                                    desc: "Our signature year-end performance featuring all dance styles"
                                },
                                {
                                    title: "Inter-College Dance Competition",
                                    date: "January 28, 2024",
                                    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1470&auto=format&fit=crop",
                                    desc: "Competing with the best dance teams from colleges across NCR"
                                }
                            ].map((event, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-xl shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/60 to-transparent z-10"></div>
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-80 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                                        keywords="dance performance, stage performance, dancers on stage"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                                        <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                                        <p className="text-purple-200 mb-3">{event.date}</p>
                                        <p className="text-purple-100">{event.desc}</p>
                                        <button className="mt-4 px-5 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white font-medium text-sm transform hover:scale-105 transition-all duration-300">
                                            Register Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Next: "Add a 'View All Events' button" */}
                    </div>

                    {/* Achievements */}
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Achievements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {number: "15+", text: "Competition Wins"},
                                {number: "50+", text: "Performances"},
                                {number: "500+", text: "Members Trained"}
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-purple-700/20 to-indigo-700/20 backdrop-blur-sm p-8 rounded-xl text-center border border-purple-600/20 hover:border-pink-500/30 transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                        {stat.number}
                                    </div>
                                    <div className="text-xl text-purple-200">{stat.text}</div>
                                </div>
                            ))}
                        </div>
                        {/* Next: "Add details about specific awards won" */}
                    </div>

                    {/* Join Us CTA */}
                    <div className="relative overflow-hidden rounded-2xl mb-16">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-sm"></div>
                        <div className="relative p-10 md:p-16 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move with Us?</h2>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                Experience the thrill of dance, make lifelong friends, and create unforgettable memories
                                with Mridaksh.
                            </p>
                            <div className="inline-flex p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300">
                                <button className="bg-purple-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">
                                    Join Mridaksh Today
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="text-center pb-10">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="mb-6">Email: info@mridaksh.com | Phone: +91 98765 43210</p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-purple-700/50 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-instagram text-xl"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-purple-700/50 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-facebook text-xl"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-purple-700/50 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                            >
                                <i className="fa-brands fa-youtube text-xl"></i>
                            </a>
                        </div>
                        {/* Next: "Add a contact form" */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rudra ;