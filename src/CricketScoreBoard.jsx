import React, { useState } from 'react'

const CricketScoreBoard = () => {
    const [count, setcount] = useState(0);


    const handleclick = () => {
        setcount(count + 1)

    }
  return (
    <div>
        <center>
        <p>Hello.. from Crecket scoure counter</p>

        <p>count cricket score : {count}🏏</p>

        <button onClick={handleclick}>Cricket score counter</button>
        </center>
      
    </div>
  )
}

export default CricketScoreBoard
