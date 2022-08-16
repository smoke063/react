import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Chat({array}) {
    return (
        <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <nav aria-label="main chat">
                <List>
                    {array?.map(({id, name}) => {
                            return (
                                <ListItem
                                key={id}
                                >
                                    <ListItemText
                                        primary={name}
                                    />
                                </ListItem>
                            )
                        }
                    )}
                </List>
            </nav>
        </Box>
    );
}
