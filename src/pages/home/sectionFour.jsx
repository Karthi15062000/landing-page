import React from 'react'
import User from '../../components/user'

import avatar1 from "../../assets/images/avatar1.png"
import avatar2 from "../../assets/images/avatar2.png"
import avatar3 from "../../assets/images/avatar3.png"
import avatar4 from "../../assets/images/avatar4.png"
import avatar5 from "../../assets/images/avatar5.png"
import avatar6 from "../../assets/images/avatar6.png"
import avatar7 from "../../assets/images/avatar7.png"
import avatar8 from "../../assets/images/avatar8.png"



const SectionFour = () => {

    const users = [
        {
            id: 1,
            img: avatar1,
            name: "Olivia Rhye",
            role: "Founder & CEO"
        },
        {
            id: 2,
            img: avatar2,
            name: "Phoenix Baker",
            role: "Engineering Manager"
        },
        {
            id: 3,
            img: avatar3,
            name: "Lana Steiner",
            role: "Product Manager"
        },
        {
            id: 4,
            img: avatar4,
            name: "Demi Wilikinson",
            role: "Frontend Developer"
        },
        {
            id: 5,
            img: avatar5,
            name: "Candice Wu",
            role: "Backend Developer"
        },
        {
            id: 6,
            img: avatar6,
            name: "Natali Craig",
            role: "Product Designer"
        },
        {
            id: 7,
            img: avatar7,
            name: "Drew Cano",
            role: "UX Researcher"
        },
        {
            id: 8,
            img: avatar8,
            name: "Orlando Diggs",
            role: "Customer Success"
        }
    ]
    return (
        <div className='section-four container text-center'>

            <div className=" hiring-container ">
                <p className='hiring-text ' style={{marginTop:"50px"}}>We're hiring!</p>
                <p className='h2'style={{fontWeight:"700"}} >Meet our team</p>
                <p className='text-muted mt-3'>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</p>
            </div>
            

            <div className='row my-5'>
                {users.map((user, i) => {
                    return <div className='col-6 col-lg-3 text-center my-3'> <User key={i} img={user.img} name={user.name} role={user.role} /></div>
                })}
            </div>



    


        </div>
    )
}

export default SectionFour
