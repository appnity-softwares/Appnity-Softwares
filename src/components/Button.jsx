import React from 'react'

const Button = (props) => {
    

  return (
    <div>
      <button
          className="px-5 py-2 bg-[#5c5c5c] text-white rounded-full flex items-center gap-2 hover:bg-black transition"
 
        >
         <i className={props.icon}></i> {props.name}
        </button>
    </div>
  )
}

export default Button
