import { Route, Routes } from "react-router-dom";
import Index from "../views/home";
import SignIn from "@/views/auth/sign-in";
import SignUp from "@/views/auth/sign-up.tsx";
import CategoryDetail from "@/views/category-detail";

const UnAuthenticatedRoutes = () => {
    return (
        <Routes>
            <Route index element={<Index />} />
            <Route path="/:id" element={<CategoryDetail />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" />
        </Routes>
    );
}

export default UnAuthenticatedRoutes;
