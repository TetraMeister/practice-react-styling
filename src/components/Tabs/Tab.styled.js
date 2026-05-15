import styled, {css} from "styled-components";

const StyledTab = styled.a`
  ${({disabled}) => disabled && css`
    pointer-events: none;
    cursor: default;
    color: #6c757d !important;
    background-color: transparent;
    border-color: transparent;
  `}
`

export {StyledTab}