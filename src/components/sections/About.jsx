import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10 pt-24">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
          Who We Are
        </h1>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          The Lanesra is a group of passionate and talented individuals dedicated to leveraging technology 
          to create impactful and innovative solutions. Our team consists of skilled professionals specializing in 
          software development, cybersecurity, cloud infrastructure, UI/UX design, and mobile development.
        </p>
      </div>

      <hr className="border-t-2 border-gray-700 my-12 w-full"/>

      {/* Values Section with hover and animation */}
      <div className="max-w-5xl text-center text-gray-400 mt-6 mx-auto">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-4xl">
          {[
            {
              title: "Innovation",
              content: "We stay ahead of the curve by embracing cutting-edge technologies. Our team constantly experiments with new tools and techniques to deliver innovative solutions, ensuring we create impactful products that push the boundaries of what's possible."
            },
            {
              title: "Collaboration",
              content: "We believe that diverse perspectives lead to better outcomes. By fostering open communication and teamwork, we combine individual strengths to create holistic solutions that address complex challenges effectively."
            },
            {
              title: "Excellence",
              content: "Excellence is at the core of our work. From meticulous planning to flawless execution, we ensure every project is delivered with precision and quality, meeting and exceeding the expectations of our clients."
            },
            {
              title: "Integrity",
              content: "We hold ourselves to the highest ethical standards, always acting with honesty and transparency. Our integrity fosters trust, both within our team and with our clients, ensuring long-lasting relationships based on mutual respect."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg border border-gray-600 text-white shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <strong>✅ {value.title}:</strong> {value.content}
            </motion.div>
          ))}
        </div>
      </div>

      <hr className="border-t-2 border-gray-700 my-12 w-full"/>

      {/* Let's Connect Section */}
      <div className="max-w-5xl text-center text-gray-400 mt-10 mx-auto"> 
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Let's Connect</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        We are always looking to collaborate and take on new challenges. Whether you're a startup looking for tech support or an enterprise in need of digital transformation, we’d love to hear from you. Get in touch today!
        </p>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Our team thrives on partnerships that bring innovative ideas to life. If you have a project in mind or simply want to chat about the future of tech, don't hesitate to reach out. We're passionate about turning visions into reality, and we can't wait to see what we can achieve together.
        </p>

        <div className="flex justify-center space-x-6 text-3xl text-gray-300">
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
