import React from 'react';

const Programs = () => {
  return (
    <div className="p-8 bg-red" id="programs">
      <h2 className="text-2xl font-bold text-center mb-8 bg-red" >Our Programs</h2>
      <div className="flex flex-wrap justify-around bg-red">
        <div className="w-full md:w-1/3 p-4 ">
          <div className="border-2 border-black rounded p-4 shadow-md bg-lightred ">
            <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Private 1:1 Coaching</h3>
            <p className="text-xl">Experience like never before with 1:1 training, where every session is crafted uniquely for you, ensuring efficient progress tailored to your specific goals and needs. Available in-person or virtually. </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="border-2 border-black rounded p-4 shadow-md bg-lightred">
            <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Custom Workout Routine</h3>
            <p className="text-xl " > Discover the impact of a personalized workout plan. Through my tailored approach, we'll create a fitness routine that matches your goals, fits your schedule, and keeps you motivated on the path to a healthier, stronger you.</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="border-2 border-black rounded p-4 shadow-md bg-lightred">
            <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Nutrition Advice / Plan</h3>
            <p  className="text-xl ">Explore the benefits of a customized nutrition plan. With a designed dietary strategy that aligns with your goals, adapts to your lifestyle, and guides you towards a healthier and happier life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;