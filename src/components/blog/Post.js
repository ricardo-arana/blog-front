import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    paddingTop: '1em',
    paddingLeft: '2em',
    paddingRight: '1em',
    marginBottom: '1.5em',
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
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  divButton: {
    textAlign: 'right',
    width: '100%'
  },
});

class Post extends React.Component {
  constructor(props){
      super(props);

  }



  render() {
    const { classes } = this.props;
const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <div style={{'paddingTop':'1em'}}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {this.props.postInfo.author}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.postInfo.title}
          subheader={this.props.postInfo.date.toLocaleDateString('pe-ES', optionsDate)}
        />
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + this.props.postInfo.img}
          title={this.props.postInfo.title}
        />
        <CardContent>
          <Typography component="p">
            {this.props.postInfo.textPost}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <div className={classes.divButton}>
          <Button variant="outlined" href="#outlined-buttons" className={classes.button}>
        Ver más
      </Button>
      </div>
        </CardActions>

      </Card>
      </div>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Post);
