import { useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { InputFeild } from "@/components/Input/input.tsx";
import { AdvType } from "@/types/myFormikType.ts";
import { useTranslate } from "@/context/language-provider.tsx";
import Button from "@/components/Button/Button.tsx";
import { Location } from "@/components/Map/map.tsx";
import AdvImgUpload from "@/views/add-and-edit-adv/add-house-img.tsx";
import toast from "react-hot-toast";

const AddAndEditAdv = ({
  isEdit,
  editableData,
  closeModal,
  advId,
}: {
  isEdit: boolean;
  editableData?: any;
  closeModal?: any;
  advId?: string;
}) => {
  const navigate = useNavigate();
  const { dictionary }: any = useTranslate();

  const [position, setPosition] = useState<any>(
    isEdit
      ? editableData.position
      : [35.67871719552339, 51.392041829905374],
  );

  const handleSubmit = async (values: any) => {
    const formData = {
      ...values,
      position,
    };

    if (isEdit) {
      const response = await axios.put(
        `http://localhost:3001/all-adv/${advId}`,
        formData,
      );
      if (response.status === 200) {
        toast.success(dictionary?.toast_messages?.edit_adv_success);
        closeModal(false);
        navigate("/");
      } else toast.error(dictionary?.toast_messages?.adv_fail);
    } else {
      const res = await axios.post("http://localhost:3001/all-adv", formData);
      if (res.status === 201) toast.success(dictionary?.toast_messages?.add_adv_success);
      else toast.error(dictionary?.toast_messages?.adv_fail);
    }
  };

  return (
    <div className="py-20 w-full h-fit">
      <Formik
        initialValues={
          !isEdit
            ? {
                title: "",
                address: "",
                phone: "",
                price: "",
                description: "",
                imageUrl: "",
              }
            : {
                title: editableData.title,
                address: editableData.address,
                phone: editableData.phone,
                price: editableData.price,
                description: editableData.description,
                imageUrl: editableData.imageUrl,
              }
        }
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, errors, touched }: FormikProps<AdvType>) => (
          <Form>
            <div className="flex flex-col gap-3 items-center">
              <AdvImgUpload edit={isEdit} />
              <div className="flex justify-center">
                <InputFeild
                  classForm="flex flex-col"
                  label=""
                  name="title"
                  type="text"
                  id="title"
                  classInput={
                    errors.phone && touched.phone
                      ? `sm:w-96 w-80 p-2 mb-1 border-2 dark:text-gray-400 border-red-600 focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
                      : `sm:w-96 w-80 p-2 mb-1 border-2 dark:text-gray-400 border-[#B7B7B7] focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
                  }
                  classLabel=""
                  placeholder={dictionary?.add_adv?.title}
                />
              </div>
              <div className="flex justify-center">
                <InputFeild
                  classForm="flex flex-col"
                  label=""
                  name="phone"
                  type="text"
                  id="phone"
                  classInput={
                    errors.phone && touched.phone
                      ? `sm:w-96 w-80 p-2 mb-1 border-2 dark:text-gray-400 border-red-600 focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
                      : `sm:w-96 w-80 p-2 mb-1 border-2 dark:text-gray-400 border-[#B7B7B7] focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
                  }
                  classLabel=""
                  placeholder={dictionary?.add_adv?.phone}
                />
              </div>
              <div className="flex justify-center">
                <InputFeild
                  classForm="flex flex-col"
                  label=""
                  type="text"
                  name="price"
                  id="price"
                  classInput={
                    errors.price && touched.price
                      ? `sm:w-96 w-80 p-2 mb-1 border-2 dark:text-gray-400 border-red-600 focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
                      : `sm:w-96 w-80 p-2 mb-1 border-2 dark:text-gray-400 border-[#B7B7B7] focus:border-[#212121] bg-white dark:bg-dark-secondary outline-none duration-300`
                  }
                  classLabel=""
                  placeholder={dictionary?.add_adv?.price}
                />
              </div>
              <div className="flex justify-center">
                <textarea
                  name="address"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                  className="sm:w-96 w-80 h-30 resize-none p-2 mb-1 border-2 border-[#B7B7B7] dark:text-gray-400 dark:bg-dark-secondary focus:border-[#212121] bg-white outline-none duration-300"
                  placeholder={dictionary?.add_adv?.address}
                ></textarea>
              </div>
              <div className="flex justify-center">
                <textarea
                  name="description"
                  id="description"
                  value={values.description}
                  onChange={handleChange}
                  className="sm:w-96 w-80 h-60 resize-none p-2 mb-1 border-2 border-[#B7B7B7] dark:text-gray-400 dark:bg-dark-secondary focus:border-[#212121] bg-white outline-none duration-300"
                  placeholder={dictionary?.add_adv?.description}
                ></textarea>
              </div>
              <div
                className={`flex justify-center ${isEdit ? "w-full" : "w-[40%]"} h-96 relative z-10`}
              >
                <Location
                  position={position}
                  setPosition={setPosition}
                  isAccessToClick={true}
                />
              </div>
              <div
                className={
                  isEdit ? "flex flex-col gap-3" : "flex justify-center"
                }
              >
                {isEdit ? (
                  <>
                    <Button
                      className="bg-[#212121] text-white sm:w-96 w-80 text-base h-12 mt-1 text-center hover:button-shadow duration-300 ease-in-out"
                      type="submit"
                    >
                      {dictionary?.header?.editAdv}
                    </Button>
                    <Button
                      className="bg-[#212121] text-white sm:w-96 w-80 text-base h-12 mt-1 text-center hover:button-shadow duration-300 ease-in-out"
                      type="button"
                      onClick={() => closeModal(false)}
                    >
                      {dictionary?.modal?.no}
                    </Button>
                  </>
                ) : (
                  <Button
                    className="bg-[#212121] text-white dark:text-black dark:bg-white sm:w-96 w-80 text-base h-12 mt-1 text-center hover:button-shadow duration-300 ease-in-out"
                    type="submit"
                  >
                    {dictionary?.header?.addAdv}
                  </Button>
                )}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddAndEditAdv;
