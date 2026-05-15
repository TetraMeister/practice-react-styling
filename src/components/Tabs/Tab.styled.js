import styled, {css} from "styled-components";

const StyledTab = styled.a`
    display: block;
    padding: .5rem 1rem;
    margin-bottom: -1px;
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    color: #007bff;
    background-color: transparent;

    &:hover {
      border-color: #e9ecef #e9ecef transparent;
      text-decoration: none;
    }

  ${({disabled}) => disabled && css`
    pointer-events: none;
    cursor: default;
    color: #6c757d;
    background-color: transparent;
    border-color: transparent;
  `}

  ${({$isActive}) => $isActive && css`
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  `}
`

export {StyledTab}