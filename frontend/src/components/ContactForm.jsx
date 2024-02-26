import React, { useState , useEffect} from 'react';
import { CiPaperplane } from "react-icons/ci";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  

 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset errors when input changes
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      firstName.length < 2 ? newErrors.firstName = 'First Name must be at least 2 characters long' : newErrors.firstName = '';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      lastName.length < 2 ? newErrors.lastName = 'Last Name must be at least 2 characters long' : newErrors.lastName = '';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email.trim())) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';

    }
    
    if (Object.keys(newErrors).length > 0) {
      // Set errors and prevent form submission
      setErrors(newErrors);
    } else {
      try {
        const response = await fetch('https://ethan-lynch-coaching-415103.ue.r.appspot.com/api/send-email/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            
          },
          body: JSON.stringify(formData),
        });
    
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
    
        // Handle empty response
        const responseData = await response.json();
        if (!responseData) {
          throw new Error('Empty response received');
        }
    
        // Check for success message or other relevant data in responseData
        if (responseData.message) {
          setSuccessMessage(responseData.message);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
          });
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="px-2 py-20 lg:py-10  md:px-0 ">
      <div className="max-w-7xl lg:px-10 px-3 mx-auto justify-items-center align-middle">
        <div className="grid-flow-col lg:grid lg:grid-cols-2 lg:gap-4 lg:px-10 lg:pt-8 md:grid md:grid-cols-2 md:gap-4 md:px-10 md:pt-5">
          <div className="col-auto lg:pr-5 lg:pt-20 ">
            <h1 className="text-5xl text-center font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl md:text-left lg:text-5xl xl:text-6xl lg:text-left lg:mb-5">
              <span className="block xl:inline">Get in contact!</span>
            </h1>
            <p className="mx-auto text-base text-center md:text-left lg:text-left text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl pb-3 font-[Georgia]">
              Feel free to reach out with any questions or inquiries.
            </p>
            <p className="mx-auto text-base text-center md:text-left lg:text-left text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl pb-3 font-[Georgia]">
              If you have a question you can also take a look at the FAQ section to find your answer.
            </p>
          
            
          </div>
          <div className="col-auto mx-auto w-full lg:w-full">
            <div className="justify-items-center px-5 lg:px-10 py-10 bg-gray-100 rounded-sm border border-gray-300 max-w-3xl mx-auto flex-grow">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-red text-xs font-bold mb-2" htmlFor="first-name">
                      First Name
                    </label>
                    <input className={`form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none ${errors.firstName && 'border-red-500'}`} id="grid-first-name" name="firstName" type="text" placeholder="John" value={formData.firstName} onChange={handleChange} />
                    {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide -500 text-xs font-bold mb-2 text-red" htmlFor="last-name">
                      Last Name
                    </label>
                    <input className={`form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none ${errors.lastName && 'border-red-500'}`} id="grid-last-name" name="lastName" type="text" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
                    {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide -500 text-xs font-bold mb-2 text-red" htmlFor="grid-password" name="email">
                      E-mail
                    </label>
                    <input className={`form-control appearance-none block w-full bg-white text-gray-600 border border-gray-300 rounded-sm py-3 px-4 leading-tight focus:outline-none ${errors.email && 'border-red-500'}`} id="email" name="email" type="email" placeholder="johndoe@email.com" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide -500 text-xs font-bold mb-2 text-red" htmlFor="grid-password">
                      Message
                    </label>
                    <textarea className={`form-control no-resize appearance-none block w-full bg-white text-gray-600 border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none ${errors.message && 'border-red-500'}`} id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                    {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="w-full">
                    <button type="submit" className="w-full px-4 py-3 text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg border-black font-semibold rounded-sm border bg-gradient-to-br focus:outline-none text-red flex justify-center items-center" name="button">
                      Send
                      <CiPaperplane className="w-6 h-6 ml-2" />
                    </button>
                    {successMessage && <p className="text-green text-xl italic mt-2">{successMessage}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
