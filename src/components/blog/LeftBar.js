import React from 'react';
import ListCategory from '../blog/ListCategory';
import data from '../../webServices/PostServices';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import { withStyles } from '@material-ui/core/styles';
import {Link } from "react-router-dom";
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});
class LeftBar extends React.Component{
  constructor(props){
      super(props);

  }

  render(){
    const { classes } = this.props;
    return(
      <div>
      <List component="nav" className={classes.root}>
      <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText inset primary="Home"/>
      </ListItem>
      </Link>
      </List>
      <ListCategory categories={data.Categories}/>
      </div>);
  }

}
export default withStyles(styles)(LeftBar);
