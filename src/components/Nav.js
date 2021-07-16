import React from 'react'

function Nav(props) {
    return (
        <div>
            <ul>
                <li>Apple</li>
                <li>Ball</li>
                <li>{props.name}</li>
            </ul>
        </div>
    )
}

export default Nav
