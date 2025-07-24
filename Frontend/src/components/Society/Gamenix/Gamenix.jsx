import React from "react"
import "./Gamenix.css"

const primary = {
    50: "#f3f1ff",
    100: "#e9e5ff",
    200: "#d5cfff",
    300: "#b7a9ff",
    400: "#9478ff",
    500: "#7341ff",
    600: "#631bff",
    700: "#611bf8",
    800: "#4607d0",
    900: "#3c08aa",
    950: "#220174",
    DEFAULT: "#611bf8",
    baseValue: "#611BF8"
}
const neutral = {
    50: "#f7f7f7",
    100: "#eeeeee",
    200: "#e0e0e0",
    300: "#cacaca",
    400: "#b1b1b1",
    500: "#999999",
    600: "#7f7f7f",
    700: "#676767",
    800: "#545454",
    900: "#464646",
    950: "#282828",
    baseValue: "#FFFFFF"
}

export const Gamenix = () => {
    return (
        <div id="webcrumbs">
            <div className="min-h-screen bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-purple-500">
                        Gamenics
                    </h1>
                    <p className="text-xl text-gray-300">Gaming Society</p>
                </header>

                <main>
                    <section className="mb-20">
                        <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl mb-10">
                            <img
                                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                                alt="Gaming arena with players"
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                                keywords="gaming, esports, gaming setup, gamers"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent flex items-end">
                                <div className="p-6 md:p-10">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                        Enter a World of Thrill, Adrenaline and Adventure
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-300 mb-6">
                                        Online gaming has reached an all-time high. Start your gaming journey with us
                                        today.
                                    </p>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUxm28UF8rWU5Q1dqvKQHqaNxsyw6KvwcamiKjNbhN0i9gpA/viewform" className="bg-primary-600 hover:bg-primary-500 transition-colors duration-300 py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-primary-500/30">
                                        Join Gamenics
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Next: "Add a gaming countdown timer for next tournament" */}
                    </section>

                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-10 text-center">Our Gaming Ecosystem</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-primary-600/20 transition-all duration-300 hover:-translate-y-1">
                                <span className="material-symbols-outlined text-4xl text-primary-500 mb-4">
                                    sports_esports
                                </span>
                                <h3 className="text-xl font-bold mb-2">Competitive Gaming</h3>
                                <p className="text-gray-400">
                                    Join tournaments and leagues across multiple game titles and compete for prizes and
                                    glory.
                                </p>
                            </div>

                            <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-primary-600/20 transition-all duration-300 hover:-translate-y-1">
                                <span className="material-symbols-outlined text-4xl text-primary-500 mb-4">people</span>
                                <h3 className="text-xl font-bold mb-2">Community Events</h3>
                                <p className="text-gray-400">
                                    Regular meetups, watch parties and social gaming events to connect with fellow
                                    gamers.
                                </p>
                            </div>

                            <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:shadow-primary-600/20 transition-all duration-300 hover:-translate-y-1">
                                <span className="material-symbols-outlined text-4xl text-primary-500 mb-4">school</span>
                                <h3 className="text-xl font-bold mb-2">Coaching & Training</h3>
                                <p className="text-gray-400">
                                    Improve your skills with coaching sessions from professional gamers and industry
                                    experts.
                                </p>
                            </div>
                        </div>
                        {/* Next: "Add a 'View All Services' button" */}
                    </section>

                    <section className="mb-20">
                        <h2 className="text-3xl font-bold mb-10 text-center">Featured Games</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="group relative overflow-hidden rounded-lg h-[250px]">
                                <img
                                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Esports game"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="esports, competitive gaming, valorant, fps"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg">Valorant</h3>
                                        <p className="text-sm text-gray-300">Tactical FPS</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-lg h-[250px]">
                                <img
                                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="League of Legends"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="moba, league of legends, competitive gaming"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg">League of Legends</h3>
                                        <p className="text-sm text-gray-300">MOBA</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-lg h-[250px]">
                                <img
                                    src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="PUBG"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="battle royale, pubg, fortnite"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg">Fortnite</h3>
                                        <p className="text-sm text-gray-300">Battle Royale</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden rounded-lg h-[250px]">
                                <img
                                    src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Minecraft"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="minecraft, sandbox game, creative gaming"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg">Minecraft</h3>
                                        <p className="text-sm text-gray-300">Sandbox</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Next: "Add a game spotlight section" */}
                    </section>

                    {/* <section className="mb-10">
                        <div className="bg-gradient-to-r from-primary-900/50 to-purple-900/50 rounded-xl p-8 md:p-10">
                            <h2 className="text-3xl font-bold mb-6 text-center">Join Our Gaming Community</h2>
                            <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
                                Start your gaming journey with us and connect with thousands of passionate gamers.
                                Weekly tournaments, exclusive rewards, and endless fun await you!
                            </p>
                            <form className="max-w-md mx-auto">
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                </div>
                                <div className="mb-6">
                                    <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                                        <option value="">Select Your Gaming Preference</option>
                                        <option value="fps">FPS Games</option>
                                        <option value="moba">MOBA Games</option>
                                        <option value="br">Battle Royale</option>
                                        <option value="rpg">RPG Games</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 transition-all duration-300 py-3 rounded-lg font-semibold shadow-lg hover:shadow-primary-500/30"
                                >
                                    Register Now
                                </button>
                            </form>
                        </div>
        
                    </section> */}
                </main>
            </div>
        </div>
    )
}
export default Gamenix;