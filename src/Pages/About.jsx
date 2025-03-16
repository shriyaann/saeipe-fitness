import React from 'react'

const About = () => {
  return (
    <div
    style={{
        display: "flex",
        justifyContent: "centre",
        alignItems: "centre",
        height: "100vh",
    }}
>
  <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
    <div className='flex flex-col gap-4'>
      <p className='text-sm md:text-base font-light'>Inspired by our own fitness journeys, we created this website to share the transformative power of exercise. We offer a variety of workouts and resources to help you discover your strength and resilience. Our goal is to motivate you to embrace a healthier lifestyle and unlock your full potential. We believe fitness is for everyone, and we are here to support you.</p>
    </div>
  </div>
</div>
  )
}

export default About;

