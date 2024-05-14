import { useRef, useState } from "react";
import IconUser from "@/assets/empty.jpg";
import { useFormikContext } from "formik";
const AdvImgUpload = ({ edit }: { edit: boolean }) => {
  const { values, setFieldValue }: any = useFormikContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>(edit ? values.imageUrl : "");

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
            setFieldValue("imageUrl", base64Data);
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleRemoveProfile = () => {
    setSelectedImage("");
    setFieldValue("imageUrl", "");
  };

  return (
    <div className="flex flex-col items-center gap-y-4 text-center">
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Profile Picture"
          className="w-80 h-40 rounded-lg object-cover"
        />
      ) : (
        <div
          className="w-80 h-40 rounded-lg p-5 bg-[#f6f6f6] cursor-pointer"
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          <img
            src={IconUser}
            alt="Profile Picture"
            className="w-80 h-28 rounded-lg object-cover"
          />
        </div>
      )}
      <h4
        className="text-sm/4 text-neutral cursor-pointer dark:text-lite-white"
        onClick={handleRemoveProfile}
      >
        {selectedImage ? (
          <span className="text-error">Remove Post Picture</span>
        ) : (
          <span>Post Picture</span>
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

export default AdvImgUpload;
