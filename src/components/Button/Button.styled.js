import styled, { css } from 'styled-components';

const sizes = {
  sm: css`
    padding: 4px 8px;
    font-size: 0.875rem;
    border-radius: 4px;
  `,
  lg: css`
    padding: 8px 16px;
    font-size: 1.25rem;
    border-radius: 6px;
  `,
}

const DefaultStyledButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  ${({$size}) => sizes[$size]};
  &:disabled {
    opacity: 0.65;
    cursor: default;
    pointer-events: none;
  }
`

const StyledButton = styled(DefaultStyledButton)(({$variant, theme}) => $variant && theme[$variant])

export {StyledButton}