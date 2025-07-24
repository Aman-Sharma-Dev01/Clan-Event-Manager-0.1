import React from "react"

import "./Athelites.css"

export const Athelites = () => {
    return (
        <div id="webcrumbs">
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
                {/* Hero Section */}
                <header className="relative overflow-hidden h-[70vh]">
                    <img
                        src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                        alt="Athletes in action"
                        className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
                        keywords="sports, university athletes, competition, team spirit"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                        <div className="flex items-center mb-6 transform hover:scale-105 transition-transform duration-300">
                            <span className="material-symbols-outlined text-5xl mr-3 text-primary-500">sports</span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">AthElites</h1>
                        </div>
                        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-8">
                            Manav Rachna University's Premier Sports Society
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUxm28UF8rWU5Q1dqvKQHqaNxsyw6KvwcamiKjNbhN0i9gpA/viewform" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg">
                            Join Our Team
                        </a>
                    </div>
                </header>

                {/* About Section */}
                <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About AthElites</h2>
                        <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg">
                                Every University is incomplete without its extremely talented athletes and players. Our
                                sports team has achieved laurels in various sports activities in different colleges like
                                BITS Pilani and represented Manav Rachna University throughout NCR.
                            </p>
                            <p className="text-lg">
                                Apart from making the University proud on National Level, the society made sure to give
                                opportunities to various other students of the University by organizing competitions
                                within the university.
                            </p>
                            <div className="flex space-x-4 pt-4">
                                <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                                    <span className="material-symbols-outlined mr-2">emoji_events</span>
                                    National Champions
                                </span>
                                <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                                    <span className="material-symbols-outlined mr-2">groups</span>
                                    Team Spirit
                                </span>
                            </div>
                        </div>
                        <div className="relative rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                                alt="University sports team celebrating"
                                className="w-full h-auto"
                                keywords="university sports team, celebration, victory, team photo"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                <p className="text-white font-medium">
                                    Our team celebrating victory at inter-college competition
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Achievements Section */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
                            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 bg-primary-100 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-7xl text-primary-500">
                                        emoji_events
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">National Championship</h3>
                                    <p className="text-gray-700">
                                        First place in the All-India Inter-University Basketball Tournament held at BITS
                                        Pilani.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 bg-blue-100 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-7xl text-blue-500">
                                        sports_cricket
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">NCR Cricket Trophy</h3>
                                    <p className="text-gray-700">
                                        Runner-up in the prestigious NCR Cricket Tournament representing Manav Rachna
                                        University.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="h-48 bg-amber-100 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-7xl text-amber-500">
                                        sports_volleyball
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">Volleyball Champions</h3>
                                    <p className="text-gray-700">
                                        Three consecutive years as champions in the Inter-College Volleyball Tournament.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sports Categories */}
                <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Sports Categories</h2>
                        <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {name: "Basketball", icon: "sports_basketball"},
                            {name: "Cricket", icon: "sports_cricket"},
                            {name: "Football", icon: "sports_soccer"},
                            {name: "Volleyball", icon: "sports_volleyball"},
                            {name: "Tennis", icon: "sports_tennis"},
                            {name: "Athletics", icon: "directions_run"},
                            {name: "Swimming", icon: "pool"},
                            {name: "Badminton", icon: "sports_tennis"}
                        ].map((sport, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform cursor-pointer flex flex-col items-center"
                            >
                                <span className="material-symbols-outlined text-4xl mb-3 text-primary-600">
                                    landscape
                                </span>
                                <h3 className="font-bold text-xl">{sport.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Upcoming Events */}
                <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
                            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                                        alt="Basketball tournament"
                                        className="w-full h-48 object-cover"
                                        keywords="basketball tournament, university sports event"
                                    />
                                    <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 m-2 rounded-md font-medium">
                                        15 Oct
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">Inter-University Basketball Tournament</h3>
                                    <p className="text-gray-700 mb-4">
                                        Join us for the annual inter-university basketball championship at the main
                                        sports complex.
                                    </p>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-gray-500 mr-2">schedule</span>
                                        <span>10:00 AM - 5:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
                                        alt="Cricket match"
                                        className="w-full h-48 object-cover"
                                        keywords="cricket match, university sports event"
                                    />
                                    <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 m-2 rounded-md font-medium">
                                        22 Oct
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">NCR Cricket Championship</h3>
                                    <p className="text-gray-700 mb-4">
                                        Manav Rachna University vs Delhi University at MRU Cricket Ground.
                                    </p>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-gray-500 mr-2">schedule</span>
                                        <span>9:30 AM - 4:30 PM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                        alt="Athletics event"
                                        className="w-full h-48 object-cover"
                                        keywords="athletics event, university sports competition"
                                    />
                                    <div className="absolute top-0 right-0 bg-primary-600 text-white px-3 py-1 m-2 rounded-md font-medium">
                                        5 Nov
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">Annual Athletics Meet</h3>
                                    <p className="text-gray-700 mb-4">
                                        Track and field events including 100m, 200m, long jump, javelin throw, and more.
                                    </p>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-gray-500 mr-2">schedule</span>
                                        <span>8:00 AM - 6:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Join Us Section */}
                <section className="py-16 px-4 md:px-8 bg-primary-600 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join AthElites Sports Society</h2>
                                <p className="text-lg mb-8">
                                    Become a part of our winning team and represent Manav Rachna University in various
                                    sports competitions. We welcome talented athletes across all disciplines.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined mr-2">check_circle</span>
                                        <span>Professional Coaching</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined mr-2">check_circle</span>
                                        <span>State-of-art Facilities</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined mr-2">check_circle</span>
                                        <span>Competition Exposure</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined mr-2">check_circle</span>
                                        <span>Sports Scholarships</span>
                                    </div>
                                </div>
                                <button className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Apply Now
                                </button>
                            </div>
                            <div className="relative rounded-xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                    alt="Athletes training"
                                    className="w-full h-auto"
                                    keywords="university sports training, athletes, coaching"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
                        <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                            "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
                            "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
                            "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                            "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                            "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
                            "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
                            "https://images.unsplash.com/photo-1591491719565-b39210bc7233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                        ].map((image, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl"
                            >
                                <img
                                    src={image}
                                    alt={`Sports gallery image ${index + 1}`}
                                    className="w-full h-48 md:h-64 object-cover"
                                    keywords="university sports, competitions, athletes, team, events"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                {/* <section className="py-16 px-4 md:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
                            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-white rounded-xl shadow-md p-8">
                                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 font-medium">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 font-medium">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                            placeholder="Your email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block mb-2 font-medium">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                                            placeholder="Your message"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg w-full"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-start">
                                        <span className="material-symbols-outlined text-3xl text-primary-600 mr-4">
                                            landscape
                                        </span>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Location</h4>
                                            <p>
                                                Sports Complex, Manav Rachna University Campus, Sector 43, Faridabad,
                                                Haryana
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-start">
                                        <span className="material-symbols-outlined text-3xl text-primary-600 mr-4">
                                            call
                                        </span>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Phone</h4>
                                            <p>+91 9876543210</p>
                                            <p>+91 9876543211</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-start">
                                        <span className="material-symbols-outlined text-3xl text-primary-600 mr-4">
                                            mail
                                        </span>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Email</h4>
                                            <p>athelites@mru.edu.in</p>
                                            <p>sports.society@mru.edu.in</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex items-start">
                                        <span className="material-symbols-outlined text-3xl text-primary-600 mr-4">
                                            schedule
                                        </span>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">Training Hours</h4>
                                            <p>Monday - Friday: 6:00 AM - 9:00 AM & 4:00 PM - 7:00 PM</p>
                                            <p>Saturday: 7:00 AM - 12:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div>
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-3xl mr-2 text-primary-500">
                                        sports
                                    </span>
                                    <h3 className="text-2xl font-bold">AthElites</h3>
                                </div>
                                <p className="mb-4">
                                    Manav Rachna University's Premier Sports Society dedicated to excellence in
                                    athletics and sports.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                                    >
                                        <i className="fa-brands fa-facebook text-xl"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                                    >
                                        <i className="fa-brands fa-instagram text-xl"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                                    >
                                        <i className="fa-brands fa-twitter text-xl"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                                    >
                                        <i className="fa-brands fa-youtube text-xl"></i>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Achievements
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Events
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4">Sports Categories</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Basketball
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Cricket
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Football
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Volleyball
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Athletics
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-primary-400 transition-colors">
                                            Swimming
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-gray-800 text-center">
                            <p>
                                &copy; {new Date().getFullYear()} AthElites Sports Society, Manav Rachna University. All
                                rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
                {/* Next: "Add a testimonials section with quotes from student athletes" */}
            </div>
        </div>
    )
}
export default Athelites;