import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import { LandingPage } from "./AppImports";
// import { SignIn } from "./AppImports";
// import { VerifyEmail } from "./AppImports";
// import { VerifyOtp } from "./AppImports";
// import { VerificationFailed } from "./AppImports";
// import { ResetPassword } from "./AppImports";
// import { PasswordChanged } from "./AppImports";
// import { PageNotFound } from "./AppImports";
import {
  LandingPage,
  SignIn,
  VerifyEmail,
  VerifyOtp,
  VerificationFailed,
  ResetPassword,
  PasswordChanged,
  CreateAccount,
  EmailVerification,
  EmailVerified,
  Profile,
  VerificationFail,
  UploadPicture,
  PageNotFound
} from "./AppImports";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          {/* Sign In */}
          <Route path="/Sign-In" element={<SignIn />} />
          <Route path="/Verify-Email" element={<VerifyEmail />} />
          <Route path="/Verify-OTP" element={<VerifyOtp />} />
          <Route path="/Verification-Failed" element={<VerificationFailed />} />
          <Route path="/Reset-Password" element={<ResetPassword />} />
          <Route path="/Password-Changed" element={<PasswordChanged />} />
          {/* Signing Up */}
          <Route path="/Create-Account" element={<CreateAccount />} />
          <Route path="/Email-Verification" element={<EmailVerification />} />
          <Route path="/Email-Verified" element={<EmailVerified />} />
          <Route path="/Verification-Fail" element={<VerificationFail />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Upload-Picture" element={<UploadPicture />} />
          {/* Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
