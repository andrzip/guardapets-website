import React from 'react';
import styled from 'styled-components';

export const DividerWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    line-height: 0;
`;

export const Svg = styled.svg`
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 70px;
`;

export const Path = styled.path`
    fill: ${props => props.color};
`;
