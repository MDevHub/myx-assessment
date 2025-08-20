"use client";

import { IconButton, Drawer, TextField } from "@mui/material";
import { Close as CloseIcon, Search as SearchIcon } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import { FC } from "react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { icon: <HomeIcon />, label: "Dashboard" },
  { icon: <HomeRepairServiceOutlinedIcon />, label: "Listings" },
  { icon: <PersonOutlineOutlinedIcon />, label: "Users" },
  { icon: <DescriptionOutlinedIcon />, label: "Requests" },
  { icon: <ReceiptLongOutlinedIcon />, label: "Applications" },
];

const MobileNav: FC<MobileNavProps> = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: "250px", padding: "1rem" },
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-lg">Menu</span>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <div className="flex flex-col gap-4">
        {navItems.map((item, i) => (
          <div key={i} className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 rounded-xl p-2">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search Listings, Users..."
          size="small"
          InputProps={{
            startAdornment: <SearchIcon className="text-gray-500 mr-2" />,
          }}
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "1rem" } }}
        />
      </div>
    </Drawer>
  );
};

export default MobileNav;
