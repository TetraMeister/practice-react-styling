import React from 'react';

import { StyledAlert } from './Alert.styled';
import { css, ThemeProvider } from 'styled-components';

// Docelowo themeSettings umieściłbym w innym dir i importował

const themeSettings = {
    primary: css`
        background-color: #dbeafe;
        border-color: #93c5fd;
        color: #1e40af;
        em {
            color: #1d4ed8;
        }
    `,
    secondary: css`
        background-color: #fef9c3;
        border-color: #fde047;
        color: #854d0e;
        em {
            color: #a16207;
        }
    `,
}

const Alert = props => {
    return (
        <ThemeProvider theme={themeSettings}>
            <StyledAlert variant={props.variant}>{props.children}</StyledAlert>
        </ThemeProvider>
    );
}

export default Alert;