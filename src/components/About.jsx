import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Geomatics Engineer to-be</p>
            </div>
            <div>
              <p>I am a highly motivated and an aspiring geomatics engineering student. This field of study encompasses a wide range of topics including land surveying, remote sensing, geographic information systems (GIS), cartography, and more.
              I am passionate about geospatial technologies and specialize in creating webgis application softwares. I am exceling myself more in this field and would be happy to serve you.
              What would you do if you had a webgis expert available at your fingertips? 😁</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
