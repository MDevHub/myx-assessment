"use client";

import LocalConvenienceStoreRoundedIcon from '@mui/icons-material/LocalConvenienceStoreRounded';
import { budgetData } from "@/app/shared/components/data/budgetData";

const Budget = () => {
  return (
   <div className="w-full max-w-sm md:max-w-md bg-white mx-auto rounded-2xl">
      {/* Top Icon */}
      <div className="flex justify-center rounded-t-2xl mb-4 bg-[#0C2841] px-10 pt-10">
         <div className='w-full flex items-center justify-center bg-black/70 py-10 rounded-t-2xl'>
            <LocalConvenienceStoreRoundedIcon fontSize="large" className="text-white" />
         </div>
      </div>

      <div className='p-6'>
         {/* Info Rows */}
         <div className="space-y-4 ">
            {budgetData.map((item, index) => (
               <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">
                     <item.icon className="text-gray-500" />
                  </div>
                  <div>
                     <p className="font-semibold text-gray-800">{item.title}</p>
                     <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
               </div>
            ))}
         </div>

         {/* Create Budget Button */}
         <button className=" mt-6 w-full bg-black text-white py-3 rounded-full font-semibold">
            Create Budget
         </button>
      </div>
    </div>
  );
};

export default Budget;
