import React from 'react';
import Program1 from '../imgs/Program1.webp';
import Program2 from '../imgs/Program2.avif';

const Programs = () => {
  return (
    <div className="p-8 bg-lightred" id="programs">
      <h2 className="text-6xl font-bold text-center mb-8 bg-lightred" >Our Programs</h2>
      <div className="flex flex-wrap justify-around bg-lightred">
        <div className="w-full md:w-1/3 p-4 ">
          <div className="border-2 border-black rounded p-4 shadow-md bg-red ">
            <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Private 1:1 Coaching</h3>
            <p className="text-xl">Experience like never before with 1:1 training, where every session is crafted uniquely for you, ensuring efficient progress tailored to your specific goals and needs. Available in-person or virtually. </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="border-2 border-black rounded p-4 shadow-md bg-red">
            <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Custom Workout Routine</h3>
            <p className="text-xl " > Discover the impact of a personalized workout plan. Through my tailored approach, we'll create a fitness routine that matches your goals, fits your schedule, and keeps you motivated on the path to a healthier, stronger you.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="border-2 border-black rounded p-4 shadow-md bg-red">
            <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Nutrition Advice / Plan</h3>
            <p  className="text-xl ">Explore the benefits of a customized nutrition plan. With a designed dietary strategy that aligns with your goals, adapts to your lifestyle, and guides you towards a healthier and happier life.</p>
          </div>
        </div>
      </div>

      <div className="border-2 border-black rounded shadow-md bg-red flex flex-col md:flex-row">
  <div className="w-full md:w-1/2 p-4 border-b-2 md:border-r-2 border-black md:border-b-0">
    
    <img src={Program2} alt="Private 1:1 Coaching" className="object-cover w-full h-3/4 border-8 border-lightred rounded-lg" />
    <h3 className="text-5xl font-bold mb-4 font-[Merriweather] text-left mt-10">Private 1:1 Coaching</h3>
    <ul className="list-disc list-inside text-2xl text-black leading-relaxed m-4 mt- font-[Georgia]">
      <li>6, 12 or 52-weeks of in-depth weekly 1:1 consultations</li>
      <li>Protected time with your personal dietitian every week</li>
      <li>Personalised food plan with 100+ recipes and on-the-go options</li>
      <li></li>
    </ul>
  </div>

  <div className="w-full md:w-1/2 p-4">
    
    <img src={Program1} alt="Custom Workout Routine" className="object-cover w-full h-3/4 border-8 border-lightred rounded-lg" />
    <h3 className="text-5xl font-bold mb-4 font-[Merriweather] text-left mt-10">Custom Workout Routine</h3>
    <ul className="list-decimal list-inside text-2xl text-black leading-relaxed m-4 mt- font-[Georgia]">
      <li>6, 12 or 52-weeks of in-depth weekly 1:1 consultations</li>
      <li>Protected time with your personal dietitian every week</li>
      <li>Personalised food plan with 100+ recipes and on-the-go options</li>
      <li></li>
    </ul>
  </div>
</div>
  </div>
  );
};

export default Programs;