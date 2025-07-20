import React from "react";

import "./Khalbali.css";


 const Khalbali = () => {
  return (
<div id="webcrumbs"> 
        	<div className="min-h-screen bg-gradient-to-br from-purple-900 via-red-800 to-orange-700">
	  {/* Header/Navbar */}
	  <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm text-white shadow-lg">
	    
	  </header>
	
	  {/* Hero Section */}
	  <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
	    <div className="absolute inset-0 bg-black/30 z-10"></div>
	    <img 
	      src="https://images.unsplash.com/photo-1546427660-eb346c344ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
	      alt="Dancers performing" 
	      className="absolute inset-0 w-full h-full object-cover"
	      keywords="dancers, performance, stage, concert, silhouette"
	    />
	    <div className="container mx-auto px-4 relative z-20 text-center">
	      <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
	        <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">KHALBALI</span>
	      </h1>
	      <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
	        Unleash the rhythm within. Dance like nobody's watching.
	      </p>
	      <div className="flex flex-col sm:flex-row justify-center gap-4">
	        <a href="#events" className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300">
	          Upcoming Events
	        </a>
	        <a href="#join" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300">
	          Join Us
	        </a>
	      </div>
	    </div>
	    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
	      <span className="material-symbols-outlined text-white text-4xl">expand_more</span>
	    </div>
	  </section>
	
	  {/* About Section */}
	  <section id="about" className="py-20 bg-black/80">
	    <div className="container mx-auto px-4">
	      <h2 className="text-4xl font-bold text-center mb-12 text-white">About <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">Khalbali</span></h2>
	      
	      <div className="grid md:grid-cols-2 gap-12 items-center">
	        <div className="space-y-6 text-gray-200">
	          <p className="text-lg">
	            Khalbali is more than just a dance society; it's a movement, a family, and a passion. 
	            Founded in 2015, we have grown into one of the most vibrant cultural organizations, 
	            bringing together talented dancers from diverse backgrounds.
	          </p>
	          <p className="text-lg">
	            Our name "Khalbali" translates to "commotion" or "excitement" in Hindi, reflecting the 
	            energy and enthusiasm we bring to every performance. We specialize in a variety of dance forms, 
	            from classical Indian to contemporary, hip-hop, and fusion.
	          </p>
	          <p className="text-lg">
	            With numerous achievements under our belt, including national-level competition wins and 
	            prestigious festival performances, Khalbali continues to push boundaries and set new standards 
	            in the dance community.
	          </p>
	          
	          <div className="pt-4 flex space-x-4">
	            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
	              <i className="fa-brands fa-instagram text-xl text-pink-400"></i>
	            </a>
	            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
	              <i className="fa-brands fa-youtube text-xl text-red-500"></i>
	            </a>
	            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
	              <i className="fa-brands fa-facebook text-xl text-blue-500"></i>
	            </a>
	            <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300">
	              <i className="fa-brands fa-twitter text-xl text-blue-400"></i>
	            </a>
	          </div>
	        </div>
	        
	        <div className="relative h-96 overflow-hidden rounded-xl shadow-2xl">
	          <img 
	            src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
	            alt="Group of dancers" 
	            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
	            keywords="dance group, team, performers, dance crew, stage performance"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
	          <div className="absolute bottom-6 left-6 text-white">
	            <p className="text-2xl font-bold">Our Team</p>
	            <p className="text-sm">Award-winning choreographers and dancers</p>
	          </div>
	        </div>
	      </div>
	      
	      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
	        <div className="bg-purple-900/50 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300">
	          <span className="material-symbols-outlined text-5xl text-amber-400 mb-4">diversity_3</span>
	          <h3 className="text-xl font-bold text-white mb-2">50+ Members</h3>
	          <p className="text-gray-300">Talented dancers from diverse backgrounds</p>
	        </div>
	        
	        <div className="bg-purple-900/50 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300">
	          <span className="material-symbols-outlined text-5xl text-amber-400 mb-4">emoji_events</span>
	          <h3 className="text-xl font-bold text-white mb-2">20+ Awards</h3>
	          <p className="text-gray-300">National and regional championships</p>
	        </div>
	        
	        <div className="bg-purple-900/50 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300">
	          <span className="material-symbols-outlined text-5xl text-amber-400 mb-4">theater_comedy</span>
	          <h3 className="text-xl font-bold text-white mb-2">100+ Shows</h3>
	          <p className="text-gray-300">Performances at prestigious venues</p>
	        </div>
	        
	        <div className="bg-purple-900/50 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-all duration-300">
	          <span className="material-symbols-outlined text-5xl text-amber-400 mb-4">school</span>
	          <h3 className="text-xl font-bold text-white mb-2">10+ Workshops</h3>
	          <p className="text-gray-300">Training sessions by industry experts</p>
	        </div>
	      </div>
	    </div>
	  </section>
	
	  {/* Events Section */}
	  <section id="events" className="py-20 bg-gradient-to-br from-purple-900/90 via-red-800/90 to-orange-700/90">
	    <div className="container mx-auto px-4">
	      <h2 className="text-4xl font-bold text-center mb-12 text-white">Upcoming <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">Events</span></h2>
	      
	      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
	        <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
	          <div className="relative h-48">
	            <img 
	              src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
	              alt="Annual Dance Festival" 
	              className="w-full h-full object-cover"
	              keywords="dance festival, stage, performance, concert, audience"
	            />
	            <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">
	              26 Aug
	            </div>
	          </div>
	          <div className="p-6">
	            <h3 className="text-xl font-bold text-white mb-2">Annual Dance Festival</h3>
	            <p className="text-gray-300 mb-4">Our flagship event featuring performances from all dance forms and special guest appearances.</p>
	            <div className="flex justify-between items-center">
	              <span className="text-amber-400 flex items-center">
	                <span className="material-symbols-outlined mr-1">location_on</span>
	                City Auditorium
	              </span>
	              <a href="#" className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300">
	                Book Now
	              </a>
	            </div>
	          </div>
	        </div>
	        
	        <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
	          <div className="relative h-48">
	            <img 
	              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
	              alt="Bollywood Night" 
	              className="w-full h-full object-cover"
	              keywords="bollywood dance, indian dance, colorful performance"
	            />
	            <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">
	              15 Sep
	            </div>
	          </div>
	          <div className="p-6">
	            <h3 className="text-xl font-bold text-white mb-2">Bollywood Night</h3>
	            <p className="text-gray-300 mb-4">A celebration of Bollywood dance with colorful costumes, energetic performances, and hit music.</p>
	            <div className="flex justify-between items-center">
	              <span className="text-amber-400 flex items-center">
	                <span className="material-symbols-outlined mr-1">location_on</span>
	                Cultural Center
	              </span>
	              <a href="#" className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300">
	                Book Now
	              </a>
	            </div>
	          </div>
	        </div>
	        
	        <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
	          <div className="relative h-48">
	            <img 
	              src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
	              alt="Dance Workshop" 
	              className="w-full h-full object-cover"
	              keywords="dance workshop, learning, dance class, teaching"
	            />
	            <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold">
	              2 Oct
	            </div>
	          </div>
	          <div className="p-6">
	            <h3 className="text-xl font-bold text-white mb-2">Hip-Hop Workshop</h3>
	            <p className="text-gray-300 mb-4">Learn from professional hip-hop dancers in this intensive workshop for all skill levels.</p>
	            <div className="flex justify-between items-center">
	              <span className="text-amber-400 flex items-center">
	                <span className="material-symbols-outlined mr-1">location_on</span>
	                Dance Studio
	              </span>
	              <a href="#" className="bg-amber-500 hover:bg-amber-600 text-black px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300">
	                Register
	              </a>
	            </div>
	          </div>
	        </div>
	      </div>
	      
	      <div className="mt-12 text-center">
	        <a href="#" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300">
	          View All Events
	        </a>
	      </div>
	    </div>
	  </section>
	
	  {/* Gallery Section */}
	  <section id="gallery" className="py-20 bg-black/80">
	    <div className="container mx-auto px-4">
	      <h2 className="text-4xl font-bold text-center mb-12 text-white">Our <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">Gallery</span></h2>
	      
	      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
	        <div className="relative overflow-hidden rounded-lg group h-48 md:h-64">
	          <img 
	            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
	            alt="Performance photo" 
	            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
	            keywords="dance performance, stage dance, contemporary"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
	            <p className="text-white font-medium">Annual Showcase 2023</p>
	          </div>
	        </div>
	        
	        <div className="relative overflow-hidden rounded-lg group h-48 md:h-64">
	          <img 
	            src="https://images.unsplash.com/photo-1609602961949-eddbb90383cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBkYW5jZXxlbnwwfHx8fDE3NTI5ODA2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080" 
	            alt="Performance photo" 
	            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
	            keywords="hip hop dance, street dance, urban dance"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
	            <p className="text-white font-medium">Street Dance Battle</p>
	          </div>
	        </div>
	        
	        <div className="relative overflow-hidden rounded-lg group h-48 md:h-64">
	          <img 
	            src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80" 
	            alt="Performance photo" 
	            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
	            keywords="classical dance, indian dance, cultural performance"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
	            <p className="text-white font-medium">Classical Dance Evening</p>
	          </div>
	        </div>
	        
	        <div className="relative overflow-hidden rounded-lg group h-48 md:h-64">
	          <img 
	            src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMGdyb3VwfGVufDB8fHx8MTc1Mjk4MDc4N3ww&ixlib=rb-4.1.0&q=80&w=1080" 
	            alt="Performance photo" 
	            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
	            keywords="dance group, teamwork, synchronization"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
	            <p className="text-white font-medium">Festival Competition</p>
	          </div>
	        </div>
	        
	        <div className="relative overflow-hidden rounded-lg group h-48 md:h-64">
	          <img 
	            src="https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
	            alt="Performance photo" 
	            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
	            keywords="dance duet, partner dance, modern dance"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
	            <p className="text-white font-medium">Contemporary Showcase</p>
	          </div>
	        </div>
	        
	        <div className="relative overflow-hidden rounded-lg group h-48 md:h-64">
	          <img 
	            src="https://images.unsplash.com/photo-1585873587499-4c2b179c6c51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxmb2xrJTIwZGFuY2V8ZW58MHx8fHwxNzUyOTgwODA4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
	            alt="Performance photo" 
	            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
	            keywords="folk dance, traditional dance, cultural performance"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
	            <p className="text-white font-medium">Folk Dance Festival</p>
	          </div>
	        </div>
	        
	        <div className="relative overflow-hidden rounded-lg group h-48 md:h-64">
	          <img 
	            src="https://images.unsplash.com/photo-1472653816316-3ad6f10a6592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
	            alt="Performance photo" 
	            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
	            keywords="ballet, dance, grace, performance"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
	            <p className="text-white font-medium">Ballet Performance</p>
	          </div>
	        </div>
	        
	        <div className="relative overflow-hidden rounded-lg group h-48 md:h-64">
	          <img 
	            src="https://images.unsplash.com/photo-1601931935821-5fbe71157695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
	            alt="Performance photo" 
	            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
	            keywords="celebration, dance, joy, performance"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
	            <p className="text-white font-medium">Celebration Event</p>
	          </div>
	        </div>
	      </div>
	      
	      <div className="mt-12 text-center">
	        <a href="#" className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold transform hover:scale-105 transition-all duration-300">
	          View Full Gallery
	        </a>
	      </div>
	    </div>
	  </section>
	
	  {/* Team Section */}
	  <section id="team" className="py-20 bg-gradient-to-br from-purple-900/90 via-red-800/90 to-orange-700/90">
	    <div className="container mx-auto px-4">
	      <h2 className="text-4xl font-bold text-center mb-12 text-white">Our <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">Team</span></h2>
	      
	      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
	        <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
	          <div className="relative h-80">
	            <img 
	              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
	              alt="Team member" 
	              className="w-full h-full object-cover"
	              keywords="dancer, performer, artist, professional dancer"
	            />
	            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
	          </div>
	          <div className="p-6 text-center">
	            <h3 className="text-xl font-bold text-white mb-1">Priya Sharma</h3>
	            <p className="text-amber-400 mb-3">Founder & Lead Choreographer</p>
	            <div className="flex justify-center space-x-3">
	              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300">
	                <i className="fa-brands fa-instagram text-pink-400"></i>
	              </a>
	              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300">
	                <i className="fa-brands fa-twitter text-blue-400"></i>
	              </a>
	              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300">
	                <i className="fa-brands fa-linkedin text-blue-500"></i>
	              </a>
	            </div>
	          </div>
	        </div>
	        
	        <div className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
	          <div className="relative h-80">
	            <img 
	              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
	              alt="Team member" 
	              className="w-full h-full object-cover"
	              keywords="dancer, performer, artist, professional dancer"
	            />
	            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
	          </div>
	          <div className="p-6 text-center">
	            <h3 className="text-xl font-bold text-white mb-1">Rajiv Mehta</h3>
	            <p className="text-amber-400 mb-3">Hip-Hop Choreographer</p>
	            <div className="flex justify-center space-x-3">
	              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300">
	                <i className="fa-brands fa-instagram text-pink-400"></i>
	              </a>
	              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-300">
	                <i className="fa-brands fa-twitter text-blue-400"></i>
	              </a>
	              </div></div></div></div></div></section></div> 
        </div>
  )
}

export default Khalbali;

