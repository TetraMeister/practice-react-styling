import React, {useState} from "react";
import { StyledTab } from "./Tab.styled";

const Tab = (props) => {
  const {onActive, $isActive} = props;

  return (
    <StyledTab href='#' onClick={(el) => {
      el.preventDefault();
      onActive({
        id: props.id,
        p: props.children
      })
    }} disabled={props.disabled} $isActive={$isActive}>{props.title}</StyledTab>
  )
}

export default Tab