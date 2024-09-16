import { LoginFormSchema } from "@/schemas/LoginFormSchema";
import { useUserStore } from "@/store/user";
import axios from "axios";
import { useFormik } from "formik";
import $ from "jquery";
import React, { useEffect, useState } from "react";
import {
  BsEyeFill,
  BsEyeSlashFill,
  BsFillShieldLockFill,
} from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "../layouts/Header/Header";
import GithubSignIn from "../socialPages/Github";
import GoogleSignIn from "../socialPages/Google";
import MicrosoftSignIn from "../socialPages/Microsoft";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const setUser = useUserStore((state: any) => state.setUser);
  //   Removing white space through jquery
  useEffect(() => {
    $("input#space").on({
      keydown: function (e: any) {
        if (e.which === 32) return false;
      },
      change: function (e: any) {
        const inputElement = e.target as HTMLInputElement;
        inputElement.value = inputElement.value.replace(/\s/g, "");
        // this.value = this.value.replace(/\s/g, "");
      },
    });
  }, []);

  // using formik
  const formInitialValues = {
    email: "",
    password: "",
  };
  // using formik
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: LoginFormSchema,

      // If we hit the Login Button, the value provided by user will be stored in "values"
      onSubmit: (values) => {
        setLoading(true);
        axios
          .post(`${process.env.REACT_APP_API_URL}/users/login`, {
            email: values.email,
            password: values.password,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.message) {
              toast.error(response.data.message);
              return;
            }
            localStorage.setItem("token", JSON.stringify(response.data.token));
            setUser({ token: response.data.token });
            toast.success("Logged in Successfully!");
          })
          .catch((error) => {
            if (error.response.status === 401) {
              toast.error("Invalid Credentials");
              return;
            }
            console.log("An error occurred:", error.response);
            toast.error("Login Failed");
          })
          .finally(() => {
            setLoading(false);
          });
      },
    });
  return (
    <section className="bg-background ">
      <div className="container mx-auto">
        <Header />
        <div className="grid grid-cols-5 h-[calc(100vh-100px)] py-4 gap-5">
          <div className="flex items-start justify-center h-full w-full flex-col col-span-2">
            <div className="lg:w-3/4 w-full">
              <h1 className="text-ternary font-semibold text-3xl mt-3">
                Log in to
                <br /> your account
              </h1>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 w-full mt-3">
                  <label className="text-sm">Email</label>
                  <Input
                    placeholder="admin@aistudio.ml"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.email && touched.email ? (
                    <span className="text-red-500 text-xs">
                      {" "}
                      {errors.email}{" "}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2 w-full mt-3">
                  <label className="text-sm">Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Type Here"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="space"
                    />
                    {showPassword ? (
                      <BsEyeFill
                        className="absolute right-5 top-2/4 -translate-y-2/4"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <BsEyeSlashFill
                        className="absolute right-5 top-2/4 -translate-y-2/4"
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </div>
                  {errors.password && touched.password ? (
                    <span className="text-red-500 text-xs">
                      {" "}
                      {errors.password}{" "}
                    </span>
                  ) : null}
                </div>

                <div className="flex items-center justify-between my-3 w-full">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember Me
                    </label>
                  </div>
                  <Link to="/forgot-password" className="text-sm ">
                    Forgot password?
                  </Link>
                </div>
                <Button type="submit" className="mt-2 w-full" size={"lg"}>
                  Log In
                </Button>
              </form>
              <p className="text-center text-sm my-4">
                New on our platform?{" "}
                <Link to={"/"} className="text-primary-foreground ml-2">
                  Create an account
                </Link>
              </p>
              <div className="my-10">
                <div className="h-[1px] relative w-full bg-primary">
                  <span className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-xs w-1/4 bg-background text-center">
                    or
                  </span>
                </div>
              </div>
              <div className="my-4 text-center text-md-left w-full">
                <div className="flex gap-2 flex-wrap justify-center items-center">
                  <GoogleSignIn />
                  <GithubSignIn />
                  <MicrosoftSignIn />
                  <FaUserTie size={23} className="social-icons" />
                  <BsFillShieldLockFill size={23} className="social-icons" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 overflow-hidden my-2">
            <img
              src="/assets/images/banner.png"
              alt="banner"
              className=" w-full rounded-lg"
            />
            <img
              src="/assets/svgs/honeypotz.svg"
              alt="banner"
              className=" h-10 ml-auto mt-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
