import React from 'react'

function Card(props) {
    console.log(typeof props.hexValue)
    const style = {
        backgroundColor: props.hexValue
    }
    return (
        <div className="card" style={style}>
            <h1>Thumbnail</h1>
            <p>This is card</p>

            
        </div>
    )
}

export default Card
