import styled from '@emotion/styled';
import type { Props } from '.';

export const Wrapper = styled.section<Props>`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  color: #fff;
  width: 300px;
  pointer-events: none;
  background-color: #000;
  transition: opacity, transform 0.5s;
  overflow: hidden;
  border-radius: 8px;

  ${({ isShow }) => `
    opacity: ${isShow ? 1 : 0};
    transform: ${isShow ? 'scale(1.2)' : 'scale(1)'};
    visibility: ${isShow ? 'visible' : 'hidden'};
  `}
`;

export const Box = styled.div`
  padding: 20px;
`;

export const Title = styled.h1``;
