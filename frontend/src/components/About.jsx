import React from 'react';
import About1 from '../imgs/About1.jpg';
import About2 from '../imgs/About2.jpg';
import About3 from '../imgs/About3.jpg';
import About4 from '../imgs/About4.jpg';
import About5 from '../imgs/About5.Webp';
import About6 from '../imgs/About6.jpg';

const images = [
  About1, 
  About2,
  About3,
  About4,
  About5,
  About6

];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-lightred">
      <div className="flex items-center justify-center w-full">
        <div className="w-1/2 p-10">
          <div ><h2 className="text-6xl text-black leading-relaxed m-4 font-[Merriweather] font-bold mb-10 ">Foundations</h2></div>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Science-Based </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
            We believe in a science-based approach to fitness and nutrition. This includes perfecting technique, form, and posture to maximize results and minimize injury. We also believe in a holistic approach to fitness, which includes nutrition, sleep, and stress management. 
          </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> What Works For You </h4>
          <p className="text-xl text-black leading-relaxed m-4 mt- font-[Georgia]">Discover a wellness plan tailored to your unique schedule and lifestyle. Our approach involves crafting a personalized fitness and nutrition strategy that fits seamlessly into your daily routine. We prioritize individualization, ensuring you receive a plan that aligns with your specific needs and goals. </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Lifelong Wellness Habits </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">We believe in a sustainable approach to fitness and nutrition. We don't believe in quick fixes or fad diets. We believe in creating a lifestyle that you can maintain for the long-term. </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Mindful Performance </h4>

          <p className="text-xl text-black leading-relaxed m-4 mt- font-[Georgia]">In our coaching approach, we emphasize the importance of mindfulness for mental resilience. By fostering a strong mind-body connection, individuals can optimize their performance potential. Through the incorporation of stress management techniques, we promote overall well-being, creating a holistic framework for sustained success in both fitness and life. </p>

        </div>
        <div className="w-1/2">
          <img src={About6} alt="Image" className="object-cover w-full h-full" />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="w-1/2">
          <img src={About5} alt="Image" className="object-cover w-full h-full" />
        </div>
        <div className="w-1/2 p-8">

          <div ><h2 className="text-6xl text-black leading-relaxed m-4 font-[Merriweather] font-bold mb-10 ">The Benefits of Growth </h2></div>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Physical </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
            The physical benefits of exercise are undeniable. With time and consistency, you will see improvements in your strength, endurance, and overall appearence. You will also experience increased energy levels, improved sleep quality, and reduced stress. 
          </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Mental </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
            Exercise has been shown to improve mental health. It can help reduce anxiety, depression, and negative mood. It can also improve self-esteem and cognitive function. This is scientifically documented through the release of endorphins in the brain. Learning to navigate emotions in a heathly way enhances your overall well-being and creates a foundation for lasting happiness.
          </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Discipline </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
            Positive change in lifestyle habits contributes to enhanced mental clarity and focus.
          </p> 

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Social </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
            Exercise can help you meet new people and build new relationships. It can also help you strengthen existing relationships. 
          </p>

        
        </div>
      </div>
    </div>
  );
};

export default About;