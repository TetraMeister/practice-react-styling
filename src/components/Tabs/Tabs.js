import React from "react";
import { StyledTabs } from "./Tabs.styled";
import Tab from "./Tab";

const Tabs = (props) => {

  return (
    <StyledTabs>
      {props.children}
    </StyledTabs>
  )
}

export default Tabs