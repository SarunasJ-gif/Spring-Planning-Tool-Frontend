import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';

import {
  Box,
  IconButton,
  Paper,
  Typography,
  Button,
} from '@mui/material';
import {
  EventNoteRounded,
  AddCircleRounded,
  PeopleRounded,
  ArrowLeft,
} from '@mui/icons-material';

import { text } from 'stream/consumers';
import MainPage from '../MainPage/MainPage';
import { Endpoint } from '../../routes/Endpoint';

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

const Item = styled(Paper)(({ theme }) => ({
  color: 'black',
  backgroundColor: 'white',
}));

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
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
          '& .MuiDrawer-paper': {
            width: open ? '240px' : '80px',
          },
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
            <ArrowLeft sx={{
              color: '#000000',
              fontSize: "35px",
              "&:hover": { color: '#000000' },
              bgcolor: '#ffffff',
              borderRadius: '50px',
              border: 1,
              borderWidth: '1px',
              borderColor: '#9E9E9E'
            }} />
          </IconButton>
        )}
        <Link to={Endpoint.ADD_SPRINT} className="link">
          <Button
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              height: '120px',
              top: 20,
            }}
          >
            <AddCircleRounded sx={{ fontSize: '50px', color: 'blue' }} />
            <Typography sx={{
              color: '#696969',
              alignItems: 'center',
              textAlign: 'center',
              verticalAlign: 'middle',
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 12,
            }}>ADD</Typography>
            <Typography sx={{
              color: '#696969',
              alignItems: 'center',
              textAlign: 'center',
              verticalAlign: 'middle',
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: 12,
            }}>SPRINT</Typography>
          </Button>
        </Link>
        {!open && (
          <>
            <Button
              onClick={handleDrawer}
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '120px',
                top: 20,
              }}
            >
              <EventNoteRounded sx={{ fontSize: '32px', color: '#696969' }} />
              <Typography sx={{
                color: '#696969',
                alignItems: 'center',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 12,
              }}>ALL</Typography>
              <Typography sx={{
                color: '#696969',
                alignItems: 'center',
                textAlign: 'center',
                verticalAlign: 'middle',
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: 12,
              }}>SPRINTS</Typography>
              <Link to={Endpoint.ALL_SPRINTS} className="link"></Link>
            </Button>
            <Link to={Endpoint.MANAGE_TEAM} className="link">
              <Button
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '120px',
                  top: 20,
                }}
              >
                <PeopleRounded sx={{ fontSize: '32px', color: '#696969' }} />
                <Typography sx={{
                  color: '#696969',
                  alignItems: 'center',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: 12,
                }}>MANAGE</Typography>
                <Typography sx={{
                  color: '#696969',
                  alignItems: 'center',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  fontSize: 12,
                }}>TEAM</Typography>
              </Button>
            </Link>
          </>
        )}
        {open && <Typography >List of Sourcery Students Sprints</Typography>}
      </Drawer>
    </Box>
  );
}