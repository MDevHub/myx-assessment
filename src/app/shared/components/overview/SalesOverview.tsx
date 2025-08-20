   "use client";

   import { groupedSalesData } from "@/app/shared/components/data/SalesData";
   import {
      ResponsiveContainer,
      BarChart,
      Bar,
      XAxis,
      YAxis,
      Tooltip,
   } from "recharts";

   import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
   import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
   import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

   const SalesOverview = () => {
   return (
      <div className="py-4">
         {/* Header */}
         <div className="px-4 mb-4 sm:flex justify-between items-center">
            <div>
               <h2 className=" sm:text-[16px] md:text-lg font-bold">Sales Overview</h2>
               <p className="mb-5 text-xs md:text-sm text-gray-500">
                  Showing overview Jan 2022 - Sep 2022
               </p>
            </div>
            <button className="text-[16px] md:text-sm font-medium border border-gray-200 rounded-full py-3 px-6 cursor-pointer hover:border-gray-300">
               View Transactions
            </button>
         </div>

         {/* Filters row */}
         <div className="flex items-center justify-end gap-8 px-4 mb-4 text-sm font-semibold text-black">
         <p className="cursor-pointer rounded-xl hover:text-gray-800 bg-gray-200 px-4 py-2">
            1 Week
         </p>
         <p className="cursor-pointer hover:text-gray-800">1 Month</p>
         <p className="cursor-pointer hover:text-gray-800">1 Year</p>
         </div>

         <hr className="mb-6 border border-gray-100" />

         <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 px-4">
            {/* Left - Chart */}
            <div className="w-full rounded-lg bg-white border border-gray-200 py-3">
               <ResponsiveContainer width="100%" height={140}>
                  <BarChart
                     data={groupedSalesData}
                     margin={{ top: 8, right: 10, left: 0, bottom: 0 }}
                     barCategoryGap={20}
                     barGap={2}
                     className="cursor-pointer"
                  >
                  <XAxis
                     dataKey="month"
                     interval={0}
                     padding={{ left: 5, right: 10 }}
                     tick={{ fontSize: 11 }}
                  />
                  <YAxis
                     ticks={[0, 10, 20, 30, 40, 50]}
                     domain={[0, 50]}
                     unit="m"
                     tick={{ fontSize: 10 }}
                  />
                  <Tooltip
                     cursor={{ fill: "transparent" }}
                     contentStyle={{
                        background: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px 0 0 0",
                        fontSize: "12px",
                        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                     }}
                  />
                  <Bar
                     dataKey="blue"
                     fill="#1976d2"
                     barSize={5}
                     radius={[2, 2, 0, 0]}
                  />
                  <Bar
                     dataKey="green"
                     fill="#2e7d32"
                     barSize={5}
                     radius={[2, 2, 0, 0]}
                  />
                  <Bar
                     dataKey="red"
                     fill="#d32f2f"
                     barSize={5}
                     radius={[2, 2, 0, 0]}
                  />
                  </BarChart>
               </ResponsiveContainer>
            </div>

            {/* Right - KPI Summary */}
            <div className="w-full gap-3 grid grid-cols-1 lg:grid-cols-2">
               <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-bold text-sm md:text-[16px]  sm:text-[14px] lg:text-[16px] xl:text-lg text-blue-600">₦120,000,000.00</p>
                  <div className="flex items-center  ">
                     <p className="text-xs font-sans text-gray-500">Total inflow</p>
                     <div className="flex items-center rounded-full bg-blue-600 text-blue-600 ml-2">
                        <ArrowDropDownIcon fontSize="inherit" className="text-gray-300"/>
                     </div>
                     <p className="text-blue-600 text-[12px]">0.5%</p>
                  </div>
               </div>

               <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-bold text-green-600">₦120,000,000.00</p>
                  <div className="flex items-center  ">
                     <p className="text-xs font-sans text-gray-500">Commission</p>
                     <div className="flex items-center rounded-full bg-green-600 text-green-600 ml-2">
                        <ArrowDropDownIcon fontSize="inherit" className="text-gray-300"/>
                     </div>
                     <p className="text-green-600 text-[12px]">0.5%</p>
                  </div>
               </div>

               <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-bold text-yellow-500">₦120,000,000.00</p>
                  <div className="flex items-center  ">
                     <p className="text-xs font-sans text-gray-500">MRR</p>
                     <div className="flex items-center rounded-full bg-yellow-500 text-yellow-500 ml-2">
                        <ArrowDropUpIcon fontSize="inherit" className="text-gray-300"/>
                     </div>
                     <p className="text-yellow-500 text-[12px]">0.5%</p>
                  </div>
               </div>
               
               <div className="border border-gray-200 rounded-lg p-4">
                  <p className="font-bold text-red-600">₦10,000,000.00</p>
                  <div className="flex items-center  ">
                     <p className="text-xs font-sans text-gray-500">GMV</p>
                     <div className="flex items-center rounded-full bg-red-600 text-red-600 ml-2">
                        <ArrowDropDownIcon fontSize="inherit" className="text-gray-300"/>
                     </div>
                     <p className="text-red-600 text-[12px]">0.5%</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SalesOverview;
