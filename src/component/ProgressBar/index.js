import React,{useState} from "react";
import pikachu from "../../assests/images/pikachu.png"

const ProgressBar=()=>{

    const[state,setState]=useState(10);
    const Add=()=>{
        setState(state+10);
    }
    const Minus=()=>{
        setState(state-10);
    }
    return(
        <>
<div className="container">

<div className="d-flex">
<div style={{width:`${state}%`,padding:'20px',background:"red"}}></div>
<div>   <img src={pikachu} alt="img" style={{width:"20%",height:"50%"}}/></div>
</div>
<button type="button" class="btn btn-success me-4 my-3" onClick={Add}>add</button>
<button type="button" class="btn btn-danger my-3" onClick={Minus}>minus</button>
</div>
        </>
    )
}
export default ProgressBar;


