import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getAllWorkSpace } from "@/app/service/workSpace";

export default async function SidebarComponent() {
  const user = await getAllWorkSpace();
  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}

      {user?.data?.map((users) => (
        <div key={users.workSpaceId} className="flex items-center mt-5 w-full">
          <div className="rounded-full w-4 h-4 bg-todo"></div>
          <div className="flex justify-between w-full pl-3">
            <p>{users.workspaceName}</p>

            <EditDeleteDropDownComponent />
          </div>
        </div>
      ))}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      {/* {user?.data?.map((users) => (
        <div key={users.workSpaceId} className="flex items-center mt-5 w-full">
          {user?.data?.isFavorite == true : <div className="rounded-full w-4 h-4 bg-workingOn"></div>
          <div className="flex justify-between w-full pl-3">
            <p>{users.workspaceName}</p>
          </div> : user?.data?.isFavorite == false : <></>}
        </div>
      ))} */}
      {user?.data
        ?.filter((userData) => userData.isFavorite === true)
        .map((users) => (
          <div
            key={users.workSpaceId}
            className="flex items-center mt-5 w-full"
          >
            <div className="rounded-full w-4 h-4 bg-workingOn"></div>
            <div className="flex justify-between w-full pl-3">
              <p>{users.workspaceName}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
