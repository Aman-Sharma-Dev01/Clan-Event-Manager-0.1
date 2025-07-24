import React from "react"

import "./Rudra.css"
 const Rudra = () => {
    return (
        <div id="webcrumbs">
            <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative">
                {/* Hero Section */}
                <div className="absolute w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                        <div
                            className="absolute top-0 left-0 w-2 h-2 bg-pink-500 rounded-full animate-ping"
                            style={{left: "10%", top: "20%", animationDuration: "3s", animationDelay: "0.2s"}}
                        ></div>
                        <div
                            className="absolute top-0 left-0 w-3 h-3 bg-purple-500 rounded-full animate-ping"
                            style={{left: "25%", top: "40%", animationDuration: "4s", animationDelay: "0.7s"}}
                        ></div>
                        <div
                            className="absolute top-0 left-0 w-2 h-2 bg-blue-400 rounded-full animate-ping"
                            style={{left: "40%", top: "15%", animationDuration: "2.5s", animationDelay: "1.5s"}}
                        ></div>
                        <div
                            className="absolute top-0 left-0 w-4 h-4 bg-primary-500 rounded-full animate-ping"
                            style={{left: "60%", top: "35%", animationDuration: "3.5s", animationDelay: "0.5s"}}
                        ></div>
                        <div
                            className="absolute top-0 left-0 w-3 h-3 bg-green-400 rounded-full animate-ping"
                            style={{left: "75%", top: "50%", animationDuration: "2s", animationDelay: "1s"}}
                        ></div>
                        <div
                            className="absolute top-0 left-0 w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                            style={{left: "85%", top: "25%", animationDuration: "4.5s", animationDelay: "0.3s"}}
                        ></div>
                        <div
                            className="absolute top-0 left-0 w-3 h-3 bg-red-500 rounded-full animate-ping"
                            style={{left: "30%", top: "70%", animationDuration: "3.2s", animationDelay: "1.2s"}}
                        ></div>
                        <div
                            className="absolute top-0 left-0 w-2 h-2 bg-indigo-400 rounded-full animate-ping"
                            style={{left: "50%", top: "80%", animationDuration: "2.8s", animationDelay: "0.8s"}}
                        ></div>
                        <div
                            className="absolute top-0 left-0 w-4 h-4 bg-pink-400 rounded-full animate-ping"
                            style={{left: "70%", top: "65%", animationDuration: "3.7s", animationDelay: "1.7s"}}
                        ></div>
                    </div>
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-primary-900/40 to-pink-900/40 animate-pulse"
                        style={{animationDuration: "3s"}}
                    ></div>
                </div>

                {/* Navbar */}
                <nav className="relative z-10 flex items-center justify-between p-6 lg:px-12">
                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-purple-500 hover:from-purple-500 hover:to-primary-400 transition-all duration-500">
                            RUDRA
                        </h1>
                    </div>
                    <div className="hidden md:flex space-x-8">
                       
                       
                    </div>
                    <div className="md:hidden">
                        <details className="relative">
                            <summary className="list-none cursor-pointer">
                                <span className="material-symbols-outlined text-3xl hover:text-primary-400 transition-colors duration-300">
                                    menu
                                </span>
                            </summary>
                            <div className="absolute right-0 mt-2 w-48 bg-black/80 backdrop-blur-lg rounded-lg shadow-lg py-2 z-50 border border-primary-500/30">
                                <a
                                    href="#about"
                                    className="block px-4 py-2 hover:bg-primary-900/50 transition-colors duration-300"
                                >
                                    About
                                </a>
                                <a
                                    href="#performances"
                                    className="block px-4 py-2 hover:bg-primary-900/50 transition-colors duration-300"
                                >
                                    Performances
                                </a>
                                <a
                                    href="#team"
                                    className="block px-4 py-2 hover:bg-primary-900/50 transition-colors duration-300"
                                >
                                    Team
                                </a>
                                <a
                                    href="#events"
                                    className="block px-4 py-2 hover:bg-primary-900/50 transition-colors duration-300"
                                >
                                    Events
                                </a>
                                <a
                                    href="#contact"
                                    className="block px-4 py-2 hover:bg-primary-900/50 transition-colors duration-300"
                                >
                                    Contact
                                </a>
                            </div>
                        </details>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20">
                    <div className="max-w-5xl mx-auto relative z-10 space-y-8">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeIn">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-primary-500 to-purple-500">
                                RUDRA
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl mb-8 text-gray-300 leading-relaxed">
                            Unleash the rhythm. Feel the beat. Dance like nobody's watching.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUxm28UF8rWU5Q1dqvKQHqaNxsyw6KvwcamiKjNbhN0i9gpA/viewform" className="bg-gradient-to-r from-primary-600 to-pink-600 hover:from-primary-500 hover:to-pink-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                                Join Us
                            </a>
                            {/* <button className="bg-transparent border-2 border-primary-500 text-white font-bold py-3 px-8 rounded-full hover:bg-primary-500/20 transition-all duration-300 transform hover:scale-105">
                                Upcoming Shows
                            </button> */}
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                        <span className="material-symbols-outlined text-3xl text-primary-400">expand_more</span>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="relative py-20 px-6 lg:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-purple-500 inline-block">
                                About Rudra
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mt-4"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div className="relative">
                                <div className="bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl p-1 transform hover:scale-[1.02] transition-all duration-500">
                                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                                        <img
                                                                                    alt="Dance performance"
                                            className="w-full h-full object-cover"
                                            keywords="dance performance, stage, performers, colorful, energetic"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    </div>
                                </div>
                                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full opacity-30 blur-xl"></div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-lg text-gray-300">
                                    Rudra is a premier dance society dedicated to the art of expression through
                                    movement. Founded in 2010, we have evolved into a vibrant community of passionate
                                    dancers who believe in pushing boundaries and creating unforgettable performances.
                                </p>
                                <p className="text-lg text-gray-300">
                                    Our mission is to foster creativity, discipline, and teamwork through dance while
                                    providing a platform for dancers to grow and showcase their talents. We blend
                                    traditional forms with contemporary styles to create unique choreographies that
                                    captivate audiences.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="bg-gradient-to-br from-black to-primary-900/30 p-4 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300">
                                        <div className="text-3xl font-bold text-primary-400">12+</div>
                                        <div className="text-gray-400">Years of Excellence</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-black to-primary-900/30 p-4 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300">
                                        <div className="text-3xl font-bold text-primary-400">50+</div>
                                        <div className="text-gray-400">National Awards</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-black to-primary-900/30 p-4 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300">
                                        <div className="text-3xl font-bold text-primary-400">200+</div>
                                        <div className="text-gray-400">Performances</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-black to-primary-900/30 p-4 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300">
                                        <div className="text-3xl font-bold text-primary-400">100+</div>
                                        <div className="text-gray-400">Active Members</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Performances Section */}
                <section id="performances" className="py-20 px-6 lg:px-12 relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-purple-500 inline-block">
                                Our Performances
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mt-4"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-900/30 to-purple-900/30 p-1 hover:from-primary-600/30 hover:to-purple-600/30 transition-all duration-500">
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1546427660-eb346c344ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                                        alt="Urban Dance Battle"
                                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        keywords="dance competition, urban dance, performance, stage lights"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 p-5 w-full">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                                            Urban Dance Battle
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            A high-energy showcase of street dance styles that pushed boundaries.
                                        </p>
                                        <div className="flex items-center text-primary-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                            <span className="text-sm">View Details</span>
                                            <span className="material-symbols-outlined text-sm ml-1">
                                                arrow_forward
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-900/30 to-purple-900/30 p-1 hover:from-primary-600/30 hover:to-purple-600/30 transition-all duration-500">
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                        alt="Fusion Festival"
                                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        keywords="dance festival, fusion dance, colorful costumes, stage performance"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 p-5 w-full">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                                            Fusion Festival
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            Blending classical and contemporary styles in a mesmerizing performance.
                                        </p>
                                        <div className="flex items-center text-primary-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                            <span className="text-sm">View Details</span>
                                            <span className="material-symbols-outlined text-sm ml-1">
                                                arrow_forward
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-900/30 to-purple-900/30 p-1 hover:from-primary-600/30 hover:to-purple-600/30 transition-all duration-500">
                                <div className="overflow-hidden rounded-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1511715282680-fbf93a50e721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc1MzAzMTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Rhythm Divine"
                                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        keywords="dance performance, rhythm, stage show, professional dancers"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 p-5 w-full">
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                                            Rhythm Divine
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            An award-winning choreography that took the audience on an emotional
                                            journey.
                                        </p>
                                        <div className="flex items-center text-primary-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                            <span className="text-sm">View Details</span>
                                            <span className="material-symbols-outlined text-sm ml-1">
                                                arrow_forward
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="text-center mt-12">
                            <button className="bg-transparent border-2 border-primary-500 text-white font-bold py-3 px-8 rounded-full hover:bg-primary-500/20 transition-all duration-300 transform hover:scale-105">
                                View All Performances
                            </button>
                        </div> */}
                    </div>
                </section>

                {/* Team Section */}
                {/* <section id="team" className="py-20 px-6 lg:px-12 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-purple-500 inline-block">
                                Meet Our Team
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto mt-4"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                    </div>
                </section> */}
            </div>
        </div>
    )
}

export default Rudra;