import { Navigate, Route, Routes } from "react-router";
import SignInPage from "./pages/Sign-in-page";
import SignOutPage from "./pages/sign-up-page";
import ForgetPasswordPage from "./pages/forget-password-page";
import PostDetailPage from "./pages/post-detail-page";
import ProfileDetailPage from "./pages/profile-detail-page";
import ResetPasswordPage from "./pages/reset-password-page";
import IndexPage from "./pages/index-page";

export default function RootRoute() {
  return (
    <Routes>
      <Route path = "/sign-in" element={<SignInPage/>}/>
      <Route path = "/sign-up" element={<SignOutPage/>}/>
      <Route path = "/forget-password" element={<ForgetPasswordPage/>} />

      <Route path = "/" element={<IndexPage/>}/>
      <Route path = "/post/:postId" element={<PostDetailPage/>}/>
      <Route path = "/profile/:userId" element={<ProfileDetailPage/>}/>
      <Route path = "/reset-password" element={<ResetPasswordPage/>}/>
      
      <Route path = "*" element = {<Navigate to = {'/'} />}/>
    </Routes>
  );
}
