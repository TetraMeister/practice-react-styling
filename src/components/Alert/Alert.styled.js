import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
    display: block;
    padding: 14px 20px;
    margin: 10px 0 10px 0;
    border-radius: 8px;
    border: 1px solid black;
    font-size: 15px;
    line-height: 1.5;
    em {
        font-weight: 700;
        text-decoration: underline;
    }
`

const StyledAlert = styled(DefaultStyledAlert)(props => props.variant && props.theme[props.variant])

export { StyledAlert };