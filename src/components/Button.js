
import React from "react";

import React from 'react'


const Button = (props) => {
  return (
    <>

      <button
        className="button"
        onClick={() => {
          props.refresh();
        }}
      >
        Restart
      </button>
    </>
  );
};

export default Button;

    <button className="button" onClick= {() => {props.refresh()}}>Restart</button>
    </>
  )
}

export default Button

