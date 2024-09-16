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
      <div className="container mx-auto">
        <Header />
        <div className="grid grid-cols-5 gap-5 h-[calc(100vh-100px)] py-4">
          <div className="col-span-2 h-full lg:w-3/4 w-full">
            <div className="flex flex-col justify-center items-start h-full">
              <h1 className="text-primary-foreground text-5xl font-semibold">
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
          <div className="col-span-3 rounded-lg overflow-hidden my-4">
            <img
              src="/assets/images/banner.png"
              alt="banner"
              className="h-full w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
