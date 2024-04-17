import React, { useEffect } from "react";
import login from "../assets/images/splash.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import { LoginFormSchema } from "./LoginFormSchema";
import $ from "jquery";
import { logIn } from "../service";
// import axios from 'axios';
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import { BsMicrosoft, BsFillShieldLockFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import lock from "../assets/images/2fa.png";
import honeypotz1 from "../assets/images/honeypotz1.png";
import HoneyPotz from "../HoneyPotz";
import axios from "axios";
import { toast } from "react-toastify";
import { useUserStore } from "../../store/user";
import GoogleSignIn from "../socialPages/Google";
import GithubSignIn from "../socialPages/Github";
import MicrosoftSignIn from "../socialPages/Microsoft";

const baseUrl = "http://localhost:8080";

const Login = () => {
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
    <>
      <Header />
      <section className="main">
        <div className="row">
          <div className="col">
            <div className="login">
              <h1>
                {" "}
                Log in to
                <br /> your account
              </h1>

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
                <div className="row remember">
                  <div className="col">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col">
                    <Link to="/forgot-password" className="forgot">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn-primary tpspc"
                >
                  Log In
                </button>
                <div className="my-4 text-center text-md-left">
                  <div>
                    <GoogleSignIn/>
                    <GithubSignIn/>
                    <MicrosoftSignIn/>
                    <FaUserTie size={23} className="social-icons" />
                    <BsFillShieldLockFill size={23} className="social-icons" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col">
            <div className="splash">
              <img src={login} alt="" />
            </div>
          </div>
        </div>

        {/* <div className="row">
        <div className="col-md-12" style={{ paddingTop: "15px" }}>
          <Link
            to="/signup"
            className="col-md-12 btn-block"
            // routerLinkActive="activebutton"
          >
            <button
              className="btn btn-primary mx-auto"
              style={{ width: "100%", maxWidth: "1280px" }}
            >
              Next Page of Product Demo
            </button>
          </Link>
        </div>
      </div> */}
      </section>
      <HoneyPotz />
    </>
  );
};

export default Login;
