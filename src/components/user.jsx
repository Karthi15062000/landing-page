import React from 'react'

const User = (props) => {
  return (
    <div className='' >
      <img src={props.img} alt={props.name} />
      <p className='h6 mt-3'>{props.name}</p>
      <div className='d-flex justify-content-center'>

        <p className='user-role text-center'>{props.role}</p>
      </div>
    </div>
  )
}

export default User
