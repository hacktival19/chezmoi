import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Table } from '../Table';
import { MenuThingy } from './MenuThingy';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    flexGrow: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  actions: {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'center'
  }
}));

export const Preview = ({price, tags, title, height, handleReject, handleAccept}) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h5" color="inherit" noWrap>
            {title}
          </Typography>
        </div>
        <Table/>
        <div className={classes.actions}>
          <IconButton onClick={handleAccept}>
            <CheckIcon fontSize={'large'}/>
          </IconButton>
          <IconButton onClick={handleReject}>
            <CloseIcon fontSize={'large'}/>
          </IconButton>
        </div>
        <MenuThingy
          price={price}
          tags={tags}
        />
      </div>
  );
}

Preview.defaultProps = {
  price: 2,
  title: 'Some Test',
  tags: ['vegan'],
}

