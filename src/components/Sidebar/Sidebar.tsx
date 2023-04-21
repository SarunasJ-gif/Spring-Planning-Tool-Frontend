import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import Data from './mock_sprint.json';

import { Box, IconButton } from '@mui/material';
import {
  EventNoteRounded,
  AddCircleRounded,
  PeopleRounded,
  ArrowLeft,
} from '@mui/icons-material';

import { Endpoint } from '../../routes/Endpoint';
import { TypographyItem } from '../TypographyItem/TypographyItem';
import { SidebarIconButton } from '../SidebarIconButton/SideBarIconButton';

const drawerWidth = 295;

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

export default function Sidebar(props: { children: React.ReactNode }) {
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
            width: open ? '295px' : '80px',
          },
        }}
      >
        {open && (
          <IconButton
            onClick={handleDrawer}
            sx={{
              position: 'fixed',
              top: '85px',
              left: '280px',
              width: '30px',
              height: '30px',
            }}
          >
            <ArrowLeft
              sx={{
                color: '#000000',
                fontSize: '35px',
                '&:hover': { color: '#000000' },
                bgcolor: '#ffffff',
                borderRadius: '50px',
                border: 1,
                borderWidth: '1px',
                borderColor: '#9E9E9E',
              }}
            />
          </IconButton>
        )}

        {!open && (
          <>
            <SidebarIconButton>
              <Link to={Endpoint.ADD_SPRINT} className="link">
                <AddCircleRounded sx={{ fontSize: '50px', color: 'blue' }} />
                <TypographyItem
                  textAlignKey={'center'}
                  fontSizeKey={12}
                  fontFamilyKey={'Open Sans'}
                  fontStyleKey={'normal'}
                >
                  ADD
                </TypographyItem>
                <TypographyItem
                  textAlignKey={'center'}
                  fontSizeKey={12}
                  fontFamilyKey={'Open Sans'}
                  fontStyleKey={'normal'}
                >
                  SPRINT
                </TypographyItem>
              </Link>
            </SidebarIconButton>

            <SidebarIconButton onClick={handleDrawer}>
              <EventNoteRounded sx={{ fontSize: '32px', color: '#696969' }} />
              <TypographyItem
                textAlignKey={'center'}
                fontSizeKey={12}
                fontFamilyKey={'Open Sans'}
                fontStyleKey={'normal'}
              >
                ALL
              </TypographyItem>
              <TypographyItem
                textAlignKey={'center'}
                fontSizeKey={12}
                fontFamilyKey={'Open Sans'}
                fontStyleKey={'normal'}
              >
                SPRINTS
              </TypographyItem>
              <Link to={Endpoint.ALL_SPRINTS} className="link"></Link>
            </SidebarIconButton>

            <SidebarIconButton>
              <Link to={Endpoint.MANAGE_TEAM} className="link">
                <PeopleRounded sx={{ fontSize: '32px', color: '#696969' }} />
                <TypographyItem
                  textAlignKey={'center'}
                  fontSizeKey={12}
                  fontFamilyKey={'Open Sans'}
                  fontStyleKey={'normal'}
                >
                  MANAGE
                </TypographyItem>
                <TypographyItem
                  textAlignKey={'center'}
                  fontSizeKey={12}
                  fontFamilyKey={'Open Sans'}
                  fontStyleKey={'normal'}
                >
                  TEAM
                </TypographyItem>
              </Link>
            </SidebarIconButton>
          </>
        )}
        {open && (
          <>
            <SidebarIconButton>
              <Link to={Endpoint.ADD_SPRINT} className="link">
                <AddCircleRounded
                  sx={{ fontSize: '50px', color: 'blue', marginRight: '200px' }}
                />
                <TypographyItem
                  textAlignKey={'left'}
                  fontSizeKey={13}
                  fontFamilyKey={'Roboto'}
                  fontStyleKey={'normal'}
                  position="absolute"
                  marginRight="50px"
                >
                  ADD SPRINT
                </TypographyItem>
              </Link>
            </SidebarIconButton>
            <TypographyItem
              textAlignKey={'left'}
              fontSizeKey={13}
              fontFamilyKey={'sans-serif'}
              fontStyleKey={'normal'}
              marginLeft="25px"
              marginTop="50px"
            >
              ALL SPRINTS
            </TypographyItem>
            <TypographyItem
              textAlignKey={'center'}
              fontSizeKey={18}
              fontFamilyKey={'Avenir'}
              fontStyleKey={'normal'}
              marginRight="55px"
            >
              {Data.map((post: { id: number }) => (
                <h5 key={post.id}>
                  &ldquo;Sourcery Students&ldquo; - Sprint {post.id}
                </h5>
              )).reverse()}
            </TypographyItem>
          </>
        )}
      </Drawer>
      <Box sx={{ paddingLeft: open ? '295px' : '0', transition: '.3s' }}>
        {props.children}
      </Box>
    </Box>
  );
}
