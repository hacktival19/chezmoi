import { ListItemSecondaryAction } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import red from '@material-ui/core/colors/red';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { PriceIndicator } from '../PriceIndicator';
import { Rating } from '../Rating';
const ITEM_HEIGHT = 48;

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500],
  },
}));

const options = [
  'Accept',
  'Cancel',
  'Reject',
];

export const AttendeesItem = (foodEvent) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={foodEvent.image} />
      </ListItemAvatar>
      <ListItemText
        primary={foodEvent.title}
        secondary={
          <div className={classes.inner}>
            <Rating key={'rating'} rating={foodEvent.foodRating} classes={{fontSizeSmall: classes.icons}} fontSize={'small'}/>
          </div>
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreHorizIcon/>
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
      </Menu>
      </ListItemSecondaryAction>
    </ListItem>
  );
}