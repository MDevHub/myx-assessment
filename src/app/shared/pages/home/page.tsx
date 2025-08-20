
import OverviewLayout from "@/app/shared/components/overview/layout/OverviewLayout" 
import Trending from "@/app/shared/components/trending/Trending"


const HomePage = () => {
   return (
      <div className="w-full pt-[160px] ">
         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-14 space-y-6">
            <OverviewLayout />

            <Trending />
         </div>
      </div>
   )
}

export default HomePage