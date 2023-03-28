import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Link } from "react-router-dom";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  Paper,
  Grid,
  Stack,
  Menu,
  MenuItem,
  Typography,
  Card,
  Icon,
} from '@mui/material';
import {
  EventNoteRounded,
  AddCircleRounded,
  PeopleRounded,
  ArrowCircleLeft,
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

        <List sx={{}}>
          {[
            {
              link: Endpoint.ADD_SPRINT,
              text: 'ADD SPRINT',
              icon: (
                <AddCircleRounded sx={{ fontSize: '40px', color: 'blue' }} />
              ),
            },
            {
              text: Endpoint.ALL_SPRINTS,
              link: '/all-sprints',
              icon: <EventNoteRounded sx={{ fontSize: '32px' }} />,
            },
            {
              link: Endpoint.MANAGE_TEAM,
              text: 'MANAGE TEAM',
              icon: <PeopleRounded sx={{ fontSize: '32px' }} />,
            },
          ].map((item) => (
            <Link to={item.link} className='link'>
              <ListItem key={item.text} disablePadding sx={{ justifyContent: 'center', }}>
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
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    {item.icon}
                    <div>{item.text}</div>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </Box >
  );
}




//-------------------------------------------

// const AddNewSprint = null;

// export default function SideBar() {

//   return (
//     // <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
//     <div>
//       <Box>
//         {/* <MenuItem
//             icon={<MenuOutlinedIcon />}
//             onClick={() => {
//               collapseSidebar();
//             }}
//             style={{ textAlign: "center" }}
//           >
//             {" "}
//             <h2>Admin</h2>
//           </MenuItem> */}

//         <Link to='/add-sprint'>
//           <ListItem key={'asdasfasf'} disablePadding sx={{ justifyContent: 'center', }}>
//             <ListItemButton
//               sx={{
//                 minHeight: 48,
//                 justifyContent: open ? 'initial' : 'center',
//                 px: 2.5,
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: open ? 3 : 'auto',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   flexDirection: 'column',
//                 }}
//               >
//                 {item.icon}
//                 <div>{item.text}</div>
//               </ListItemIcon>
//             </ListItemButton>
//           </ListItem>
//         </Link>
//       </Box>

//       <main>
//         <h1 style={{ color: 'white', marginLeft: '5rem' }}>Main page</h1>
//       </main>
//     </div>
//   );


//------------------------------------------

//------------------------------------------
// Mine 2
//----------------------------------------

// type SideBarProps = {
//   text: string,
//   Icon?: object
// }

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',

// }));

// function SideBarLink(props: SideBarProps) {
//   return (
//     <div className='link'>
//       <Icon>
//         <h3>{props.text}</h3>
//       </Icon>

//     </div>
//   )
// }

// export default function Sidebar() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         '& .MuiPaper-root': {
//           marginTop: '64px',
//         },
//       }}
//     >
//       <Drawer
//         variant="permanent"
//         sx={{
//           boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px 0px',
//         }}
//       >
//         <div className='sidebar'>
//           <SideBarLink text='ADD SPRINT' Icon={AddCircleRounded} />
//           <SideBarLink text='ALL SPRINTS' Icon={EventNoteRounded} />
//           <SideBarLink text='MANAGE TEAM' Icon={PeopleRounded} />

//         </div>
//       </Drawer>
//     </Box>

//   )
// }

//------------------------------------------------------------------------------------
// Mine 1
//-------------------------------------------------------------------------------------

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   ...(open && {
//     ...openedMixin(theme),
//     '& .MuiDrawer-paper': openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     '& .MuiDrawer-paper': closedMixin(theme),
//   }),
// }));

// const Item = styled(Paper)(({ theme }) => ({
//   color: "black",
//   backgroundColor: 'white'
// }));

// export default function Sidebar() {
//   // const [open, setOpen] = React.useState(false);

//   // const handleDrawer = () => {
//   //   setOpen(!open);
//   // };

//   return (

//     <Box
//       sx={{
//         display: 'flex',
//         '& .MuiPaper-root': {
//           marginTop: '64px',
//         },
//       }}
//     >
//       <Drawer
//         variant="permanent"
//         sx={{
//           boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 10px 0px',
//         }}
//       >

//         {/* button with arrow to slide back */}

//         {/* {
//           <IconButton
//             onClick={() => <MainPage />}
//             sx={{
//               position: 'fixed',
//               top: '85px',
//               left: '225px',
//               width: '30px',
//               height: '30px',
//             }}
//           >
//           </IconButton>
//         } */}

//         <List>
//           {[
//             {

//               text: 'ADD SPRINT',
//               icon:
//                 <AddCircleRounded onClick={() => <MainPage />} sx={{ fontSize: '40px', color: 'blue', }} />,   //added on click

//             },
//             // <div>Add Sprint</div>,
//             {
//               text: 'ALL SPRINTS',
//               icon: <EventNoteRounded onClick={() => 'handleDrawer'} sx={{ fontSize: '32px' }} />,            //added on click
//             },
//             {
//               text: 'MANAGE TEAM',
//               icon: <PeopleRounded sx={{ fontSize: '32px' }} />,
//             },
//           ]
//             .map((item) => (
//               <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>

//                 <ListItemButton
//                   // onClick={'handleDrawer'}
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: 'initial',
//                     px: 2.5,
//                   }}
//                 >

//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: 'auto',
//                       justifyContent: 'left',
//                     }}
//                   >
//                     {item.icon}

//                     <ListItemText
//                       primary={item.text}
//                       sx={{ opacity: 0, py: 3, alignContent: 'center' }}               //added align
//                     />

//                   </ListItemIcon>

//                   // here was ListItemText

//                 </ListItemButton>

//               </ListItem>
//             ))
//           }
//         </List>

//       </Drawer>
//     </Box >
//   );
// }



//------------------------------------------------------------------------------------------------------------------
