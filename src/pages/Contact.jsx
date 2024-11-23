import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'onesmuskipchumba5@gmail.com',
      link: 'mailto:onesmuskipchumba5@gmail.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+254 792 400 709',
      link: 'tel:+254792400709'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Nairobi, Kenya',
      link: 'https://maps.google.com/?q=Nairobi,Kenya'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      link: 'https://github.com/onesmuskipchumba0',
      color: 'hover:text-gray-100'
    },
    {
      icon: SiUpwork,
      label: 'Upwork',
      link: 'https://www.upwork.com/freelancers/~0197ca6f21c4684883?mp_source=share',
      color: 'hover:text-[#14a800]'
    },
    {
      icon: SiFiverr,
      label: 'Fiverr',
      link: 'https://www.fiverr.com/onesmus509',
      color: 'hover:text-[#1dbf73]'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const currentDate = new Date().toLocaleString();
    const currentYear = new Date().getFullYear();

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        sent_date: currentDate,
        current_year: currentYear
      };

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-base-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Let's discuss your project and see how I can help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target={info.label === 'Location' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group hover:text-primary transition-colors duration-300"
                      whileHover={{ x: 10 }}
                    >
                      <info.icon className="text-xl text-primary" />
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <p className="text-base-content/70">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-2xl ${social.color} transition-all duration-300`}
                        whileHover={{ scale: 1.2 }}
                      >
                        <social.icon />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">Name</label>
                    <input 
                      type="text" 
                      name="user_name" // Important: match this with your EmailJS template
                      className="input input-bordered w-full" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Email</label>
                    <input 
                      type="email" 
                      name="user_email" // Important: match this with your EmailJS template
                      className="input input-bordered w-full" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">Subject</label>
                  <input 
                    type="text" 
                    name="subject" // Important: match this with your EmailJS template
                    className="input input-bordered w-full" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">Message</label>
                  <textarea 
                    name="message" // Important: match this with your EmailJS template
                    className="textarea textarea-bordered w-full h-32" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="alert alert-success">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-error">
                    Failed to send message. Please try again or contact me directly via email.
                  </div>
                )}

                <button 
                  type="submit" 
                  className={`btn btn-primary w-full ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact; 