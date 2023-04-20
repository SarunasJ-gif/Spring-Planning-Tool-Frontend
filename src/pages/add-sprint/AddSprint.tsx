import NewTask from "../../components/NewTask/NewTask";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import { Box } from "@mui/material";

function AddSprint() {
  return (
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "92vh",
      }}
    >
      <NewTask />
      <BottomMenu />
    </Box>   
  );
}
export default AddSprint;
