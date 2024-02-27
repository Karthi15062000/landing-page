import React from 'react'
import mainImg from "../../assets/images/1.png"
import Input from '../../components/input'
import Header from '../../container/header/header'

const Main = () => {
    return (
        <>
         

            <div className='container mt-5' >
                <div className='row'>
                    <div className='col-12 col-lg-7 mt-lg-3 '>
                        
                        <p className=" header-content lh-base col-12 col-lg-12 mt-lg-4  " >Empower Your Purchasing Power with Our Credit Cards</p>

                        <p className=' text-muted col-12 col-lg-9' style={{ lineHeight: "27px" }}> With a wide range of credit cards to choose from, you're sure to find the one that fits your lifestyle. From travel rewards to cash back, there's something for everyone.</p>

                        <Input />

                        <div className='col-lg-10  row mt-4 goals'>
                            <p className='col-3 goals-content m-lg-0 col-lg-2 h2'>5000</p>
                            <p className=' goals-content  col-3 col-lg-2 text-muted m-lg-0'>cards delivered</p>
                            <p className=' goals-content m-lg-0 col-3 col-lg-2 h2'>$1M+</p>
                            <p className=' m-lg-0 goals-content  col-3 col-lg-2  text-muted'>Transaction completed</p>
                            <p className=' m-lg-0  goals-content  col-3 col-lg-2 h2'>230+</p>
                            <p className=' m-lg-0  goals-content  col-3 col-lg-2  text-muted '>Happy customers</p>
                        </div>
                    </div>

                    <div className='col-12 col-lg-5'>
                        <img className='img-fluid' src={mainImg} alt="image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
