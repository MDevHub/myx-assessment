"use client";

import Budget from "@/app/shared/components/headerDrawer/Budget";
import CalendarPage from "@/app/shared/components/headerDrawer/calendar";
import MobileNav from "@/app/shared/components/header/MobileNav";

import { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import { CalendarMonth } from "@mui/icons-material";
import LocalConvenienceStoreRoundedIcon from '@mui/icons-material/LocalConvenienceStoreRounded';
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';

import { Modal, Drawer, IconButton, TextField } from "@mui/material";

   const Header = () => {
   // States for modal + drawer
   const [openBudget, setOpenBudget] = useState(false);
   const [openCalendar, setOpenCalendar] = useState(false);

   const [openHamburger, setOpenHamburger] = useState(false);

   return (
      <header className="w-full bg-black fixed top-0 left-0 z-50">
         
         {/* Wrapper for max width */}
         <div className="max-w-7xl mx-auto">
            
            {/* Row 1: Dark background */}
            <div className="flex items-center justify-between text-white px-6 md:px-12 lg:px-14 py-4">
               
               {/* Logo */}
               <div className="flex items-center">
                  <SettingsIcon className="font-thin"/>
                  <span className="font-semibold text-2xl">myxellia</span>
               </div>

               {/* Icons Right */}
               <div className="flex items-center gap-4">
                  <IconButton color="inherit" className="">
                     <NotificationsIcon fontSize="large"/>
                  </IconButton>

                  {/* Budget Modal */}
                  <IconButton color="inherit" onClick={() => setOpenBudget(true)}>
                     <LocalConvenienceStoreRoundedIcon fontSize="large" />
                  </IconButton>
                  <Modal 
                     open={openBudget} 
                     onClose={() => setOpenBudget(false)}
                     disableScrollLock   
                  >
                     <div className=" rounded-2xl w-[400px] mx-auto mt-16 shadow-lg">
                        <Budget /> {/* Budget component here */}
                     </div>
                  </Modal>

                  {/* Calendar Drawer */}
                  <IconButton color="inherit" onClick={() => setOpenCalendar(true)}>
                     <CalendarMonth fontSize="large"/>
                  </IconButton>
                  <Drawer
                     anchor="right"
                     open={openCalendar}
                     onClose={() => setOpenCalendar(false)}
                     disableScrollLock
                     PaperProps={{
                        sx: {
                           position: "fixed",
                           top: "83px",          //  remove offset
                           height:  "calc(100vh - 83px)", // covers entire viewport
                           width: "430px",
                           overflowY: "auto", 
                        },
                     }}
                     >
                     <CalendarPage onClose={() => setOpenCalendar(false)}/>
                  </Drawer>

                  {/* Disabled / Static Icons */}
                  <IconButton color="inherit" className="hidden sm:flex">
                     <ChatIcon fontSize="large"/>
                  </IconButton>
                  <IconButton color="inherit" className="hidden sm:flex">
                     <AccountCircleIcon fontSize="large"/>
                  </IconButton>
               </div>
            </div>
         </div>

        {/* Row 2: Grid with icons (4 cols) + search (1 col) */}
         <div className="bg-white text-gray-800 border-b border-gray-200 py-3">
            
            {/* Wrapper for max width */}
            <div className="max-w-7xl mx-auto grid grid-col-1 md:grid-cols-6 px-6 md:px-12 lg:px-14">
               
               {/* Left 4 columns: Nav Icons */}
               <div className="col-span-4 gap-6 grid grid-cols-5">
                  {/* Each nav item */}
                  <div className="hidden md:flex flex-row justify-center items-center py-3 bg-gray-100 cursor-pointer rounded-2xl">
                     <HomeIcon />
                     <span className="text-sm">Dashboard</span>
                  </div>
                  <div className="hidden sm:flex flex-row justify-center items-center py-3 hover:bg-gray-100 cursor-pointer rounded-2xl">
                     <HomeRepairServiceOutlinedIcon />
                     <span className="text-sm">Listings</span>
                  </div>
                  <div className="hidden sm:flex flex-row justify-center items-center py-3 hover:bg-gray-100 cursor-pointer rounded-2xl">
                     <PersonOutlineOutlinedIcon />
                     <span className="text-sm">Users</span>
                  </div>
                  <div className="hidden sm:flex flex-row justify-center items-center py-3 hover:bg-gray-100 cursor-pointer rounded-2xl">
                     <DescriptionOutlinedIcon />
                     <span className="text-sm">Requests</span>
                  </div>
                  <div className="hidden sm:flex flex-row justify-center items-center py-3 hover:bg-gray-100 cursor-pointer rounded-2xl">
                     <ReceiptLongOutlinedIcon />
                     <span className="text-sm">Applications</span>
                  </div>
               </div>

               <div className="col-span-2 flex items-center px-2">
                  <div className="hidden lg:flex w-full">   
                     <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search Listings, Users here..."
                        size="small"
                        InputProps={{
                        startAdornment: <SearchIcon className="text-gray-500 mr-2" />,
                        }}
                        sx={{ "& .MuiOutlinedInput-root": { borderRadius: "1rem" } }}
                     />
                  </div>
               </div>
            </div>
         </div>

         
         {/* Hamburger menu on small screens */}
         <div className="sm:hidden flex items-center">
         <IconButton color="inherit" onClick={() => setOpenHamburger(true)}>
            <MenuIcon fontSize="large" />
         </IconButton>
         </div>

         <MobileNav open={openHamburger} onClose={() => setOpenHamburger(false)} />
      </header>
   );
};

export default Header;

