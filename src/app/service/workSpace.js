export const getAllWorkSpace = async () => {
  const user = await fetch(`${process.env.NEXTAUTH_URL}/workspaces`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    cache: "no-store",
  });

  const workspaces = await user.json();
  console.log("api response : ", workspaces);
  return workspaces;
};

export const addNewWorkSpace = async (newWorkSpace) => {
  const user = await fetch(
    `${process.env.NEXTAUTH_URL}/workspaces`,

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
      body: JSON.stringify({ workspaceName: newWorkSpace }),
    }
  );

  const workspaces = await user.json();
  console.log("api response : ", workspaces);
  return workspaces;
};
