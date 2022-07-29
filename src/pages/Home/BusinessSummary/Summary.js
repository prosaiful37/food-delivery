import React from 'react';
import CountUp from 'react-countup';
import { CakeIcon, CubeIcon, LightBulbIcon, UserIcon } from '@heroicons/react/solid';
import img1 from "../../../Images/subheader-2.jpg";

const Summary = () => {
    return (
        <div
         class="hero bg-scroll..."
        style={{
          background: `url(${img1})`,
        }}
      >
        <div class="hero-overlay bg-opacity-70 bg-secondary"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="hero-content text-center text-neutral-content">
            <div class="">
              <h1 class="mb-5 text-4xl font-bold text-white">Our success Story</h1>
              <h4 class="mb-5 font-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s</h4>
              <div className="grid grid-cols-1 lg:grid-cols-4 ">
               <CountUp start={0} end={24434} delay={0}>
                  {({ countUpRef }) => (
                  <div className="p-5 m-10">
                      
                      <UserIcon className=" h-20 w-auto mx-auto text-primary mb-5"/> 
                      <span className="text-7xl"  ref={countUpRef} />
                      <h2 className="font-sans font-bold">  <br />
                      Happy Customers
                      </h2> 
                  </div>
                  )}
              </CountUp>
               <CountUp start={0} end={65350} delay={0}>
                  {({ countUpRef }) => (
                  <div className="p-5 m-10">
                      
                      <CakeIcon className=" h-20 w-auto mx-auto text-primary mb-5"/> 
                      <span className="text-7xl"  ref={countUpRef} />
                      <h2 className="font-sans font-bold">  <br />
                      Pizzas Made
                      </h2> 
                  </div>
                  )}
              </CountUp>
               <CountUp start={0} end={4658} delay={0}>
                  {({ countUpRef }) => (
                  <div className="p-5 m-10">
                      
                      <CubeIcon className=" h-20 w-auto mx-auto text-primary mb-5"/> 
                      <span className="text-7xl"  ref={countUpRef} />
                      <h2 className="font-sans font-bold">  <br />
                      Cheese Rolls
                      </h2> 
                  </div>
                  )}
              </CountUp>
               <CountUp start={0} end={67599} delay={0}>
                  {({ countUpRef }) => (
                  <div className="p-5 m-10">
                      
                      <LightBulbIcon className=" h-20 w-auto mx-auto text-primary mb-5"/> 
                      <span className="text-7xl"  ref={countUpRef} />
                      <h2 className="font-sans font-bold">  <br />
                      Drinks Served
                      </h2> 
                  </div>
                  )}
              </CountUp>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default Summary;