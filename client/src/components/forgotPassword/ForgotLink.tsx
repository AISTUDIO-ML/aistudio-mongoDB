import React, { useEffect, useState } from "react";
import login from "../assets/images/splash.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import $ from "jquery";
import * as Yup from "yup";
import HoneyPotz from "../HoneyPotz";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserStore } from "../../store/user";

const baseUrl = "https://demoapp.fuzonmedia.com";

const ForgotLink = () => {
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
    <>
      <Header />
      <section className="main">
        <div className="row">
          <div className="col">
            <div className="login">
              <h1>Enter your Email</h1>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.email && touched.email ? (
                    <span className="err_msg"> {errors.email} </span>
                  ) : null}
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn-primary tpspc"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="col">
            <div className="splash">
              <img src={login} alt="" />
            </div>
          </div>
        </div>
      </section>
      <HoneyPotz />
    </>
  );
};

export default ForgotLink;
