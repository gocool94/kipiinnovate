import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import homepageImage from "./homepage.png"; // Import the image

const Homepage = ({ onLoginSuccess }) => {
  const handleLoginSuccess = (response) => {
    console.log("Login Success!", response);
    // Call parent callback to change the state
    onLoginSuccess();
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed!", error);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${homepageImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "4%",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <GoogleOAuthProvider clientId="503155085709-6s7ip7t1950g3494ra9u5llq5q8jkg9d.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
            theme="filled_blue"
            size="large"
            text="continue_with"
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Homepage;
