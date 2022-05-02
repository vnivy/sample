import React, { useEffect } from "react";
import "./style.scss";
import { useState } from "react";


const Sidenavbar = ({ toggle, state }) => {
  const [click, setClick] = useState(false);

  const myClick = () => {
    setClick(!click);
  };

  useEffect(() =>{
    if(state >= 2){
      setClick(false)
    }
  }, [state])

  console.log(state,'nivy')
  

  const List = [
    {
      id: 0,
      title: "pet",
      isRight:"+",
      isDown:"-",
      category: [
        {
          id: 0,
          pet: "dog",
       
        },
        {
          id: 1,
          pet: "cat",
          
        },
        {
          id: 2,
          pet: "fish",
        },
      ],
    },
    {
      id: 1,
      title: "food",
    },
    {
      id: 2,
      title: "medic",
    },
  ];
  return (
    <>
    {!toggle ? 
    <div className="sidebar">
      {List.map((item, index) => {
            console.log(List,'tttrt')
            return (
              <React.Fragment>
                <div className="py-1">
                  <div className="d-flex justify-content-between">
                  <div>
                  <a key={index}>
                    {item.title}
                  </a>
                  </div>
                  <div className="pe-3" onClick={myClick} style={{transform:"translateY(15px)"}}>
                    {!click ? item.isRight : item.isDown}

                  </div>
                  </div>
                </div>
                {click ? (
                  <>
                    {item?.category?.map((items, index) => {
                      return (
                        <div   key={index} className="py-1">
                          <a>{items.pet}</a>
                        </div>
                      );
                    })}
                  </>
                ) : null}
              </React.Fragment>
            );
          })}
    </div> : null}
    </>
    
  );
};
export default Sidenavbar;
