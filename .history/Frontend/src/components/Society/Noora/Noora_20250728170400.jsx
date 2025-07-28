import React from "react"

import "./Noora.css"

export const Noora = () => {
    return (
        <div id="webcrumbs">
            <div className="min-h-screen bg-white overflow-hidden">
                {/* Hero Section */}
                <div className="relative h-[600px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
                    <img
                        src="/Noora/first.jpg"
                        alt="Fashion runway show"
                        className="absolute inset-0 w-full h-full object-cover"
                        keywords="fashion, runway, models, high fashion"
                    />
                    <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center animate-fade-in-down">NOORA</h1>
                        <p className="text-xl md:text-2xl italic text-center mb-6">Fashion Society</p>
                        <div className="w-24 h-1 bg-primary-500 mb-8 transform transition-all duration-300 hover:w-32 hover:bg-primary-400"></div>
                        <p className="text-center max-w-2xl text-lg">
                            The most prestigious and accomplished fashion society, known for creative excellence and
                            outstanding performances.
                        </p>
                    </div>
                </div>

                {/* About Section */}
                <section className="py-16 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                                    About <span className="text-primary-600">Noora</span>
                                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-500 transform -translate-y-2"></span>
                                </h2>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Noora has been the most active and highest achiever among all societies. People have
                                    appreciated and fallen in love with Noora's exceptional talent and creative vision
                                    in the fashion world.
                                </p>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Our society brings together the most talented models, designers, and choreographers
                                    to create unforgettable fashion experiences that push boundaries and set new trends.
                                </p>
                                <div className="flex space-x-4">
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUxm28UF8rWU5Q1dqvKQHqaNxsyw6KvwcamiKjNbhN0i9gpA/viewform" className="px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition duration-300 transform hover:scale-105">
                                        Join Us
                                    </a>
                                    {/* <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-full hover:bg-primary-50 transition duration-300 transform hover:scale-105">
                                        Learn More
                                    </button> */}
                                </div>
                            </div>
                            <div className="order-1 md:order-2 relative">
                                <img
                                    src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80"
                                    alt="Fashion designer at work"
                                    className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                                    keywords="fashion design, designer, fashion creation, haute couture"
                                />
                                <div className="absolute -bottom-5 -right-5 bg-primary-100 w-40 h-40 rounded-lg -z-10"></div>
                                <div className="absolute -top-5 -left-5 bg-gray-100 w-40 h-40 rounded-lg -z-10"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Achievements Section */}
                <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Celebrating our journey of excellence and recognition in the fashion industry.
                            </p>
                            <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl">
                                        emoji_events
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">RAW's Annual Cultural Fest'20</h3>
                                <p className="text-gray-600 mb-4">
                                    Secured the first position with our innovative designs and exceptional choreography.
                                </p>
                                <div className="flex items-center text-primary-600">
                                    <span>Read more</span>
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl">
                                        military_tech
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">National Design Excellence Award</h3>
                                <p className="text-gray-600 mb-4">
                                    Recognized for our sustainable fashion initiatives and groundbreaking design
                                    concepts.
                                </p>
                                <div className="flex items-center text-primary-600">
                                    <span>Read more</span>
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl">
                                        workspace_premium
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Intercollege Fashion Championship</h3>
                                <p className="text-gray-600 mb-4">
                                    Three consecutive wins showcasing our consistency and dedication to excellence.
                                </p>
                                <div className="flex items-center text-primary-600">
                                    <span>Read more</span>
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-16 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Gallery</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Showcasing our creative costumes, outstanding choreography, and supremely talented
                                models.
                            </p>
                            <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-lg">
                                <img
                                    src="/Noora/second.jpg"
                                    alt="Fashion show main highlight"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="fashion show, runway, models, haute couture"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <h3 className="text-xl font-bold">Annual Showcase 2023</h3>
                                        <p>Our most acclaimed runway presentation featuring avant-garde designs</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden rounded-lg">
                                <img
                                    src="/Noora/third.jpg"
                                    alt="Fashion design closeup"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="fashion detail, design, clothing, fabric"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="text-white">
                                        <h3 className="text-lg font-bold">Design Details</h3>
                                        <p className="text-sm">Craftsmanship excellence</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden rounded-lg">
                                <img
                                    src=""
                                    alt="Fashion models backstage"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="backstage, fashion show preparation, models getting ready"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="text-white">
                                        <h3 className="text-lg font-bold">Backstage Moments</h3>
                                        <p className="text-sm">The magic behind the scenes</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden rounded-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80"
                                    alt="Fashion design workshop"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="fashion design, workshop, creative process, design studio"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="text-white">
                                        <h3 className="text-lg font-bold">Creative Process</h3>
                                        <p className="text-sm">Where ideas come to life</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Say</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                People have appreciated and fallen in love with Noora's talent.
                            </p>
                            <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md relative transition-all duration-300 hover:shadow-xl">
                                <div className="absolute -top-5 left-8 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">format_quote</span>
                                </div>
                                <p className="text-gray-600 italic mb-6 pt-4">
                                    Noora has never failed to impress the audience with its creative costumes,
                                    outstanding choreography, and supremely talented models.
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/45.jpg"
                                        alt="Testimonial author"
                                        className="w-12 h-12 rounded-full mr-4"
                                        keywords="fashion critic, reviewer, testimonial"
                                    />
                                    <div>
                                        <h4 className="font-bold">Sarah Johnson</h4>
                                        <p className="text-sm text-gray-500">Fashion Critic</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md relative transition-all duration-300 hover:shadow-xl">
                                <div className="absolute -top-5 left-8 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">format_quote</span>
                                </div>
                                <p className="text-gray-600 italic mb-6 pt-4">
                                    The level of creativity and professionalism shown by Noora at RAW's Annual Cultural
                                    Fest was simply breathtaking. They truly deserved the win.
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                        alt="Testimonial author"
                                        className="w-12 h-12 rounded-full mr-4"
                                        keywords="event judge, fashion expert, testimonial"
                                    />
                                    <div>
                                        <h4 className="font-bold">Michael Chen</h4>
                                        <p className="text-sm text-gray-500">Event Judge</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md relative transition-all duration-300 hover:shadow-xl">
                                <div className="absolute -top-5 left-8 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">format_quote</span>
                                </div>
                                <p className="text-gray-600 italic mb-6 pt-4">
                                    I've been following Noora for years, and they consistently raise the bar in college
                                    fashion. Their designs and performances are always a cut above the rest.
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src="https://randomuser.me/api/portraits/women/68.jpg"
                                        alt="Testimonial author"
                                        className="w-12 h-12 rounded-full mr-4"
                                        keywords="fashion blogger, influencer, testimonial"
                                    />
                                    <div>
                                        <h4 className="font-bold">Priya Sharma</h4>
                                        <p className="text-sm text-gray-500">Fashion Blogger</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                {/* <section className="py-16 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                                    Join <span className="text-primary-600">Noora</span>
                                    <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-500 transform -translate-y-2"></span>
                                </h2>
                                <p className="text-gray-700 mb-6 leading-relaxed">
                                    Interested in being part of our award-winning fashion society? Whether you're a
                                    designer, model, choreographer, or passionate about fashion, we'd love to have you
                                    join our creative family.
                                </p>

                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                                                placeholder="Your email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Interest</label>
                                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300">
                                            <option>Modeling</option>
                                            <option>Design</option>
                                            <option>Choreography</option>
                                            <option>Event Management</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                        <textarea
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 h-32"
                                            placeholder="Tell us about yourself and why you'd like to join Noora"
                                        ></textarea>
                                    </div>
                                    <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition duration-300 transform hover:scale-105 w-full md:w-auto">
                                        Submit Application
                                    </button>
                                </form>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-primary-100 to-white -z-10 rounded-xl transform rotate-3"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
                                    alt="Fashion team collaboration"
                                    className="w-full h-[500px] object-cover rounded-xl shadow-xl transform -rotate-2 transition-all duration-500 hover:rotate-0"
                                    keywords="fashion team, collaboration, creative meeting, design team"
                                />
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Next: "Add an upcoming events section with dates and featured showcases" */}
                {/* Next: "Add a section highlighting the creative team and leadership" */}
                {/* Next: "Add a blog/news section featuring fashion trends and society updates" */}
            </div>
        </div>
    )
}

export default Noora ;