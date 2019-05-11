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

export const HistoryView = () => {
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
      {value === 0 && <TabContainer><FoodEventList/></TabContainer>}
      {value === 1 && <TabContainer><FoodEventList/></TabContainer>}
    </div>
  );
}