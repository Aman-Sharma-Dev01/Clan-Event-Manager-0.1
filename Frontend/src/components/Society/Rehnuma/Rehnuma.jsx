import React from "react"
import "./Rehnuma.css"
const Rehnuma = () => {
    return (
        <div id="webcrumbs">
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4 md:p-8 lg:p-12">
                <header className="text-center mb-10 mt-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-indigo-900 transform hover:scale-105 transition-transform duration-300">
                        <span className="inline-block hover:rotate-2 transition-transform duration-300">Rehnuma</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-indigo-700 italic transform hover:translate-y-1 transition-transform duration-300">
                        The Literary Society
                    </p>
                    <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </header>

                <main>
                    <section className="max-w-6xl mx-auto mb-12 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                        <div className="relative h-[250px] md:h-[400px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1532012197267-da84d127e765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxsaXRlcmF0dXJlfGVufDB8fHx8MTc1Mjk5OTc2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Literary society performance"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                                keywords="literature, poetry, storytelling, stage performance, event"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <h2 className="absolute bottom-0 left-0 p-6 text-white text-2xl md:text-3xl font-bold">
                                Inspiring Literary Excellence
                            </h2>
                        </div>
                        <div className="p-6 md:p-8">
                            <p className="text-lg mb-6 leading-relaxed">
                                The literary society has done a commendable job both on and off the stage. 'Rehnumaʼ is
                                the reason we get insight into the Universityʼs event life. Rehnuma went to Mood
                                Indigo'19 and showed its immense talent and always succeeded in giving the best of the
                                opportunities to the linguistic crowd of our University.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium hover:bg-indigo-200 transition-colors duration-300">
                                    Poetry
                                </span>
                                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium hover:bg-purple-200 transition-colors duration-300">
                                    Storytelling
                                </span>
                                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium hover:bg-blue-200 transition-colors duration-300">
                                    Debates
                                </span>
                                <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full font-medium hover:bg-teal-200 transition-colors duration-300">
                                    Competitions
                                </span>
                            </div>
                        </div>
                    </section>

                    <section className="max-w-6xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-primary-600">diversity_3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Community</h3>
                            <p className="text-gray-700">
                                Building a vibrant community of literary enthusiasts, writers, poets, and performers
                                across the university.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-indigo-600">emoji_events</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Competitions</h3>
                            <p className="text-gray-700">
                                Organizing and participating in various literary competitions to showcase talent and
                                creativity.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-purple-600">event</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Events</h3>
                            <p className="text-gray-700">
                                Hosting regular events including poetry nights, book discussions, and literary festivals
                                throughout the year.
                            </p>
                        </div>
                    </section>

                    <section className="max-w-6xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Achievements</h2>
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-6 md:p-8">
                                    <h3 className="text-xl font-bold mb-4">Mood Indigo 2019</h3>
                                    <p className="mb-4">
                                        Rehnuma represented our university at Mood Indigo 2019, one of India's largest
                                        college cultural festivals, showcasing exceptional talent and bringing
                                        recognition to our institution.
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-green-500 mr-2">
                                                check_circle
                                            </span>
                                            <span>Finalist in Poetry Slam competition</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-green-500 mr-2">
                                                check_circle
                                            </span>
                                            <span>Second place in Literary Quiz</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-green-500 mr-2">
                                                check_circle
                                            </span>
                                            <span>Special mention for Story Writing</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="relative h-[250px] md:h-auto">
                                    <img
                                        src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                        alt="Literary award ceremony"
                                        className="w-full h-full object-cover"
                                        keywords="literary award, trophy, achievement, ceremony, celebration"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="max-w-6xl mx-auto mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="h-48 bg-indigo-600 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-6xl">menu_book</span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 text-sm font-bold text-indigo-600">
                                        OCT 15
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-xl mb-2">Poetry Night</h3>
                                    <p className="text-gray-700 mb-4">
                                        An evening of original poetry performances by Rehnuma members and guest poets.
                                    </p>
                                    <div className="flex items-center text-gray-500">
                                        <span className="material-symbols-outlined mr-1">location_on</span>
                                        <span className="text-sm">Main Auditorium</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="h-48 bg-purple-600 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-6xl">forum</span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 text-sm font-bold text-purple-600">
                                        NOV 5
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-xl mb-2">Debate Competition</h3>
                                    <p className="text-gray-700 mb-4">
                                        Inter-college debate competition on contemporary social and political issues.
                                    </p>
                                    <div className="flex items-center text-gray-500">
                                        <span className="material-symbols-outlined mr-1">location_on</span>
                                        <span className="text-sm">Conference Hall</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="h-48 bg-teal-600 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-6xl">
                                            theater_comedy
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 text-sm font-bold text-teal-600">
                                        DEC 10
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-xl mb-2">Dramatic Reading</h3>
                                    <p className="text-gray-700 mb-4">
                                        Experience literature come alive through dramatic readings of famous literary
                                        works.
                                    </p>
                                    <div className="flex items-center text-gray-500">
                                        <span className="material-symbols-outlined mr-1">location_on</span>
                                        <span className="text-sm">Open Theater</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="max-w-4xl mx-auto mb-12 bg-white rounded-xl p-8 shadow-lg">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Join Rehnuma</h2>
                        <p className="text-center mb-8">
                            Be a part of our vibrant literary community and express yourself through words and
                            performance
                        </p>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="interests">
                                    Your Literary Interests
                                </label>
                                <select
                                    id="interests"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                                >
                                    <option value="">Select your primary interest</option>
                                    <option value="poetry">Poetry</option>
                                    <option value="prose">Prose & Story Writing</option>
                                    <option value="debate">Debate & Public Speaking</option>
                                    <option value="drama">Dramatic Performance</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1" htmlFor="message">
                                    Tell us about yourself
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                                    placeholder="Share your literary experience or why you want to join Rehnuma"
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </section>
                    {/* Next: "Add testimonials section from past members" */}
                </main>

                <footer className="max-w-6xl mx-auto pt-8 pb-6 text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition-colors duration-300"
                        >
                            <i className="fa-brands fa-facebook text-indigo-600"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition-colors duration-300"
                        >
                            <i className="fa-brands fa-instagram text-indigo-600"></i>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition-colors duration-300"
                        >
                            <i className="fa-brands fa-twitter text-indigo-600"></i>
                        </a>
                    </div>
                    <p className="text-gray-600">© 2023 Rehnuma Literary Society. All rights reserved.</p>
                    {/* Next: "Add contact information and location map" */}
                </footer>
            </div>
        </div>
    )
}

export default Rehnuma;