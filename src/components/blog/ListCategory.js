import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});
class ListCategory extends React.Component {
  constructor(props){
      super(props);

  }
  returnList(){

  }
 render() {
  const { classes } = this.props;
  const listCategory = this.props.categories.map((category) =>
  <ListItem button>
    <ListItemIcon>
      <StarIcon />
    </ListItemIcon>
    <ListItemText inset primary={category.categoryName + "(" +  category.countPost + ")"}/>
  </ListItem>
);
  return (
    <List component="nav" className={classes.root}>
    {listCategory}
    </List>
  );
}
}
ListCategory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListCategory);
