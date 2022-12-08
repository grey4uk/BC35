import * as React from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';

export default function InteractiveList({ items, title }) {
  return (
    <Box>
      <Typography
        sx={{ mt: 4, mb: 2 }}
        variant='h6'
        component='div'>
        {title}
      </Typography>

      <List>
        {items.map((item) => {
          switch (title) {
            case 'Pokemons':
              return (
                <ListItem key={item.name}>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={item.name}
                  />
                </ListItem>
              );
            case 'Dogs':
              return (
                <ListItem key={item}>
                  <img src={item} alt={item} width='200' />
                </ListItem>
              );

            default:
              return null;
          }
        })}
      </List>
    </Box>
  );
}
