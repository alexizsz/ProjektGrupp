// ContactPage.tsx

import React from 'react';
import ContactForm from '../components/ContactForm';
import '../components/Contact.css'

const ContactPage: React.FC = () => {
  const handleSubmit = (formData: { name: string; email: string; message: string }) => {
    // Handle form submission logic here, e.g., send data to backend
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Contact us</h1>
      <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Your inquiry is valuable to us, and we strive to respond promptly within 24 hours</h3>
      <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Alternatively, feel free to reach us directly at: +46 / 70 123 45 67</h3>
      <ContactForm onSubmit={handleSubmit} />
      <h3 style={{ textAlign: 'center', fontWeight: 'bold' }}>Opening Hours: Monday - Friday: 9am - 5pm</h3>
    </div>
  );
};

export default ContactPage;
