import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  row1: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
  bigAvatar: {
    margin: 10,
    width: 180,
    height: 180,
    margin: 10,
    alignSelf: 'center',
  },
};

function Profile(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
         <div className={classes.row1}>
        <Avatar alt="yo" src={process.env.PUBLIC_URL + "/images/profile.jpg"} className={classes.bigAvatar} />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ricardo Arana Reyes Guerrero
          </Typography>
          <Typography component="p">
            ingeniero de sistemas e intento de youtuber, prefiero trabajas bajo
            pasión que bajo presión. Mi tiempo libre es para aprender nuevos
            lenguajes de programación, videojuegos y viajes... especialmente
            viajes ;)
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          twitter
        </Button>
        <Button size="small" color="primary">
          github
        </Button>
      </CardActions>
    </Card>
  );
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
