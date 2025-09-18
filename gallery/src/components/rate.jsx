import { useState } from "react";

function Rate({avisaCambio, index}) {

  const stars = [1, 2, 3, 4, 5];
  const [raeting, setRaiting] = useState(0)
  //     |->valor   |-> metodo para asignarle valor
  const califica=(star)=>{
    setRaiting(star)
    avisaCambio(index, star)
  }

  

  return (
    <>

      <div className="card">
        <div className="star">
          {stars.map((star, i) => (
            <span className={star<=raeting ? "active" : "inactive"} key={i}> <a onClick={()=>califica(star)}>{'\u2605'}</a></span> //
          ))}
        </div>
      </div>
    </>
  )
}

export default Rate
