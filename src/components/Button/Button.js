import React from 'react';

import { css, ThemeProvider } from 'styled-components';

import { StyledButton } from './Button.styled';

const themeSettings = {
  primary: css`
    background-color: #0d6efd;
    border-color: #0d6efd;
    color: #fff;
    &:hover { background-color: #0b5ed7; border-color: #0a58ca; }
  `,
  secondary: css`
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
    &:hover { background-color: #5c636a; border-color: #565e64; }
  `,
}

const Button = ({
  children, variant, size, active, disabled
}) => {
  return (
    <ThemeProvider theme={themeSettings}>
      <StyledButton $variant={variant} $size={size} disabled={disabled} $active={active}>{children}</StyledButton>
    </ThemeProvider>
  )
}

export default Button