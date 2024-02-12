import React from 'react';
import About1 from '../imgs/about/About1.jpg';
import About2 from '../imgs/about/About2.jpg';
import About3 from '../imgs/about/About3.jpg';
import About4 from '../imgs/about/About4.jpg';
import About5 from '../imgs/about/About5.Webp';
import About6 from '../imgs/about/About6.jpg';
import About7 from '../imgs/about/About7.jpg';

const images = [
  About1, 
  About2,
  About3,
  About4,
  About5,
  About6,
  About7,

];

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-berige">

      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="w-full md:w-1/2 p-10">
          <div ><h2 className="text-6xl text-black leading-relaxed m-4 font-[Merriweather] font-bold mb-10 ">Foundations</h2></div>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Science-Based </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
            I believe in a science-based approach to fitness and nutrition. This includes perfecting technique, form, and posture to maximize results and minimize injury. I also believe in a holistic approach to fitness, which includes nutrition, sleep, and stress management. 
          </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> What Works For You </h4>
          <p className="text-xl text-black leading-relaxed m-4 mt- font-[Georgia]">Discover a wellness plan tailored to your unique schedule and lifestyle. My approach involves crafting a personalized fitness and nutrition strategy that fits seamlessly into your daily routine. I prioritize individualization, ensuring you receive a plan that aligns with your specific needs and goals. </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Lifelong Wellness Habits </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">I believe in a sustainable approach to fitness and nutrition. There is no quick fixes or fad diets. I will teach how to live a lifestyle that you can maintain for the long-term. </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Mindful Performance </h4>

          <p className="text-xl text-black leading-relaxed m-4 mt- font-[Georgia]">In My coaching approach, I emphasize the importance of mindfulness for mental resilience. By fostering a strong mind-body connection, individuals can optimize their performance potential. Through the incorporation of stress management techniques, together we'll promote overall well-being, creating a holistic framework for sustained success in both fitness and life. </p>

        </div>
        <div className="w-full md:w-1/2">
          <img src={About6} alt="Image" className="object-cover w-full h-full" />
        </div>
      </div>


      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full"
      >
        <div className="w-full md:w-1/2">
          <img src={About5} alt="Image" className="object-cover w-full h-full" />
        </div>

        <div className="w-full md:w-1/2 p-8">

          <div ><h2 className="text-6xl text-black leading-relaxed m-4 font-[Merriweather] font-bold mb-10 ">The Benefits of Pro Coaching </h2></div>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Physical </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
            The physical benefits of exercise are undeniable. With time and consistency, you will see improvements cardiovascular health, muscle tone, and overall physical well-being. You will experience increased energy levels, improved sleep quality, and reduced stress. Exercise has been shown to boost the immune system, reduce the risk of chronic disease, and improve longevity. 
          </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Mental </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
            Exercise has been shown to improve mental health. It can help reduce anxiety, depression, and negative mood. It can also improve self-esteem and cognitive function. Exercise has been scientifically documented to stimulate the release of endorphins in the brain. Learning to navigate emotions in a heathly way enhances your overall well-being and creates a foundation for lasting happiness.
          </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Discipline </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
          Regular exercise builds discipline by establishing a structured routine and fostering commitment to physical well-being. Achieving fitness goals instills resilience and perseverance, translating into disciplined habits that benefit various aspects of life. The mental focus developed through exercise positively influences decision-making and productivity, contributing to an overall sense of Devlopment.
          </p> 

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Social </h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
          Regular exercise serves as a dynamic avenue for forging new friendships. Joining a gym creates a natural setting for socializing, allowing individuals to connect with like-minded peers who share common health and wellness goals. The shared experience of working towards fitness objectives can facilitate the formation of meaningful connections, transforming workout partners into friends. The supportive environment of fitness communities not only promotes physical well-being but also provides a social platform for expanding one's social circle and cultivating lasting friendships.
          </p>
        </div>

    
      
        
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full border-b-4 border-black mb-20">
      <div className="w-full md:w-1/2 p-10">
          <div ><h2 className="text-6xl text-black leading-relaxed m-4 font-[Merriweather] font-bold mb-10 border-b-6 ">About Me</h2></div>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Who Am I</h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">
          I'm Ethan Lynch, a 20-year-old fitness enthusiast with a passion for self-development and continuous progression. With 2 1/2 years of dedicated experience in bodybuilding, I understand the transformative power that a commitment to health and fitness can bring.
          </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Background</h4>
          <p className="text-xl text-black leading-relaxed m-4 mt- font-[Georgia]">I didn't start with an extensive background in fitness; I began from scratch, just like many of you. My journey into bodybuilding has been a personal quest for self-improvement, and I hope to share my knowledge of what I've learned over the years with you. </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Why Should You Chose Me</h4>

          <p className="text-xl text-black leading-relaxed m-4 font-[Georgia]">As your coach, I bring a wealth of knowledge in weightlifting, nutrition, fat loss, and muscle gain. I've faced the challenges, and experienced the triumphs. I'm not just about physical transformation; I'm here to guide you through a life-changing process. My coaching style is rooted in dedication, passion, and a genuine desire to see you succeed. </p>

          <h4 className="text-4xl text-black leading-relaxed m-4 font-[Merriweather] font-semibold "> Your Fitness Journey Starts Here </h4>

          <p className="text-xl text-black leading-relaxed m-4 mt- font-[Georgia]">Whether you're a beginner looking to kickstart your fitness journey or someone seeking to take their workouts to the next level, I'm here to support you. Let's embark on this journey together, turning your fitness goals into a reality and making it the best and most transformative experience of your life.  </p>

        </div>
        <div className="w-full md:w-1/2">
          <img src={About7} alt="Image" className="object-cover w-full h-full" />
        </div>
      </div>
      
    </div>
  );
};

export default About;