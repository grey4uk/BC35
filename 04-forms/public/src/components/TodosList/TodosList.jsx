import { Component } from 'react';
import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
// import PropTypes from 'prop-types';
import { ReactComponent as Delete } from 'assets/delete.svg';

class TodosList extends Component {
  //   static defaultProps = { items: [] };
  //   static propTypes = {
  //     items: PropTypes.arrayOf(
  //       PropTypes.shape({
  //         text: PropTypes.string.isRequired,
  //         id: PropTypes.string.isRequired,
  //       })
  //     ),
  //   };

  //   state = { items: this.props.items };

  handleDelete = ({ currentTarget: { id } }) => {
    //     console.log(event.currentTarget.id);
    this.props.deleteTodo(id);
  };

  render() {
    const { items } = this.props;
    const { handleDelete } = this;
    return (
      <ol>
        {items.map(({ title, text, id }) => (
          <li key={id}>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge='end'
                      aria-label='delete'
                      id={id}
                      onClick={handleDelete}>
                      <Delete
                        style={{
                          width: '18px',
                          height: '18px',
                        }}
                      />
                    </IconButton>
                  }>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <Typography
                    sx={{ mt: 4, mb: 2 }}
                    variant='h6'
                    component='div'>
                    {title} : {text}
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </li>
        ))}
      </ol>
    );
  }
}

export default TodosList;

// TodosList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({ text: PropTypes.string.isRequired })
//   ),
// };
