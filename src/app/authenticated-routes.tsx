import { Route, Routes } from "react-router-dom";
import HomePage from "@/views/home";
import CategoryDetail from "@/views/category-detail";
import AddAndEditAdv from "@/views/add-and-edit-adv";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/:id" element={<CategoryDetail />} />
      <Route path="/add-adv" element={<AddAndEditAdv isEdit={false} />} />
      <Route path="*" />
    </Routes>
  );
};

export default AuthenticatedRoutes;
