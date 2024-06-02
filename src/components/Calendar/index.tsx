import React, { Dispatch, SetStateAction, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";  // Import default calendar styles

import { Modal, Button, Box, Typography } from "@mui/material";

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
  borderRadius: "10px",
};

const buttonStyle = {
  margin: "20px",
  padding: "10px 20px",
  backgroundColor: "#1976d2",
  color: "#fff",
  fontWeight: "bold",
};

interface CalendarProps{
    handleOpen:()=>void,
    setOpen:Dispatch<SetStateAction<boolean>>,
    open:boolean,
    handleClose:()=>void,
}

export const ReactCalendar = function ({handleOpen,setOpen,open,handleClose}:CalendarProps) {
  
  
  const [value] = useState(new Date());

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Select a Date
          </Typography>
          <div>
            <Calendar value={value} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
