import React from "react";

import "./Noora.css";


const Noora = () => {
  return (
<div id="webcrumbs"> 
        	<div className="bg-gradient-to-b from-white to-amber-50 min-h-screen font-sans">
	  {/* Hero Section */}
	  <header className="relative h-[80vh] overflow-hidden">
	    <img  
	      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxmYXNoaW9ufGVufDB8fHx8MTc1Mjk5NDA5NXww&ixlib=rb-4.1.0&q=80&w=1080" 
	      alt="Fashion model on runway" 
	      className="absolute inset-0 w-full h-full object-cover filter brightness-90"
	      keywords="fashion, runway, model, elegance, high fashion"
	    />
	    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
	    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
	      <h1 className="text-6xl md:text-8xl font-thin tracking-widest mb-4 transform hover:scale-105 transition-transform duration-500">NOORA</h1>
	      <p className="text-xl md:text-2xl font-light tracking-wider max-w-2xl text-center">FASHION SOCIETY</p>
	      <button className="mt-8 px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white tracking-widest text-sm uppercase transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">Discover Collection</button>
	    </div>
	    {/* Next: "Add a scroll down indicator with animation" */}
	  </header>
	
	  {/* About Section */}
	  <section className="py-16 md:py-24 px-4">
	    <div className="max-w-6xl mx-auto">
	      <div className="text-center mb-16">
	        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Our Story</h2>
	        <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
	      </div>
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
	        <div className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-md rounded-lg">
	          <span className="material-symbols-outlined text-4xl mb-4 text-primary-600">diamond</span>
	          <h3 className="text-xl font-medium mb-3">Luxury Approach</h3>
	          <p className="text-gray-600">We bring a luxury approach to sustainable fashion, creating timeless pieces that transcend seasonal trends.</p>
	        </div>
	        <div className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-md rounded-lg">
	          <span className="material-symbols-outlined text-4xl mb-4 text-primary-600">landscape</span>
	          <h3 className="text-xl font-medium mb-3">Sustainability</h3>
	          <p className="text-gray-600">Every garment is ethically produced using responsibly sourced materials with minimal environmental impact.</p>
	        </div>
	        <div className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-md rounded-lg">
	          <span  className="material-symbols-outlined text-4xl mb-4 text-primary-600">diversity_3</span>
	          <h3 className="text-xl font-medium mb-3">Community</h3>
	          <p  className="text-gray-600">Noora is more than fashion—it's a community of like-minded individuals passionate about style and sustainability.</p>
	        </div>
	      </div>
	    </div>
	    {/* Next: "Add a timeline of the brand history" */}
	  </section>
	
	  {/* Featured Collection */}
	  <section className="py-16 md:py-24 bg-white">
	    <div className="max-w-6xl mx-auto px-4">
	      <div className="text-center mb-16">
	        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Featured Collection</h2>
	        <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
	        <p  className="mt-6 text-gray-600 max-w-3xl mx-auto">Discover our latest designs that blend contemporary aesthetics with timeless elegance.</p>
	      </div>
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	        <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
	          <img 
	            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80"
	            alt="Woman in elegant dress" 
	            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
	            keywords="fashion, elegant dress, woman, luxury, style"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
	          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
	            <h3 className="text-xl font-medium mb-2">Summer Elegance</h3>
	            <p className="text-sm text-gray-200">Lightweight fabrics in flowing silhouettes</p>
	          </div>
	        </div>
	        <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
	          <img 
	            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80"
	            alt="Man in stylish suit" 
	            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
	            keywords="fashion, suit, men's fashion, tailored, formal wear"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
	          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
	            <h3 className="text-xl font-medium mb-2">Urban Sophistication</h3>
	            <p className="text-sm text-gray-200">Modern tailoring with minimalist details</p>
	          </div>
	        </div>
	        <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
	          <img 
	            src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
	            alt="Accessories collection" 
	            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
	            keywords="fashion, accessories, jewelry, luxury, details"
	          />
	          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
	          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
	            <h3  className="text-xl font-medium mb-2">Statement Accessories</h3>
	            <p className="text-sm text-gray-200">Handcrafted pieces that elevate any outfit</p>
	          </div>
	        </div>
	      </div>
	      <div className="text-center mt-12">
	        <button className="px-8 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white tracking-widest text-sm uppercase transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">View All Collections</button>
	      </div>
	    </div>
	    {/* Next: "Add a seasonal lookbook carousel" */}
	  </section>
	
	  {/* Testimonials */}
	  <section className="py-16 md:py-24 bg-amber-50">
	    <div className="max-w-6xl mx-auto px-4">
	      <div className="text-center mb-16">
	        <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">What People Say</h2>
	        <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
	      </div>
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
	        <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg">
	          <div className="flex items-center mb-4">
	            <span className="text-amber-400">★★★★★</span>
	          </div>
	          <p className="text-gray-600 italic mb-6">"Noora's commitment to quality is unmatched. Each piece feels like it was made just for me, with impeccable attention to detail."</p>
	          <div className="flex items-center">
	            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
	              <img 
	                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
	                alt="Customer profile" 
	                className="w-full h-full object-cover"
	                keywords="woman, portrait, customer, testimonial"
	              />
	            </div>
	            <div >
	              <h4 className="font-medium">Sophia Chen</h4>
	              <p className="text-sm text-gray-500">Fashion Editor</p>
	            </div>
	          </div>
	        </div>
	        <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg">
	          <div className="flex items-center mb-4">
	            <span className="text-amber-400">★★★★★</span>
	          </div>
	          <p className="text-gray-600 italic mb-6">"I appreciate how Noora balances sustainability with style. Their pieces are timeless yet contemporary, and I feel good about my purchase."</p>
	          <div className="flex items-center">
	            <div  className="w-12 h-12 rounded-full overflow-hidden mr-4">
	              <img 
	                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
	                alt="Customer profile" 
	                className="w-full h-full object-cover"
	                keywords="man, portrait, customer, testimonial"
	              />
	            </div>
	            <div>
	              <h4 className="font-medium">James Rodriguez</h4>
	              <p className="text-sm text-gray-500">Architect</p>
	            </div>
	          </div>
	        </div>
	        <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg">
	          <div className="flex items-center mb-4">
	            <span className="text-amber-400">★★★★★</span>
	          </div>
	          <p  className="text-gray-600 italic mb-6">"The craftsmanship of Noora's pieces speaks volumes. I've never felt more confident than when wearing their designs."</p>
	          <div className="flex items-center">
	            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
	              <img 
	                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
	                alt="Customer profile" 
	                className="w-full h-full object-cover"
	                keywords="woman, portrait, customer, testimonial"
	              />
	            </div>
	            <div>
	              <h4 className="font-medium">Aisha Johnson</h4>
	              <p className="text-sm text-gray-500">Creative Director</p>
	            </div>
	          </div>
	        </div>
	      </div>
	    </div>
	    {/* Next: "Add a testimonial carousel with navigation controls" */}
	  </section>
	
	  {/* Join Newsletter */}
	  <section className="py-16 md:py-24 bg-primary-50">
	    <div className="max-w-4xl mx-auto px-4 text-center">
	      <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">Join Our Community</h2>
	      <p className="text-gray-600 mb-8">Subscribe to our newsletter for exclusive updates, styling tips, and early access to new collections.</p>
	      <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
	        <input 
	          type="email" 
	          placeholder="Your email address" 
	          className="flex-grow py-3 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
	        />
	        <button className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 tracking-widest text-sm uppercase transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 rounded">Subscribe</button>
	      </div>
	      <div className="mt-8 flex justify-center space-x-6">
	        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300">
	          <i className="fa-brands fa-instagram text-xl"></i>
	        </a>
	        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300">
	          <i className="fa-brands fa-pinterest text-xl"></i>
	        </a>
	        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300">
	          <i className="fa-brands fa-twitter text-xl"></i>
	        </a>
	        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300">
	          <i className="fa-brands fa-facebook text-xl"></i>
	        </a>
	      </div>
	    </div>
	    {/* Next: "Add a privacy policy consent checkbox" */}
	  </section>
	
	  {/* Footer */}
	  <footer className="bg-gray-900 text-gray-300 py-12">
	    <div className="max-w-6xl mx-auto px-4">
	      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
	        <div>
	          <h3 className="text-2xl font-thin tracking-widest text-white mb-4">NOORA</h3>
	          <p className="text-sm text-gray-400 leading-relaxed">Elevating sustainable fashion through timeless designs and ethical practices. We believe in quality over quantity.</p>
	        </div>
	        <div>
	          <h4 className="text-lg font-medium text-white mb-4">Explore</h4>
	          <ul className="space-y-2">
	            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Collections</a></li>
	            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sustainability</a></li>
	            <li ><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Our Story</a></li>
	            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Journal</a></li>
	          </ul>
	        </div>
	        <div>
	          <h4 className="text-lg font-medium text-white mb-4">Customer Care</h4>
	          <ul className="space-y-2">
	            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Shipping & Returns</a></li>
	            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Size Guide</a></li>
	            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">FAQs</a></li>
	            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a></li>
	          </ul>
	        </div>
	        <div >
	          <h4 className="text-lg font-medium text-white mb-4">Visit Us</h4>
	          <address className="text-gray-400 not-italic">
	            123 Fashion Avenue<br />
	            New York, NY 10001<br />
	            <a  href="tel:+12125551234" className="hover:text-white transition-colors duration-300">+1 (212) 555-1234</a><br />
	            <a href="mailto:hello@noorafashion.com" className="hover:text-white transition-colors duration-300">hello@noorafashion.com</a>
	          </address>
	        </div>
	      </div>
	      <div  className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
	        <p className="text-sm text-gray-500">© 2023 Noora Fashion Society. All rights reserved.</p>
	        <div className="flex space-x-4 mt-4 md:mt-0">
	          <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
	          <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Terms of Service</a>
	        </div>
	      </div>
	    </div>
	    {/* Next: "Add a back-to-top button with smooth scroll" */}
	  </footer>
	</div> 
        </div>
  )
}

export default Noora;