import React from 'react'
import PropTypes from 'prop-types'
import Divider from 'material-ui/Divider'
import List, {
  ListItem,
  ListItemText,
} from 'material-ui/List'
import Typography from 'material-ui/Typography'

function MainDrawerList(props) {
  const { classes } = props;
  return (
    <div className={MainDrawerList}>
      <List component="nav">
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Main" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button component="a" href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
}

MainDrawerList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default MainDrawerList
