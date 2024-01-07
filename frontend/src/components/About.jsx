import React from 'react';
import About1 from '../imgs/About1.jpg';
import About2 from '../imgs/About2.jpg';
import About3 from '../imgs/About3.jpg';
import About4 from '../imgs/About4.jpg';

const images = [
  About1, 
  About2,
  About3,
  About4,
];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-lightred">
      <div className="flex items-center justify-center w-full">
        <div className="w-1/2 p-10">
          <div ><h2 className="text-6xl text-black leading-relaxed m-4 font-[Merriweather] font-bold mb-10 ">Foundations</h2></div>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Science-Based </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
            I believe in a science-based approach to fitness and nutrition. This includes perfecting technique, form, and posture to maximize results and minimize injury. I also believe in a holistic approach to fitness, which includes nutrition, sleep, and stress management. 
          </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> What Works For You </h4>
          <p className="text-xl text-black leading-relaxed m-4 mt- font-[Georgia]">Discover a wellness plan tailored to your unique schedule and lifestyle. Our approach involves crafting a personalized fitness and nutrition strategy that fits seamlessly into your daily routine. We prioritize individualization, ensuring you receive a plan that aligns with your specific needs and goals. </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Lifelong Wellness Habits </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">We believe in a sustainable approach to fitness and nutrition. We don't believe in quick fixes or fad diets. We believe in creating a lifestyle that you can maintain for the long-term. </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Mindful Performance </h4>

          <p className="text-xl text-black leading-relaxed m-4 mt- font-[Georgia]">In our coaching approach, we emphasize the importance of mindfulness for mental resilience. By fostering a strong mind-body connection, individuals can optimize their performance potential. Through the incorporation of stress management techniques, we promote overall well-being, creating a holistic framework for sustained success in both fitness and life. </p>

        </div>
        <div className="w-1/2">
          <img src={About1} alt="Image" className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-1/2">
          <img src={About2} alt="Image" className="object-cover w-full h-full" />
        </div>
        <div className="w-1/2 p-8">
        <p className="text-4xl text-black leading-relaxed m-4 font-[Merriweather]">
            I didn't start with an extensive background in fitness; I began from scratch, which may be like you. My journey into better health and wellness has been a personal quest for self-improvement and empowerment. I've learned that the hardest, but most important thing is to start!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;