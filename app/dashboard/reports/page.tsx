import { Button } from "@/components/ui/Button";
import { UsersByDevice } from "@/components/ui/Chart";
import { CustomSelectDate } from "@/components/ui/CustomSelectDate";
import { RecentOrders } from "@/components/ui/RecentOrders";
import UsersByCountry from "@/components/ui/UsersByCountry";
import { BsArrowDown } from "react-icons/bs";

export default function Reports() {
  return (
    <main>
      <nav className="mb-12">
        <div className="mb-4">
          <h2 className="text-xl">Reports overview</h2>
        </div>
        <div>
            <div className="flex items-center justify-between gap-2">
            <div>
                <CustomSelectDate />
            </div>
            <div className="flex items-center">
                <Button
                    backgroundColor="transparent"
                    icon={<BsArrowDown size={18} />}
                >
                    Export data
                </Button>
                <Button backgroundColor="primary">Create report</Button>
            </div>
            </div>
        </div>
      </nav>
      <div className="flex gap-[2rem] w-full">
        <div className="w-full">
            <UsersByDevice />
        </div>
        <div className="w-full">
            <RecentOrders />
        </div>
      </div>
      <div className="mt-8">
        <UsersByCountry />
      </div>
    </main>
  );
}
