import styled, {css} from 'styled-components';

const activeStyle = css`
  color: #6c757d;
  pointer-events: none;
  cursor: default;
`

const StyledBreadcrumbItem = styled.li`
  a {
    ${({active}) => active && activeStyle}
  }
`

export {StyledBreadcrumbItem}