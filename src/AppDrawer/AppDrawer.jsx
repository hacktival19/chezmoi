import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SignOutIcon from '@material-ui/icons/ExitToApp';
import HistoryIcon from '@material-ui/icons/History';
import DiningIcon from '@material-ui/icons/LocalDining';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

function pickIcons(context) {
  switch (context) {
    case "Dining":
      return <DiningIcon />;
    case "History":
      return <HistoryIcon />;
    case "Settings":
      return <SettingsIcon />;
    default:
      return <DiningIcon />;

  }
}

export const AppDrawer = (selectEvent) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
        <List>
          {['Dining', 'History', 'Settings'].map((text, index) => (
            <ListItem button key={text}
            component={Link} to={'/'+text.toLowerCase()}>
              <ListItemIcon>
                {
                  pickIcons(text)
                }</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {['Logout'].map((text, index) => (
            <ListItem button key={text}
            component={Link} to="/login"
              >
              <ListItemIcon>
                <SignOutIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </div>
  );
};
