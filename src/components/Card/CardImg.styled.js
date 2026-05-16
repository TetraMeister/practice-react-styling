import styled, { css } from "styled-components";

const StyledCardImg = styled.img`
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
    flex-shrink: 0;
    width: 100%;
    vertical-align: middle;
    border-style: none;
    overflow-clip-margin: content-box;
    overflow: clip;
`
export {StyledCardImg}