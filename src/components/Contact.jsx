import { useState } from 'react';
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { SiUpwork, SiFiverr } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a 
                    href="mailto:onesmuskipchumba5@gmail.com"
                    className="text-base-content/70 hover:text-primary transition-colors"
                  >
                    onesmuskipchumba5@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Location</h4>
                  <p className="text-base-content/70">Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Phone</h4>
                  <p className="text-base-content/70 ">+254 792 400 709</p>
                </div>
              </div>
            </div>

            {/* Updated Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">Hire Me On</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/onesmuskipchumba0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-primary"
                  title="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~0197ca6f21c4684883?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-primary"
                  title="Upwork"
                >
                  <SiUpwork className="text-xl" />
                </a>
                <a
                  href="https://www.fiverr.com/onesmus509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-outline btn-primary"
                  title="Fiverr"
                >
                  <SiFiverr className="text-xl" />
                </a>
                <a
                  href="mailto:onesmuskipchumba5@gmail.com"
                  className="btn btn-circle btn-outline btn-primary"
                  title="Email"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
              
              {/* Added Hire Me Text */}
              <p className="mt-4 text-base-content/70">
                Available for freelance projects on Upwork and Fiverr
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="textarea textarea-bordered h-32"
                    required
                  ></textarea>
                </div>

                {error && (
                  <div className="alert alert-error">
                    <span>{error}</span>
                  </div>
                )}

                {success && (
                  <div className="alert alert-success">
                    <span>Message sent successfully!</span>
                  </div>
                )}

                <button
                  type="submit"
                  className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;