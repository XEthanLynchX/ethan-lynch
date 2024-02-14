import React from 'react';
import '../styling/style.css'
import Program1 from '../imgs/programs/Program1.webp';
import Program2 from '../imgs/programs/Program2.jpg';
import Program3 from '../imgs/programs/Program3.jpg';
import Program4 from '../imgs/programs/Program4.png';
import Program5 from '../imgs/programs/Program5.png';
import Program6 from '../imgs/programs/Program6.png';
import ELCLogo1 from '../imgs/programs/ELCLogo1.jpeg';
import ELCLogo2 from '../imgs/programs/ELCLogo2.jpeg';
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
    <div className="p-8 bg-navy border-t-[12px]" id="programs " >
      <h2 className="text-8xl font-bold text-white text-left mb-20 bg-navy "> Coaching Services</h2>
      <div className="flex flex-wrap justify-around rounded-md text-white ">
        <div className="w-full md:w-1/3 p-4 mt-20 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
          <div className="border-2 border-black rounded p-4 shadow-2xl bg-navy ">
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
          <div className="border-2 border-black rounded p-4 shadow-2xl bg-navy ">
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
          <div className="border-2 border-black rounded p-4 shadow-2xl bg-navy ">
            <h3 className="text-3xl font-bold mb-4 font-[Merriweather]">Nutrition Plan / Guidance</h3>
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
  
      <div class="grid-flow-col lg:grid lg:grid-cols-5 lg:gap-4 lg:px-10 lg:pt-8 md:grid md:grid-cols-2 md:gap-4 md:px-10 md:pt-5 " id='coaching'>
        <div class="col-auto lg:col-span-3 lg:pr-5 lg:pt-10 pb-10 text-white">
          <h1 class="text-5xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-4xl md:text-left lg:text-4xl xl:text-5xl lg:text-left pb-10">
            <span class="block xl:inline" >1:1 Personal Training </span>
          </h1>
          <div class="space-y-5 text-center md:text-left lg:text-left text-lg font-[georgia]">
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
            If you're interested in our 1-on-1 in-person training program or have any questions about it, please don't hesitate to contact me. I'm here to provide personalized support and guidance to help you achieve your fitness goals!
          </p>
          </div>
        </div>
        <div class="col-auto lg:col-span-2 mx-auto w-full lg:w-full lg:pl-10">
          <div class="col-auto rounded-sm bg-gray-100 shadow-md px-10 border-4 border-black hover:border-gray-300">
            <div class="flex justify-center self-center items-center -mx-10">
              <img class="object-cover rounded-t-sm w-full h-full object-center" src={ELCLogo1} alt="Photo of coaching service 1"></img>
            </div>
            <div class="col-auto mt-8 pb-3 -mx-5">
              <div class="grid-flow-col grid grid-cols-4 ">
                <div class="col-span-3 ">
                  <h1 class="text-white lg:text-3xl md:text-3xl text-2xl font-semibold text-left pb-1">
                    1:1 In Person Coaching
                  </h1>
                </div>
                <div class="col-auto text-center mt-1">
                  <p class="text-right text-gray-500 font-bold text-xl text-white">
                    Price: $199.99
                  </p>
                </div>
              </div>
              <ul class="custom-bullet list-inside leading-relaxed m-4 font-[georgia] text-2xl text-white">
                <li>
                  <span class='font-bold'>High-Level Coaching by Ethan Lynch: </span> Personalized coaching that encompasses everything you need. Tailored to your unique needs, this one-on-one service employs a science-based approach, coupled with my expertise and meticulous programming, ensuring optimal results efficiently.
                </li>
              </ul>
              <form action="./api/stripe/create-checkout-session" method="POST">
                <input type="hidden" name="price_id" value="price_1OeSV9JYXhvyfXz9LTht4jUV" />
                <input type="hidden" name="mode" value="subscription" />
                <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-flow-col lg:grid lg:grid-cols-5 lg:gap-4 lg:px-10 lg:pt-8 md:grid md:grid-cols-2 md:gap-4 md:px-10 md:pt-5 text-white">
        <div class="col-auto lg:col-span-3 lg:pr-5 lg:pt-10 pb-10">
          <h1 class="text-5xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-4xl md:text-left lg:text-4xl xl:text-5xl lg:text-left pb-10">
            <span class="block xl:inline">Virtual Personal Training</span>
          </h1>
          <div class="space-y-5 text-center md:text-left lg:text-left text-lg">
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl ">
            ELC offers an elite level of science-based coaching delivered virtually to help you achieve your fitness goals from anywhere in the world.
          </p>

          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            ELC's online coaching program provides personalized training tailored to your lifestyle and objectives, leveraging an evidence-based approach to optimize results. Designed to be accessible from the comfort of your home or wherever you choose to train, our virtual coaching ensures flexibility and convenience without compromising on quality.
          </p>

          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            Coaching with ELC online offers the same level of expertise and individualization as our in-person services. Whether you're a busy professional, a stay-at-home parent, or someone with a hectic schedule, our virtual coaching adapts to your life, making it easier than ever to stay committed to your fitness journey. With real-time guidance and support delivered directly to your device, you'll have everything you need to succeed at your fingertips.
          </p>

          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            Open communication remains at the core of our online coaching philosophy. Despite the physical distance, we prioritize building a strong coach-client relationship based on honesty, trust, and mutual respect. Through regular check-ins, video calls, and messaging, we ensure that you feel supported, motivated, and accountable every step of the way.
          </p>

          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl font-semibold">
            If you have any questions or concerns, rest assured that the virtual doors are always open. Contact me today to start your online coaching journey with ELC.
          </p>
          </div>
        </div>


        <div class="col-auto lg:col-span-2 mx-auto w-full lg:w-full lg:pl-10">
          <div class="col-auto rounded-sm bg-gray-100 shadow-md px-10 border-4 border-black  hover:border-gray-300">
            <div class="flex justify-center self-center items-center -mx-10">
              <img class="object-cover rounded-t-sm w-full h-full object-center" src={ELCLogo2} alt="Photo of coaching service 1"></img>
            </div>
            <div class="col-auto mt-8 pb-3 -mx-5">
              <div class="grid-flow-col grid grid-cols-4">
                <div class="col-span-3">
                  <h1 class="text-white lg:text-3xl md:text-3xl text-2xl font-semibold text-left pb-1">
                    1:1 In Person Coaching
                  </h1>
                </div>
                <div class="col-auto text-center mt-1">   
                <p class="text-right text-gray-500 font-bold text-xl">
                    Price: $150.00
                  </p>
                </div>
              </div>
              <ul class="custom-bullet list-inside leading-relaxed m-4 font-font-[georgia] text-2xl">
                <li>
                  <span class='font-bold'>High-Level Coaching by Ethan Lynch: </span> Personalized coaching that encompasses everything you need. Tailored to your unique needs, this one-on-one service employs a science-based approach, coupled with my expertise and meticulous programming, ensuring optimal results efficiently.
                </li>
              </ul>
              <form action="./api/stripe/create-checkout-session" method="POST">
                <input type="hidden" name="price_id" value="price_1OhlDkJYXhvyfXz9Cb8y2eBq" />
                <input type="hidden" name="mode" value="subscription" />
                <button className="bg-blue text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-4 lg:px-10 lg:pt-8 md:grid md:grid-cols-2 md:gap-4 md:px-10 md:pt-5 text-white">
        <div class="col-auto lg:col-span-2 mx-auto w-full lg:w-full lg:pl-10 order-2 lg:order-1">
          <div class="col-auto rounded-sm bg-gray-100 shadow-md px-10 border-4 border-black  hover:border-gray-300">
              <div class="flex justify-center self-center items-center -mx-10">
                  <img class="object-cover rounded-t-sm w-full h-full object-center" src={Program5} alt="Workout"></img>
              </div>
              <div class="col-auto mt-8 pb-3 -mx-5">
                  <div class="grid-flow-col grid grid-cols-4">
                      <div class="col-span-3">
                          <h1 class="text-white lg:text-3xl md:text-3xl text-2xl font-semibold text-left pb-1">
                              Men's Program
                          </h1>
                      </div>
                      <div class="col-auto text-center mt-1">
                        <p class="text-right text-gray-500 font-bold text-xl">
                              Price: $19.99
                          </p>
                      </div>
                  </div>
                  <ul class="custom-bullet list-inside leading-relaxed m-4 font-[georgia] text-2xl">
                      <li>
                          <span class='font-bold'>This program prioritizes hypertrophy: </span> aiming for balanced muscle development. It involves continuous programming tailored to optimize training using a science-based approach.
                      </li>
                  </ul>
                  <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
                      <input type="hidden" name="price_id" value="price_1OZPzPJYXhvyfXz93WqOem3x" />
                      <input type="hidden" name="mode" value="payment" />
                      <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
                  </form>
              </div>
          </div>
      </div>

      <div class="col-auto lg:col-span-3 lg:pr-5 lg:pt-10 pb-10 order-1 lg:order-2" id='routine'>
        <h1 class="text-5xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-4xl md:text-right lg:text-4xl xl:text-5xl lg:text-right pb-10">
            <span class="block xl:inline">Men's Hypertrophy Program</span>
        </h1>
        <div class="space-y-5 text-center md:text-left lg:text-left text-lg">
            <p class="text-gray-500 xl:text-3xl md:text-xl text-xltext-semibold">
              The men's training program at ELC is designed to cater to the diverse needs and aspirations of men seeking to optimize their fitness journey. 
            </p>
            <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
              One of the key features of the men's program is its flexibility and customization. We recognize that busy schedules and personal preferences vary from person to person, which is why I offer custom workouts designed to fit seamlessly into your lifestyle. From the frequency and duration of sessions to exercise selection and intensity, the program adapts to your needs, ensuring maximum convenience and adherence.
            </p>
            <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
              Variety is the spice of life, and it's also a fundamental aspect of the men's training program. We incorporate diverse training modalities, techniques, and exercises to keep your workouts engaging and effective. By introducing variety, we can prevent boredom and monotony, keeping you motivated and excited to hit the gym day after day. 
            </p>
            <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
              Safety and proper form are paramount in the men's training program. We prioritize teaching you how to perform exercises correctly and safely to minimize the risk of injury and maximize the effectiveness of your workouts. my experienced coaching provides guidance and feedback to ensure you're executing each movement with proper technique and alignment. By mastering the fundamentals of exercise execution, you'll build a solid foundation for long-term progress and success.
            </p>
            <p class="text-gray-500 xl:text-3xl md:text-xl text-xl font-semibold">
            If you have any questions or concerns regarding the men's training program, don't hesitate to reach out to me. I'm dedicated to helping you achieve your fitness goals!
            </p>
        </div>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-4 lg:px-10 lg:pt-8 md:grid md:grid-cols-2 md:gap-4 md:px-10 md:pt-5 text-white">
        <div class="col-auto lg:col-span-2 mx-auto w-full lg:w-full lg:pl-10 order-2 lg:order-1">
          <div class="col-auto rounded-sm bg-gray-100 shadow-md px-10 border-4 border-black  hover:border-gray-300">
              <div class="flex justify-center self-center items-center -mx-10">
                  <img class="object-cover rounded-t-sm w-full h-full object-center" src={Program4} alt="Workout"></img>
              </div>
              <div class="col-auto mt-8 pb-3 -mx-5">
                  <div class="grid-flow-col grid grid-cols-4">
                      <div class="col-span-3">
                          <h1 class="text-white lg:text-3xl md:text-3xl text-2xl font-semibold text-left pb-1">
                              Women's Program
                          </h1>
                      </div>
                      <div class="col-auto text-center mt-1"> 
                          <p class="text-right text-gray-500 font-bold text-xl">  
                              Price: $19.99
                          </p>
                      </div>
                  </div>
                  <ul class="custom-bullet list-inside leading-relaxed m-4 font-[georgia] text-2xl">
                      <li>
                          <span class='font-bold'>Prioritization on Core, Lower-Body, and Back : </span> targeting the abodminals, glutes, quads, hamstrings, lats, and delts to achieve a well-rounded V-taper, especially beneficial for women.
                      </li>
                  </ul>
                  <form action="http://localhost:8000/api/stripe/create-checkout-session" method="POST">
                      <input type="hidden" name="price_id" value="price_1OgG2LJYXhvyfXz9Ito4gZFC" />
                      <input type="hidden" name="mode" value="payment" />
                      <button className="bg-blue text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
                  </form>
              </div>
          </div>
      </div>

      <div class="col-auto lg:col-span-3 lg:pr-5 lg:pt-10 pb-10 order-1 lg:order-2 " >
        <h1 class="text-5xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-4xl md:text-right lg:text-4xl xl:text-5xl lg:text-right pb-10">
            <span class="block xl:inline">Women's Hypertrophy Program</span>
        </h1>
        <div class="space-y-5 text-center md:text-left lg:text-left text-lg">
            <p class="text-gray-500 xl:text-3xl md:text-xl text-xltext-semibold">
                At ELC, the training program for women is meticulously designed to cater to the unique fitness needs and goals of women. 
            </p>
            
            <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
              Our approach to training goes beyond aesthetics; understanding the importance of empowering women through fitness. Each workout is thoughtfully crafted to challenge and inspire, fostering confidence and self-assurance both inside and outside the gym. By providing a supportive and motivating environment.
            </p>
          
            <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
              In addition to physical transformation, the training program emphasizes holistic wellness. I believe in nurturing a positive relationship with exercise and nutrition, promoting habits that contribute to long-term health and happiness. Through personalized coaching, nutritional guidance, and lifestyle support, you can make sustainable changes that extend far beyond the gym, fostering a balanced and fulfilling lifestyle.
            </p>
            <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
              Whether you're a beginner looking to kickstart your fitness journey or a seasoned athlete striving for new heights, the training program for women offers a comprehensive and personalized approach to help you reach your goals. 
            </p>
            <p class="text-gray-500 xl:text-3xl md:text-xl text-xl font-semibold">
            If you have any questions or concerns regarding the women's training program, feel free to contact me. I'm here to support you on your fitness journey!
            </p>
        </div>
    </div>
  </div>

    <div class="grid-flow-col lg:grid lg:grid-cols-5 lg:gap-4 lg:px-10 lg:pt-8 md:grid md:grid-cols-2 md:gap-4 md:px-10 md:pt-5 text-white mb-32" id='diet'>
        <div class="col-auto lg:col-span-3 lg:pr-5 lg:pt-10 pb-10">
          <h1 class="text-5xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-4xl md:text-left lg:text-4xl xl:text-5xl lg:text-left pb-10">
            <span class="block xl:inline" >Nutrional Plan / Guidance  </span>
          </h1>
          <div class="space-y-5 text-center md:text-left lg:text-left text-lg">
          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl ">
            ELC offers a personalized nutrition program tailored to your specific goals, needs, and lifestyle.
          </p>

          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            Our nutrition program provides you with a customized meal plan meticulously designed to help you achieve your fitness objectives. Whether you're aiming to lose weight, build muscle, or improve overall health, we tailor your meals to suit your preferences, dietary restrictions, and lifestyle, ensuring optimal results.
          </p>

          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            With ELC's nutrition program, you'll not only receive a meal plan but also gain valuable knowledge about healthy eating habits. Learn how to make informed food choices, decipher nutrition labels, and understand the importance of balanced nutrition for sustained wellness. We empower you with the tools and understanding needed to make smart decisions about your diet, both at home and when dining out.
          </p>

          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl">
            Our nutrition coaching goes beyond just prescribing meals; it's about equipping you with the skills and confidence to make lasting changes to your eating habits. By learning the fundamentals of nutrition and adopting healthier behaviors, you'll not only achieve your short-term goals but also lay the foundation for lifelong wellness.
          </p>

          <p class="text-gray-500 xl:text-3xl md:text-xl text-xl font-semibold">
            Ready to transform your relationship with food and reach your nutritional goals? Contact us today to start your personalized nutrition journey with ELC.
          </p>
          </div>
        </div>
        <div class="col-auto lg:col-span-2 mx-auto w-full lg:w-full lg:pl-10">
          <div class="col-auto rounded-sm bg-gray-100 shadow-md px-10 border-4 border-black hover:border-gray-300">
            <div class="flex justify-center self-center items-center -mx-10">
              <img class="object-cover rounded-t-sm w-full h-full object-center" src={Program6} alt="Photo of coaching service 1"></img>
            </div>
            <div class="col-auto mt-8 pb-3 -mx-5">
              <div class="grid-flow-col grid grid-cols-4">
                <div class="col-span-3">
                  <h1 class="text-white lg:text-3xl md:text-3xl text-2xl font-semibold text-left pb-1">
                    Nutrional Plan / Guidance
                  </h1>
                </div>
                <div class="col-auto text-center mt-1">
                  <p class="text-right text-gray-500 font-bold text-xl">
                    Price: $29.99
                  </p>
                </div>
              </div>
              <ul class="custom-bullet list-inside leading-relaxed m-4 font-[georgia] text-2xl">
                <li>
                  <span class='font-bold'>Personalized Nutrition Plan: </span> Tailored to your unique needs, our nutrition program provides a customized meal plan designed to help you achieve your fitness goals.
                </li>
              </ul>
              <form action="./api/stripe/create-checkout-session" method="POST">
                <input type="hidden" name="price_id" value="price_1OhlD5JYXhvyfXz9c7Xdi9Mb" />
                <input type="hidden" name="mode" value="payment" />
                <button className="bg-lightred text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 mt-2"> Purchase</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}  

export default Programs;