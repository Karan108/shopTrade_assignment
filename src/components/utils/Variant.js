import React from 'react'
import cleanSize from './cleanSize'
import './Variant.css'
function Variant({ text, handleSizeClick }) {

    return (
        <div className="variant" onClick={handleSizeClick()}>
            <p>{cleanSize(text)}</p>
        </div>
    )
}

export default Variant
