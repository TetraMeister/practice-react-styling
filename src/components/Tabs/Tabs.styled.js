import styled, {css} from "styled-components";

const StyledTabs = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

  a {
    display: block;
    padding: .5rem 1rem;
    margin-bottom: -1px;
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
  }
`

export {StyledTabs}