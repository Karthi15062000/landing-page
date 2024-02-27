import React from 'react'
import sectionThreeImg from "../../assets/images/Section3.png"


const SectionThree = () => {
    return (
        <div className='section-three text-center'>
            <div className='container p-lg-5'>
                <div className='col-lg-p1'/>
                <p className=' col-12 col-lg-10 mx-auto my-4 pt-4 upmoney-para '> With <span className='upmoney text-uppercase'>upmoney</span> app, you'll never miss a beat when it comes to managing your credit card</p>
                <div className='col-lg-p11'/>
                <img className='w-100 mt-3' src={sectionThreeImg} alt="" />
            </div>
        </div>
    )
}

export default SectionThree
