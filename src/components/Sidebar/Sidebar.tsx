import React, { useEffect } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import { Box, Fab, IconButton, List, Typography } from '@mui/material';
import { DateRange, PeopleRounded, ArrowLeft, Add } from '@mui/icons-material';

import { Endpoint } from '../../routes/Endpoint';
import { TypographyItem } from '../TypographyItem/TypographyItem';
import { SidebarIconButton } from '../SidebarIconButton/SideBarIconButton';
import { SprintState } from '../../redux/Sprints/SprintsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getSprintsRequest } from '../../redux/Sprints/SprintsActions';
import { Sprint } from '../../types/NewSprintTypes';

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
  const dispatch = useDispatch();
  const sprints = useSelector((state: { sprints: SprintState }) => state.sprints.sprints);
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    dispatch(getSprintsRequest());
  }, [dispatch]);

  const handleSprintClick = (sprint: Sprint) => {

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
              zIndex: 1,
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
            <SidebarIconButton sx={{ marginTop: '20px' }}>
              <Link to={Endpoint.ADD_SPRINT} className="link">
                <Fab color="primary" aria-label="add" size="medium">
                  <Add sx={{ fontSize: 28 }} />
                </Fab>
                <TypographyItem
                  textAlignKey={'center'}
                  fontSizeKey={12}
                  fontFamilyKey={'Open Sans'}
                  fontStyleKey={'normal'}
                  marginTop="10px"
                  color={'#202020'}
                >
                  ADD
                </TypographyItem>
                <TypographyItem
                  textAlignKey={'center'}
                  fontSizeKey={12}
                  fontFamilyKey={'Open Sans'}
                  fontStyleKey={'normal'}
                  color={'#202020'}
                >
                  SPRINT
                </TypographyItem>
              </Link>
            </SidebarIconButton>

            <SidebarIconButton onClick={handleDrawer}>
              <DateRange sx={{ fontSize: '32px', color: '#696969' }} />
              <TypographyItem
                textAlignKey={'center'}
                fontSizeKey={12}
                fontFamilyKey={'Open Sans'}
                fontStyleKey={'normal'}
                marginTop="10px"
                color={'#202020'}
              >
                ALL
              </TypographyItem>
              <TypographyItem
                textAlignKey={'center'}
                fontSizeKey={12}
                fontFamilyKey={'Open Sans'}
                fontStyleKey={'normal'}
                color={'#202020'}
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
                  color={'#202020'}
                >
                  MANAGE
                </TypographyItem>
                <TypographyItem
                  textAlignKey={'center'}
                  fontSizeKey={12}
                  fontFamilyKey={'Open Sans'}
                  fontStyleKey={'normal'}
                  color={'#202020'}
                >
                  TEAM
                </TypographyItem>
              </Link>
            </SidebarIconButton>
          </>
        )}
        {open && (
          <>
            <SidebarIconButton sx={{ display: 'flex' }}>
              <Link to={Endpoint.ADD_SPRINT} className="link openedSideBarLink">
                <Fab color="primary" aria-label="add" size="medium">
                  <Add sx={{ fontSize: 28 }} />
                </Fab>
                <TypographyItem
                  textAlignKey={'left'}
                  fontSizeKey={13}
                  fontFamilyKey={'Roboto'}
                  fontStyleKey={'normal'}
                  marginLeft={'15px'}
                  color={'#202020'}
                  letterSpacing={2}
                >
                  ADD SPRINT
                </TypographyItem>
              </Link>
            </SidebarIconButton>
            <TypographyItem
              textAlignKey={'left'}
              fontSizeKey={14}
              fontFamilyKey={'sans-serif'}
              fontStyleKey={'normal'}
              color={'#696969'}
              marginLeft="16px"
              marginTop="50px"
              letterSpacing={1.25}
            >
              ALL SPRINTS
            </TypographyItem>
            <TypographyItem
              textAlignKey={'left'}
              fontSizeKey={14}
              fontFamilyKey={'Roboto'}
              fontStyleKey={'normal'}
              color={'#696969'}
              padding="16px"
            >
              {sprints.slice().reverse().map((sprint: Sprint) => (
                <Typography
                  sx={{ fontSize: '14px', cursor: 'pointer' }}
                  key={sprint.id}
                  onClick={() => handleSprintClick(sprint)}
                >
                  &ldquo;Sourcery Students&ldquo; - {sprint.title}
                  {sprint.isHistorical && !sprint.isActive ? ' (Done)' : ''}
                </Typography>
              ))}
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