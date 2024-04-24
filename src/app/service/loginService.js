export const loginUser = async (request) => {
  //   console.log("Request : ", request);
  //   const { email, password } = request;
  const user = await fetch(`${process.env.NEXTAUTH_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  const userLogin = await user.json();
  console.log("api response : ", userLogin);

  return userLogin;
};
