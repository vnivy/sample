import React, { useState } from "react";
import Themeswitcher from "./component/ThemeSwitcher/Themeswitcher";
import Reducer from "./component/Reducer/Reducer";
import ProgressBar from "./component/ProgressBar";
import Sidenavbar from "./component/common/Sidenavbar";
import Navbar from "./component/common/Navbar";
import NavPill from "./component/common/NavPill";
import Swiper from "./component/common/Swiper";
import Modal from "./component/common/Modal";
import useHover from "./component/EventListner";

export default function App({ contentLabel }) {
  const [toggle, setToggle] = useState(false);
  const [hoverRef, isHovered] = useHover();
  const [state, setState] = useState(0);

  const [modal, setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal);
  }
  

  const toggleIcon = () => {
    setToggle(!toggle);
    setState(state + 1);
  };

  

  return (
    <div className="container-fluid p-0">
      {/* <Themeswitcher/> */}
      {/* <ProgressBar/> */}
      {/* <Reducer/> */}

      <Navbar toggleIcon={toggleIcon} />
      <div className="row">
        <div className="col-md-4 ">
          <div>
            <Sidenavbar state={state} toggle={toggle} />
          </div>
        </div>
        <div className="col-md-8">
          <button className="btn btn-info" onClick={toggleModal}>amuku</button>
          {modal &&
          <Modal txt="po" />}
          {/* <NavPill/> */}
          {/* <Swiper/> */}

          {/* <div
      ref={hoverRef}
      style={{
        color: 'white',
        padding: '8rem',
        width: '12rem',
        textAlign: 'center',
        fontSize: '5rem',
        backgroundColor: isHovered ? '#00e3e3' : '#ccc'
      }}
    >
      {isHovered ? '😁' : '☹️'}
      </div>  */}
        </div>
      </div>
    </div>
  );
}
