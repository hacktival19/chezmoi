import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import {PriceIndicator} from '../PriceIndicator';
import {Rating} from '../Rating';
import React from 'react';

const useStyles = makeStyles(theme => ({
  icons: {
    height: '14px',
    fontSize: '14px !important;',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const FoodEventList = ({foodEvents}) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {foodEvents.map((foodEvent)=> {
        return <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={foodEvent.image} />
          </ListItemAvatar>
          <ListItemText
            primary={foodEvent.title}
            secondary={
              <div className={classes.inner}>
                <Rating rating={foodEvent.foodRating} classes={{fontSizeSmall: classes.icons}} fontSize={'small'}/>
                -
                <PriceIndicator price={foodEvent.price} classes={{fontSizeSmall: classes.icons}} fontSize={'small'}/>
              </div>
            }
          />
        </ListItem>
      })}
    </List>
  );
}

FoodEventList.defaultProps = {
  foodEvents: [
    {title: 'First test', price: 2, tags: ['vegan'], userRating: 5, foodRating: 2, image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'Free  meal', price: 0, tags: ['glutenFree'], userRating: 0, foodRating: 2.2, image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'Fancy meal', price: 3, tags: ['vegan', 'glutenFree'], userRating: 2.2, foodRating: 5. , image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'First test', price: 2, tags: ['vegan'], userRating: 5, foodRating: 2, image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'Free  meal', price: 0, tags: ['glutenFree'], userRating: 0, foodRating: 2.2, image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'Fancy meal', price: 3, tags: ['vegan', 'glutenFree'], userRating: 2.2, foodRating: 5. , image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'First test', price: 2, tags: ['vegan'], userRating: 5, foodRating: 2, image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'Free  meal', price: 0, tags: ['glutenFree'], userRating: 0, foodRating: 2.2, image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'Fancy meal', price: 3, tags: ['vegan', 'glutenFree'], userRating: 2.2, foodRating: 5. , image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'First test', price: 2, tags: ['vegan'], userRating: 5, foodRating: 2, image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'Free  meal', price: 0, tags: ['glutenFree'], userRating: 0, foodRating: 2.2, image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
    {title: 'Fancy meal', price: 3, tags: ['vegan', 'glutenFree'], userRating: 2.2, foodRating: 5. , image: 'https://steamuserimages-a.akamaihd.net/ugc/955215867817475423/A1831655542F60F46EF4BC035D25C3632CCFDE46/'},
  ]
}