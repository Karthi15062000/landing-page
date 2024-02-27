import React from 'react'
import Button from "./button"


const btnName = "Get free card"


const Input = ({ contactUs}) => {
    return (

        
        <div className={!contactUs ? "p-2 input-border  my-4 mx-2 row col-12 col-lg-10 rounded position-relative" : "p-2  my-4 mx-2 row col-12 col-lg-10 rounded position-relative"} 
        
        
        
        style={{ height: "60px",backgroundColor : contactUs? "rgb(47,47,47)" : "rgb(250,250,250)",border : contactUs ? "none" : "1px solid gray"}} >

            

            <input type="text" placeholder={!contactUs ? "Enter email address" : "Enter your name"} className={!contactUs ? "col-12" : "input-two"} style={{ border: "none", outline: "none",backgroundColor : contactUs? "rgb(47,47,47)" : "rgb(250,250,250)"  }} /> 

            <Button contactUs={contactUs} btnName={btnName} buttonStyles={"btn-style position-absolute col-12 col-md-4 ms-5  "} />


        </div>
    )
}

export default Input
