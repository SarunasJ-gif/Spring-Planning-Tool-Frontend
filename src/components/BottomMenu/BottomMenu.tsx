import { Box, Button } from "@mui/material";

function BottomMenu() {
  return (
     <Box sx={{ ml: 11 }}> 
        <Box style={{width: "100%", height: "50px", backgroundColor: "#fff", display: "flex", justifyContent: "flex", alignItems: "center" }}>
          <Button variant="contained" style={{ backgroundColor: "primary", color: "#fff", borderRadius: "5px", border: "none", marginRight: "15px", fontSize: "18px" }}>ADD</Button>
          <Button variant="outlined" style={{ backgroundColor: "#fff", color: "primary", borderRadius: "5px", fontSize: "18px" }}>CANCEL</Button>
        </Box>
      </Box>
  );
}

export default BottomMenu;
