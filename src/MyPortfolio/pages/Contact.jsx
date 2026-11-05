import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: false });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'f54cced8-8446-4816-a5ee-c36e7738ad2e',  
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, success: false, error: true });
      }
    } catch {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('abiodunhussein0@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* Page Header */}
        <div className="text-center mb-5">
          <span className="pulse-badge mb-3">
            <span className="pulse-dot"></span>
            Direct Inquiries & Collaboration
          </span>
          <h1 className="fw-bold fs-2 mb-2" style={{ color: '#0f172a' }}>Get In Touch</h1>
          <div className="mx-auto divider-sky mb-3"></div>
          <p className="col-lg-8 mx-auto fw-medium" style={{ color: '#334155' }}>
            Have an open full-stack or QA engineering position, a project proposal, or a technical inquiry? Let's talk!
          </p>
        </div>

        <div className="row g-4 justify-content-center mb-5">
          
          {/* Quick Contact Info Cards */}
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-column gap-3 h-100">
              
              {/* Direct Email Card */}
              <div className="card service-card p-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-3 rounded-circle" style={{ background: '#f0f9ff', color: '#0284c7' }}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0 fs-6" style={{ color: '#0f172a' }}>Direct Email</h5>
                    <span className="small fw-semibold" style={{ color: '#1e293b' }}>abiodunhussein0@gmail.com</span>
                  </div>
                </div>
                <button 
                  onClick={copyEmail} 
                  className="btn btn-sky-outline btn-sm w-100 mt-2"
                >
                  {copied ? '✓ Email Copied to Clipboard!' : 'Copy Email Address'}
                </button>
              </div>

              {/* Location & Availability */}
              <div className="card service-card p-4">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="p-3 rounded-circle" style={{ background: '#f0f9ff', color: '#0284c7' }}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-0 fs-6" style={{ color: '#0f172a' }}>Work Mode</h5>
                    <span className="small fw-semibold" style={{ color: '#1e293b' }}>Remote Worldwide</span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="pulse-badge w-100 justify-content-center">
                    <span className="pulse-dot"></span>
                    Available for New Roles & Contracts
                  </span>
                </div>
              </div>

              {/* Prefer Webmail Card */}
              <div className="card service-card p-4 text-center mt-auto">
                <h6 className="fw-bold mb-2" style={{ color: '#0f172a' }}>Prefer Webmail?</h6>
                <p className="small mb-3 fw-medium" style={{ color: '#334155' }}>Open Gmail web application directly in a new browser tab.</p>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=abiodunhussein0@gmail.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-sky btn-sm px-4"
                >
                  Open in Gmail ↗
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-12 col-lg-8">
            <div className="card card-modern p-4 p-md-5">
              <h3 className="fw-bold fs-4 mb-2" style={{ color: '#0f172a' }}>Send a Message</h3>
              <p className="small mb-4 fw-medium" style={{ color: '#334155' }}>Fill out the form below and I will respond promptly.</p>
              
              {status.success ? (
                <div className="alert p-4 rounded-3 text-center my-4" style={{ background: '#ecfdf5', border: '1.5px solid #a7f3d0', color: '#065f46' }}>
                  <h5 className="fw-bold mb-2">Message Delivered Successfully!</h5>
                  <p className="small mb-0">Thank you for reaching out. Your message has landed directly in my inbox and I will reply as soon as possible.</p>
                  <button 
                    onClick={() => setStatus({ loading: false, success: false, error: false })} 
                    className="btn btn-sky btn-sm mt-3 px-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {status.error && (
                    <div className="alert alert-danger small mb-3">
                      Failed to send message via the form. Please try again or click "Open in Gmail" to write directly.
                    </div>
                  )}

                  <div className="row g-3">
                    
                    {/* Name Input */}
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold" style={{ color: '#334155' }}>Your Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="John Doe" 
                        className="form-control form-control-modern" 
                      />
                    </div>

                    {/* Email Input */}
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-semibold" style={{ color: '#334155' }}>Your Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="john@example.com" 
                        className="form-control form-control-modern" 
                      />
                    </div>

                    {/* Subject Input */}
                    <div className="col-12">
                      <label className="form-label small fw-semibold" style={{ color: '#334155' }}>Subject</label>
                      <input 
                        type="text" 
                        name="subject" 
                        required 
                        value={formData.subject} 
                        onChange={handleChange} 
                        placeholder="Full-Stack Opportunity / Freelance Project" 
                        className="form-control form-control-modern" 
                      />
                    </div>

                    {/* Message Textarea */}
                    <div className="col-12">
                      <label className="form-label small fw-semibold" style={{ color: '#334155' }}>Message</label>
                      <textarea 
                        name="message" 
                        rows="5" 
                        required 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Tell me about your project, timeline, or requirements..." 
                        className="form-control form-control-modern"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-4">
                      <button 
                        type="submit" 
                        disabled={status.loading}
                        className="btn btn-sky px-5 py-2 w-100 w-md-auto"
                      >
                        {status.loading ? 'Sending...' : 'Send Message ↗'}
                      </button>
                    </div>

                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};