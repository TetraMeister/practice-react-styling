import React from "react";
import { StyledCard } from "./Card.styled";

const Card = ({ style, children }) => {
  return <StyledCard style={style}>{children}</StyledCard>
}

export default Card