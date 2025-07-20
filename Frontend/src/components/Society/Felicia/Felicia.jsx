import React from "react";

import "./Felicia.css";


 const Felicia = () => {
  return (
<div id="webcrumbs"> 
        	<div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-12">
	  {/* Hero Section */}
	  <header className="text-center mb-16">
	    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
	      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-600">Felicia</span>
	    </h1>
	    <p className="text-xl md:text-2xl text-gray-600 italic mb-8">The University Art Society</p>
	    <div className="w-24 h-1 bg-primary-400 mx-auto mb-8 transform hover:scale-110 transition-transform duration-300"></div>
	    <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
	      Exploring creativity, fostering artistic expression, and building a community of passionate artists since 2010.
	    </p>
	    {/* Next: "Add a CTA button to join the society" */}
	  </header>
	
	  {/* About Section */}
	  <section className="mb-16 max-w-6xl mx-auto">
	    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Us</h2>
	    <div className="grid md:grid-cols-2 gap-8 items-center">
	      <div className="overflow-hidden rounded-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300">
	        <img 
	          src="https://images.unsplash.com/photo-1545989253-02cc26577f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
	          alt="Art students collaborating" 
	          className="w-full h-[300px] md:h-[400px] object-cover"
	          keywords="university art society, students, collaboration, painting, creativity"
	        />
	      </div>
	      <div>
	        <p className="text-gray-700 mb-4 leading-relaxed">
	          Felicia was founded with a simple mission: to create a space where university students can explore their artistic potential, regardless of their academic discipline or prior experience.
	        </p>
	        <p className="text-gray-700 mb-4 leading-relaxed">
	          Our society brings together students from across campus to share ideas, learn new techniques, and collaborate on projects that push the boundaries of traditional art forms.
	        </p>
	        <p className="text-gray-700 leading-relaxed">
	          From painting and sculpture to digital art and photography, we embrace all forms of creative expression and provide resources, workshops, and exhibition opportunities for our members.
	        </p>
	      </div>
	    </div>
	    {/* Next: "Add testimonials from society members" */}
	  </section>
	
	  {/* Events Section */}
	  <section className="mb-16 max-w-6xl mx-auto">
	    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Upcoming Events</h2>
	<div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
	        <div className="h-48 bg-purple-100 flex items-center justify-center">
	          <span className="material-symbols-outlined text-6xl text-purple-500">image</span>
	        </div>
	        <div className="p-6">
	          <div className="flex justify-between items-center mb-2">
	            <span className="text-sm text-gray-500">October 22, 2023</span>
	            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Exhibition</span>
	          </div>
	          <h3 className="text-xl font-bold mb-2">Student Art Showcase</h3>
	          <p className="text-gray-600 mb-4">A showcase of exceptional artwork created by members of the Felicia Art Society.</p>
	          <div className="flex justify-between items-center">
	            <span className="text-sm text-gray-500">University Gallery</span>
	            <button className="text-purple-600 hover:text-purple-800 transition-colors duration-300 flex items-center gap-1">
	              Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
	            </button>
	          </div>
	        </div>
	      </div>
	    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
	      {/* Event Card 1 */}
	      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
	        <div className="h-48 bg-primary-100 flex items-center justify-center">
	          <span className="material-symbols-outlined text-6xl text-primary-500">palette</span>
	        </div>
	        <div className="p-6">
	          <div className="flex justify-between items-center mb-2">
	            <span className="text-sm text-gray-500">October 15, 2023</span>
	            <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">Workshop</span>
	          </div>
	          <h3 className="text-xl font-bold mb-2">Watercolor Techniques</h3>
	          <p className="text-gray-600 mb-4">Learn fundamental and advanced watercolor techniques from professional artist Jane Doe.</p>
	          <div className="flex justify-between items-center">
	            <span className="text-sm text-gray-500">Art Building, Room 302</span>
	            <button className="text-primary-600 hover:text-primary-800 transition-colors duration-300 flex items-center gap-1">
	              Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
	            </button>
	          </div>
	        </div>
	      </div>
	
	      {/* Event Card 2 */}
	      
	
	      {/* Event Card 3 */}
	      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
	        <div className="h-48 bg-blue-100 flex items-center justify-center">
	          <span className="material-symbols-outlined text-6xl text-blue-500">groups</span>
	        </div>
	        <div className="p-6">
	          <div className="flex justify-between items-center mb-2">
	            <span className="text-sm text-gray-500">November 5, 2023</span>
	            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Social</span>
	          </div>
	          <h3 className="text-xl font-bold mb-2">Art & Wine Night</h3>
	          <p className="text-gray-600 mb-4">Join us for a relaxed evening of creative expression, conversation, and refreshments.</p>
	          <div className="flex justify-between items-center">
	            <span className="text-sm text-gray-500">Student Union, Room 105</span>
	            <button className="text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center gap-1">
	              Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
	            </button>
	          </div>
	        </div>
	      </div>
	    </div>
	    {/* Next: "Add a view all events button or calendar" */}
	  </section>
	
	  {/* Gallery Section */}
	  <section className="mb-16 max-w-6xl mx-auto">
	    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Gallery</h2>
	    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
	      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
	        <div key={item} className="overflow-hidden rounded-lg shadow-md group relative hover:shadow-lg transition-all duration-300">
	          <img 
	            src={`https://source.unsplash.com/random/300x300/?art,${item}`} 
	            alt={`Artwork ${item}`} 
	            className="w-full h-40 md:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
	            keywords="student artwork, university art, painting, sculpture, digital art"
	          />
	          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
	            <span className="material-symbols-outlined text-white text-3xl">zoom_in</span>
	          </div>
	        </div>
	      ))}
	    </div>
	    <div className="text-center mt-8">
	      <button className="px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
	        View Full Gallery
	      </button>
	    </div>
	    {/* Next: "Add a featured artist section" */}
	  </section>
	
	  {/* Join Us Section */}
	  <section className="mb-16 max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg">
	    <div className="p-8 md:p-12">
	      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Join Felicia</h2>
	      <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
	        Become a part of our vibrant artistic community. No experience necessary—just bring your creativity and enthusiasm!
	      </p>
	      <form className="max-w-md mx-auto">
	        <div className="mb-4">
	          <input 
	            type="text" 
	            placeholder="Full Name" 
	            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
	          />
	        </div>
	        <div className="mb-4">
	          <input 
	            type="email" 
	            placeholder="Email Address" 
	            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
	          />
	        </div>
	        <div className="mb-6">
	          <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent bg-white">
	            <option value="">Select your interest</option>
	            <option value="painting">Painting</option>
	            <option value="sculpture">Sculpture</option>
	            <option value="photography">Photography</option>
	            <option value="digital">Digital Art</option>
	            <option value="mixed">Mixed Media</option>
	            <option value="other">Other</option>
	          </select>
	        </div>
	        <button type="submit" className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg hover:bg-primary-600 transform hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-lg font-medium">
	          Submit Application
	        </button>
	      </form>
	    </div>
	    {/* Next: "Add membership benefits" */}
	  </section>
	
	  {/* Contact Section */}
	  <section className="max-w-4xl mx-auto">
	    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h2>
	    <div className="grid md:grid-cols-2 gap-8">
	      <div>
	        <div className="mb-6 flex items-start gap-4">
	          <span className="material-symbols-outlined text-primary-500 mt-1">location_on</span>
	          <div>
	            <h3 className="font-bold text-lg mb-1">Location</h3>
	            <p className="text-gray-700">Art Building, Room 101<br />University Campus<br />Cityname, State 12345</p>
	          </div>
	        </div>
	        <div className="mb-6 flex items-start gap-4">
	          <span className="material-symbols-outlined text-primary-500 mt-1">schedule</span>
	          <div>
	            <h3 className="font-bold text-lg mb-1">Office Hours</h3>
	            <p className="text-gray-700">Monday - Friday: 10am - 4pm<br />Saturday: 12pm - 3pm<br />Sunday: Closed</p>
	          </div>
	        </div>
	        <div className="mb-6 flex items-start gap-4">
	          <span className="material-symbols-outlined text-primary-500 mt-1">mail</span>
	          <div>
	            <h3 className="font-bold text-lg mb-1">Email</h3>
	            <p className="text-gray-700">felicia@university.edu</p>
	          </div>
	        </div>
	        <div className="flex gap-4 mt-8">
	          <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors duration-300">
	            <i className="fa-brands fa-instagram"></i>
	          </a>
	          <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors duration-300">
	            <i className="fa-brands fa-facebook"></i>
	          </a>
	          <a href="#" className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 hover:bg-primary-200 transition-colors duration-300">
	            <i className="fa-brands fa-twitter"></i>
	          </a>
	        </div>
	      </div>
	      <div className="bg-white p-6 rounded-lg shadow-md">
	        <h3 className="font-bold text-lg mb-4">Send us a message</h3>
	        <div className="mb-4">
	          <input 
	            type="text" 
	            placeholder="Your Name" 
	            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
	          />
	        </div>
	        <div className="mb-4">
	          <input 
	            type="email" 
	            placeholder="Your Email" 
	            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
	          />
	        </div>
	        <div className="mb-4">
	          <textarea 
	            placeholder="Your Message" 
	            rows="4" 
	            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
	          ></textarea>
	        </div>
	        <button type="submit" className="bg-primary-500 text-white py-2 px-6 rounded-lg hover:bg-primary-600 transition-colors duration-300">
	          Send Message
	        </button>
	      </div>
	    </div>
	    {/* Next: "Add a map or campus directions" */}
	  </section>
	
	  {/* Footer */}
	  <footer className="mt-20 pt-10 border-t border-gray-200">
	    <div className="max-w-6xl mx-auto text-center">
	      <h2 className="text-3xl font-bold mb-4">
	        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-purple-600">Felicia</span>
	      </h2>
	      <p className="text-gray-600 mb-6">Inspiring artistic excellence in our university community</p>
	      <div className="text-sm text-gray-500 mb-8">
	        &copy; {new Date().getFullYear()} Felicia Art Society. All rights reserved.
	      </div>
	    </div>
	    {/* Next: "Add quick links to different sections" */}
	  </footer>
	</div> 
        </div>
  )
}
export default Felicia;

