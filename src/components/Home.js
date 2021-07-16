import React from 'react'
import Cards from './Cards'
import Nav from "./Nav"


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

function Home() {
    return (
        <div>
            <Cards hex = {hex} />
            {/* <h1>Hello World!</h1>
            <Cards name="aman" bin={hex}/> 
            <Nav name={name} />
            <div style={
                {backgroundColor: "red", 
                color: "white", 
                height:"100px", 
                width: "50%",
                padding: "40px",
                border: "3px solid green",
                borderRadius: "25px",
                verticalAlign: "middle"
                }
                }>
                <p>This is paragraph which is supposed to be styled</p>
            </div>
            <footer>this is footer</footer> */}
        </div>
    )
}

export default Home
