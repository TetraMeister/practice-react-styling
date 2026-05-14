import React from "react";
import { StyledTab } from "./Tab.styled";

const Tab = (props) => {
  return (
    <StyledTab>{props.title}</StyledTab>
  )
}

export default Tab