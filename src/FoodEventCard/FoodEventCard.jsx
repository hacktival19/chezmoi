import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import {PriceIndicator} from '../PriceIndicator';
import pizza from '../static/media/Pizza.png';
import {foodTags } from '../Preview/constants';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    height: '100%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  chip: {
    margin: theme.spacing.unit / 2
  }
}));

export const FoodEventCard = ({event, children}) => {
  const classes = useStyles();
  const tags = event.tags || [];
  return (
    <Card className={classes.card}>
      <CardHeader
        title={event.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={pizza}
        title="Paella dish"
      />
      <CardContent>
        <Typography component="p">
          {event.description}
        </Typography>
        <Divider/>
        <Typography variant="h6" component="h4">
          Price
        </Typography>
        <Typography component="p">
          <PriceIndicator key={'price'}  price={event.price} classes={{fontSizeSmall: classes.icons}} fontSize={'small'}/>
        </Typography>
        {children && children.length && <Divider/>}
        <Typography variant="h6" component="h4">
          Tags
        </Typography>
        <div>
          {tags.map((tag)=> {
            return <Chip
              key={tag}
              icon={foodTags[tag]({key: tag})}
              label={tag}
              className={classes.chip}
            />
          })}
        </div>
        {children && children.length && <Divider/>}
        {children}
      </CardContent>
    </Card>
  );
}