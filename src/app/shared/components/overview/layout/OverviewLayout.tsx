import SalesOverview from "@/app/shared/components/overview/SalesOverview"
import ListingUserOverview from "@/app/shared/components/overview/ListingUserOverview"

const OverviewLayout = () => {
   return (
      <div className="text-black mt-3">
         <h1 className="text-xl font-bold">Welcome, Ahmad</h1>

         <div className="grid lg:grid-cols-6 gap-6 mt-3">
            <div className="SalesOverview col-span-6 lg:col-span-4 rounded-2xl outline-none border border-gray-200 shadow-none">
               <SalesOverview />
            </div>

            <div className="ListingUserOverview col-span-6 lg:col-span-2 outline-none shadow-none">
               <ListingUserOverview />
            </div>
         </div>
      </div>
   )
}

export default OverviewLayout
