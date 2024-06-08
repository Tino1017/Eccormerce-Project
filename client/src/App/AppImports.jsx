import React from 'react'
import LandingPage from "../Pages/Landing/LandingPage";
//SigningIn
import { SignIn } from '../Pages/SignInPages/SignIn';
import { VerifyEmail } from '../Pages/SignInPages/ForgotPassword/VerifyEmail';
import { VerifyOtp } from '../Pages/SignInPages/ForgotPassword/VerifyOtp';
import { VerificationFailed } from '../Pages/SignInPages/ForgotPassword/VerificationFailed';
import { ResetPassword } from '../Pages/SignInPages/ForgotPassword/ResetPassword';
import { PasswordChanged } from '../Pages/SignInPages/ForgotPassword/PasswordChanged';
import { PageNotFound } from '../Pages/404/PageNotFound';
//SigingUp
import { CreateAccount } from '../Pages/SignUp/CreateAccount';
import { EmailVerification } from '../Pages/SignUp/EmailVerification';
import { EmailVerified } from '../Pages/SignUp/EmailVerified';
import { VerificationFail } from '../Pages/SignUp/VerificationFail';
import { UploadPicture } from '../Pages/SignUp/UploadPicture';
import { Profile } from '../Pages/SignUp/Profile';


export {React};
export {
LandingPage,
SignIn,
VerifyEmail,
VerifyOtp,
VerificationFailed,
ResetPassword,
PasswordChanged,
PageNotFound,
CreateAccount,
EmailVerification,
EmailVerified,
VerificationFail,
UploadPicture,
Profile
}