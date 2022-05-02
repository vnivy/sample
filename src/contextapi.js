
import React, {useState, createContext} from 'react';
import Childone from './Childone';
// import Childtwo from './childtwo';
export const Passvalue = createContext();

const Contextapi = () =>{
const[state,setState]=useState(10)

  return(
    <div>
      <Passvalue.Provider value={{state,setState}}>
        <Childone/>
        {/* <Childtwo/> */}
      </Passvalue.Provider> 
       
    </div>  
  );
}

export default Contextapi;