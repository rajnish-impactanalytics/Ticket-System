import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../utils/redux/modalSlice";
import dayjs from 'dayjs';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);
  const handleToggle = () => {
    dispatch(toggleModal());
  };

  // Local state to handle form fields
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const calculateTimeLeft = (dueDate) => {
    if (!dueDate) return;

    const now = dayjs(); // Get current time using dayjs
    const due = dayjs(dueDate); // Convert dueDate to a dayjs object
    const diffInMs = due.diff(now); // Difference in milliseconds

    if (diffInMs <= 0) {
      return "Time's up!";
    }

    const duration = dayjs.duration(diffInMs); // Get the duration
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    // Format time left as HH:mm:ss
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  };

  const handleSubmit = () => {
    const calculatedTimeLeft = calculateTimeLeft(dueDate);

    // Dispatch data with time left calculation
    console.log("Form Submitted with:", { name, dueDate, timeLeft: calculatedTimeLeft });
    
    // You can dispatch the data (for example, to add a new ticket)
    dispatch(toggleModal()); // Close the modal after submitting
  };

  if (!isOpen) {
    return null; // Don't render the modal if it's closed
  }

  return (
    <div>
      <Modal
        keepMounted
        open={isOpen}
        onClose={handleToggle}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Add New Ticket
          </Typography>

          {/* Name Input */}
          <TextField
            label="Your Name"
            fullWidth
            variant="outlined"
            margin="normal"
            value={name}
            onChange={handleNameChange}
          />

          {/* Due Date and Time Input */}
          <TextField
            label="Due Date and Time"
            type="datetime-local" // Native datetime-local picker
            fullWidth
            variant="outlined"
            margin="normal"
            value={dueDate}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          />

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
