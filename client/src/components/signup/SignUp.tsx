import React, { useEffect, useState } from "react";
import login from "../assets/images/splash.png";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import { SignUpFormSchema } from "./SignUpFormSchema";
import $ from "jquery";
import HoneyPotz from "../HoneyPotz";
// import {createUser} from '../service'
import MoreSteps from "./MoreSteps";

function SignUp() {
  const [collectedData, setCollectedData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  // Removing white space through jquery
  useEffect(() => {
    $("input#space").on({
      keydown: function (e: any) {
        // if (e.which === 32) return false;
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
    name: "",
    email: "",
    phone: "",
    password: "",
    conpassword: "",
  };
  // using formik
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: SignUpFormSchema,

      onSubmit: (values) => {
        console.log("ALL DATA " + JSON.stringify(values));
        setCollectedData({ ...collectedData, ...values });
        setCurrentStep(2);
      },
    });

  return (
    <>
      <Header />
      {currentStep === 1 ? (
        <section className="main">
          <div className="row">
            <div className="col">
              <div className="create">
                <h1>
                  Create a new
                  <br /> account
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type Here"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="space"
                    />
                    {errors.name && touched.name ? (
                      <span className="err_msg"> {errors.name} </span>
                    ) : null}
                  </div>
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
                    <label>Phone number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Type Here"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="space"
                    />
                    {errors.phone && touched.phone ? (
                      <span className="err_msg"> {errors.phone} </span>
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
                  <div className="form-group">
                    <label>Confirm password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Type Here"
                      name="conpassword"
                      value={values.conpassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="space"
                    />
                    {errors.conpassword && touched.conpassword ? (
                      <span className="err_msg"> {errors.conpassword} </span>
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
                      <a href="#" className="forgot">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary tpspc float-right"
                  >
                    Next
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
          {/* <div className="row">
          <div className="col-md-12" style={{ paddingTop: "15px" }}>
            <Link to="/moreSteps" className="col-md-12 btn-block">
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
      ) : (
        <MoreSteps
          collectedData={collectedData}
          setCollectedData={setCollectedData}
        />
      )}

      <HoneyPotz />
    </>
  );
}

export default SignUp;
