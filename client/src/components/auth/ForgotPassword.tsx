import axios from "axios";
import { useFormik } from "formik";
import $ from "jquery";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Header } from "../layouts/Header/Header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const baseUrl = "https://demoapp.fuzonmedia.com";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = React.useState(false);

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
  };
  // using formik
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address"),
        // .required("Email Required"),
      }),

      // If we hit the Login Button, the value provided by user will be stored in "values"
      onSubmit: (values) => {
        console.log(values);
        setLoading(true);
        axios
          .post(`${baseUrl}/users/forget-password`, {
            email: values.email,
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.status === "success") {
              toast.success(response.data.message);
              return;
            }
          })
          .catch((error) => {
            console.log("An error occurred:", error.response);
            if (error?.response?.data?.message) {
              toast.error(error.response.data.message);
            } else {
              toast.error("Something went wrong");
            }
          })
          .finally(() => {
            setLoading(false);
          });
      },
    });
  return (
    <section className="bg-background ">
      <div className="container mx-auto px-5">
        <Header />
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 h-[calc(100vh-100px)] py-4">
          <div className="lg:col-span-2 col-span-1 md:max-w-full max-w-[450px] mx-auto h-full md:w-3/4 w-full">
            <div className="flex flex-col justify-center items-start h-full">
              <h1 className="text-primary-foreground lg:text-5xl text-3xl font-semibold">
                Enter your Email
              </h1>

              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col items-start justify-start gap-3 w-full my-4">
                  <label>Email</label>
                  <Input
                    placeholder="Type Here"
                    name="email"
                    id="space"
                    className="w-full"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <span className="text-red-500 text-xs">
                      {" "}
                      {errors.email}{" "}
                    </span>
                  ) : null}
                </div>

                <Button type="submit" size={"lg"} className=" rounded-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-1 md:block hidden overflow-hidden my-2">
            <img
              src="/assets/images/banner.png"
              alt="banner"
              className=" w-full rounded-lg h-[calc(100%-50px)]"
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
