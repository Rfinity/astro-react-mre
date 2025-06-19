import { useStore } from "@nanostores/react";
import { isLoggedIn } from "./state";

const LoginComponent = (props) => {
  const $isLoggedIn = useStore(isLoggedIn);
  console.log("LoginComponent render:\n $isLoggedIn:", $isLoggedIn, "\n typeof profileIndicator:", typeof profileIndicator, "\n typeof loginButton:", typeof loginButton);
  console.log("props,", props);
  return (
    <div className="absolute top-8 right-8 z-10">
      {$isLoggedIn ? (props.profileIndicator ?? "Profile Indicator Fallback") : (props.loginButton ?? "Login Button Fallback")}
    </div>
  );
};

export default LoginComponent;
