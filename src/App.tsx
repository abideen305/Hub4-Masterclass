import React from 'react';
import { 
  Calendar, 
  Clock,
  CheckCircle2,
  Laptop2,
  Users,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  LinkedinIcon
} from 'lucide-react';
import Countdown from 'react-countdown';
import { motion } from 'framer-motion';

const physicalDate = new Date('2025-02-22T10:00:00');
const virtualDate = new Date('2025-02-23T17:00:00');

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 w-full bg-gray-900 text-white shadow-sm z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <img 
                src="https://i.ibb.co/LzbgXT7z/hub4-logo-new.png" 
                alt="HUB4 Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </motion.div>
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Masterclass Schedule', 'Courses', 'Registration', 'Contact'].map((item, index) => (
                <motion.a
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-white/90 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section - Dark */}
      <section className="pt-24 pb-16 px-4 md:pt-32 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-semibold mb-4"
              >
                FREE MASTERCLASS
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
              >
                Want to Transition into Tech?
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-300 mb-8"
              >
                Join our FREE Masterclass and discover how our 12-week tech training can transform your career!
              </motion.p>
              <motion.div 
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                <motion.div variants={fadeIn} className="flex items-center space-x-3">
                  <Calendar className="text-accent" />
                  <div>
                    <p className="font-semibold text-white">Physical Session</p>
                    <p className="text-gray-300">Saturday, 22nd February 2025 | 10 AM</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn} className="flex items-center space-x-3">
                  <Laptop2 className="text-accent" />
                  <div>
                    <p className="font-semibold text-white">Virtual Session</p>
                    <p className="text-gray-300">Sunday, 23rd February 2025 | 5 PM</p>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <motion.a 
                  href="#registration" 
                  className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.img 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="rounded-lg shadow-lg"
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg"
              >
                <Countdown 
                  date={physicalDate}
                  renderer={({ days, hours, minutes, seconds }) => (
                    <div className="grid grid-cols-4 gap-4">
                      {[
                        { value: days, label: 'Days' },
                        { value: hours, label: 'Hours' },
                        { value: minutes, label: 'Minutes' },
                        { value: seconds, label: 'Seconds' }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="text-center"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="text-2xl font-bold text-primary">{item.value}</div>
                          <div className="text-sm text-gray-600">{item.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Light */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            What You Will Learn
          </motion.h2>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Data Analysis', icon: <CheckCircle2 className="h-6 w-6 text-accent" /> },
              { title: 'Cybersecurity', icon: <CheckCircle2 className="h-6 w-6 text-accent" /> },
              { title: 'Animation', icon: <CheckCircle2 className="h-6 w-6 text-accent" /> },
              { title: 'Data Engineering', icon: <CheckCircle2 className="h-6 w-6 text-accent" /> },
              { title: 'Software Testing', icon: <CheckCircle2 className="h-6 w-6 text-accent" /> },
              { title: 'Product Design', icon: <CheckCircle2 className="h-6 w-6 text-accent" /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {item.icon}
                  <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">
                  Learn practical skills and industry best practices in {item.title.toLowerCase()} through hands-on projects and expert guidance.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Cohort - Dark */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-900 text-white"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Upcoming Full Courses Starting in March
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 backdrop-blur-sm rounded-lg shadow-lg p-8"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <p className="text-xl font-semibold mb-2">Next Cohort Starts: March 10, 2025</p>
              <p className="text-gray-300">Choose from Physical, Virtual, or Hybrid learning modes</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={staggerChildren}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4">Available Courses</h3>
                <ul className="space-y-3">
                  {[
                    'Data Analysis',
                    'Cybersecurity',
                    'Animation',
                    'Data Engineering',
                    'Software Testing',
                    'Product Design'
                  ].map((course, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeIn}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>{course}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Tuition Fee</h3>
                  <p className="text-3xl font-bold mb-2">₦120,000</p>
                  <p className="text-accent font-semibold mb-4">
                    Register before February 28 and get a 15% discount!
                  </p>
                  <motion.a 
                    href="#registration"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block text-center bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Register for the Full Cohort
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Schedule Section - Light */}
      <motion.section 
        id="schedule"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Event Schedule
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Physical Session',
                date: 'Saturday, 22nd February 2025 | 10 AM',
                icon: <Calendar className="h-6 w-6 text-accent" />,
                schedule: [
                  { time: '10:00 AM - 10:20 AM', title: 'Introduction to Tech', description: 'Overview of the tech industry, emerging trends, and areas of opportunity.' },
                  { time: '10:20 AM - 10:50 AM', title: 'Career Switching in Tech', description: 'Strategies for transitioning into tech roles from various non-tech backgrounds.' },
                  { time: '10:50 AM - 11:30 AM', title: 'Expert Panel Session', description: 'A panel of experts from different fields sharing insights into their field, its significance, and diverse career paths.' },
                  { time: '11:30 AM - 11:50 AM', title: 'Hub4 Presentation', description: "A presentation on HUB4's training programs, services, and how they can help career growth." },
                  { time: '11:50 AM - 12:00 PM', title: 'Closing Remarks', description: 'Final thoughts, call to action, and Q&A session' }
                ]
              },
              {
                title: 'Virtual Session',
                date: 'Sunday, 23rd February 2025 | 5 PM',
                icon: <Laptop2 className="h-6 w-6 text-accent" />,
                schedule: [
                  { time: '5:00 PM - 5:20 PM', title: 'Introduction to Tech', description: 'Overview of the current tech landscape, emerging trends, and potential career opportunities.' },
                  { time: '5:20 PM - 5:50 PM', title: 'Career Switching in Tech', description: 'Practical strategies for transitioning into various tech roles from non-tech backgrounds.' },
                  { time: '5:50 PM - 6:30 PM', title: 'Expert Panel Session', description: 'A diverse panel of experts sharing insights into their fields, highlighting career paths and the significance of their roles in tech.' },
                  { time: '6:30 PM - 6:50 PM', title: 'Hub4 Presentation', description: "Presentation of HUB4's training programs and services to support career growth." },
                  { time: '6:50 PM - 7:00 PM', title: 'Closing Remarks', description: 'Final thoughts, action items, and a Q&A session.' }
                ]
              }
            ].map((session, sessionIndex) => (
              <motion.div
                key={sessionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sessionIndex * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-6">
                  {session.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{session.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{session.date}</p>
                <motion.ul 
                  variants={staggerChildren}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {session.schedule.map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeIn}
                      className="flex items-start space-x-3"
                    >
                      <Clock className="h-5 w-5 mt-1 text-accent" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.time}</p>
                        <p className="text-lg mb-1 text-gray-800">{item.title}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Registration Form - Dark */}
      <motion.section 
        id="registration"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-900"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Reserve Your Spot
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl mx-auto"
          >
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScXWctcKmF_ZgImNpKp3OqSwaNsZxq7FPglTY5wkpJlwdFk1w/viewform?embedded=true" 
              width="100%" 
              height="800" 
              className="border-0"
              title="Registration Form"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section - Light */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                question: 'How much does the full cohort cost?',
                answer: 'The full cohort costs ₦120,000. We offer a 15% early-bird discount for registrations before February 28.'
              },
              {
                question: 'Are there any discounts?',
                answer: 'Yes! Register before February 28 to get a 15% early-bird discount on the full cohort.'
              },
              {
                question: 'How long is each course?',
                answer: 'Each course runs for 12 weeks, with a combination of theoretical and practical sessions.'
              },
              {
                question: 'What is the format of the classes?',
                answer: 'We offer three formats: Physical (in-person), Virtual (online), and Hybrid (combination of both).'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer - Dark */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-12"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 mb-6"
              >
                <img 
                  src="https://i.ibb.co/LzbgXT7z/hub4-logo-new.png" 
                  alt="HUB4 Logo" 
                  className="h-12 w-auto brightness-0 invert"
                />
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-start space-x-3 mb-4">
                <MapPin className="h-5 w-5 mt-1" />
                <p>4-6 Afisman Drive, Ikeja Along, Lagos</p>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center space-x-3 mb-4">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@hub4.com">info@hub4.com</a>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <a href="tel:+2348000000000">+234 800 000 0000</a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Masterclass Schedule', 'Courses', 'Registration'].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-accent">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <motion.div 
                variants={staggerChildren}
                initial="initial"
                animate="animate"
                className="flex space-x-4"
              >
                {[
                  { icon: <Facebook className="h-6 w-6" /> },
                  { icon: <Twitter className="h-6 w-6" /> },
                  { icon: <Instagram className="h-6 w-6" /> },
                  { icon: <LinkedinIcon className="h-6 w-6" /> }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="hover:text-accent"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center"
          >
            <p>&copy; 2025 HUB4. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;