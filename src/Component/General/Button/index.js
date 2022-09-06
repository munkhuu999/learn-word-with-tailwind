import React from 'react'

const Button = (props) => {
    return (
        <div className=' bg-blue-500 text-white rounded-l-xl'>{props.children}</div>
    )
}

export default Button