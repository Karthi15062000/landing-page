import React from 'react'
import logo from "../../assets/images/logo.png"
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsPrinter } from "react-icons/bs";

const footer = () => {
    return (
        <div className='container'>
            <img src={logo} alt="" className='mt-5 mb-3 ' />
            <p className='text-muted  text-lg-start'> "Introducing the <span className='upmoney' style={{ fontWeight: "700" }}>UPMONEY</span> app, the ultimate tool for managing your credit card on-the-go. With our app, you can view your account information, make payments, redeem rewards, and more, all from your smartphone or tablet.</p>

            <div className="row  mt-4 pt-lg-0 pt-3 ">

                <div className=' d-flex col-lg-3 col-12 '>
                    <CiPhone size={"1.5rem"} className='me-2 text-muted' />
                    <div>
                        <p className='text-muted m-0'>Tel</p>
                        <p className=' fw-bold'>310-437-2766</p>
                    </div>
                </div>

                <div className=' d-flex col-lg-3 col-12 '>
                    <CiMail size={"1.5rem"} className='me-2 text-muted' />
                    <div>
                        <p className='text-muted  m-0'>Mail</p>
                        <p className=' fw-bold'>unreal@outlook.com</p>
                    </div>
                </div>
                <div className=' d-flex col-lg-3 col-12'>
                    <CiLocationOn size={"1.5rem"} className='me-2 text-muted' />
                    <div>
                        <p className='text-muted  m-0'>Address</p>
                        <p className=' fw-bold'>706 Campfire Ave. Meriden, CT 06450</p>
                    </div>
                </div>
                <div className='d-flex col-lg-3 col-12'>
                    <BsPrinter size={"1.5rem"} className='me-2 text-muted' />
                    <div>
                        <p className='text-muted  m-0'>Fax</p>
                        <p className='fw-bold'>+1-000-0000</p>
                    </div>
                </div>
            </div>


            <div className='row my-4  ' style={{ cursor:"pointer" , borderBottom: "1px solid gray" }}>
                <div className='col-6 col-lg-2 mb-3 fontsize'>
                    <p className='h6 pb-1  fw-bold'>About</p>
                    <p className='text-muted'>About us</p>
                    <p className='text-muted'>Blog</p>
                    <p className='text-muted'>Careers</p>
                    <p className='text-muted'>Jobs</p>
                    <p className='text-muted'>In press</p>
                </div>

                <div className='col-6 col-lg-2 mb-3 fontsize'>
                    <p className='h6 pb-1  fw-bold'>Support</p>
                    <p className='text-muted'>Contact us</p>
                    <p className='text-muted'>Online Chat</p>
                    <p className='text-muted'>Whatsapp</p>
                    <p className='text-muted'>Telegram</p>
                    <p className='text-muted'>Ticketing</p>
                </div>

                <div className='col-6 col-lg-2 mb-3 fontsize'>
                    <p className='h6 pb-1 fw-bold'>FAQ</p>
                    <p className='text-muted'>Account</p>
                    <p className='text-muted'>Deliveries</p>
                    <p className='text-muted'>Orders</p>
                    <p className='text-muted'>Payments</p>
                    <p className='text-muted'>Returns</p>
                </div>

                <div className='col-6 col-lg-2 mb-3 fontsize'>
                    <p className='h6 pb-1 fw-bold'>About</p>
                    <p className='text-muted'>About us</p>
                    <p className='text-muted'>Blog</p>
                    <p className='text-muted'>Careers</p>
                    <p className='text-muted'>Jobs</p>
                    <p className='text-muted'>In press</p>
                </div>

                <div className='col-6 col-lg-2 mb-3 fontsize'>
                    <p className='h6 pb-1 fw-bold'>Support</p>
                    <p className='text-muted'>Contact us</p>
                    <p className='text-muted'>Online Chat</p>
                    <p className='text-muted'>Whatsapp</p>
                    <p className='text-muted'>Telegram</p>
                    <p className='text-muted'>Ticketing</p>
                </div>

                <div className='col-6 col-lg-2 mb-3 fontsize'>
                    <p className='h6 pb-1 fw-bold'>FAQ</p>
                    <p className='text-muted'>Account</p>
                    <p className='text-muted'>Deliveries</p>
                    <p className='text-muted'>Orders</p>
                    <p className='text-muted'>Payments</p>
                    <p className='text-muted'>Returns</p>
                </div>
            </div>

            <div className='row fontsize pb-3 ms-2 ms-lg-0'>
                    <p className='px-lg-0 px-3 col-6 col-lg' >About us</p>
                    <p className='px-lg-0 px-3 col-6 col-lg' >Contact</p>
                    <p className='px-lg-0 px-3 col-6 col-lg' >Privacy policy</p>
                    <p className='px-lg-0 px-3 col-6 col-lg' >Sitemap</p>
                    <p className='px-lg-0 px-3 col-6 col-lg' >Terms of Use</p>
                

                <div className="col-lg-3"></div>


                <p style={{ fontSize: "14px" }} className=' text-center text-muted col-lg-3 '>© 2000-2021, All Rights Reserved</p>

            </div>


        </div>

    )
}

export default footer
