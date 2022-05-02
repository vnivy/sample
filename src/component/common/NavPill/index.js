import React, { useState } from "react";

const NavPill=()=>{
    const [pill, setpill] = useState(0);
 

    return(
        <div>
            <div  >
            <span style={{backgroundColor: pill === 0 ? "blue": null }} className="mx-5" onClick={() =>setpill(0)}>Cats</span>
            <span style={{backgroundColor: pill === 1 ? "pink": null }}className="mx-5" onClick={() =>setpill(1)}>Dogs</span>
            <span style={{backgroundColor: pill === 2 ? "yellow": null }}className="mx-5" onClick={() =>setpill(2)}>pig</span>
            </div>
            <div className="mt-5" >
                {pill === 0 && "poda panikuuty" } 
                {pill === 1 && <p className="justify-content-center">hi</p>}
                {pill === 2 && <p className="justify-content-center">hello</p>}
               
            </div>
        </div>
    )
}
export default NavPill;