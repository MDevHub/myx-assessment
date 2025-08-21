
import OverviewLayout from "@/app/shared/components/overview/layout/OverviewLayout" 
import Trending from "@/app/shared/components/trending/Trending"
import ChatButton from "@/app/shared/components/chatButton/ChatButton"


const HomePage = () => {
   return (
      <div className="w-full pt-[85px] sm:pt-[160px] ">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-14 space-y-6">
            <OverviewLayout />

            <Trending />

            <ChatButton />
         </div>
      </div>
   )
}

export default HomePage