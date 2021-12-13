import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px;

  > li {
    list-style: none;
    width: 15%;
    margin: 2%;
  }
`;

export const ImgBox = styled.div`
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  letter-spacing: 0;
  word-spacing: 0;
  font-size: 0;

  img {
    vertical-align: top;
  }
`;
