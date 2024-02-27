import React from 'react'
import { MdCheckCircleOutline } from "react-icons/md";



const Content = ({ content }) => {
    return (
        <>
   <div className='col-lg-1'/>
        <div className='container '  >

            <p className='gradient-para'>Improve your worklife</p>


            {/* Using conditional rendering for dynamic content */}
            {!content ? <p className='h2 my-4' style={{ fontWeight: "900" }}
            >Track all your payments in one place</p> : <p className='h3 my-4' style={{ fontWeight: "600" }}

            >{content.header}</p>}
            {!content ? <p className='text-muted pe-5'>Our app provides real-time access to your account information, so you can stay on top of your spending and keep track of your rewards. </p> :
                <div className='row'>
                    <div className="d-flex col-12 col-md-6 ">
                        <span className='me-2'>
                            <MdCheckCircleOutline size={25} className='check' />
                        </span>
                        <p className=' text-muted'>{content.para1}</p>
                    </div>


                    <div className="d-flex col-12 col-md-6 ">
                        <span className='me-2'>
                            <MdCheckCircleOutline size={25} className='check' />
                        </span>
                        <p className='text-muted '>{content.para2}</p>
                    </div>
                </div>
            }
        </div>
        <div className='col-lg-1'/>



        </>
    )
}

export default Content
