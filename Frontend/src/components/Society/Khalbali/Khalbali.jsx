import React from "react"

import "./Khalbali.css"

export const Khalbali = () => {
    return (
        <div id="webcrumbs">
            <div className="bg-gradient-to-b from-purple-900 to-indigo-900 min-h-screen text-white overflow-hidden">
                {/* Hero Section */}
                <header className="relative h-screen flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <div className="w-full h-full absolute">
                        <img
                            src="https://images.unsplash.com/photo-1630050525402-06c617847d27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxkcmFtYXxlbnwwfHx8fDE3NTMwMDI0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="Drama stage"
                            className="w-full h-full object-cover"
                            keywords="drama, theater, stage, performance"
                        />
                    </div>
                    <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-bounce-slow">
                            <span className="text-yellow-400">Khal</span>
                            <span className="text-white">bali</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed animate-fade-in">
                            The Drama Society That Touches Hearts & Awakens Souls
                        </p>
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full text-lg transform transition duration-300 hover:scale-110 hover:shadow-lg">
                            Join Our Journey
                        </button>
                    </div>
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                        <span className="material-symbols-outlined text-4xl text-yellow-400">expand_more</span>
                    </div>
                </header>

                {/* About Section */}
                <section className="py-20 px-4 relative overflow-hidden" id="about">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">About Khalbali</h2>
                            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-purple-800/30 p-8 rounded-xl backdrop-blur-sm hover:bg-purple-700/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                <div className="rounded-full bg-yellow-400 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-purple-900">
                                        theater_comedy
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">Versatile Talent</h3>
                                <p className="text-purple-100 leading-relaxed">
                                    From heart-touching to nerve-wracking delivery of dialogues, our members showcase
                                    the most versatile pool of talent in the university.
                                </p>
                            </div>

                            <div className="bg-purple-800/30 p-8 rounded-xl backdrop-blur-sm hover:bg-purple-700/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                <div className="rounded-full bg-yellow-400 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-purple-900">
                                        emoji_events
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">Award Winning</h3>
                                <p className="text-purple-100 leading-relaxed">
                                    Our students have made the University proud on every platform, shining in every
                                    event and winning numerous accolades along the way.
                                </p>
                            </div>

                            <div className="bg-purple-800/30 p-8 rounded-xl backdrop-blur-sm hover:bg-purple-700/40 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                                <div className="rounded-full bg-yellow-400 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                    <span className="material-symbols-outlined text-3xl text-purple-900">favorite</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-center">Heart Touching</h3>
                                <p className="text-purple-100 leading-relaxed">
                                    We've touched the hearts of audiences with our purpose-driven performances and raw
                                    talent that connects on a deeper emotional level.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
                </section>

                {/* Gallery Section */}
                <section className="py-20 px-4 bg-indigo-950/50 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Our Performances</h2>
                            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                            <p className="mt-4 text-lg text-purple-100 max-w-xl mx-auto">
                                Glimpses of our unforgettable moments on stage that have left audiences spellbound.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="relative overflow-hidden rounded-lg group h-64 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800"
                                    alt="Drama performance 1"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="theater performance, drama act, stage play"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">The Silent Echo</h3>
                                        <p className="text-sm text-purple-100">Annual Drama Festival 2023</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-lg group h-64 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800"
                                    alt="Drama performance 2"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="stage play, theater performance, actors"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">Whispers of Time</h3>
                                        <p className="text-sm text-purple-100">Inter-University Competition</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-lg group h-64 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800"
                                    alt="Drama performance 3"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="theater stage, performance, drama actors"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">Shades of Emotion</h3>
                                        <p className="text-sm text-purple-100">Cultural Fest 2022</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-lg group h-64 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1533578733369-7219f1c25560?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800"
                                    alt="Drama performance 4"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="theater production, stage drama, performance"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">Beyond Words</h3>
                                        <p className="text-sm text-purple-100">National Drama Festival</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-lg group h-64 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800"
                                    alt="Drama performance 5"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="stage production, theater group, drama"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">The Last Act</h3>
                                        <p className="text-sm text-purple-100">University Annual Day</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-lg group h-64 transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2V8ZW58MHx8fHwxNzUzMDAyNTU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Drama performance 6"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="theater stage, drama production, performance"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold">Echoes Untold</h3>
                                        <p className="text-sm text-purple-100">State Drama Competition</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-purple-900 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                                View All Performances
                            </button>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 px-4 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">What People Say</h2>
                            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-purple-800/40 to-indigo-800/40 p-8 rounded-xl backdrop-blur-sm transform transition duration-300 hover:scale-105">
                                <div className="flex justify-center mb-6">
                                    <span className="material-symbols-outlined text-5xl text-yellow-400">
                                        format_quote
                                    </span>
                                </div>
                                <p className="text-purple-100 mb-6 italic">
                                    "The performance of Khalbali was breathtaking. The emotions portrayed by the actors
                                    were so real that I found myself moved to tears."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/32.jpg"
                                            alt="Testimonial author"
                                            className="w-full h-full object-cover"
                                            keywords="testimonial, reviewer, audience"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Priya Sharma</h4>
                                        <p className="text-sm text-purple-200">Faculty Advisor</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-800/40 to-indigo-800/40 p-8 rounded-xl backdrop-blur-sm transform transition duration-300 hover:scale-105">
                                <div className="flex justify-center mb-6">
                                    <span className="material-symbols-outlined text-5xl text-yellow-400">
                                        format_quote
                                    </span>
                                </div>
                                <p className="text-purple-100 mb-6 italic">
                                    "Never have I seen such talented young performers. Khalbali brings a level of
                                    professionalism and passion to the stage that is unmatched in university drama."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="https://randomuser.me/api/portraits/men/47.jpg"
                                            alt="Testimonial author"
                                            className="w-full h-full object-cover"
                                            keywords="testimonial, reviewer, audience"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Rajesh Khanna</h4>
                                        <p className="text-sm text-purple-200">Theater Director</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-800/40 to-indigo-800/40 p-8 rounded-xl backdrop-blur-sm transform transition duration-300 hover:scale-105">
                                <div className="flex justify-center mb-6">
                                    <span className="material-symbols-outlined text-5xl text-yellow-400">
                                        format_quote
                                    </span>
                                </div>
                                <p className="text-purple-100 mb-6 italic">
                                    "As an alumni, I'm proud to see how Khalbali continues to evolve and push
                                    boundaries. Their recent adaptation of classic literature was simply phenomenal."
                                </p>
                                <div className="flex items-center">
                                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <img
                                            src="https://randomuser.me/api/portraits/women/65.jpg"
                                            alt="Testimonial author"
                                            className="w-full h-full object-cover"
                                            keywords="testimonial, reviewer, audience"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Anjali Patel</h4>
                                        <p className="text-sm text-purple-200">Alumni & Theater Critic</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
                </section>

                {/* Upcoming Events */}
                <section className="py-20 px-4 bg-indigo-950/50 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Upcoming Events</h2>
                            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-xl overflow-hidden group transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1749900075879-5b8fd33be4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwZXZlbnR8ZW58MHx8fHwxNzUzMDAyNzE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Upcoming event 1"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        keywords="theater event, drama performance, stage play"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <span className="material-symbols-outlined text-yellow-400 mr-2">
                                            calendar_month
                                        </span>
                                        <span className="text-purple-100">November 15, 2023</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Shadows of Destiny</h3>
                                    <p className="text-purple-100 mb-4">
                                        A powerful drama exploring the intertwined fates of three strangers who meet on
                                        a rainy night.
                                    </p>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-yellow-400 mr-2">
                                            landscape
                                        </span>
                                        <span className="text-purple-100">University Auditorium</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-xl overflow-hidden group transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800"
                                        alt="Upcoming event 2"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        keywords="theater workshop, drama training, acting class"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <span className="material-symbols-outlined text-yellow-400 mr-2">
                                            calendar_month
                                        </span>
                                        <span className="text-purple-100">December 5-7, 2023</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Acting Workshop Series</h3>
                                    <p className="text-purple-100 mb-4">
                                        A three-day intensive workshop with renowned theater professionals to hone your
                                        acting skills.
                                    </p>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-yellow-400 mr-2">
                                            landscape
                                        </span>
                                        <span className="text-purple-100">Fine Arts Building, Room 302</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join Us */}
                <section className="py-20 px-4 relative">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-800/40 to-indigo-800/40 p-10 rounded-xl backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/30 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl"></div>

                        <div className="relative z-10 text-center">
                            <h2 className="text-4xl font-bold mb-6 text-yellow-400">Join Khalbali</h2>
                            <p className="text-purple-100 mb-8 text-lg">
                                Become a part of our vibrant drama family. Whether you're interested in acting,
                                direction, scriptwriting, or production, there's a place for your talent in Khalbali.
                            </p>

                            <form className="max-w-md mx-auto">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-lg bg-purple-900/50 border border-purple-600 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 rounded-lg bg-purple-900/50 border border-purple-600 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    />
                                </div>
                                <div className="mb-6">
                                    <select className="w-full px-4 py-3 rounded-lg bg-purple-900/50 border border-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
                                        <option value="">Area of Interest</option>
                                        <option value="acting">Acting</option>
                                        <option value="directing">Directing</option>
                                        <option value="scriptwriting">Scriptwriting</option>
                                        <option value="production">Production</option>
                                        <option value="costume">Costume Design</option>
                                        <option value="technical">Technical Support</option>
                                    </select>
                                </div>
                                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-lg text-lg transform transition duration-300 hover:scale-105 hover:shadow-lg">
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-purple-950 py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Khalbali</h3>
                                <p className="text-purple-200 mb-4">
                                    The premier drama society dedicated to nurturing talent and creating unforgettable
                                    theatrical experiences.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center transition-colors duration-300 hover:bg-yellow-400 group"
                                    >
                                        <i className="fa-brands fa-facebook-f text-purple-200 group-hover:text-purple-900"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center transition-colors duration-300 hover:bg-yellow-400 group"
                                    >
                                        <i className="fa-brands fa-twitter text-purple-200 group-hover:text-purple-900"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center transition-colors duration-300 hover:bg-yellow-400 group"
                                    >
                                        <i className="fa-brands fa-instagram text-purple-200 group-hover:text-purple-900"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center transition-colors duration-300 hover:bg-yellow-400 group"
                                    >
                                        <i className="fa-brands fa-youtube text-purple-200 group-hover:text-purple-900"></i>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-yellow-400 transition-colors duration-300"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-yellow-400 transition-colors duration-300"
                                        >
                                            Performances
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-yellow-400 transition-colors duration-300"
                                        >
                                            Upcoming Events
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-yellow-400 transition-colors duration-300"
                                        >
                                            Workshops
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-purple-200 hover:text-yellow-400 transition-colors duration-300"
                                        >
                                            Join Us
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-4 text-yellow-400">Contact Us</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-center text-purple-200">
                                        <span className="material-symbols-outlined mr-2 text-yellow-400">
                                            landscape
                                        </span>
                                        University Campus, Drama Building
                                    </li>
                                    <li className="flex items-center text-purple-200">
                                        <span className="material-symbols-outlined mr-2 text-yellow-400">call</span>
                                        +91 98765 43210
                                    </li>
                                    <li className="flex items-center text-purple-200">
                                        <span className="material-symbols-outlined mr-2 text-yellow-400">mail</span>
                                        khalbali@university.edu
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold mb-4 text-yellow-400">Newsletter</h4>
                                <p className="text-purple-200 mb-4">
                                    Subscribe to our newsletter for updates on upcoming performances and events.
                                </p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="px-4 py-2 rounded-l-lg bg-purple-900 border border-purple-700 text-white placeholder-purple-300 focus:outline-none flex-grow"
                                    />
                                    <button className="bg-yellow-500 hover:bg-yellow-400 text-purple-900 px-4 py-2 rounded-r-lg transition duration-300">
                                        <span className="material-symbols-outlined">send</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-purple-800 mt-12 pt-8 text-center text-purple-300 text-sm">
                            <p>© 2023 Khalbali Drama Society. All rights reserved.</p>
                        </div>
                    </div>
                </footer>

                <style
                    dangerouslySetInnerHTML={{
                        __html: `
	    @keyframes bounce-slow {
	      0%, 100% {
	        transform: translateY(0);
	      }
	      50% {
	        transform: translateY(-15px);
	      }
	    }
	    @keyframes fade-in {
	      0% {
	        opacity: 0;
	        transform: translateY(20px);
	      }
	      100% {
	        opacity: 1;
	        transform: translateY(0);
	      }
	    }
	    .animate-bounce-slow {
	      animation: bounce-slow 3s infinite;
	    }
	    .animate-fade-in {
	      animation: fade-in 1.5s ease-out forwards;
	    }
	  `
                    }}
                />
                {/* Next: "Add a 'Meet Our Team' section with animated profile cards" */}
                {/* Next: "Add a parallax scrolling effect to the hero section" */}
                {/* Next: "Add an achievements timeline with animated counters" */}
            </div>
        </div>
    )
}
export default Khalbali;