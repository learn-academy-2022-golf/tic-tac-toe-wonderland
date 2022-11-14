import React from "react";

const Square = (props) => {
  const handleClick = () => {
    props.gamePlay(props.index);
    console.log(props.index)
  };

  return (
    <div className="square" onClick={handleClick}>
      {" "}
      {props.value}
    </div>
  );
};
export default Square;
