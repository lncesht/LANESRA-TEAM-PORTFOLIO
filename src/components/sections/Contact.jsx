import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const name = form.current.user_name.value.trim();
        const email = form.current.user_email.value.trim();
        const message = form.current.message.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        emailjs.sendForm('service_br8xzbp', 'template_6dyxgsv', form.current, 'e50zGcUD4FwuwQwUT')
            .then((result) => {
                console.log('Success:', result.text);
                alert('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log('Error:', error.text);
                alert('Failed to send message.');
            });
    };

    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10 pt-24">
            <div className="text-center max-w-4xl">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                    Get in Touch
                </h1>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                    Fill out the form below or contact us through our social media channels.
                </p>
            </div>

            {/* Contact Form */}
            <form ref={form} onSubmit={sendEmail} className="w-full max-w-4xl bg-gray-900 p-10 rounded-lg shadow-lg">
                <div className="mb-8">
                    <label htmlFor="name" className="block text-gray-400 mb-2 text-xl">Name</label>
                    <input type="text" name="user_name" id="name" placeholder="Your Name" required
                        className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg" />
                </div>
                <div className="mb-8">
                    <label htmlFor="email" className="block text-gray-400 mb-2 text-xl">Email</label>
                    <input type="email" name="user_email" id="email" placeholder="Your Email" required
                        className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg" />
                </div>
                <div className="mb-8">
                    <label htmlFor="message" className="block text-gray-400 mb-2 text-xl">Message</label>
                    <textarea name="message" id="message" placeholder="Your Message" rows="6" required
                        className="w-full p-4 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"></textarea>
                </div>
                <button type="submit"
                    className="w-full bg-blue-500 px-8 py-4 rounded-lg text-white font-medium transition transform hover:scale-105 shadow-lg text-lg">
                    Send Message
                </button>
            </form>

            {/* Contact Info & Social Links */}
            <div className="mt-10 text-center text-gray-300 space-y-4">
                <p className="text-lg">Or reach us directly:</p>
                <p className="text-lg">
                    📧 <a href="lanesrateam@gmail.com" className="text-blue-400 hover:underline">lanesrateam@gmail.com</a>
                </p>
                <p className="text-lg">
                    📞 <a href="tel:+1234567890" className="text-blue-400 hover:underline">+63 0123456789</a>
                </p>
                <div className="flex justify-center space-x-6 mt-4 text-white text-2xl">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all duration-300">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-all duration-300">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all duration-300">
                    <i className="fab fa-linkedin"></i>
                </a>
                </div>
            </div>
        </section>
    );
};
