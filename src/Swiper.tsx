import { SelectionAction, SwipeDirection } from './types';

import { DualSwiper } from './components/DualSwiper/DualSwiper';
import React from 'react';
import { TestingBox } from './Swiper.styles';

export const Swiper = (): JSX.Element => {
  const itemSelected = (side: SwipeDirection, action: SelectionAction) => {
    console.log(side, action);
  };
  return (
    <>
      <TestingBox>
        <DualSwiper itemSelected={itemSelected} leftContent={'Left node content'} rightContent={'Right node content'}>
          Let's place a trophy here.
        </DualSwiper>
      </TestingBox>
    </>
  );
};
