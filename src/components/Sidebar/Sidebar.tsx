import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
} from '@mui/material';
import {
  EventNoteRounded,
  AddCircleRounded,
  PeopleRounded,
  ArrowCircleLeft,
} from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        '& .MuiPaper-root': {
          marginTop: '64px',
        },
      }}
    >
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px 0px',
        }}
      >
        {open && (
          <IconButton
            onClick={handleDrawer}
            sx={{
              position: 'fixed',
              top: '85px',
              left: '225px',
              width: '30px',
              height: '30px',
            }}
          >
            <ArrowCircleLeft sx={{ fontSize: '40px' }} />
          </IconButton>
        )}

        <List>
          {[
            {
              text: 'ADD SPRINT',
              icon: (
                <AddCircleRounded sx={{ fontSize: '40px', color: 'blue' }} />
              ),
            },
            {
              text: 'ALL SPRINTS',
              icon: <EventNoteRounded sx={{ fontSize: '32px' }} />,
            },
            {
              text: 'MANAGE TEAM',
              icon: <PeopleRounded sx={{ fontSize: '32px' }} />,
            },
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={handleDrawer}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'left',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0, py: 3 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
