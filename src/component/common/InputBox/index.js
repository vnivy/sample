import React from "react";
import "./InputBox.css";

const InputBox = (props) => {
  let {
    placeholder = "",
    register = {},
    disabled,
    value = "",
    type = "text",
    name = "",
    maxlength = "",
    label = "",
    onChange,
    
  } = props;
  return (
    <>
      {label != "" && <label className="inputLabel">{label}</label>}
      <input
        name={name}
        placeholder={placeholder}
        className={"inputBoxStyle"}
        ref={register}
        disabled={disabled}
        defaultValue={value}
        type={type}
        maxlength={maxlength}
        onChange={onChange}
        value={value}
      />
    </>
  );
};
export default InputBox;
