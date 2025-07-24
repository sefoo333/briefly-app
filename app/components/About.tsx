import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className="parent">
        <div className="flex justify-between  container w-full">
    <div className="image">
        <Image src={"/forabout.png"} alt='' width={500} height={300} className='rounded-xl' />
    </div>

    <div className="text basis-[60%]">
                <h2 className="text-4xl font-bold text-start mb-12">About Us</h2>
                <p className='leading-25'>
                   We Are Team briefly , we create smart , we create fun ! - The team goal is fix the problem of peoples in study 
                   and our team and we are have a full effective for your study
                </p>
    </div>
        </div>
    </div>
  )
}

export default About