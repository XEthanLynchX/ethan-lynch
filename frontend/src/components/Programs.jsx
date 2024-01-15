import React from 'react';
import '../styling/style.css'
import Program1 from '../imgs/Program1.webp';
import Program2 from '../imgs/Program2.jpg';
import Program3 from '../imgs/Program3.jpg';

const Programs = () => {
  return (
      <div className="p-8 bg-lightred" id="programs">
          <h2 className="text-8xl font-bold text-left mb-12 bg-lightred" >Our Programs</h2>
          <div className="flex flex-wrap justify-around bg-lightred">
            <div className="w-full md:w-1/3 p-4 ">
              <div className="border-2 border-black rounded p-4 shadow-md bg-red ">
                <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Private 1:1 Coaching</h3>
                <h6 className="italic mb-4 -mt-4 font-semibold font-[Georgia] ">In-Person or Virtual</h6>
                <img src={Program2} alt="Private 1:1 Coaching" className="object-cover w-full h-96 border-8 border-lightred rounded-lg" />
                <p className="text-xl mt-4 font-[Georgia]">Experience like never before with 1:1 training, where every session is crafted uniquely for you, ensuring efficient progress tailored to your specific goals and needs. Available in-person or virtually. </p>
                <div className='flex justify-center space-x-4'>
                 <button href="#Private" className="bg-lightred hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2"> Learn More</button>
                  <button href="#Private" className="bg-lightred hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2"> Enquire</button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="border-2 border-black rounded p-4 shadow-md bg-red">
                <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Custom Workout Routine</h3>
                <h6 className="italic mb-4 -mt-4 font-semibold font-[Georgia] ">Available WorldWide</h6>         
                <img src={Program1} alt="Custom Workout Routine" className="object-cover w-full h-96 border-8 border-lightred rounded-lg" />
                <p className="text-xl mt-4 font-[Georgia]" > Discover the impact of a personalized workout plan. Through my tailored approach, we'll create a fitness routine that matches your goals, fits your schedule, and keeps you motivated on the path to a healthier, stronger you.</p>
                <div className='flex justify-center space-x-4'>
                 <button href="#Private" className="bg-lightred hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2"> Learn More</button>
                  <button href="#Private" className="bg-lightred hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2"> Enquire</button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="border-2 border-black rounded p-4 shadow-md bg-red">
                <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Nutrition Advice / Plan</h3>
                <h6 className="italic mb-4 -mt-4 font-semibold font-[Georgia] ">Available WorldWide</h6>
                <img src={Program3} alt="Nutrition Advice / Plan" className="object-cover w-full h-96 border-8 border-lightred rounded-lg" />
                <p  className="text-xl mt-4 font-[Georgia]s">Explore the benefits of a customized nutrition plan. With a designed dietary strategy that aligns with your goals, adapts to your lifestyle, and guides you towards a healthier and happier life.</p>
                <div className='flex justify-center space-x-4'>
                 <button href="#Private" className="bg-lightred hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2"> Learn More</button>
                  <button href="#Private" className="bg-lightred hover:bg-black text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2"> Enquire</button>
                </div>
              </div>
            </div>
          </div>

      <div className="border-2 border-black rounded shadow-md bg-red flex flex-col md:flex-row items-center border-t-2 mt-8">
      <div className="w-full  md:w-1/2 p-4 border-b-2 md:border-r-2 border-black md:border-b-0">
          <h3 className="text-6xl font-bold mb-4 font-[Merriweather] text-center mt-8">Private 1:1 Coaching</h3>
           <ul className="custom-bullet list-inside text-2xl text-black leading-relaxed m-4 font-[merriweahter] font-semibold">
            <li>Choose from flexible durations, whether you opt for a 6, 12, or comprehensive 52-week program</li>
            <li>Benefit from dedicated time with me serving as your personal dietitian throughout the selected program duration </li>
            <li>Enjoy the convenience of personalized food plans tailored to your dietary preferences, lifestyle, and fitness goals</li>
            <li>Around the clock contact for any questions and/or concerns </li>
          </ul>
        </div>

        <div className="w-full  md:w-1/2 p-4 border-b-2 md:border-r-2 border-black md:border-b-0">
          <h3 className="text-6xl font-bold mb-4 font-[Merriweather] text-center  ">Custom Workout Plan</h3>
          <ul className="custom-bullet list-inside text-2xl text-black leading-relaxed m-4 font-[merriweahter] font-semibold">
            <li>Optimized Workouts for the kind of Athlete you are / want to become</li>
            <li>Custom Workouts to fit your schedule and personal needs</li>
            <li>Introduces variety to keep workouts interesting, preventing boredom and monotony</li>
            <li>Adapt the routine to accommodate any physical limitations or health considerations you may have</li>
            <li>Learn how to perform exercises correctly / Safely </li>
            
          </ul>
        </div>

        <div className="w-full  md:w-1/2 p-4 border-b-2 md:border-r-2 border-black md:border-b-0 ">
          <h3 className="text-6xl font-bold mb-4 font-[Merriweather] text-center mt-10 mb-8 ">Nutrition Plan</h3>
          <ul className="custom-bullet list-inside text-2xl text-black leading-relaxed m-4 font-[merriweahter] font-semibold">
            <li>Personalized nutrition plan tailored to your specific goals, needs, and lifestyle</li>
            <li>Customized meal plan designed to help you achieve your goals</li>
            <li>Learn how to eat healthy and make the right food choices</li>
            <li>Learn how to read food labels and understand nutrition facts</li>
            <li>Learn how to make healthy food choices when eating out</li>
          </ul>
      </div>
    </div>
  </div>
  );
};

export default Programs;