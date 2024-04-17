import React, { useEffect } from "react";
import login from "../assets/images/splash.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import $ from "jquery";
import * as Yup from "yup";
import HoneyPotz from "../HoneyPotz";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserStore } from "../../store/user";

const baseUrl = "https://demoapp.fuzonmedia.com";

const ResetPassword = () => {
  const navigate = useNavigate();
  const params = useParams();

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
    <>
      <Header />
      <section className="main">
        <div className="row">
          <div className="col">
            <div className="login">
              <h1>Reset your Password</h1>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Type Here"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />

                  {errors.password && touched.password ? (
                    <span className="err_msg"> {errors.password} </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Type Here"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />

                  {errors.confirmPassword && touched.confirmPassword ? (
                    <span className="err_msg"> {errors.confirmPassword} </span>
                  ) : null}
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn-primary tpspc"
                >
                  Reset
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

export default ResetPassword;
