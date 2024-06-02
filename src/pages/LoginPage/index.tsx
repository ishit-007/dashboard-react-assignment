import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import apple from "../../assets/apple.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginPageProps {
  setProfilePicture: (profilePicture: string) => void;
}

export const LoginPage = ({ setProfilePicture }: LoginPageProps) => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    toast.error("Sign-In using Google please!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="flex w-[100vw] h-[100vh]">
        <div className="flex items-center justify-center w-[40vw] h-full bg-black">
          <div className="font-bold text-white text-7xl font-montserrat">
            Board.
          </div>
        </div>
        <div className="w-[60vw] flex flex-col justify-center items-center">
          <div className="flex flex-col items-start justify-center ">
            <div className="text-4xl font-bold font-montserrat">Sign In</div>
            <div className="pt-[5px] text-base font-lato">
              Sign in to your account
            </div>
            <div className="pt-[30px] w-full flex gap-x-[25px] items-center justify-between">
              <GoogleOAuthProvider clientId="392011615541-1ck9j46kq0fgfjmvjtg6927nupmthk9t.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={async (credentialResponse) => {
                    console.log("Login Success");
                    console.log(credentialResponse);
                    const token = credentialResponse.credential;
                    if (token) {
                      const decoded: any = jwt_decode(token);
                      // console.log(decoded);
                      navigate("/dashboard");
                      localStorage.clear();
                      await localStorage.setItem(
                        "profilePicture",
                        decoded.picture
                      );
                      setProfilePicture(decoded.picture);
                    }
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                  shape="pill"
                  size="medium"
                  logo_alignment="left"
                  useOneTap
                />
              </GoogleOAuthProvider>
              <div
                onClick={handleSignIn}
                className="border border-gray-300 p-3 h-[30px] cursor-pointer rounded-[50px] gap-x-2.5 flex justify-center items-center bg-white"
              >
                <img src={apple} alt="" />
                <div className="text-center">Sign in with Apple</div>
              </div>
            </div>
            <div className="bg-white p-5 mt-7 rounded-[10px] w-full">
              <div className="pl-1 text-base font-lato">Email Address</div>
              <input
                className="bg-[#F5F5F5] mt-[10px] w-full h-10 rounded-[10px] pl-4"
                type="text"
                placeholder="Email Address"
              />
              <div className="pl-1 mt-5 text-base font-lato">Password</div>
              <input
                className="bg-[#F5F5F5] mt-[10px] w-full h-10 rounded-[10px] pl-4"
                type="text"
                placeholder="Password"
              />
              <div className="cursor-pointer mt-5 pl-1 text-base font-lato text-[#346BD4]">
                Forgot Password?
              </div>
              <div
                onClick={handleSignIn}
                className=" cursor-pointer w-full mt-5 flex justify-center items-center text-base font-bold font-montserrat  text-white bg-black h-10 rounded-[10px]"
              >
                <span>Sign In</span>
              </div>
            </div>
            <div className="self-center font-lato text-base text-[#858585] mt-5">
              Don’t have an account?{" "}
              <span
                onClick={handleSignIn}
                className="text-[#346BD4] cursor-pointer"
              >
                Register here
              </span>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
