import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {MenuThingy} from './MenuThingy';
import SwipeableViews from 'react-swipeable-views';
import fork from '../static/media/fork.svg';
import knife from '../static/media/knife.svg';
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
  table: {
    background: 'green',
    flexGrow: '0.8',
    display: 'flex',
  },
  plate: {
    background: 'pink',
    flexGrow: 1,
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
      containerStyle={{height}}
      slideStyle={{height}}
    >
      <div className={classes.root}>
        <div className={classes.title}>
          {title}
        </div>
        <div className={classes.table}>
          <img src={fork} alt="" />
          <div className={classes.plate}>

          </div>
          <img src={knife} alt="" />
        </div>
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

