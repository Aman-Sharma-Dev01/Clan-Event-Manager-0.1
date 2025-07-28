import React from "react";

import "./Moksh.css";


const Moksh= () => {
  return (
<div id="webcrumbs"> 
            <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white">
      {/* Hero Section */}
      <header className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Moksh/enjoy.jpg" 
            alt="Singers performing on stage" 
            className="w-full h-full object-cover opacity-60"
            keywords="concert, singers, performance, stage, microphone, music"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent"></div>
      
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-wide">
            <span className="block">MOKSH</span>
            <span className="text-2xl md:text-3xl font-light block mt-2">Singing Society</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/90">Unleashing voices, creating harmony, and crafting musical memories together</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUxm28UF8rWU5Q1dqvKQHqaNxsyw6KvwcamiKjNbhN0i9gpA/viewform" className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Join Our Journey
          </a>
        </div>
      </header>
    
      {/* About Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 classWhite">About Moksh</h2>
            <div className="w-20 h-1 bg-primary-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
              <span className="material-symbols-outlined text-4xl text-primary-300 mb-4">groups</span>
              <h3 className="text-xl font-semibold mb-3">Our Community</h3>
              <p className="text-white/80">Moksh is a vibrant community of singers, musicians, and music enthusiasts who come together to celebrate the art of singing and vocal expression.</p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
              <span className="material-symbols-outlined text-4xl text-primary-300 mb-4">music_note</span>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-white/80">We aim to foster musical talent, promote cultural diversity through music, and create a supportive environment for singers to grow and excel.</p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
              <span className="material-symbols-outlined text-4xl text-primary-300 mb-4">mic</span>
              <h3 className="text-xl font-semibold mb-3">What We Do</h3>
              <p className="text-white/80">From regular practice sessions to public performances, workshops, and competitions, we explore various genres and styles to enrich our musical journey.</p>
            </div>
          </div>
        </div>
      </section>
    
      {/* Resurrection 2024 */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 classWhite">Resurrection 2024</h2>
            <div className="w-20 h-1 bg-primary-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-800/70 to-purple-800/70 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/Moksh/akhil2.jpg" 
                  alt="Annual Concert" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  keywords="concert, performance, stage, audience, event"
                />
                
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Annual Harmony Concert</h3>
                <p className="text-white/80 mb-4">Our flagship event featuring solo and group performances across various musical genres.</p>
               
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-800/70 to-purple-800/70 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/Moksh/first.jpg" 
                  alt="Singing workshop" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  keywords="workshop, vocal training, singing lesson, music education"
                />
               
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Vocal Technique Workshop</h3>
                <p className="text-white/80 mb-4">Learn advanced vocal techniques from industry professionals and enhance your singing skills.</p>
               
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-800/70 to-purple-800/70 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 relative overflow-hidden">
                <img 
                  src="/Moksh/second.jpg" 
                  alt="Singing competition" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  keywords="competition, talent show, performance, music contest"
                />
               
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Winter Melodies Competition</h3>
                <p className="text-white/80 mb-4">Showcase your talent in our seasonal singing competition with amazing prizes to be won.</p>
                
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-primary-400 hover:bg-primary-400 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              View All Events
            </button>
          </div>
        </div>
      </section>
    
      {/* Gallery Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 classWhite">Our Gallery</h2>
            <div className="w-20 h-1 bg-primary-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-lg h-40 md:h-48 lg:h-56 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="/Moksh/akhil3.jpg" 
                alt="Performance on stage" 
                className="w-full h-full object-cover"
                keywords="singing, performance, concert, stage"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-40 md:h-48 lg:h-56 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="/Moksh/third.jpg" 
                alt="Concert audience" 
                className="w-full h-full object-cover"
                keywords="audience, concert, crowd, music event"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-40 md:h-48 lg:h-56 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Singer with microphone" 
                className="w-full h-full object-cover"
                keywords="singer, microphone, performance, vocal"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-40 md:h-48 lg:h-56 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="/Moksh/fourth.jpg" 
                alt="Group performance" 
                className="w-full h-full object-cover"
                keywords="group singing, choir, ensemble, performance"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-40 md:h-48 lg:h-56 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="/Moksh/sixth.jpg" 
                alt="Music rehearsal" 
                className="w-full h-full object-cover"
                keywords="rehearsal, practice, singing group, music"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-40 md:h-48 lg:h-56 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Backstage preparation" 
                className="w-full h-full object-cover"
                keywords="backstage, preparation, performers, singers"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-40 md:h-48 lg:h-56 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1613870948964-7125fa3e1aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmd8ZW58MHx8fHwxNzUyOTgwOTQzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Recording session" 
                className="w-full h-full object-cover"
                keywords="recording, studio, singing, music production"
              />
            </div>
            <div className="overflow-hidden rounded-lg h-40 md:h-48 lg:h-56 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Award ceremony" 
                className="w-full h-full object-cover"
                keywords="award, ceremony, celebration, achievement"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="border-2 border-primary-400 hover:bg-primary-400 text-white py-3 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>
    
      {/* Testimonials */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 classWhite">What Our Members Say</h2>
            <div className="w-20 h-1 bg-primary-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-800/40 to-purple-800/40 p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1654723011673-86b0eae447a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx0ZXN0aW1vbmlhbHxlbnwwfHx8fDE3NTI5ODA5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Member testimonial" 
                    className="w-full h-full object-cover"
                    keywords="testimonial, member, person, portrait"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-white/70 text-sm">Member since 2021</p>
                </div>
              </div>
              <p className="text-white/80 italic">"Joining Moksh was the best decision I've made for my singing journey. The supportive community and expert guidance have helped me grow as a vocalist beyond my expectations."</p>
              <div className="flex text-primary-300 mt-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-800/40 to-purple-800/40 p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1654723011680-0e037c2a4f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHx0ZXN0aW1vbmlhbHxlbnwwfHx8fDE3NTI5ODA5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Member testimonial" 
                    className="w-full h-full object-cover"
                    keywords="testimonial, member, person, portrait"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Arjun Patel</h4>
                  <p className="text-white/70 text-sm">Member since 2020</p>
                </div>
              </div>
              <p className="text-white/80 italic">"The performance opportunities at Moksh have helped me overcome stage fright and build confidence. The friendships I've formed here are just as valuable as the musical skills I've developed."</p>
              <div className="flex text-primary-300 mt-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star_half</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-800/40 to-purple-800/40 p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/Moksh/taman.jpg" 
                    alt="Member testimonial" 
                    className="w-full h-full object-cover"
                    keywords="testimonial, member, person, portrait"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Taman </h4>
                  <p className="text-white/70 text-sm">Member since 2019</p>
                </div>
              </div>
              <p className="text-white/80 italic">"Moksh is more than just a singing society; it's a family where your musical journey is nurtured. The workshops and competitions have opened doors to opportunities I never thought possible."</p>
              <div className="flex text-primary-300 mt-4">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* Join Us Section */}
      {/* <section className="py-16 px-6 md:px-12 lg:px-24 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Music notes background" 
            className="w-full h-full object-cover"
            keywords="music, notes, background, pattern"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Moksh Today</h2>
            <div className="w-20 h-1 bg-primary-400 mx-auto"></div>
            <p className="max-w-2xl mx-auto mt-6 text-white/90">Become part of our vibrant singing community and embark on a musical journey that will help you grow as a performer and connect with fellow music enthusiasts.</p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-800/60 to-purple-800/60 p-8 md:p-12 rounded-2xl backdrop-blur-sm shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Membership Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary-300 mr-3 mt-1">check_circle</span>
                    <span>Weekly practice sessions with professional vocal coaches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary-300 mr-3 mt-1">check_circle</span>
                    <span>Opportunities to perform at various events and competitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary-300 mr-3 mt-1">check_circle</span>
                    <span>Access to specialized workshops and masterclasses</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary-300 mr-3 mt-1">check_circle</span>
                    <span>Connect with a community of passionate singers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-primary-300 mr-3 mt-1">check_circle</span>
                    <span>Recording opportunities and portfolio development</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Register Your Interest</h3>
                <form>
                  <div className="mb-4">
                    <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-primary-400 outline-none transition-colors text-white" />
                  </div>
                  <div className="mb-4">
                    <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-primary-400 outline-none transition-colors text-white" />
                  </div>
                  <div className="mb-4">
                    <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-primary-400 outline-none transition-colors text-white" />
                  </div>
                  <div className="mb-4">
                    <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-primary-400 outline-none transition-colors text-white">
                      <option value="" disabled selected>Experience Level</option>
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                      <option value="professional">Professional</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <textarea placeholder="Tell us about your singing experience and interests" rows="3" className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:border-primary-400 outline-none transition-colors text-white"></textarea>
                  </div>
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
     */}
      {/* Footer */}
      <footer className="bg-indigo-950 text-white/80 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
         </div></footer>
                  </div> 
        </div>
  )
}


export default Moksh;


