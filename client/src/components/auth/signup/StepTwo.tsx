import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/firebase";
import { MoreStepSchema } from "@/schemas/MoreStepSchema";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useFormik } from "formik";
import $ from "jquery";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const StepTwo = ({ collectedData, setCollectedData }: any) => {
  const navigate = useNavigate();
  const baseUrl = "http://localhost:8080";

  const [loading, setLoading] = React.useState(false);

  // Removing white space through jquery
  useEffect(() => {
    $("Input#space").on({
      keydown: function (e: any) {
        // if (e.which === 32) return false;
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
      onSubmit: async (values) => {
        setCollectedData({ ...collectedData, ...values });
        console.log("Collected Data", { ...collectedData, ...values });
        // Create User
        setLoading(true);
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            collectedData.email,
            collectedData.password
          );
          console.log("++++++++++++++++", userCredential);
          // alert(userCredential)
          await sendEmailVerification(userCredential.user);
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
              toast.success(
                "User Created Successfully Please Verify Your Email"
              );

              alert(
                "Verification email sent. Please check your email to verify your account."
              );
              navigate("/verify/:token");
            })
            .catch((err) => {
              toast.error("User Creation Failed");
              console.log(err);
            })
            .finally(() => {
              setLoading(false);
            });
        } catch (error: any) {
          console.error(
            "Failed to create user and send verification email",
            error
          );
          toast.error("Registration failed: " + error.message);
        }
      },
    });
  return (
    <>
      <h1 className="text-ternary font-semibold text-5xl mb-5">
        Just a few
        <br /> more steps...
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-3 text-sm">
          <label>Company name</label>
          <Input
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
        <div className="flex flex-col gap-2 mb-3 text-sm">
          <label>Address</label>
          <Input
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
        <div className="flex flex-col gap-2 mb-3 text-sm">
          <label>Billing address</label>
          <Input
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
        <div className="text-end">
          <Button type="submit" className="rounded-full px-16">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};
