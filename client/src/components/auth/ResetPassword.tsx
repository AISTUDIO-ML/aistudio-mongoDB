import axios from "axios";
import { useFormik } from "formik";
import $ from "jquery";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useUserStore } from "../../store/user";
import { Header } from "../layouts/Header/Header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const baseUrl = "https://demoapp.fuzonmedia.com";

export const ResetPassword = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [loading, setLoading] = React.useState(false);
  const setUser = useUserStore((state: any) => state.setUser);
  //   Removing white space through jquery
  useEffect(() => {
    $("Input#space").on({
      keydown: function (e: any) {
        if (e.which === 32) return false;
      },
      change: function (e: any) {
        const InputElement = e.target as HTMLInputElement;
        InputElement.value = InputElement.value.replace(/\s/g, "");
        // this.value = this.value.replace(/\s/g, "");
      },
    });
  }, []);

  // using formik
  const formInitialValues = {
    password: "",
    confirmPassword: "",
  };
  // using formik
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: Yup.object({
        password: Yup.string()
          .required("Please Enter Your Password")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
            "Enter Strong Password including Capital letter, Special characters and numbers"
          ),
        confirmPassword: Yup.string()
          .required("Confirm Password Required")
          .min(6, "Password must be at least 6 characters")
          .oneOf([Yup.ref("password")], "Passwords must match"),
      }),

      // If we hit the Login Button, the value provided by user will be stored in "values"
      onSubmit: (values) => {
        console.log(values, "reset password");
        setLoading(true);
        axios
          .post(`${baseUrl}/users/reset-password/` + params.token, {
            password: values.password,
            confirmPassword: values.confirmPassword,
          })
          .then((response) => {
            console.log(response.data);
            toast.success("Password Reset Successfully!");
            navigate("/");
          })
          .catch((error) => {
            console.log("An error occurred:", error.response);
            toast.error("Something went wrong!");
          })
          .finally(() => {
            setLoading(false);
          });
      },
    });
  return (
    <main>
      <div className="container mx-auto">
        <Header />

        <div className="grid grid-cols-5 h-[calc(100vh-100px)] py-4 gap-5">
          <div className="flex items-start justify-center h-full w-full flex-col col-span-2">
            <div className="w-3/4">
              <h1 className="text-ternary font-semibold text-5xl mb-5">
                Reset your Password
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 mb-3 text-sm">
                  <label>Password</label>
                  <Input
                    type="password"
                    placeholder="Type Here"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />

                  {errors.password && touched.password ? (
                    <span className="text-red-500 text-xs">
                      {" "}
                      {errors.password}{" "}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col gap-2 mb-3 text-sm">
                  <label>Confirm Password</label>
                  <Input
                    type="password"
                    placeholder="Type Here"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />

                  {errors.confirmPassword && touched.confirmPassword ? (
                    <span className="text-red-500 text-xs">
                      {" "}
                      {errors.confirmPassword}{" "}
                    </span>
                  ) : null}
                </div>
                <Button
                  disabled={loading}
                  type="submit"
                  className="rounded-full px-10 "
                >
                  Reset
                </Button>
              </form>
            </div>
          </div>
          <div className="col-span-3  overflow-hidden my-2">
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
    </main>
  );
};
