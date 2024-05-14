import axios from "axios";

import { Form, Formik, FormikProps } from "formik";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { LoginValues, RegisterValues } from "@/types/myFormikType";
import {
  LoginValidation,
  RegisterValidation,
} from "@/core/validation/validationSchema";
import AuthLoginCardInput from "./auth-login-card-input.tsx";
import AuthRegisterCardInput from "./auth-register-card-input.tsx";
import { useTranslate } from "@/context/language-provider.tsx";
import toast from "react-hot-toast";

const AuthCard = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const { dictionary }: any = useTranslate();

  const [login] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [register] = useState({
    username: "",
    email: "",
    password: "",
    morality: false,
  });

  const handleSubmit = async (values: any, clearForm: any) => {
    const res = await axios.get(`http://localhost:3001/users`);
    const isExistAccount = res.data.find(
      (item: any) => item.email === values.email,
    );
    if (location === "/login") {
      if (!!isExistAccount) {
        const isExistAccountPassword =
          isExistAccount.password === values.password;
        if (isExistAccountPassword) {
          toast.success(dictionary?.toast_messages?.login);
          clearForm();
          sessionStorage.setItem("account", JSON.stringify(res.data[0]));
          navigate("/");
        } else {
          toast.error(dictionary?.toast_messages?.validation_password);
        }
      } else {
        toast.error(dictionary?.toast_messages?.validation_email);
      }
    } else if (location === "/register") {
      if (!isExistAccount) {
        const res = await axios.post(`http://localhost:3001/users`, values);

        if (res.status === 201 || res.status === 200) {
          toast.success(dictionary?.toast_messages?.registered);
          sessionStorage.setItem("account", JSON.stringify(res.data));
          clearForm();
          navigate("/");
        }

        if (res.status >= 400 && res.status < 600) {
          toast.error(dictionary?.toast_messages?.adv_fail);
        }
      } else {
        toast.error(dictionary?.toast_messages?.validation_account_exist);
      }
    }
  };

  return (
    <div
      className={`bg-white dark:bg-dark-secondary text-center border-[#E0E0E0] dark:border-none rounded border sm:w-[500px] w-[400px] ${
        location === "/login" ? "h-[400px]" : "h-[520px]"
      } drop-shadow-nun`}
    >
      <h1 className="text-black dark:text-white text-3xl mt-8">
        {location === "/login"
          ? dictionary?.login?.main_title
          : dictionary?.register?.main_title}
      </h1>
      <p className="text-[#757575] text-sm mt-1">
        {dictionary?.login?.description}
      </p>
      <div className="mt-5">
        <Formik
          initialValues={location === "/login" ? login : register}
          validationSchema={
            location === "/login" ? LoginValidation : RegisterValidation
          }
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
          {({ errors, touched }: FormikProps<LoginValues | RegisterValues>) => (
            <Form>
              {location === "/login" ? (
                <AuthLoginCardInput touched={touched} errors={errors} />
              ) : (
                <AuthRegisterCardInput touched={touched} errors={errors} />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthCard;
