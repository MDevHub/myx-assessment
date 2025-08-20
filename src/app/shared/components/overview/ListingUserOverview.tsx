   "use client";

   import FoundationOutlinedIcon from "@mui/icons-material/FoundationOutlined";
   import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
   import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
   
   const ListingUserOverview = () => {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
         {/* Listings Overview */}
         <div className="border border-gray-200 rounded-2xl">
            <div className="w-full flex items-center justify-between border-b rounded-t-2xl border-gray-200 p-4 bg-gray-100">
               <p className="flex items-center gap-1 font-semibold text-sm">
                  <FoundationOutlinedIcon fontSize="medium" className="text-blue-700" />
                  Listings Overview
               </p>
               <a
                  href="#"
                  className="flex items-center gap-1 text-blue-700 font-semibold text-sm"
               >
                  View all
                  <ArrowForwardIosOutlinedIcon
                  fontSize="small"
                  className="text-blue-700"
                  />
               </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 py-6">
               <div className="flex gap-3 flex-col items-center justify-center ">
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="text-[25px] font-bold">1.8K</p>
               </div>
               <div className="flex gap-3 flex-col items-center justify-center ">
                  <p className="text-sm text-gray-500">Active</p>
                  <p className="text-[25px] font-bold">80K</p>
               </div>
               <div className="flex gap-3 flex-col items-center justify-center ">
                  <p className="text-sm text-gray-500">Archived</p>
                  <p className="text-[25px] font-bold">1K</p>
               </div>
            </div>
         </div>

         {/* Users Overview */}
         <div className="border border-gray-200 rounded-2xl">
            <div className="w-full flex items-center justify-between border-b rounded-t-2xl border-gray-200 p-4 bg-gray-100">
               <p className="flex items-center gap-1 font-semibold text-sm">
                  <Person2OutlinedIcon fontSize="medium" className="text-blue-700" />
                  Users Overview
               </p>
               <a
                  href="#"
                  className="flex items-center gap-1 text-blue-700 font-semibold text-sm"
               >
                  View all
                  <ArrowForwardIosOutlinedIcon
                  fontSize="small"
                  className="text-blue-700"
                  />
               </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 py-6">
               <div className="flex gap-3 flex-col items-center justify-center ">
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="text-[25px] font-bold">20.7K</p>
               </div>
               <div className="flex gap-3 flex-col items-center justify-center ">
                  <p className="text-sm text-gray-500">Active</p>
                  <p className="text-[25px] font-bold">8.5K</p>
               </div>
               <div className="flex gap-3 flex-col items-center justify-center ">
                  <p className="text-sm text-gray-500">Archived</p>
                  <p className="text-[25px] font-bold">7.5K</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ListingUserOverview;
