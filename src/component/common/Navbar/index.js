import React, { useState } from "react";

const Navbar = ({toggleIcon}) => {

  const myData = [
    {
      id:0,
      imgIcon:'https://img.icons8.com/external-jumpicon-line-ayub-irawan/2x/external-hamburger-basic-ui-jumpicon-line-jumpicon-line-ayub-irawan.png',
    }
  ]
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
          {myData.map(({id, imgIcon}) =>{
            return(
              <img key={id} src={imgIcon} className="img-fluid w-50 ml-3" onClick={toggleIcon} alt="pic" />
            )
          })}
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
