import { ButtonAuth } from "./auth-button.tsx";
import {
  FormikErrors,
  FormikTouched,
  RegisterValues,
} from "@/types/myFormikType";
import { useTranslate } from "@/context/language-provider.tsx";
import RegisterUpload from "@/views/auth/components/auth-register-input-profile.tsx";
import { InputFeild } from "@/components/Input/input.tsx";

const AuthRegisterCardInput: React.FC<{
  errors: FormikErrors<RegisterValues>;
  touched: FormikTouched<RegisterValues>;
}> = ({ errors, touched }) => {
  const { dictionary }: any = useTranslate();

  return (
    <>
      <RegisterUpload />
      <div className="flex justify-center">
        <InputFeild
          classForm="flex flex-col"
          label=""
          name="username"
          type="text"
          id="username"
          classInput={
            errors.username && touched.username
              ? `sm:w-96 w-80 p-2 mb-1 border-2 border-red-600 dark:text-gray-400 focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
              : `sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] dark:text-gray-400 focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
          }
          classLabel="text-xl mb-2"
          placeholder={dictionary?.register?.username}
        />
      </div>
      <div className="flex justify-center">
        <InputFeild
          classForm="flex flex-col"
          label=""
          name="email"
          type="email"
          id="email"
          classInput={
            errors.email && touched.email
              ? `sm:w-96 w-80 p-2 mb-1 border-2 border-red-600 dark:text-gray-400 focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
              : `sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] dark:text-gray-400 focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
          }
          classLabel="text-xl mb-2"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="flex justify-center">
        <InputFeild
          classForm="flex flex-col"
          label=""
          name="password"
          type="password"
          id="password"
          classInput={
            errors.password && touched.password
              ? `sm:w-96 w-80 p-2 mb-1 border-2 border-red-600 dark:text-gray-400 focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
              : `sm:w-96 w-80 p-2 mb-1 border-2 border-[#B7B7B7] dark:text-gray-400 focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
          }
          classLabel="text-xl mb-2"
          placeholder={dictionary?.register?.password}
        />
      </div>
      <div className="h-5 sm:mt-3 mt-3">
        <InputFeild
          label={dictionary?.register?.remember}
          name="morality"
          type="checkbox"
          id="morality"
          classInput="w-5 h-5 border rounded-none"
          classLabel="text-sm text-[#757575] dark:text-gray-400 ml-2 sm:text-sm text-xs cursor-pointer"
          classForm="flex flex-row-reverse justify-end sm:w-96 w-80 mx-auto"
        />
      </div>
      <div className="mt-2 h-14 flex justify-center">
        <ButtonAuth
          type="submit"
          classButton="bg-[#212121] dark:bg-lite-gray text-white dark:text-black sm:w-96 w-80 text-base h-12 mt-1 text-center hover:button-shadow duration-300 ease-in-out"
        >
          {dictionary?.register?.submit}
        </ButtonAuth>
      </div>
    </>
  );
};

export default AuthRegisterCardInput;
