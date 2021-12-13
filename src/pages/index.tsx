import type { NextPage } from 'next';
import { List } from '../components/List';

import { MoveElement } from '../components/MoveElement';
import { useMoveElement } from '../hooks/useMoveElement';

const Home: NextPage = () => {
  const { isShow, x, y, title, movie, onMouseEnter, onMouseLeave } =
    useMoveElement();
  const moveElementProps = {
    isShow,
    x,
    y,
    title,
    movie,
  };

  return (
    <>
      <List
        isShow={isShow}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <MoveElement {...moveElementProps} />
    </>
  );
};

export default Home;
