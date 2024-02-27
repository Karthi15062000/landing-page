import React from 'react'
import Input from '../../components/input'
import Footer from "../../container/footer/footer"



const LastContainer = () => {


    const contactUs = ["Enter your mail", "Submit"]

    return (

        <div style={{ backgroundColor: "rgb(250,250,250)" }} className='pt-4 mt-5'>

            <div className='container last-container '>

                <div className=' d-flex last-input justify-content-between align-items-center'>

                    <div className='ps-3 col-lg-6 col-12'>
                        <p className='h6'>Newsletter</p>
                        <p className='m-0 ' style={{ color: "gray" }}>Be the first one to know  about discounts, offers and events</p>
                    </div>







                    <div className='col-lg-4 col-12'>
                        <Input contactUs={contactUs} />
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default LastContainer
