import React from "react";
import { SquarePrimaryBtn } from "../../UI/SquarePrimaryBtn";

export const SignIn = () => {
  const squarePrimaryBtn = ["Sign In", "#"];
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div>Logo</div>
        <h1>Sign In</h1>
        <p className="max-w-xs">Sign in with your email address and password</p>
        <form action="submit" className="flex flex-col items-center">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <div>
            <a href="" className="text-primary">Forgot Password</a>
          </div>

          <div>
            <SquarePrimaryBtn
              btnLabel={squarePrimaryBtn[0]}
              btnLink={squarePrimaryBtn[1]}
            />
          </div>
          <div>
            <a href="" className="text-primary font-medium">
              Create Account
            </a>
          </div>
        </form>
      </div>
      <div className="right"></div>
    </section>
  );
};
