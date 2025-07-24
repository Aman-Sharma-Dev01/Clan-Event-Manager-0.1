import React from "react";

import "./Felicia.css";


const Felicia = () => {
  return (
<div id="webcrumbs"> 
        	<div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 text-gray-800 font-serif overflow-hidden">
	  {/* Hero Section */}
	  <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
	    <div className="absolute inset-0 overflow-hidden">
	      <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
	      <div className="absolute top-0 -right-4 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
	      <div className="absolute -bottom-8 left-20 w-52 h-52 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
	      <div className="absolute -bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-6000"></div>
	    </div>
	    
	    <div className="relative z-10 text-center max-w-4xl mx-auto transform transition duration-1000 hover:scale-105">
	      <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-600 drop-shadow-sm">
	        FELICIA
	      </h1>
	      <p className="text-xl md:text-2xl mb-12 italic">Where Art Transcends Boundaries</p>
	      <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto mb-12 rounded-full"></div>
	      <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
	        An immersive society dedicated to the celebration of artistic expression in all its forms, nurturing creativity and fostering connections through the universal language of art.
	      </p>
	      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdUxm28UF8rWU5Q1dqvKQHqaNxsyw6KvwcamiKjNbhN0i9gpA/viewform" className="px-8 py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full text-lg font-medium transform transition duration-500 hover:scale-105 hover:shadow-lg">
	        Join Our Community
	      </a>
	    </div>
	    
	    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
	      <span className="material-symbols-outlined text-3xl text-gray-500">expand_more</span>
	    </div>
	  </section>
	
	  {/* About Section */}
	  <section className="py-20 px-4 relative">
	    <div className="max-w-6xl mx-auto">
	      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-700">Our Vision</h2>
	      
	      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
	        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
	          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
	            <span className="material-symbols-outlined text-3xl text-primary-600">palette</span>
	          </div>
	          <h3 className="text-xl font-bold text-center mb-4">Artistic Freedom</h3>
	          <p className="text-center">We believe in the unrestricted exploration of creative expression, empowering artists to break conventional boundaries.</p>
	        </div>
	        
	        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
	          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
	            <span className="material-symbols-outlined text-3xl text-primary-600">diversity_3</span>
	          </div>
	          <h3 className="text-xl font-bold text-center mb-4">Inclusive Community</h3>
	          <p className="text-center">Creating a welcoming space for artists of all backgrounds, styles, and experience levels to connect and collaborate.</p>
	        </div>
	        
	        <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
	          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
	            <span className="material-symbols-outlined text-3xl text-primary-600">lightbulb</span>
	          </div>
	          <h3 className="text-xl font-bold text-center mb-4">Innovative Expression</h3>
	          <p className="text-center">Pushing the boundaries of artistic innovation through experimental techniques and interdisciplinary approaches.</p>
	        </div>
	      </div>
	    </div>
	  </section>
	
	  {/* Gallery Section */}
	  <section className="py-20 px-4 relative overflow-hidden">
	    <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
	    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
	    
	    <div className="max-w-6xl mx-auto relative z-10">
	      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-700">Featured Artworks</h2>
	      
	      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
	        {[1, 2, 3, 4, 5, 6].map((item) => (
	          <div key={item} className="group relative overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer">
	            <img 
	              src={`https://source.unsplash.com/random/600x400?art,painting,${item}`} 
	              alt="Artwork" 
	              className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
	              keywords="abstract art, modern painting, contemporary artwork, artistic expression"
	            />
	            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
	              <div className="p-4 text-white">
	                <h3 className="text-lg font-bold">Artistic Masterpiece {item}</h3>
	                <p className="text-sm opacity-90">By Felicia Artist</p>
	              </div>
	            </div>
	          </div>
	        ))}
	      </div>
	      
	      <div className="text-center mt-12">
	        <button className="px-8 py-3 border-2 border-primary-500 text-primary-700 rounded-full text-lg font-medium transform transition duration-500 hover:bg-primary-500 hover:text-white hover:shadow-lg">
	          View Full Gallery
	        </button>
	      </div>
	    </div>
	  </section>
	
	  {/* Events Section */}
	  {/* <section className="py-20 px-4 relative bg-white/30 backdrop-blur-sm">
	    <div className="max-w-6xl mx-auto">
	      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-700">Upcoming Events</h2>
	      
	      <div className="grid md:grid-cols-2 gap-8">
	        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
	          <div className="flex items-start gap-4">
	            <div className="bg-primary-100 rounded-lg p-3 text-center min-w-[80px]">
	              <span className="block text-2xl font-bold text-primary-700">15</span>
	              <span className="text-sm text-primary-600">June</span>
	            </div>
	            <div>
	              <h3 className="text-xl font-bold mb-2">Summer Art Exhibition</h3>
	              <p className="text-gray-600 mb-4">An immersive showcase featuring diverse artistic expressions from emerging and established artists in our community.</p>
	              <div className="flex items-center text-gray-500">
	                <span className="material-symbols-outlined text-sm mr-1">location_on</span>
	                <span className="text-sm">Felicia Art Gallery, Downtown</span>
	              </div>
	            </div>
	          </div>
	        </div>
	        
	        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
	          <div className="flex items-start gap-4">
	            <div className="bg-primary-100 rounded-lg p-3 text-center min-w-[80px]">
	              <span className="block text-2xl font-bold text-primary-700">23</span>
	              <span className="text-sm text-primary-600">July</span>
	            </div>
	            <div>
	              <h3 className="text-xl font-bold mb-2">Artistic Techniques Workshop</h3>
	              <p className="text-gray-600 mb-4">Learn innovative painting techniques from master artists in an interactive and collaborative environment.</p>
	              <div className="flex items-center text-gray-500">
	                <span className="material-symbols-outlined text-sm mr-1">location_on</span>
	                <span className="text-sm">Creative Studio, Arts District</span>
	              </div>
	            </div>
	          </div>
	        </div>
	        
	        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
	          <div className="flex items-start gap-4">
	            <div className="bg-primary-100 rounded-lg p-3 text-center min-w-[80px]">
	              <span className="block text-2xl font-bold text-primary-700">8</span>
	              <span className="text-sm text-primary-600">August</span>
	            </div>
	            <div>
	              <h3 className="text-xl font-bold mb-2">Art & Music Fusion Night</h3>
	              <p className="text-gray-600 mb-4">Experience the harmonious blend of visual arts and musical performances in an enchanting evening celebration.</p>
	              <div className="flex items-center text-gray-500">
	                <span className="material-symbols-outlined text-sm mr-1">location_on</span>
	                <span className="text-sm">Harmony Hall, Cultural Center</span>
	              </div>
	            </div>
	          </div>
	        </div>
	        
	        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl">
	          <div className="flex items-start gap-4">
	            <div className="bg-primary-100 rounded-lg p-3 text-center min-w-[80px]">
	              <span className="block text-2xl font-bold text-primary-700">19</span>
	              <span className="text-sm text-primary-600">August</span>
	            </div>
	            <div>
	              <h3 className="text-xl font-bold mb-2">Digital Art Symposium</h3>
	              <p className="text-gray-600 mb-4">Explore the intersection of technology and creativity with leading digital artists and innovative creators.</p>
	              <div className="flex items-center text-gray-500">
	                <span className="material-symbols-outlined text-sm mr-1">location_on</span>
	                <span className="text-sm">Tech Arts Center, Innovation District</span>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	  </section> */}
	
	  {/* Testimonials */}
	  <section className="py-20 px-4 relative">
	    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
	      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
	      <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
	    </div>
	    
	    <div className="max-w-6xl mx-auto">
	      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-700">What Our Members Say</h2>
	      
	      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
	        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl relative">
	          <div className="absolute -top-5 left-8 text-6xl text-primary-300">"</div>
	          <p className="italic text-gray-600 mb-6 relative z-10">Joining Felicia has transformed my artistic journey. The supportive community and creative freedom have helped me discover new dimensions in my work.</p>
	          <div className="flex items-center">
	            <img 
	              src="https://images.unsplash.com/photo-1614204424926-196a80bf0be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTMwODM1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
	              alt="Member" 
	              className="w-12 h-12 rounded-full object-cover mr-4"
	              keywords="artist portrait, creative person, woman artist"
	            />
	            <div>
	              <h4 className="font-bold">Sophia Chen</h4>
	              <p className="text-sm text-gray-500">Mixed Media Artist</p>
	            </div>
	          </div>
	        </div>
	        
	        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl relative">
	          <div className="absolute -top-5 left-8 text-6xl text-primary-300">"</div>
	          <p className="italic text-gray-600 mb-6 relative z-10">The workshops and exhibitions organized by Felicia have opened doors to collaborations I never thought possible. It's more than a society; it's a creative family.</p>
	          <div className="flex items-center">
	            <img 
	              src="https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHxhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTMwODM1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
	              alt="Member" 
	              className="w-12 h-12 rounded-full object-cover mr-4"
	              keywords="artist portrait, creative person, man artist"
	            />
	            <div>
	              <h4 className="font-bold">Marcus Johnson</h4>
	              <p className="text-sm text-gray-500">Abstract Painter</p>
	            </div>
	          </div>
	        </div>
	        
	        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl relative">
	          <div className="absolute -top-5 left-8 text-6xl text-primary-300">"</div>
	          <p className="italic text-gray-600 mb-6 relative z-10">As an emerging artist, finding my voice was challenging until I found Felicia. The mentorship and exposure have been invaluable to my growth and confidence.</p>
	          <div className="flex items-center">
	            <img 
	              src="https://images.unsplash.com/photo-1570158268183-d296b2892211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwzfHxhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTMwODM1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
	              alt="Member" 
	              className="w-12 h-12 rounded-full object-cover mr-4"
	              keywords="artist portrait, creative person, woman artist"
	            />
	            <div>
	              <h4 className="font-bold">Elena Rivera</h4>
	              <p className="text-sm text-gray-500">Digital Illustrator</p>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	  </section>
	
	  {/* Join Section */}
	  {/* <section className="py-20 px-4 relative overflow-hidden">
	    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-80"></div>
	    
	    <div className="max-w-4xl mx-auto relative z-10 text-center">
	      <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-700">Join Our Artistic Journey</h2>
	      <p className="text-lg mb-10 max-w-2xl mx-auto">Become part of a vibrant community where your creativity can flourish. Connect with fellow artists, participate in exhibitions, and transform your artistic vision into reality.</p>
	      
	      <form className="max-w-lg mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
	        <div className="mb-4">
	          <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition" />
	        </div>
	        <div className="mb-4">
	          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition" />
	        </div>
	        <div className="mb-6">
	          <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 transition">
	            <option value="">Select Your Artistic Interest</option>
	            <option value="painting">Painting</option>
	            <option value="sculpture">Sculpture</option>
	            <option value="digital">Digital Art</option>
	            <option value="mixed">Mixed Media</option>
	            <option value="photography">Photography</option>
	            <option value="other">Other</option>
	          </select>
	        </div>
	        <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-lg text-lg font-medium transform transition duration-500 hover:scale-105 hover:shadow-lg">
	          Join Felicia
	        </button>
	      </form>
	    </div>
	  </section> */}
	
	  {/* Footer */}
	  <footer className="py-12 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
	    <div className="max-w-6xl mx-auto">
	      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
	        <h2 className="text-3xl font-bold mb-4 md:mb-0">FELICIA</h2>
	        <div className="flex space-x-6">
	          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition hover:bg-white/20 hover:scale-110">
	            <i className="fa-brands fa-instagram text-xl"></i>
	          </a>
	          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition hover:bg-white/20 hover:scale-110">
	            <i className="fa-brands fa-facebook text-xl"></i>
	          </a>
	          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition hover:bg-white/20 hover:scale-110">
	            <i className="fa-brands fa-twitter text-xl"></i>
	          </a>
	          <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition hover:bg-white/20 hover:scale-110">
	            <i className="fa-brands fa-youtube text-xl"></i>
	          </a>
	        </div>
	      </div>
	      
	      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-t border-b border-white/20">
	        <div>
	          <h3 className="text-lg font-bold mb-4">About Felicia</h3>
	          <ul className="space-y-2">
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Our Story</a></li>
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Mission & Vision</a></li>
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Team</a></li>
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Partnerships</a></li>
	          </ul>
	        </div>
	        
	        <div>
	          <h3 className="text-lg font-bold mb-4">Programs</h3>
	          <ul className="space-y-2">
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Exhibitions</a></li>
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Workshops</a></li>
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Mentorship</a></li>
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Residencies</a></li>
	          </ul>
	        </div>
	        
	        <div>
	          <h3 className="text-lg font-bold mb-4">Support</h3>
	          <ul className="space-y-2">
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Donate</a></li>
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Volunteer</a></li>
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Sponsor</a></li>
	            <li><a href="#" className="opacity-80 hover:opacity-100 transition">Partner With Us</a></li>
	          </ul>
	        </div>
	        
	        <div>
	          <h3 className="text-lg font-bold mb-4">Contact</h3>
	          <ul className="space-y-2">
	            <li className="flex items-center opacity-80">
	              <span className="material-symbols-outlined mr-2 text-sm">mail</span>
	              info@feliciaart.org
	            </li>
	            <li className="flex items-center opacity-80">
	              <span className="material-symbols-outlined mr-2 text-sm">call</span>
	              +1 (555) 123-4567
	            </li>
	            <li className="flex items-center opacity-80">
	              <span className="material-symbols-outlined mr-2 text-sm">location_on</span>
	              123 Creative Avenue, Artsville
	            </li>
	          </ul>
	        </div>
	      </div>
	      
	      <div className="pt-8 text-center text-sm opacity-60">
	        <p>© 2023 Felicia Art Society. All rights reserved.</p>
	      </div>
	    </div>
	  </footer>
	  
	  <style dangerouslySetInnerHTML={{ __html: `
	    @keyframes blob {
	      0% { transform: scale(1) translate(0px, 0px); }
	      33% { transform: scale(1.1) translate(30px, -50px); }
	      66% { transform: scale(0.9) translate(-20px, 20px); }
	      100% { transform: scale(1) translate(0px, 0px); }
	    }
	    .animate-blob {
	      animation: blob 15s infinite alternate;
	    }
	    .animation-delay-2000 {
	      animation-delay: 2s;
	    }
	    .animation-delay-4000 {
	      animation-delay: 4s;
	    }
	    .animation-delay-6000 {
	      animation-delay: 6s;
	    }
	  `}} />
	  
	  {/* Next: "Add a parallax effect to the background elements" */}
	  {/* Next: "Add an interactive art gallery with filtering options" */}
	  {/* Next: "Add an artist spotlight section with rotating featured artists" */}
	</div> 
        </div>
  )
}

export default Felicia;