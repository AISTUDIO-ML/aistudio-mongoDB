import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../header/Header";
import { Hourglass } from "react-loader-spinner";

const baseUrl = "https://demoapp.fuzonmedia.com";

const VerifyEmail = () => {
  const params = useParams();

  const navigate = useNavigate();
  const postVerifyEmail = async () => {
    const t = JSON.parse(localStorage.getItem("token"));
    console.log(t, "token");
    if (!t) {
      toast.error("Please login first");
      navigate("/");
      return;
    }
    // /users/verify-email/
    try {
      const response = await fetch(
        baseUrl + "/users/verify-email/" + params.token,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + t,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success("Email verified successfully");
        toast.success(data?.message);
      } else {
        toast.error("Something went wrong try again");
      }
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    postVerifyEmail();
  }, []);

  return <>
    <Header/>
    <div className="text-center mt-7" style={{marginTop: "15%"}}>Check your Inbox for verification.</div>
    <div className="text-center mt-2">
      <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
          />
    </div>
  </>
};

export default VerifyEmail;
