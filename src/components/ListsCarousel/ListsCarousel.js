import React, { useState } from 'react';
import SideSwipe from 'react-native-sideswipe';

import ListCard from '../ListCard/ListCard';
import { MainContainer, CardContainer } from './styles';
import { widthPercentage, normalize } from '~/helpers';

const contentOffset = widthPercentage(35) / 2;

const ListsCarousel = ({ lists }) => {
  return (
    <MainContainer>
      <SideSwipe
        itemWidth={widthPercentage(65)}
        style={{ width: widthPercentage(100) }}
        data={lists}
        contentOffset={contentOffset}
        renderItem={({
          itemIndex, currentIndex: carouselIndex, item, animatedValue,
        }) => {
          return (
            <CardContainer>
              <ListCard
                animatedStyle={{
                  transform: [
                    {
                      scale: animatedValue.interpolate({
                        inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
                        outputRange: [0.9, 1, 0.9],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                  opacity: animatedValue.interpolate({
                    inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
                    outputRange: [0.7, 1, 0.7],
                    extrapolate: 'clamp',
                  }),
                }}
                listTitle={item.name}
              />
            </CardContainer>
          );
        }}
      />
    </MainContainer>
  );
};

export default ListsCarousel;
