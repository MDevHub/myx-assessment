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
         <div className="flex items-center justify-between text-white px-4 sm:px-6 md:px-12 lg:px-14 py-4">
            {/* Logo - always visible */}
            <div className="flex items-center">
               <SettingsIcon className="font-thin items-center" fontSize="inherit"/>
               <span className="font-semibold text-xl sm:text-2xl">myxellia</span>
            </div>

            {/* Icons Right - desktop */}
            <div className="hidden sm:flex items-center gap-4">
               <IconButton color="inherit">
               <NotificationsIcon fontSize="large"/>
               </IconButton>
               <IconButton color="inherit" onClick={() => setOpenBudget(true)}>
               <LocalConvenienceStoreRoundedIcon fontSize="large" />
               </IconButton>
              <Modal 
                  open={openBudget} 
                  onClose={() => setOpenBudget(false)}
                  disableScrollLock   
                  >
                  <div className="rounded-2xl mx-auto mt-16 shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg">
                     <Budget />
                  </div>
               </Modal>
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
                        top: "83px",
                        height: "calc(100vh - 83px)",
                        width: { xs: "70vw", sm: "430px" }, // responsive width
                        maxWidth: "100vw",
                        overflowY: "auto",
                     },
                  }}
                  >
                  <CalendarPage onClose={() => setOpenCalendar(false)}/>
               </Drawer>
               <IconButton color="inherit">
               <ChatIcon fontSize="large"/>
               </IconButton>
               <IconButton color="inherit">
               <AccountCircleIcon fontSize="large"/>
               </IconButton>
            </div>

            {/* Icons Right - mobile: only budget, calendar, hamburger */}
            <div className="sm:hidden flex items-center gap-2">
               <IconButton color="inherit" onClick={() => setOpenBudget(true)}>
               <LocalConvenienceStoreRoundedIcon fontSize="large" />
               </IconButton>
               <Modal 
               open={openBudget} 
               onClose={() => setOpenBudget(false)}
               disableScrollLock   
               >
  <div className="rounded-2xl mx-auto mt-16 shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg">
                  <Budget />
               </div>
               </Modal>
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
                     top: "83px",
                     height: "calc(100vh - 83px)",
                     width: "100%",
                     maxWidth: { xs: "320px", sm: "430px" },
                     overflowY: "auto",
                  },
               }}
               >
               <CalendarPage onClose={() => setOpenCalendar(false)}/>
               </Drawer>
               <IconButton color="inherit" onClick={() => setOpenHamburger(true)}>
               <MenuIcon fontSize="large" />
               </IconButton>
            </div>
         </div>
         </div>

         {/* Row 2: Hide on mobile */}
         <div className="bg-white text-gray-800 border-b border-gray-200 py-3 sm:block hidden">
         {/* Wrapper for max width */}
         <div className="max-w-7xl mx-auto grid grid-col-1 md:grid-cols-6 px-4 sm:px-6 md:px-12 lg:px-14">
            {/* Left 4 columns: Nav Icons */}
            <div className="col-span-5 lg:col-span-4 gap-6 grid grid-cols-5">
               {/* Each nav item */}
               <div className="hidden sm:flex flex-row justify-center items-center py-3 bg-gray-100 cursor-pointer rounded-2xl">
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
            <div className="col-span-1 lg:col-span-2 hidden md:flex items-center px-2">
               {/* Search input visible on md and up */}
               <div className="hidden md:flex w-full">
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
               {/* Search icon visible below md */}
               <div className="flex md:hidden w-full justify-end">
               <IconButton color="inherit">
                  <SearchIcon />
               </IconButton>
               </div>
            </div>
         </div>
         </div>

         <MobileNav open={openHamburger} onClose={() => setOpenHamburger(false)} />
      </header>
   );
   };

   export default Header;

