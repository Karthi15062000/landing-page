import React from 'react'
import sectionOneImg from "../../assets/images/Image.png"
import Content from '../../components/content'

const FirstContainer = () => {
    return (
        <div className=" section-one mt-5 container">
            <div className="row ">
                
                <div className=' col-lg-6 col-12 d-flex align-items-center '   >
                    <Content />
                </div>
                    <img className='col-lg-6 col-12 mt-5' src={sectionOneImg} alt="" />
            </div>
        </div>
    )
}

export default FirstContainer
