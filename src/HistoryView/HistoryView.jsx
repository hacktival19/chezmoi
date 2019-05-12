import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {FoodEventList} from './FoodEventList';

function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary,
  },
  tab: {
    flexGrow: 1,
  }
}));

export const HistoryView = ({hostedEvents, visitedEvents}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
        <Tabs value={value} onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant={null}>
          <Tab label="Visited" className={classes.tab}/>
          <Tab label="Hosted" className={classes.tab}/>
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><FoodEventList foodEvents={visitedEvents}/></TabContainer>}
      {value === 1 && <TabContainer><FoodEventList foodEvents={hostedEvents} /></TabContainer>}
    </div>
  );
}

HistoryView.defaultProps={
  hostedEvents: [
    {title: 'Pizza Funghi', price: 2, tags: ['vegetarian'], userRating: 5, foodRating: 2, image: 'https://cdn.pixabay.com/photo/2017/09/30/15/10/pizza-2802332_960_720.jpg' },
    {title: 'Brokkoli Soup', price: 0, tags: ['glutenFree'], userRating: 0, foodRating: 2.2, image: 'https://cdn.pixabay.com/photo/2014/12/16/23/45/soup-570922_960_720.jpg'},
    {title: 'Chocolate Cake', price: 3, tags: ['vegan', 'glutenFree'], userRating: 2.2, foodRating: 5. , image: 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg'},
    {title: 'Cheese Burger', price: 2, tags: ['vegan'], userRating: 5, foodRating: 2, image: 'https://cdn.pixabay.com/photo/2015/07/01/07/06/burger-827309_960_720.jpg'},
  ],
  visitedEvents: [
    {title: 'Pad Thai', price: 5, tags: ['vegan'], userRating: 5, foodRating: 5, image: 'https://cdn.pixabay.com/photo/2017/06/19/14/15/pad-2419459_960_720.jpg'},
    {title: 'Maultaschen', price: 2, tags: [''], userRating: 5, foodRating: 2, image: 'https://cdn.pixabay.com/photo/2013/01/08/01/20/broth-74274_960_720.jpg'},
    {title: 'Hamburger', price: 4, tags: ['vegan'], userRating: 5, foodRating: 4.5, image: 'https://cdn.pixabay.com/photo/2015/07/01/07/06/burger-827310_960_720.jpg'},
    
  ]
}