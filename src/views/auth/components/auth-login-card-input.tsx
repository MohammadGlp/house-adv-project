import { ButtonAuth } from "./auth-button.tsx";
import { FormikErrors, FormikTouched, LoginValues } from "@/types/myFormikType";
import { useTranslate } from "@/context/language-provider.tsx";
import { InputFeild } from "@/components/Input/input.tsx";

const AuthLoginCardInput: React.FC<{
  errors: FormikErrors<LoginValues>;
  touched: FormikTouched<LoginValues>;
}> = ({ errors, touched }) => {
  const { dictionary }: any = useTranslate();

  return (
    <>
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
          placeholder={dictionary?.login?.password}
        />
      </div>
      <div className="my-5">
        <InputFeild
          label={dictionary?.login?.remember}
          name="rememberMe"
          type="checkbox"
          id="rememberMe"
          classInput="w-5 h-5 border rounded-none"
          classLabel="text-sm text-[#757575] dark:text-gray-400 ml-2 cursor-pointer"
          classForm="flex flex-row-reverse justify-end sm:w-96 w-80 mx-auto"
        />
      </div>
      <div className="mt-2 h-14 flex justify-center">
        <ButtonAuth
          type="submit"
          classButton="bg-[#212121] dark:bg-white text-white dark:text-black sm:w-96 w-80 text-base h-12 mt-1 text-center hover:button-shadow duration-300 ease-in-out"
        >
          {dictionary?.login?.submit}
        </ButtonAuth>
      </div>
    </>
  );
};

export default AuthLoginCardInput;
