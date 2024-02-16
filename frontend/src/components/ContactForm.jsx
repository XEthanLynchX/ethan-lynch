import React from 'react';

const ContactForm = () => {
  return (
    <section className="px-2 py-20 lg:py-10  md:px-0 ">
      <div className="max-w-7xl lg:px-10 px-3 mx-auto justify-items-center align-middle">
        <div className="grid-flow-col lg:grid lg:grid-cols-2 lg:gap-4 lg:px-10 lg:pt-8 md:grid md:grid-cols-2 md:gap-4 md:px-10 md:pt-5">
          <div className="col-auto lg:pr-5 lg:pt-20 ">
            <h1 className="text-5xl text-center font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl md:text-left lg:text-5xl xl:text-6xl lg:text-left lg:mb-5">
              <span className="block xl:inline">Get in contact!</span>
            </h1>
            <p className="mx-auto text-base text-center md:text-left lg:text-left text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl pb-3">
              Feel free to reach out with any questions or inquiries.
            </p>
            <p className="mx-auto text-base text-center md:text-left lg:text-left text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl pb-3">
              If you have a question you can also take a look at the FAQ page to find your answer.
            </p>
            
            <div className="py-3 pl-1 text-center lg:text-left md:text-left space-x-3">
              
              <a href="mailto:ethanlynchcoaching@gmail.com" target="_blank" rel="noreferrer">
                <em className="far fa-envelope hover:-500 text-2xl" aria-hidden="true"></em>
              </a>
              <span className="text-gray-400 text-lg"> ethanlynchcoaching@gmail.com </span>             
            </div>
            
          </div>
          <div className="col-auto mx-auto w-full lg:w-full " >
            <div className="justify-items-center px-5 lg:px-10 py-10 bg-gray-100 rounded-sm border border-gray-300 max-w-3xl mx-auto flex-grow">
                
              
              <form className="w-full" action="contact" method="POST">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-red text-xs font-bold mb-2" htmlFor="first-name">
                      First Name
                    </label>
                    <input className="form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-indigo-500 focus:bg-white hover:border-indigo-500" id="grid-first-name" name="first_name" type="text" placeholder="John" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide -500 text-xs font-bold mb-2 text-red" htmlFor="last-name">
                      Last Name
                    </label>
                    <input className="form-control appearance-none block w-full text-gray-600 bg-white border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-indigo-500 focus:bg-white hover:border-indigo-500" id="grid-last-name" name="last_name" type="text" placeholder="Doe" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide -500 text-xs font-bold mb-2 text-red" htmlFor="grid-password" name="email">
                      E-mail
                    </label>
                    <input className="form-control appearance-none block w-full bg-white text-gray-600 border border-gray-300 rounded-sm py-3 px-4 leading-tight focus:outline-none focus:border-indigo-500 focus:bg-white hover:border-indigo-500" id="email" name="email" type="email" placeholder="johndoe@email.com" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide -500 text-xs font-bold mb-2 text-red" htmlFor="grid-password">
                      Message
                    </label>
                    <textarea className="form-control no-resize appearance-none block w-full bg-white text-gray-600 border border-gray-300 rounded-sm py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-indigo-500 focus:bg-white hover:border-indigo-500 h-48 resize-none" id="message" name="message"></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="w-full">
                    <button type="submit" className="w-full px-4 py-3 text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg border-black font-semibold rounded-sm border bg-gradient-to-br focus:outline-none  text-red" name="button">
                      <em className="fas fa-paper-plane pr-1" aria-hidden="true"></em>
                      Send
                    </button>
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