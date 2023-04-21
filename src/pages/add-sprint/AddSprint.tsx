import React from 'react';
import { TitleAndDate } from './Title-and-date';
import NewTask from "../../components/NewTask/NewTask";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import { Box } from "@mui/material";

const AddSprint = () => {
  return (
    <>
    <TitleAndDate />
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "65vh",
      }}
    >
      <NewTask />
      <BottomMenu />
    </Box>   
    </>
  );
};

export default AddSprint;
