import React from 'react';
import '../styling/style.css'
import Program1 from '../imgs/Program1.webp';
import Program2 from '../imgs/Program2.jpg';
import Program3 from '../imgs/Program3.jpg';
import Program4 from '../imgs/Program4.png';
import Program5 from '../imgs/Program5.png';
import Program6 from '../imgs/Program6.png';
import ELCLogo1 from '../imgs/ELCLogo1.jpeg';
import ELCLogo2 from '../imgs/ELCLogo2.jpeg';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';

const Programs = () => {

  const location = useLocation();
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const values = QueryString.parse(location.search);
    console.log(values);




    if (values.success) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (values.canceled) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  
  return (
    <div className="p-8 bg-berige text-" id="programs">
      <h2 className="text-8xl font-bold text-black text-left mb-20 bg-berige"> Coaching Services</h2>
      <div className="flex flex-wrap justify-around bg-berige">
        <div className="w-full md:w-1/3 p-4 mt-20 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="border-0 border-black rounded p-4 shadow-2xl bg-berige ">
            <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Private 1:1 Coaching</h3>
            <h6 className="italic mb-4 -mt-4 font-semibold font-[Georgia]">In-Person or Virtual</h6>
            <img src={Program2} alt="Private 1:1 Coaching" className="object-cover w-full h-96 border-8 border-black rounded-lg" />
            <p className="text-xl mt-4 font-[Georgia]">Experience like never before with 1:1 training, where every session is crafted uniquely for you, ensuring efficient progress tailored to your specific goals and needs. Available in-person or virtually. </p>
            <div className='flex justify-center space-x-4'>
              <a href="#coaching" className="bg-gray text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                Learn More
              </a>
              <a href="#contact" className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                Inquire
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 mt-20 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="border-0 border-black rounded p-4 shadow-2xl bg-berige ">
            <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Training Programs</h3>
            <h6 className="italic mb-4 -mt-4 font-semibold font-[Georgia]">Available WorldWide</h6>
            <img src={Program1} alt="Custom Workout Routine" className="object-cover w-full h-96 border-8 border-black rounded-lg" />
            <p className="text-xl mt-4 font-[Georgia]"> Discover the impact of a personalized workout plan. Through my tailored approach, we'll create a fitness routine that matches your goals, fits your schedule, and keeps you motivated on the path to a healthier, stronger you.</p>
            <div className='flex justify-center space-x-4'>
              <a href="#routine" className="bg-gray text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                Learn More
              </a>
              <a href="#contact" className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                Inquire
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 mt-20 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="border-0 border-black rounded p-4 shadow-2xl bg-berige ">
            <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Nutrition Advice / Plan</h3>
            <h6 className="italic mb-4 -mt-4 font-semibold font-[Georgia]">Available WorldWide</h6>
            <img src={Program3} alt="Nutrition Advice / Plan" className="object-cover w-full h-96 border-8 border-black rounded-lg" />
            <p className="text-xl mt-4 font-[Georgia]">Explore the benefits of a customized nutrition plan. With a designed dietary strategy that aligns with your goals, adapts to your lifestyle, and guides you towards a healthier and happier life.</p>
            <div className='flex justify-center space-x-4'>
              <a href="#diet" className="bg-gray text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                Learn More
              </a>
              <a href="#contact" className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-2">
                Inquire
              </a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="grid-flow-col lg:grid lg:grid-cols-5 lg:gap-4 lg:px-10 lg:pt-8 md:grid md:grid-cols-2 md:gap-4 md:px-10 md:pt-5">
        <div class="col-auto lg:col-span-3 lg:pr-5 lg:pt-10 pb-10">
          <h1 class="text-5xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-4xl md:text-left lg:text-4xl xl:text-7xl lg:text-left pb-10">
            <span class="block xl:inline">1:1 Personal Training </span>
          </h1>
          <div class="space-y-5 text-center md:text-left lg:text-left text-lg">
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xltext-semibold">
            ELC provides an elite level of science-based coaching to help you achieve your fitness goals.
          </p>
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            ELC coaches personalize your training to match your lifestyle and objectives using an evidence-based approach to optimize results. The plan not only needs to be enjoyable to ensure consistency and adherence over the long term, but it also needs to be individualized and tailored to meet your needs as optimally and efficiently as possible, resulting in the greatest outcomes.
          </p>
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            Coaching with ELC is ideal for individuals aspiring to elevate their physique and knowledge to the next level, seeking to accomplish their objectives in the most effective and sustainable manner. Together, as a team, we will collaborate towards your goals and develop a long-term, individualized, and periodized plan rooted in science-based principles.
          </p>
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            Open communication holds paramount importance in my coaching. Building honesty and trust within the coach-client relationship is essential, as ELC is deeply invested in maximizing your results, sustainability, and overall value to your life.
          </p>
          
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl font-semibold">
            If you have any questions or concerns, Be sure to contact me.
          </p>
          </div>
        </div>
        <div class="col-auto lg:col-span-2 mx-auto w-full lg:w-full lg:pl-10">
          <div class="col-auto rounded-sm bg-gray-100 shadow-md px-10 border hover:border-gray-300">
            <div class="flex justify-center self-center items-center -mx-10">
              <img class="object-cover rounded-t-sm w-full h-full object-center" src={ELCLogo1} alt="Photo of coaching service 1"></img>
            </div>
            <div class="col-auto mt-8 pb-3 -mx-5">
              <div class="grid-flow-col grid grid-cols-4">
                <div class="col-span-3">
                  <h1 class="text-black lg:text-3xl md:text-3xl text-2xl font-semibold text-left pb-1">
                    1:1 In Person Coaching
                  </h1>
                </div>
                <div class="col-auto text-center mt-1">
                  <p class="text-right  text-gray-500 font-bold text-xl">
                    Price: $199.99
                  </p>
                </div>
              </div>
              <ul class="custom-bullet list-inside leading-relaxed m-4 font-[merriweahter] text-2xl">
                <li>
                  <span class='font-bold'>High-Level Coaching by Ethan Lynch: </span> Personalized coaching that encompasses everything you need. Tailored to your unique needs, this one-on-one service employs a science-based approach, coupled with my expertise and meticulous programming, ensuring optimal results efficiently.
                </li>
              </ul>
              <form action="./api/stripe/create-checkout-session" method="POST">
                <input type="hidden" name="price_id" value="price_1OZPxuJYXhvyfXz9mbg8Wjxg" />
                <input type="hidden" name="mode" value="payment" />
                <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-flow-col lg:grid lg:grid-cols-5 lg:gap-4 lg:px-10 lg:pt-8 md:grid md:grid-cols-2 md:gap-4 md:px-10 md:pt-5">
        <div class="col-auto lg:col-span-3 lg:pr-5 lg:pt-10 pb-10">
          <h1 class="text-5xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-4xl md:text-left lg:text-4xl xl:text-5xl lg:text-left pb-10">
            <span class="block xl:inline">Virtual Training</span>
          </h1>
          <div class="space-y-5 text-center md:text-left lg:text-left text-lg">
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xltext-semibold">
            ELC provides an elite level of science-based coaching to help you achieve your fitness goals.
          </p>
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            ELC coaches personalize your training to match your lifestyle and objectives using an evidence-based approach to optimize results. The plan not only needs to be enjoyable to ensure consistency and adherence over the long term, but it also needs to be individualized and tailored to meet your needs as optimally and efficiently as possible, resulting in the greatest outcomes.
          </p>
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            Coaching with ELC is ideal for individuals aspiring to elevate their physique and knowledge to the next level, seeking to accomplish their objectives in the most effective and sustainable manner. Together, as a team, we will collaborate towards your goals and develop a long-term, individualized, and periodized plan rooted in science-based principles.
          </p>
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            Open communication holds paramount importance in my coaching. Building honesty and trust within the coach-client relationship is essential, as ELC is deeply invested in maximizing your results, sustainability, and overall value to your life.
          </p>
          
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl font-semibold">
            If you have any questions or concerns, Be sure to contact me.
          </p>
          </div>
        </div>
        <div class="col-auto lg:col-span-2 mx-auto w-full lg:w-full lg:pl-10">
          <div class="col-auto rounded-sm bg-gray-100 shadow-md px-10 border hover:border-gray-300">
            <div class="flex justify-center self-center items-center -mx-10">
              <img class="object-cover rounded-t-sm w-full h-full object-center" src={ELCLogo2} alt="Photo of coaching service 1"></img>
            </div>
            <div class="col-auto mt-8 pb-3 -mx-5">
              <div class="grid-flow-col grid grid-cols-4">
                <div class="col-span-3">
                  <h1 class="text-black lg:text-3xl md:text-3xl text-2xl font-semibold text-left pb-1">
                    1:1 In Person Coaching
                  </h1>
                </div>
                <div class="col-auto text-center mt-1">
                  <p class="text-right text-base text-gray-500">
                    Price: $XXX.XX
                  </p>
                </div>
              </div>
              <ul class="custom-bullet list-inside leading-relaxed m-4 font-[merriweahter] text-2xl">
                <li>
                  <span class='font-bold'>High-Level Coaching by Ethan Lynch: </span> Personalized coaching that encompasses everything you need. Tailored to your unique needs, this one-on-one service employs a science-based approach, coupled with my expertise and meticulous programming, ensuring optimal results efficiently.
                </li>
              </ul>
              <form action="./api/stripe/create-checkout-session" method="POST">
                <input type="hidden" name="price_id" value="price_1OZPxuJYXhvyfXz9mbg8Wjxg" />
                <input type="hidden" name="mode" value="payment" />
                <button type="submit" class="text-center font-semibold lg:text-left text-md text-indigo-500 bg-transparent hover:text-indigo-600 sm:w-auto focus:outline-none">
                  Purchase
                  <em class="fas fa-arrow-right pl-2" aria-hidden="true"></em>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <div className="w-full md:w-1/2 p-4 border-b-2 border-black md:border-b-0 shadow-2xl mt-16 mb-16" id='routine'>
        <h3 className="text-6xl font-bold mb-4 font-[Merriweather] text-center mt-8 mb-8">Training Programs</h3>
  
        <div className="flex justify-between mb-8">
          <div className="w-1/2 p-2 bg-gray-200 relative flex flex-col">
            <img src={Program5} alt="Workout" className="w-full h-full" />
            <div className='bg-dark'>
              <h2 className="text-3xl text-white leading-relaxed font-[merriweahter] font-bold">Men's Program</h2>
              <p className=" text-xl text-white leading-relaxed font-[merriweahter]  ">This program prioritizes hypertrophy, aiming for balanced muscle development. It involves continuous programming tailored to optimize training using a science-based approach.</p>
  
            </div>
            <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
              <input type="hidden" name="price_id" value="price_1OZPzPJYXhvyfXz93WqOem3x" />
              <input type="hidden" name="mode" value="payment" />
              <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
            </form>
          </div>
  
          <div className="w-1/2 p-2 bg-gray-200 relative flex flex-col">
            <img src={Program4} alt="Workout" className="w-full h-full" />
            <div className='bg-dark'>
              <h2 className="text-3xl text-white leading-relaxed font-[merriweahter] font-bold">Women's Program</h2>
              <p className="text-xl text-white leading-relaxed font-[merriweahter] ">
                This program places particular emphasis on lower body and back development, targeting the glutes, lats, and delts to achieve a well-rounded V-taper, especially beneficial for women.</p>
            </div>
            <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
              <input type="hidden" name="price_id" value="price_1OgG2LJYXhvyfXz9Ito4gZFC" />
              <input type="hidden" name="mode" value="payment" />
              <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
            </form>
          </div>
        </div>
  
        <ul className="custom-bullet list-inside text-2xl text-black leading-relaxed mt-8 font-[merriweahter] font-semibold">
          <h4 className="text-4xl font-bold mb-4 font-[Merriweather] text-left mt-8"> What's Included: ✔️ </h4>
          <li>Optimized Workouts for the kind of Athlete you are / want to become</li>
          <li>Custom Workouts to fit your schedule and personal needs</li>
          <li>Introduces variety to keep workouts interesting, preventing boredom and monotony</li>
          <li>Adapt the routine to accommodate any physical limitations or health considerations you may have</li>
          <li>Learn how to perform exercises correctly / Safely </li>
        </ul>
      </div>
  
      <div className="w-full md:w-1/2 p-4 border-b-2 border-black md:border-b-0 shadow-2xl mt-16" id='diet'>
        <div className="w-full p-4 bg-gray-200 relative flex flex-col items-center justify-center">
          <img src={Program6} alt="Workout" className="w-1/2 h-full bg-cover" />
          <div className='bg-dark text-center w-1/2 h-full'>
            <h2 className="text-3xl text-white leading-relaxed font-[merriweahter] font-bold">Nutritional Plan</h2>
            <p className="text-xl text-white leading-relaxed font-[merriweahter]">
              This nutrition plan is meticulously crafted to align with your fitness goals. It focuses on optimizing your dietary intake through personalized and science-based strategies, ensuring you receive the essential nutrients needed to support your overall well-being and achieve your desired physique.</p>
          </div>
          <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
            <input type="hidden" name="price_id" value="price_1OZPxuJYXhvyfXz9mbg8Wjxg" />
            <input type="hidden" name="mode" value="payment" />
            <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
          </form>
        </div>
  
        <h3 className="text-6xl font-bold mb-4 font-[Merriweather] text-center mt-8 mb-8">Nutrition Plan</h3>
        <ul className="custom-bullet list-inside text-2xl text-black leading-relaxed m-4 font-[merriweahter] font-semibold">
          <h4 className="text-4xl font-bold mb-4 font-[Merriweather] text-left mt-8"> What's Included: ✔️ </h4>
          <li>Personalized nutrition plan tailored to your specific goals, needs, and lifestyle</li>
          <li>Customized meal plan designed to help you achieve your goals</li>
          <li>Learn how to eat healthy and make the right food choices</li>
          <li>Learn how to read food labels and understand nutrition facts</li>
          <li>Learn how to make healthy food choices when eating out</li>
        </ul>
      </div>
    </div>
  );
}  

export default Programs;