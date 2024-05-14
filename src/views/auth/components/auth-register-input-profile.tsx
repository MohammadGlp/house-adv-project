import { useRef, useState } from "react";
import IconUser from "@/assets/userIcon.svg";
import { useFormikContext } from "formik";
const RegisterUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const { setFieldValue } = useFormikContext();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;
    if (files) {
      const file = files && files[0];
      const reader = new FileReader();
      if (file) {
        reader.onload = (e) => {
          if (e.target && e.target.result) {
            const base64Data = e.target.result as string;
            setSelectedImage(base64Data);
            setFieldValue("avatar", base64Data);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleRemoveProfile = () => {
    setSelectedImage("");
    setFieldValue("avatar", "");
  };

  return (
    <div className="flex flex-col items-center gap-y-4 text-center">
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Profile Picture"
          className="w-[90px] h-[90px] rounded-full object-cover"
        />
      ) : (
        <div
          className="w-fit h-fit rounded-full p-5 bg-[#f6f6f6] cursor-pointer"
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          <img
            src={IconUser}
            alt="Profile Picture"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
        </div>
      )}
      <h4
        className="text-sm/4 text-neutral dark:text-white cursor-pointer"
        onClick={handleRemoveProfile}
      >
        {selectedImage ? (
          <span className="text-error">Remove Profile Picture</span>
        ) : (
          <span>Profile Picture</span>
        )}
      </h4>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={(event) => handleUpload(event)}
        accept={".jpg, .jpeg, .png"}
      />
    </div>
  );
};

export default RegisterUpload;
