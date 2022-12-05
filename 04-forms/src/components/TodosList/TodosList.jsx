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

import { ReactComponent as Delete } from 'assets/delete.svg';
import CheckBox from '@mui/material/checkbox';

import { priorities } from '../TodoForm/TodoForm';

class TodosList extends Component {
  handleDelete = ({ currentTarget: { id } }) => {
    this.props.deleteTodo(id);
  };

  filteredTodos = (filterValue, todos) =>
    filterValue
      ? todos.filter((el) =>
          el.title
            .toLowerCase()
            .includes(filterValue.toLowerCase())
        )
      : todos;

  render() {
    const { todos = [], filter } = this.props;
    const { handleDelete, filteredTodos } = this;
    const todosToShow = filteredTodos(filter, todos);
    return (
      <ol>
        {todosToShow?.map(
          ({
            title,
            text,
            id,
            isDone,
            priority,
            category,
          }) => (
            <li
              key={id}
              style={{
                color: priorities[priority].color,
                background: 'grey',
              }}>
              <Grid item xs={12} md={6}>
                <List>
                  <ListItem
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: isDone
                        ? 'line-through'
                        : '',
                    }}
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
                    <label
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0 20px',
                      }}>
                      Done
                      <CheckBox
                        checked={isDone}
                        onChange={() =>
                          this.props.toggleTodoDone(id)
                        }
                      />
                    </label>
                    <span>Category : {category}</span>
                  </ListItem>
                </List>
              </Grid>
            </li>
          )
        )}
      </ol>
    );
  }
}

export default TodosList;
