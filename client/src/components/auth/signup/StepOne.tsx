import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SignUpFormSchema } from "@/schemas/SignUpFormSchema";
import { useFormik } from "formik";
import $ from "jquery";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const StepOne = ({
  collectedData,
  setCollectedData,
  setCurrentStep,
}: any) => {
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
      <h1 className="text-ternary font-semibold text-5xl mb-5">
        Create a new account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-3 text-sm ">
          <label>Name</label>
          <Input
            placeholder="Type Here"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            id="space"
          />
          {errors.name && touched.name ? (
            <span className="text-red-500 text-xs"> {errors.name} </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 mb-3 text-sm">
          <label>Email</label>
          <Input
            placeholder="Type Here"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            id="space"
          />
          {errors.email && touched.email ? (
            <span className="text-red-500 text-xs"> {errors.email} </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 mb-3 text-sm">
          <label>Phone number</label>
          <Input
            placeholder="Type Here"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            id="space"
          />
          {errors.phone && touched.phone ? (
            <span className="text-red-500 text-xs"> {errors.phone} </span>
          ) : null}
        </div>
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
            <span className="text-red-500 text-xs"> {errors.password} </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 mb-3 text-sm">
          <label>Confirm password</label>
          <Input
            placeholder="Type Here"
            name="conpassword"
            value={values.conpassword}
            onChange={handleChange}
            onBlur={handleBlur}
            id="space"
          />
          {errors.conpassword && touched.conpassword ? (
            <span className="text-red-500 text-xs"> {errors.conpassword} </span>
          ) : null}
        </div>
        <div className="flex items-center justify-between my-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label
              htmlFor="remember"
              className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember Me
            </label>
          </div>
          <Link to="#" className="text-sm underline text-btn_primary">
            Forgot password?
          </Link>
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
