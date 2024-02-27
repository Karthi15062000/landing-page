import React from 'react'
import Content from '../../components/content'
import sectionTwoImg from "../../assets/images/Section2.png"


const SectionTwo = () => {

    const content = {
        header: "Redeeming rewards has never been easier",
        para1 : "You can also receive alerts and notifications",
        para2 : "Robust security features, multi-factor authentication and secure data storage"
    }


  return (
    <div className=" section-two mt-5 container">
            <div className="row ">
              
                    <img className='col-lg-6 col-12 mt-5 order-2 order-md-1' src={sectionTwoImg} alt="" />

                   <div className=' col-lg-6 col-12 d-flex align-items-center order-1 order-md-2'   >
                    <Content content = {content}/>
                </div>
            </div>
        </div>
  )
}

export default SectionTwo
