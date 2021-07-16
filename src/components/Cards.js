import React from 'react'
import Card from "./Card"

const getRandomNumber = (hex) => Math.floor(Math.random() * hex.length);

const randomizeColor = (hex) => {
    let hexValue = "#";
    for (let i = 0; i < 6; i++){
        hexValue += hex[getRandomNumber(hex)];
    } 
    return hexValue
}

function Cards(props) {

    let stackedCards = []
    for (let i = 0; i < 50; i++) {
        let hexValue = randomizeColor(props.hex)
        console.log(hexValue)
        stackedCards.push(<Card key={i} hexValue={hexValue}/>) 
    }
    
    return (
        <>

        <div className="cards-section">
            <h1>Randomized Colored Cards</h1>
            <h3>Flex cards with randomized colors</h3>
        </div>
        <div className="cards">
            {stackedCards}
        </div>
        </>
    )
}

export default Cards
