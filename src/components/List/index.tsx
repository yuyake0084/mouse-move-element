import type { MouseEvent } from 'react';
import styled from '@emotion/styled';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { ImgBox, List as _List } from './styles';

type Props = {
  isShow: boolean;
  onMouseEnter: (e: MouseEvent<HTMLElement>, id: string) => void;
  onMouseLeave: (e: MouseEvent<HTMLElement>) => void;
};

export const List = ({ isShow, onMouseEnter, onMouseLeave }: Props) => {
  const data = [
    'BigBuckBunny',
    'ElephantsDream',
    'ForBiggerBlazes',
    'ForBiggerEscapes',
    'ForBiggerFun',
    'ForBiggerJoyrides',
    'ForBiggerMeltdowns',
    'Sintel',
    'SubaruOutbackOnStreetAndDirt',
    'TearsOfSteel',
  ];

  return (
    <_List>
      {data.map((id, idx) => (
        <li key={idx}>
          <ImgBox>
            <Image
              src="https://images-na.ssl-images-amazon.com/images/I/81MPmZwRf8L.jpg"
              width="340"
              height="499"
              alt="BATMAN"
              onMouseEnter={(e) => {
                onMouseEnter(e, id);
              }}
              onMouseLeave={(e) => {
                if (isShow) {
                  onMouseLeave(e);
                }
              }}
            />
          </ImgBox>
        </li>
      ))}
    </_List>
  );
};
