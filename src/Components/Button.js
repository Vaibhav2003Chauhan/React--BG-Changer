import React from 'react'

export default function Button(props) {
    return (
        <button onClick={() => props.updateColor(props.colorName)} className='btn'>{props.colorName}</button>
    )
}
