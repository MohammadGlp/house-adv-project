import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import EmptyImg from "@/assets/empty.jpg";
import Button from "@/components/Button/Button.tsx";
import { useTranslate } from "@/context/language-provider.tsx";
import { Location } from "@/components/Map/map.tsx";
import { ModalCo } from "@/components/Modal/modal.tsx";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import AddAndEditAdv from "../add-and-edit-adv";
import { useAccount } from "@/hooks/useAccount.tsx";
import toast from "react-hot-toast";

const CategoryDetail = () => {
  const { id } = useParams();
  const { account } = useAccount();
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  const [cardDetail, setCardDetail] = useState<any>(null);
  const [position, setPosition] = useState<any>([
    35.67871719552339, 51.392041829905374,
  ]);
  const { dictionary }: any = useTranslate();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetcher = async () => {
        const res = await axios.get("http://localhost:3001/all-adv");
        if (res.status === 200) {
          const myData = res.data.find((item: any) => item.id === id);
          setPosition([myData.position.lat, myData.position.lng]);
          setCardDetail(myData);
        }
      };
      fetcher();
    }
  }, [id]);

  const handleDelete = async (advId: string) => {
    const response = await axios.delete(
      `http://localhost:3001/all-adv/${advId}`,
    );
    if (response.status === 200 || response.status === 201) {
      toast.success(dictionary?.toast_messages?.delete_adv_success);
      setOpenModalDelete(false);
      navigate("/");
    } else {
      toast.error(dictionary?.toast_messages?.adv_fail);
    }
  };

  return (
    <div className="py-20 w-[70%] flex flex-col gap-10 justify-around mx-auto dark:bg-dark-tertiary-">
      <div className="w-full h-96 rounded-xl">
        <img
          src={cardDetail?.imageUrl ? cardDetail.imageUrl : EmptyImg}
          alt=""
          className="w-full h-full rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <h1 className="text-5xl dark:text-lite-white font-bold">
              {cardDetail?.title}
            </h1>
            {account?.email && (
              <div className="flex md:flex-row flex-col gap-4">
                <Button
                  className="h-10 w-fit border border-gray-400 hover:bg-blue-500 hover:text-white dark:text-lite-white"
                  onClick={() => setOpenModalEdit(true)}
                >
                  {dictionary?.category_detail?.edit_adv}
                </Button>
                <Button
                  className="h-10 w-fit border border-gray-400 hover:bg-red-500 hover:text-white dark:text-lite-white"
                  onClick={() => setOpenModalDelete(true)}
                >
                  {dictionary?.category_detail?.delete_adv}
                </Button>
              </div>
            )}
          </div>

          <span className="text-xl font-semibold dark:text-lite-white">
            $ {cardDetail?.price}
          </span>
          <span className="text-base font-semibold dark:text-lite-white">
            phone: {cardDetail?.phone}
          </span>
        </div>
        <div className="w-full h-96 relative z-10">
          <Location
            position={position}
            setPosition={setPosition}
            isAccessToClick={false}
          />
        </div>
        {/*<div className="flex gap-3 items-center">*/}

        {/*<div className="w-fit h-fit rounded-full p-5 bg-[#f6f6f6] cursor-pointer">*/}
        {/*  <img*/}
        {/*    src={*/}
        {/*      cardDetail?.account.avatar ? cardDetail.account.avatar : IconUser*/}
        {/*    }*/}
        {/*    alt="Profile Picture"*/}
        {/*    className="w-[30px] h-[30px] rounded-full object-cover"*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <h4 className="font-bold">{cardDetail?.account.name}</h4>*/}
        {/*  <p className="text-gray-500 text-sm mt-3">*/}
        {/*    {cardDetail?.account.location}*/}
        {/*  </p>*/}
        {/*</div>*/}
        {/*</div>*/}
      </div>
      <ModalCo
        openModal={openModalDelete}
        setOpenModal={setOpenModalDelete}
        size="md"
      >
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {dictionary?.modal?.alert_title}
          </h3>
          <div className="flex justify-center gap-4">
            <Button
              className="h-10 w-fit border border-gray-400 hover:bg-blue-500 hover:text-white"
              onClick={() => setOpenModalDelete(false)}
            >
              {dictionary?.modal?.no}
            </Button>
            <Button
              className="h-10 w-fit border border-gray-400 hover:bg-red-500 hover:text-white"
              onClick={() => handleDelete(cardDetail.id)}
            >
              {dictionary?.modal?.yes}
            </Button>
          </div>
        </div>
      </ModalCo>
      <ModalCo
        openModal={openModalEdit}
        setOpenModal={setOpenModalEdit}
        size="lg"
      >
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {dictionary?.modal?.editData}
          </h3>
          <AddAndEditAdv
            isEdit={true}
            editableData={cardDetail}
            closeModal={setOpenModalEdit}
            advId={id}
          />
        </div>
      </ModalCo>
    </div>
  );
};

export default CategoryDetail;
