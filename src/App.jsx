import { useState } from "react";
import Table from "./components/table";
import Tab from "./components/Tab";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleModal } from "./utils/redux/modalSlice";
import CustomModal from "./components/CustomModal";

function App() {
  const dispatch = useDispatch();

  // Handle modal toggle on FAB click
  const handleModal = () => {
    dispatch(toggleModal());
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Tab /> 
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleModal}
        sx={{
          position: "fixed", // Position fixed on the screen
          bottom: 16, // Distance from the bottom of the screen
          right: 16, // Distance from the right side of the screen
          zIndex: 1000, // Ensure the button stays on top of other content
        }}
      >
        <AddIcon />
      </Fab>
      <CustomModal />
    </Box>
  );
}

export default App;

//3 tabs -> resolved, unresolved, done
//aggrid table
//redux
