import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {PriceIndicator} from '../PriceIndicator';
import {foodTags } from './constants';


const useStyles = makeStyles(theme => ({
  menu: {
    background: 'red',
    maxHeight: '50px',
    width: '80%',
    minHeight: '50px',
    alignSelf: 'center',
    borderTopRightRadius: '9px',
    borderTopLeftRadius: '9px',
    padding: '9px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

export const MenuThingy = ({price, tags}) => {
  const classes = useStyles();
  return (
    <div className={classes.menu}>
      <div>
        {tags.map((tag)=> (foodTags[tag]({key: tag})))}
      </div>
      <div>
        <PriceIndicator/>
      </div>
    </div>
  );
}

