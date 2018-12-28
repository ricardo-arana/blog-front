import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

class Panel extends React.Component {
  constructor(props){
      super(props);

  }
render(){
      const { classes } = this.props;
  return (
    <div style={{'paddingTop':'1em'}}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {this.props.Title}
        </Typography>
      </CardContent>
      <CardActions>
        {this.props.children}
      </CardActions>
    </Card>
    </div>
  );
}
}

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);
