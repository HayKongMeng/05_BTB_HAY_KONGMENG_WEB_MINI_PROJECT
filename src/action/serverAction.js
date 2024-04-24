"use server";

import { addNewWorkSpace } from "@/app/service/workSpace";
// import { addNewTask } from "@/services/todoService";
import { revalidatePath, revalidateTag } from "next/cache";

// export const addTask = async (formData) => {
//   const title = formData.get("title");
//   const description = formData.get("description");
//   const tag = formData.get("tag");
//   const dueDate = formData.get("dueDate");
//   const workspaceId = formData.get("workspaceId");
//   addNewTask({ title, description, tag, dueDate }, workspaceId);
//   revalidateTag("task");
// };
export const createNewWorkSpace = async (formData) => {
  const content = formData?.get("workspaceName");
  console.log("Content : ", content);
  await addNewWorkSpace(content);
  console.log("Content : ", content);
  revalidateTag("workspaceName");
};
