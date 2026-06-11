import React, { useState } from 'react'

const LikeCounter = () => {

    const [scount, setscount] = useState(0);
    // const [dcount, setdcount] = useState(0);
    // const

    const handleclick = () =>{

        setscount(scount + 1)
        // console.log("Count like :",scount)

    }

    const handlediclick = () => {
        setsount(scount + 1)
        // console.log("dislike ", dcount)
    }

    const handlereset = () => {

    }

  return (
    <div>
        <center>
       <p>Hello.. From Like Counter component ❤️</p>

       <p>count like : {scount}👍</p>

       <button onClick={handleclick}>Like</button>

       <br></br>
       <br></br>

       <p>count dislike : {scount}👎</p>


       <button onClick={handlediclick}>Dislike</button>

       <button onClick={handlereset}> Reset all likes</button>
       </center>


      
    </div>
  )
}

export default LikeCounter
