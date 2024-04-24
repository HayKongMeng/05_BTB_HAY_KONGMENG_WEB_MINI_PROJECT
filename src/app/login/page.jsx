"use client";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
export default function login() {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const handleUserLogin = async (data) => {
    const response = await signIn("credentials", {
      email: data?.email,
      password: data?.password,
      redirect: false,
    });
    console.log("Res : ", response);

    if (response?.status == 200) {
      router.push("/todo-list");
      router.refresh();
    }
  };
  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        {/* <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"> */}
        <div className="mt-20 ml-32 mr-32">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img src="/assets/icons/logo.svg" alt="" />
          </a>
          <div className="flex justify-end gap-80 mt-5">
            <div class=" w-full bg-white rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login
                </h1>
                <form
                  class="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={handleSubmit(handleUserLogin)}
                >
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email cannot be empty.",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors?.email?.message && (
                      <p className="text-red-600">{errors?.email?.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      {...register("password", { required: true })}
                    />
                    {errors?.password && (
                      <p className="text-red-600">Password is required.</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Login
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <Link href="/register">Register</Link>
                  </p>
                </form>
                <div class="flex items-center justify-center w-full">
                  <hr class="w-64 h-px my-8 border-1 border-gray" />
                  <span className="mx-5 flex-inline text-gray">
                    Continue&#160;with
                  </span>
                  <hr class="w-64 h-px my-8 border-1 border-gray" />
                </div>
                <div>
                  <button
                    type="button"
                    class="w-full text-gray-900 bg-white border border-gray focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white "
                  >
                    <span className="text-gray">Google</span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/assets/icons/login.svg"
                alt=""
                className="w-80 mr-10"
              />
            </div>
          </div>
          <div>
            <p className="text-gray text-xs">
              &#169;2024 My office. All Right Reserved.
            </p>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
