"use client";

import { Fab } from "@mui/material";
import ChatIcon from '@mui/icons-material/QuestionAnswer';
import { FC } from "react";

const ChatButton: FC = () => {
  return (
    <Fab
      color="primary"
      aria-label="chat"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 60,
        bgcolor: "#1f2937", // custom green
        "&:hover": { bgcolor: "#1f2937" },
        zIndex: 1300, // stays above drawers & content
      }}
      onClick={() => alert("Chat feature coming soon!")}
    >
      <ChatIcon />
    </Fab>
  );
};

export default ChatButton;
