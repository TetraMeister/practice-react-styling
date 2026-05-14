import styled from 'styled-components';

const StyledBreadcrumb = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding: .75rem 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: .25rem;

  li + li {
    padding-left: .5rem
  }

  li + li::before {
    display: inline-block;
    padding-right: .5rem;
    color: #6c757d;
    content: "/";
  }
`

export {StyledBreadcrumb}