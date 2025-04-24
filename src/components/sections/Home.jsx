import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaEnvelope } from 'react-icons/fa';

export const Home = () => {
  const teamMembers = [
    { name: 'Leimarc', role: 'Software Engineer', skills: ['React.js', 'Node.js', 'MongoDB', 'API Development'], image: '/images/leimarcpic.png', facebook: 'https://www.facebook.com/leimarc.kadusale', github: '#' },
    { name: 'Lance', role: 'Cybersecurity Expert', skills: ['Penetration Testing', 'Encryption', 'Network Security', 'Ethical Hacking'], image: '/images/lancepic.png', facebook: 'https://www.facebook.com/goofyasfvck', github: '#' },
    { name: 'Miguel', role: 'Cloud Specialist', skills: ['AWS', 'Azure', 'DevOps', 'Serverless Architecture'], image: '/images/miguel.png', facebook: 'https://www.facebook.com/Miguelito01101', github: '#' },
    { name: 'Thea', role: 'UI/UX Designer', skills: ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping'], image: '/images/ayetpic.png', facebook: 'https://www.facebook.com/camprock.altheagalvez', github: '#' },
    { name: 'Harvey', role: 'Mobile Developer', skills: ['React Native', 'Flutter', 'Swift', 'Cross-Platform Development'], image: '/images/harveypic.png', facebook: 'https://www.facebook.com/jesse.pinkman.402431', github: '#' }
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-10">
      {/* Hero Section */}
      <div className="text-center max-w-5xl pt-24">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typewriter
            words={['LANESRA TEAM']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          At Lanesra, we are a team of dynamic IT professionals dedicated to driving innovation and excellence in the tech industry.
          With expertise in software engineering, cybersecurity, cloud computing, and design, we empower businesses to thrive in the digital landscape.
        </motion.p>
      </div>

      {/* Key Focus Areas */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        {[
          {
            title: "Innovative Solutions",
            desc: "We provide cutting-edge technology solutions tailored to meet the unique needs of businesses, ensuring reliability, scalability, and success.",
          },
          {
            title: "Expert Team",
            desc: "Our team of skilled professionals brings years of experience across various industries, making us your trusted partner in technology.",
          },
          {
            title: "Client-Centric Approach",
            desc: "We collaborate closely with our clients to understand their goals and challenges, delivering solutions that drive real impact.",
          },
          {
            title: "Scalable Architecture",
            desc: "Our solutions are built with scalability in mind, allowing businesses to grow without limitations or performance issues.",
          },
          {
            title: "Data Security",
            desc: "We prioritize the security of your data, ensuring robust encryption and safety protocols to protect sensitive information.",
          },
          {
            title: "Continuous Innovation",
            desc: "We continuously innovate and adapt, ensuring that we are always ahead of the curve with the latest technology trends and tools.",
          },
        ].map((area, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">{area.title}</h3>
            <p className="text-lg text-gray-300 leading-relaxed">{area.desc}</p>
          </motion.div>
        ))}
      </div>

      <hr className="border-t-2 border-gray-700 my-12 w-full" />

      {/* Team Members */}
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">Meet the Team</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Our talented team members bring their expertise and passion for technology to create transformative solutions for businesses worldwide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="group relative w-56 h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-75"
                style={{ backgroundImage: `url(${member.image})` }}
              />

              {/* Overlay Content */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-white px-4 text-center"
              >
                <motion.h3
                  className="text-lg font-semibold mb-1"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-sm text-gray-300">{member.role}</p>
                <ul className="mt-2 space-y-1 text-xs text-gray-400">
                  {member.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center justify-center gap-1">
                      ✅ {skill}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4 mt-4">
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                    <FaFacebook size={18} />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                    <FaGithub size={18} />
                  </a>
                  <a href="mailto:info@example.com" className="text-red-400 hover:text-red-300">
                    <FaEnvelope size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-white mb-6">Ready to Transform Your Business?</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Partner with Lanesra for innovative and efficient technology solutions that propel your business to new heights.
        </p>
      </div>
    </section>
  );
};
