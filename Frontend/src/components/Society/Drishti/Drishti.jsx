import React from "react"
import "./Drishti.css"
export const Drishti = () => {
    return (
        <div id="webcrumbs">
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 min-h-screen text-white p-6">
                <header className="mb-12 text-center">
                    <h1 className="text-5xl font-bold mb-2 tracking-tight">Drishti</h1>
                    <p className="text-xl text-purple-200">Media Society of MRU</p>
                    <div className="flex justify-center gap-4 mt-6">
                        <button className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-all transform hover:scale-110">
                            <span className="material-symbols-outlined">photo_camera</span>
                        </button>
                        <button className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-all transform hover:scale-110">
                            <span className="material-symbols-outlined">videocam</span>
                        </button>
                        <button className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-all transform hover:scale-110">
                            <span className="material-symbols-outlined">brush</span>
                        </button>
                    </div>
                </header>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Capturing Moments, Creating Memories</h2>
                    <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-purple-500/30">
                        <p className="text-lg leading-relaxed mb-4">
                            'Drishtiʼ of MRU has played the most vital role in events, without a doubt. This group of
                            talented students has captured a magnificent bunch of memories, digital posters, and
                            aesthetic videos.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Through our lenses, events are immortalized, never to be forgotten. We believe in the power
                            of visual storytelling to preserve the essence of every moment.
                        </p>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Our Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative overflow-hidden rounded-lg group h-64 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-500 cursor-pointer shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                                alt="Cultural Event"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                keywords="cultural event, college festival, performance"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold mb-1">Annual Cultural Fest</h3>
                                <p className="text-sm text-purple-200 mb-2">
                                    Captured the vibrant performances and celebrations
                                </p>
                                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center transition-all">
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg group h-64 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-500 cursor-pointer shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                                alt="Technical Event"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                keywords="technical event, hackathon, college, competition"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold mb-1">Tech Symposium</h3>
                                <p className="text-sm text-purple-200 mb-2">
                                    Documented innovative projects and technical breakthroughs
                                </p>
                                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center transition-all">
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg group h-64 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition-all duration-500 cursor-pointer shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1531058020387-3be344556be6"
                                alt="Sports Event"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                                keywords="sports event, college tournament, athletics"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold mb-1">Sports Tournament</h3>
                                <p className="text-sm text-purple-200 mb-2">
                                    Captured thrilling moments of victory and sportsmanship
                                </p>
                                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center transition-all">
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-indigo-700/40 transition-all hover:shadow-xl hover:-translate-y-1 border border-purple-500/20">
                            <span className="material-symbols-outlined text-4xl mb-4 text-purple-400">
                                video_library
                            </span>
                            <h3 className="text-xl font-semibold mb-2">Event Videography</h3>
                            <p className="text-sm text-purple-200">
                                Professional video coverage of all university events with cinematic editing
                            </p>
                        </div>

                        <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-indigo-700/40 transition-all hover:shadow-xl hover:-translate-y-1 border border-purple-500/20">
                            <span className="material-symbols-outlined text-4xl mb-4 text-purple-400">
                                photo_library
                            </span>
                            <h3 className="text-xl font-semibold mb-2">Photography</h3>
                            <p className="text-sm text-purple-200">
                                Capturing high-quality photographs for events, portraits, and campus life
                            </p>
                        </div>

                        <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-indigo-700/40 transition-all hover:shadow-xl hover:-translate-y-1 border border-purple-500/20">
                            <span className="material-symbols-outlined text-4xl mb-4 text-purple-400">
                                design_services
                            </span>
                            <h3 className="text-xl font-semibold mb-2">Digital Posters</h3>
                            <p className="text-sm text-purple-200">
                                Creative and eye-catching poster designs for events and announcements
                            </p>
                        </div>

                        <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-indigo-700/40 transition-all hover:shadow-xl hover:-translate-y-1 border border-purple-500/20">
                            <span className="material-symbols-outlined text-4xl mb-4 text-purple-400">
                                cast_for_education
                            </span>
                            <h3 className="text-xl font-semibold mb-2">Media Training</h3>
                            <p className="text-sm text-purple-200">
                                Workshops on photography, videography, and digital design for students
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Featured Work</h2>
                    <div className="relative overflow-hidden rounded-xl bg-indigo-800/30 backdrop-blur-sm border border-purple-500/20">
                        <div className="aspect-w-16 aspect-h-9 relative">
                            <img
                                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
                                alt="Drishti featured video thumbnail"
                                className="object-cover w-full h-[400px]"
                                keywords="university event, media coverage, students, performance"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-20 h-20 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                                    <span className="material-symbols-outlined text-4xl">play_arrow</span>
                                </button>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">MRU Annual Day 2023 Highlights</h3>
                            <p className="text-purple-200 mb-4">
                                A cinematic journey through the most memorable moments of our university's celebration
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-purple-300">visibility</span>
                                    <span className="text-purple-300">2.4K views</span>
                                </div>
                                <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition-all transform hover:scale-105">
                                    Watch Full Video
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:shadow-xl transition-all">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                                    alt="Team member"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    keywords="student photographer, media team"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold">Rahul Sharma</h3>
                                <p className="text-purple-300 text-sm">Lead Photographer</p>
                                <div className="flex justify-center gap-4 mt-3">
                                    <button className="text-purple-300 hover:text-white transition-colors">
                                        <i className="fa-brands fa-instagram"></i>
                                    </button>
                                    <button className="text-purple-300 hover:text-white transition-colors">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:shadow-xl transition-all">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                                    alt="Team member"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    keywords="student videographer, media team"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold">Priya Patel</h3>
                                <p className="text-purple-300 text-sm">Video Director</p>
                                <div className="flex justify-center gap-4 mt-3">
                                    <button className="text-purple-300 hover:text-white transition-colors">
                                        <i className="fa-brands fa-instagram"></i>
                                    </button>
                                    <button className="text-purple-300 hover:text-white transition-colors">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:shadow-xl transition-all">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                                    alt="Team member"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    keywords="student designer, media team"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold">Arjun Kumar</h3>
                                <p className="text-purple-300 text-sm">Graphic Designer</p>
                                <div className="flex justify-center gap-4 mt-3">
                                    <button className="text-purple-300 hover:text-white transition-colors">
                                        <i className="fa-brands fa-instagram"></i>
                                    </button>
                                    <button className="text-purple-300 hover:text-white transition-colors">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl overflow-hidden group hover:shadow-xl transition-all">
                            <div className="h-64 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                                    alt="Team member"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    keywords="student editor, media team"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold">Meera Singh</h3>
                                <p className="text-purple-300 text-sm">Content Coordinator</p>
                                <div className="flex justify-center gap-4 mt-3">
                                    <button className="text-purple-300 hover:text-white transition-colors">
                                        <i className="fa-brands fa-instagram"></i>
                                    </button>
                                    <button className="text-purple-300 hover:text-white transition-colors">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="py-8 border-t border-purple-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Drishti Media Society</h3>
                            <p className="text-purple-300 text-sm leading-relaxed">
                                Preserving memories and creating visual stories that define the spirit of MRU.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-purple-300">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Gallery
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Team
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Events
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-2 text-purple-300 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined">location_on</span>
                                    <span>MRU Campus, Media Society Office</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined">mail</span>
                                    <span>drishti@mru.edu.in</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="material-symbols-outlined">call</span>
                                    <span>+91 98765 43210</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="bg-purple-700 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a
                                    href="#"
                                    className="bg-purple-700 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                                >
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                                <a
                                    href="#"
                                    className="bg-purple-700 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                                >
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                                <a
                                    href="#"
                                    className="bg-purple-700 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-purple-400 text-sm">
                        <p>© 2023 Drishti Media Society, MRU. All rights reserved.</p>
                    </div>
                </footer>

                {/* Next: "Add a testimonials section with quotes from faculty and students about Drishti's work" */}
                {/* Next: "Add an upcoming events calendar section showing where Drishti will be covering next" */}
                {/* Next: "Add a contact form for event coverage requests" */}
            </div>
        </div>
    )
}

export default Drishti;