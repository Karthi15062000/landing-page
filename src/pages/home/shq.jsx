import React from 'react'
import user1 from "../../assets/images/user1.png"
import user2 from "../../assets/images/user2.png"
import user3 from "../../assets/images/user3.png"
import Button from '../../components/button'


const Shq = () => {


    const btnName = "Get in touch"
    return (
        <div className='container shq-wrapper py-4 text-center' style={{marginBottom:"100px"}}>


            <div className='pt-5 pb-4 d-flex justify-content-center'>
                <div className='position-relative d-flex gap-4'>
                    <img className='img1' src={user1} alt="" />
                    <img className='img2' src={user2} alt="" />
                    <img className='img3' src={user3} alt="" />
                </div>
            </div>


            <p className='h5 pb-2 fw-bold'>
                Still have questions?
            </p>

            <p className='text-muted pb-3 '>
                Can’t find the answer you’re looking for? Please chat to our friendly team.
            </p>

           <Button btnName = {btnName} />



        </div>
    )
}

export default Shq
