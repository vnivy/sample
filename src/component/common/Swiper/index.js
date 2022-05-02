// import React, {useState} from "react";


// const Swiper=()=>{
//     const[state,setState]=useState(10);
 
//     const Add=()=>{
//         setState(state + 1)
//     }
//     const Minus=()=>{
//         setState(state - 1)
//     }
 
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-4">
//                  <button onClick={Add}>+</button>
//                 </div>
//                 <div className="col-md-4">
//                     {state}
//                 </div>
//                 <div className="col-md-4">
//                 <button onClick={Minus}>-</button>
//                 </div>
//             </div>

//         </div>
//     )
// }
// export default Swiper





 import React, {useState,useEffect,useRef} from "react";
import "./style.scss"


const TOTAL_SLIDES = 3 // n-1 in Array

const Swiper = () => {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  
  const next = () => {
    if ( current >= TOTAL_SLIDES ) return
    else setCurrent(current + 1)
  }
  
  const prev = () => {
    if ( current === 0 ) return
    else setCurrent(current - 1)
  }
  
  const desired = e => {
    setCurrent(Number(e.target.id))
  }
  
  useEffect(() => {
    ref.current.style.transition = 'all 0.2s ease-in-out'
    ref.current.style.transform = `translateX(-${current}00%)`
  }, [current])
  
  return (
    <div className='wrapper'>
      <p>{current}</p>
      <div className='frame'>
        <div className='box-container' ref={ref}>
          <div className='box'>0</div>
          <div className='box'>1</div>
          <div className='box'>2</div>
          <div className='box'>3</div>
        </div>
      </div>
      <div className='button-container'>
        <div className='button' onClick={prev}>Left</div>
        <div className='button' onClick={next}>Right</div>
      </div>
      <div className='button-2-container'>
        {[0, 1, 2, 3].map(num => (
          <div
            className={`button-2 ${num === current && 'active'}`}
            onClick={desired}
            id={num}
            key={num}
          />
        ))}
      </div>
    </div>
  )
}

export default Swiper