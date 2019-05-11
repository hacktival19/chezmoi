import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {MenuThingy} from './MenuThingy';
import SwipeableViews from 'react-swipeable-views';
import {Table} from '../Table';

import { DetailView } from './DetailView';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    background: 'blue',
    flexGrow: '0.2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
  menu: {
    background: 'red',
    maxHeight: '50px',
    width: '80%',
    minHeight: '50px',
    alignSelf: 'center',
    borderTopRightRadius: '9px',
    borderTopLeftRadius: '9px',
    padding: '9px',
  },
  slideContainer: {
    height: '100%',
  },
  slide: {
    minHeight: '986px'
  }
}));

export const Preview = ({price, tags, title, height}) => {
  const classes = useStyles();
  return (
    <SwipeableViews
      containerStyle={{height}}
      axis="y"
      resistance
      enableMouseEvents      
      slideStyle={{height}}
    >
      <div className={classes.root}>
        <div className={classes.title}>
          {title}
        </div>
        <Table/>
        <MenuThingy
          price={3}
          tags={['vegan']}
        />
      </div>
      <DetailView/>
    </SwipeableViews>

  );
}

Preview.defaultProps = {
  tags: [],
}

