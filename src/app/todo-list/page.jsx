import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import EditDeleteDropDownComponent from "@/components/EditDeleteDropDownComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import ListCardComponent from "@/components/ListCardComponent";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import WorkspacePopupComponent from "@/components/WorkspacePopupComponent";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <div className="flex">
          <div>
            <SidebarComponent />
          </div>
          <div className="w-full mx-10">
            <NavbarComponent />
            <div>
              <div className="flex gap-7">
                <div className="w-full ">
                  <div className="mb-5">
                    <ListBoardComponentHeader />
                  </div>
                  <ListCardComponent />
                </div>

                <div className="w-[400px]">
                  <MonthlyStatisticsComponent />
                </div>
              </div>
            </div>
            <div className="mt-80 ml-[1100px]">
              <AddNewTaskComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
