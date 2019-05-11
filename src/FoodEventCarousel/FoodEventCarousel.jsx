import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import React, {useState} from 'react';
import {Preview} from '../Preview';
import ContainerDimensions from 'react-container-dimensions';


const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));


export const FoodEventCarousel = ({foodEvents}) => {
  const [index, setIndex] = useState(0);
  return (
    <ContainerDimensions>
      {({height})=>(
        <VirtualizeSwipeableViews
          containerStyle={{height}}
          slideCount={foodEvents.length}
          index={index}
          onChangeIndex={(index)=>{setIndex(index)}}
          slideRenderer={({index, key})=> {
            return <Preview height={height} key={key} {...foodEvents[index]}/>;
          }}
          enableMouseEvents
          height={height}
        />
      )}
    </ContainerDimensions>
  );
}

FoodEventCarousel.defaultProps = {
  foodEvents: [
    {title: 'First test', price: 2, tags: ['vegan']},
    {title: 'Free  meal', price: 0, tags: ['glutenFree']},
    {title: 'Fancy meal', price: 3, tags: ['vegan', 'glutenFree']},
  ]
}
