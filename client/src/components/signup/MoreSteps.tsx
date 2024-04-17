import React, { useEffect } from "react";
import login from "../assets/images/splash.png";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { useFormik } from "formik";
import { MoreStepSchema } from "./MoreStepSchema";
import $ from "jquery";
import HoneyPotz from "../HoneyPotz";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface MoreStepsProps {
  collectedData: any;
  setCollectedData: any;
}

const MoreSteps: React.FC<MoreStepsProps> = ({
  collectedData,
  setCollectedData,
}) => {
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8080";

  const [loading, setLoading] = React.useState(false);

  // Removing white space through jquery
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
    companyname: "",
    address: "",
    billing: "",
  };
  // using formik
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: formInitialValues,
      validationSchema: MoreStepSchema,

      // If we hit the Login Button, the value provided by user will be stored in "values"
      onSubmit: (values) => {
        setCollectedData({ ...collectedData, ...values });
        console.log("Collected Data", { ...collectedData, ...values });
        // Create User
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}/users/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: collectedData.name,
            password: collectedData.password,
            address: collectedData.address,
            billing: collectedData.billing,
            email: collectedData.email,
            companyname: collectedData.companyname,
            phone: collectedData.password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.error) {
              return toast.error(data.message);
            }
            toast.success("User Created Successfully Please Verify Your Email");
            navigate("/");
          })
          .catch((err) => {
            toast.error("User Creation Failed");
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      },
    });

  return (
    <>
      {/* <Header /> */}
      <section className="main">
        <div className="row">
          <div className="col">
            <div className="create">
              <h1>
                Just a few
                <br /> more steps...
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Company name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here"
                    name="companyname"
                    value={values.companyname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.companyname && touched.companyname ? (
                    <span className="err_msg"> {errors.companyname} </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.address && touched.address ? (
                    <span className="err_msg"> {errors.address} </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label>Billing address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type Here"
                    name="billing"
                    value={values.billing}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="space"
                  />
                  {errors.billing && touched.billing ? (
                    <span className="err_msg"> {errors.billing} </span>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary tpspc float-right"
                  disabled={loading}
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
            <Link
              to="/paymentDetails"
              className="col-md-12 btn-block"
              //   routerLinkActive="activebutton"
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
      {/* <HoneyPotz /> */}
    </>
  );
};

export default MoreSteps;
