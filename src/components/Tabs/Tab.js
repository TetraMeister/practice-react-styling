import React from "react";
import { StyledTab } from "./Tab.styled";

const Tab = (props) => {
  const {onActive} = props;

  return (
    <StyledTab href={`/${props.eventKey}`} onClick={(el) => {
      el.preventDefault();
      onActive(props.children)
    }} disabled={props.disabled}>{props.title}</StyledTab>
  )
}

export default Tab