import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss blockchain opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Ready to start your next blockchain project? Contact me for consulting, development, or just to chat about Web3 technologies.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                  <Mail className="text-blue-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Email</h4>
                  <p className="text-white">zk2143973@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-purple-500/20 p-3 rounded-full mr-4">
                  <Phone className="text-purple-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Phone</h4>
                  <p className="text-white">+91 9058822896 </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500/20 p-3 rounded-full mr-4">
                  <MapPin className="text-green-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm mb-1">Location</h4>
                  <p className="text-white">New Delhi, India</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/zk-web3?tab=repositories"
                  className="bg-slate-700 hover:bg-slate-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Github className="text-gray-400 hover:text-white transition-colors duration-300" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/zeeshan-khan-028a7a1a5/"
                  className="bg-slate-700 hover:bg-slate-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Linkedin className="text-gray-400 hover:text-white transition-colors duration-300" size={20} />
                </a>
                <a
                  href="https://x.com/cryptozkta"
                  className="bg-slate-700 hover:bg-slate-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Twitter className="text-gray-400 hover:text-white transition-colors duration-300" size={20} />
                </a>
                <a
                  href="https://instagram.com/l_khan_zeeshan_786_l"
                  className="bg-slate-700 hover:bg-slate-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  target="_blank" rel="noopener noreferrer"
                >
                  <Instagram className="text-pink-400 hover:text-white transition-colors duration-300" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-slate-900 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-slate-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      errors.name ? 'border border-red-500' : 'border border-transparent'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-slate-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                      errors.email ? 'border border-red-500' : 'border border-transparent'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-slate-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                    errors.subject ? 'border border-red-500' : 'border border-transparent'
                  }`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-slate-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                    errors.message ? 'border border-red-500' : 'border border-transparent'
                  }`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 text-green-400 p-4 rounded-lg mt-4">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 text-red-400 p-4 rounded-lg mt-4">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;