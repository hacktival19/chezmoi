import React from 'react';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';

export const PriceIndicator = ({price, ...restProps}) => {
  const priceContent = [];
  for (let i = 0; i < price; i++) {
    priceContent.push(<MoneyIcon key={i} {...restProps}/>);
  }
  return priceContent.length ? priceContent : <MoneyOffIcon {...restProps}/>;
};