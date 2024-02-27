import React from 'react'

const Button = ({contactUs,btnName,buttonStyles}) => {
  return (
    <button style={{right:"10px", backgroundColor : contactUs? "rgb(250,250,250)" : "black" ,color : contactUs ? "black" :"white"}} className={` py-2  px-3 rounded ${buttonStyles}, ${contactUs ? "btn-submit " : ""}`}>
        {contactUs ? contactUs[1] : btnName }

    </button>
  )
  
}

export default Button
