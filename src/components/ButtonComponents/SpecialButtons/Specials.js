import React from "react";
//import any components needed
import { specials } from "../../../data";
//Import your array data to from the provided data file
import SpecialButton from "./SpecialButton";

// import styled from "styled-components";

// const Test = styled.button `

// `




const Specials = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {specials.map(specData => {
        return <SpecialButton key={specData} specs={specData} specIt={props.specIt}/>
      })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;