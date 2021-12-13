import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Wrapper, Box, Title } from './styles';

export type Props = {
  isShow: boolean;
  x: number;
  y: number;
  movie?: string | null;
  title?: string | null;
};

export const MoveElement = (props: Props) => {
  const { isShow, x, y } = props;

  console.log(props.movie);

  return (
    <Wrapper {...{ isShow, x, y }}>
      {props.movie ? (
        <video src={props.movie} autoPlay muted />
      ) : (
        <Image
          src="https://theriver.jp/wp-content/uploads/2020/08/maxresdefault-5-1200x675.jpg"
          width="1200"
          height="675"
          alt="hoge"
        />
      )}
      <Box>
        <Title>{props.title}</Title>
      </Box>
    </Wrapper>
  );
};
