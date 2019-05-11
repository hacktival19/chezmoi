import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';

export const Rating = ({rating, ...restProps}) => {
  const content = [];
  const floor = Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      if (floor !==  rating && i === floor) {
        content.push(<StarHalfIcon key={i} {...restProps}/>)
      } else {
        content.push(<StarIcon key={i} {...restProps}/>)
      }
    } else {
      content.push(<StarBorderIcon key={i} {...restProps}/>)
    }
  }
  return content;
}
