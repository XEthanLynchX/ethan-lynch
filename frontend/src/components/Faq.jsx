import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FaqSection = () => {
  const faqs = [
    { question: 'Do you coach both women and men?', answer: 'Yes, there isn’t a significant difference in terms of training and nutrition programming, but there are small dissimilarities.' },
    { question: 'What does science-based mean?', answer: 'Science-based means to read, interpret, and stay up to date with the current research within the related fields literature, and apply the evidence into practice if / when is deemed adequate to do so.' },
    { question: 'How do you adjust client training programs?', answer: 'Training programs are created and adjusted using Google Sheets. This allows me to update programs live on both our ends at the same time.' },
    { question: 'What payment options do you provide?', answer: 'PayPal, Cashapp, Venmo, Zelle, and here on the website.' },
    { question: 'How quick will I see results?', answer: 'This will differ in individuals and will depend on one’s goal(s), however, generally anywhere from 3-12 weeks. ' },
    { question: 'Where should I train?', answer: 'A gym offers greater exercise selection and may benefit you more due to its accessibility, however, a gym membership is most definitely not required. I can provide at-home training programming.' },
    { question: 'How do you track client progress?', answer: 'Every Sunday a detailed questionnaire is emailed to clients. Individuals answer questions related to their body composition, training, nutrition, and various lifestyle factors for the past week. Additionally, progress pictures are taken for composition analysis and used in conjunction with the questionnaire to determine adjustments to protocol. Lastly, one\'s training performance is analyzed thoroughly to prevent adaptive resistance and regression. All information remains confidential and is stored within Google Sheets for future training and nutrition periodization and programming.' },
    { question: 'What is your refund policy?', answer: 'Refunds are not provided. However, if you are not satisfied with the service, I will do my best to make it right.' },
  ];

  const [openFaqs, setOpenFaqs] = useState([]);

  const handleFaqClick = (index) => {
    setOpenFaqs(prevOpenFaqs => 
      prevOpenFaqs.includes(index) ? prevOpenFaqs.filter(i => i !== index) : [...prevOpenFaqs, index]
    );
  };

  return (
    <div className="py-16 md:py-24 lg:py-24 bg-white lg:pt-36 " id="faq">
      <div className="px-8 mx-auto max-w-7xl lg:px-16">
        <h3 className="mt-1 text-4xl font-bold text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl text-center">
          Frequently Asked Questions
        </h3>
        <p className="text-xs font-bold text-green-400 uppercase sm:mx-6 text-center text-normal sm:font-bold mt-4 text-red font-[Georgia]">
          Got a Question? Here's some answers.
        </p>
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-6 pt-10 ">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.08 }}
              className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-8 md:py-8 sm:py-8 sm:shadow cursor-pointer"
              onClick={() => handleFaqClick(index)}
            >
              <h3 className="text-md font-bold text-indigo-500 sm:text-xl md:text-2xl">{faq.question}</h3>
              {openFaqs.includes(index) && (
                <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal text-red font-[Georgia]">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;